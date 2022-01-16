from django.shortcuts import render
from bs4 import BeautifulSoup
import requests

def index(request):
    response = requests.get('https://boardgamegeek.com/browse/boardgame')
    soup = BeautifulSoup(response.text, features='html.parser')
    trs = soup.find_all('tr')
    i = 0
    gameList = []
    for tr in trs:
        if tr.get('id') == 'row_' and i < 10:
            i += 1
            element = tr.find_all('td')[2].find_all('div')[1]
            gameList.append([f'{i}.'+' '+element.find('a').text+element.find('span').text, 'https://boardgamegeek.com'+element.find('a').get('href')])
    context = {
        'gameList': gameList,
    }
    return render(request, 'frontend/index.html', context)

def signin(request):
    return render(request, 'frontend/index.html')

def signup(request):
    return render(request, 'frontend/index.html')
def blog(request):
    return render(request, 'frontend/index.html')