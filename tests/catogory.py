import json
from dotenv import load_dotenv
import os
import requests

load_dotenv()

urlc = f'https://api.tagplus.com.br/categorias?access_token={os.getenv("ACCESS_TOKEN")}'
urlp = f'https://api.tagplus.com.br/produtos?access_token={os.getenv("ACCESS_TOKEN")}&categoria='

data = requests.get(urlc).json()
session = requests.session()
parsedData = []

for item in data:
    if not item['categoria_mae']:
        parsedData.append(
            {
                'id': item['id'],
                'name': item['descricao'],
                'slug': item['descricao'],
                'productCount': len(session.get(f'{urlp}{item["id"]}').json()),
                'children': [],
                "icon": '',
                'image': {
                    'thumbnail': '',
                    'original': ''
                }
            }
        )

for item in data:
    if item['categoria_mae']:
        for cate in parsedData:
            if cate['id'] == item['categoria_mae']['id']:
                cate['children'].append(
                    {
                        "id": item['id'],
                        "name": item['descricao'],
                        "slug": item['descricao']
                    }
                )
                continue

with open('categories-vapo.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(parsedData, ensure_ascii=False))
