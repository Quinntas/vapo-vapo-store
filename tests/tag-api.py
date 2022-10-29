import html
import json
import re

import requests


def formatDescription(text):
    text = html.unescape(text).replace(u'\xa0', u' ').replace('"', '').replace("N'", '').replace('\n', '').replace('\t',
                                                                                                                   '')
    text = text.split(" ")
    text = ' '.join(text)
    return text


data = []
length = len(requests.get(f"https://api.tagplus.com.br/produtos?access_token=M0y3hJPArXkl5oPtCo7tzjjbnPiGj1IO").json())
print(length)

with open('tests3.json', 'r', encoding='utf-8') as f:
    categories = json.load(f)


def checkCategory(cid):
    for item in categories:
        if len(item['children']) >= 1:
            for child in item['children']:
                if child['id'] == cid:
                    return {
                        "id": item['id'],
                        "name": item['name'],
                        "sub_category_id": child['id'],
                        "sub_category_name": child['name']
                    }


for x in range(1, length + 1):
    res = requests.get(f"https://api.tagplus.com.br/produtos/{x}?access_token=M0y3hJPArXkl5oPtCo7tzjjbnPiGj1IO")
    parsed = res.json()
    gallery = parsed['imagens']
    if parsed['imagem_principal']['url'] in gallery:
        gallery.remove(parsed['imagem_principal']['url'])

    product = {
        "id": parsed['id'],
        "code": parsed['codigo'],
        "name": parsed['descricao'],
        "description": formatDescription(re.sub("\(.*?\)|\<.*?\>", "", parsed['descricao_longa'])),
        "slug": parsed['descricao'],
        "quantity": parsed['estoque']['qtd_revenda'],
        "category": checkCategory(parsed['categoria']['id']),
        "price": parsed['valor_venda_varejo'],
        "sale_price": parsed['valor_venda_varejo'],
        "image": parsed['imagem_principal']['url'],
        "gallery": gallery,
    }
    data.append(product)

with open('products-vapo.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(data, ensure_ascii=False))
