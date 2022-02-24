from django.shortcuts import render
from bs4 import BeautifulSoup
import requests
import json


def index(request):
    response = requests.get('https://boardgamegeek.com/browse/boardgame')
    soup = BeautifulSoup(response.text, features='html.parser')
    response = requests.get(
        'https://api.tesera.ru/games?offset=0&limit=30&sort=-ratinggeekbgg')
    data = json.loads(response.text)
    game_list = []
    trs = soup.find_all('tr')
    i = 0
    bgg_id = ''
    for tr in trs:
        if tr.get('id') == 'row_' and i < 10:
            i += 1
            element = tr.find_all('td')[2].find_all('div')[1]
            link = element.find('a').get('href')
            bgg_id = link.split('/')[2]
            for j in range(30):
                if(str(bgg_id) == str(data[j]['bggId'])):
                    title = data[j]['title']
                    year = data[j]['year']
                    link = f'https://boardgamegeek.com/boardgame/{bgg_id}'
                    game_list.append([f'{i}. {title}({year})', link])
    context = {
        'gameList': game_list,
    }
    return render(request, 'frontend/index.html', context)


def signin(request):
    return render(request, 'frontend/index.html')


def signup(request):
    return render(request, 'frontend/index.html')


def blog(request):
    return render(request, 'frontend/index.html')


def article(request, id):
    context = {'id': id}
    return render(request, 'frontend/index.html', context)

def forum(request):
    return render(request, 'frontend/index.html')

def topic(request, id):
    return render(request, 'frontend/index.html')