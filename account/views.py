from django.http import JsonResponse
from django.shortcuts import redirect
from .models import Account
from .serializers import AccountSerializer
from rest_framework import viewsets
from frontend.views import index
from django.contrib import auth
from django.views.decorators.csrf import csrf_exempt


class AccountView(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

@csrf_exempt
def create_user(request):
    username = request.POST['username']
    email = request.POST['email']
    password = request.POST['password']
    Account.objects.create_user(email, username, password)
    return redirect(index)

@csrf_exempt
def sign_in(request):
    email = request.POST['email']
    password = request.POST['password']
    user = auth.authenticate(request, username=email, password=password)
    if user is not None:
        auth.login(request, user)
    return redirect(index)

def current_user(request):
    if not request.user.is_authenticated:
        return JsonResponse({'username': False})
    user = request.user
    data = {}
    return JsonResponse({
        'username': user.username
    })

def logout(request):
    auth.logout(request)
    return redirect(index)