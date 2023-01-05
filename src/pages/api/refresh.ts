import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from '../../../lib/prisma';

async function categories(access_token: string | undefined) {
    const url_categories = 'https://api.tagplus.com.br/categorias?access_token=' + access_token
    const url_products = "https://api.tagplus.com.br/produtos?access_token=" + access_token + "&categoria="

    const data = await fetch(url_categories).then(res => res.json())

    let parsedData = []

    for (let i = 0; i < data.length; i++) {
        if (data[i]['categoria_mae'] == null)
            parsedData.push(
                {
                    'id': data[i]['id'],
                    'name': data[i]['descricao'],
                    'slug': data[i]['descricao'],
                    'productCount': await fetch(url_products + data[i]['id']).then(res => res.json()).then(res => res.length),
                    'children': [] as any,
                    'icon': '',
                    'image': {
                        'thumbmail': '/assets/images/categories/' + data[i]['descricao'].toLowerCase() + '.jpg',
                        'original': '/assets/images/categories/' + data[i]['descricao'].toLowerCase() + '.jpg'
                    }
                }
            )
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i]['categoria_mae'] != null)
            for (let j = 0; j < parsedData.length; j++) {
                if (parsedData[j]['id'] == data[i]['categoria_mae']['id']) {
                    parsedData[j]['children'].push({
                        'id': data[i]["id"],
                        'name': data[i]['descricao'],
                        'slug': data[i]["descricao"]
                    })
                    break
                }
            }
    }

    return parsedData
}

function htmlEntities(str: string) {
    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"'],
        ['atilde', 'ã'],
        ['aacute', 'á'],
        ['oacute', 'ó'],
        ['ccedil', 'ç'],
        ['eacute', 'é'],
        ['ecirc', 'ê'],
        ["N'", '']
    ];

    for (var i = 0, max = entities.length; i < max; ++i)
        str = str.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);

    return str.replace(/<\/?[^>]+(>|$)/g, "")
}

function check_category(id: number, categories: any) {
    categories.forEach((item: any) => {
        if (item['children'] >= 1) {
            const childIndex = item['children'].findIndex((x: any) => x.id == id)
            return {
                "id": item['id'],
                "name": item['name'],
                "sub_category_id": item['children'][childIndex]['id'],
                "sub_category_name": item['children'][childIndex]['name']
            }
        }
    });
}

async function products(access_token: string | undefined, categories: any) {
    const length = await fetch('https://api.tagplus.com.br/produtos?access_token=' + access_token).then(res => res.json()).then(res => res.length)
    let parsedData = []
    for (let i = 1; i <= length; i++) {
        let product = await fetch('https://api.tagplus.com.br/produtos/' + i + '?access_token=' + access_token).then(res => res.json())
        if (product["estoque"]['qtd_revenda'] == 0)
            continue
        let gallery = product['imagens']
        if (product['imagem_principal']['url'] in gallery)
            gallery.pop(product['imagem_principal']['url'])
        parsedData.push({
            "id": product['id'],
            "code": product['codigo'],
            "name": product["decricao"],
            "description": htmlEntities(product['descricao_longa']),
            "slug": product['descricao'],
            "quantity": product["estoque"]['qtd_revenda'],
            "category": check_category(product['categoria']['id'], categories),
            "price": product['valor_venda_varejo'],
            "sale_price": product['valor_oferta'] == 0 ? product['valor_venda_varejo'] : product['valor_oferta'],
            "image": product['imagem_principal']['url'],
            "gallery": gallery,
            'createdOn': product['data_criacao']
        })

    }
    return parsedData
}

async function wipeVapoTable() {
    await prisma.vapo.deleteMany({})
}

async function refresh(access_token: string | undefined) {
    if (await fetch('https://api.tagplus.com.br/produtos?access_token=' + access_token).then(res => res.status) === 401) {
        const data = {
            'grant_type': 'refresh_token',
            'refresh_token': process.env.REFRESH_TOKEN,
            'client_secret': process.env.CLIENT_SECRET,
            'client_id': process.env.CLIENT_ID
        }
        console.log(data)
        const res = await fetch('https://api.tagplus.com.br/oauth2/token', { body: JSON.stringify(data) }).then(res => res.json())
        console.log(res)
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ sucess: false });
    }

    const ACCESS_TOKEN = process.env.ACCESS_TOKEN

    await refresh(ACCESS_TOKEN)

    const data_categories = await categories(ACCESS_TOKEN)
    const data_products = await products(ACCESS_TOKEN, data_categories)

    await wipeVapoTable()

    try {
        await prisma.vapo.create({
            data: {
                categories: JSON.stringify(data_categories),
                products: JSON.stringify(data_products),
            }
        });
    } catch (e) {
        return res.status(500).json({ sucess: false, error: "Error in database" });
    }

    return res.status(201).json({ sucess: true });
}