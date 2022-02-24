from django.shortcuts import redirect
from .models import Account
from .serializers import AccountSerializer
from rest_framework import viewsets
from frontend.views import index

class AccountView(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    
def create_user(request):
    username = request.POST['username']
    email = request.POST['email']
    password = request.POST['password']
    user = Account.objects.create_user(email, username, password)
    return redirect(index)