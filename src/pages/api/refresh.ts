import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

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

    await wipeVapoTable()

    try {
        await prisma.vapo.create({
            data: {
                categories: JSON.stringify(data_categories),
                products: JSON.stringify([]),
            }
        });
    } catch (e) {
        return res.status(500).json({ sucess: false, error: "Error in database" });
    }

    return res.status(201).json({ sucess: true });
}