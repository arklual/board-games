from django.shortcuts import render
from bs4 import BeautifulSoup
import requests

def index(request):
    response = requests.get('https://boardgamegeek.com/browse/boardgame')
    soup = BeautifulSoup(response.text, features='html.parser')
    trs = soup.find_all('tr')
    i = 0
    for tr in trs:
        if tr.get('id') == 'row_' and i < 10:
            i += 1
            element = tr.find_all('td')[2].find_all('div')[1]
            print(f'{i}.', element.find('a').text+element.find('span').text)
    return render(request, 'frontend/index.html')

def signin(request):
    return render(request, 'frontend/index.html')

def signup(request):
    return render(request, 'frontend/index.html')