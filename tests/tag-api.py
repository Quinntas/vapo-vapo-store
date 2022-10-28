import json
import requests
import re 
import html

def formatDescription(text):
    text = html.unescape(text).replace(u'\xa0', u' ').replace('"', '').replace("N'", '').replace('\n', '').replace('\t', '')
    text = text.split(" ")
    text = ' '.join(text)
    return text

data = []
length = len(requests.get(f"https://api.tagplus.com.br/produtos?access_token=hnrSKz6i46BynLYKNHjgRHLCTfdPjsZk").json())
print(length)
for x in range(1, length+1):
    res = requests.get(f"https://api.tagplus.com.br/produtos/{x}?access_token=hnrSKz6i46BynLYKNHjgRHLCTfdPjsZk")
    parsed = res.json()
    galery = parsed['imagens']
    if parsed['imagem_principal']['url'] in galery:
        galery.remove(parsed['imagem_principal']['url'])
        
    product = {
        "id": parsed['id'],
        "code": parsed['codigo'],
    "name": parsed['descricao'],
    "description":formatDescription(re.sub("\(.*?\)|\<.*?\>", "", parsed['descricao_longa'])),
    "slug": parsed['descricao'],
    "quantity": parsed['estoque']['qtd_revenda'],
    "category": parsed['categoria']['descricao'],
    "price": parsed['valor_venda_varejo'],
    "sale_price": parsed['valor_venda_varejo'],
    "image": parsed['imagem_principal']['url'],
    "galery": galery,
    }
    data.append(product)
    
with open('products-vapo.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(data, ensure_ascii=False))