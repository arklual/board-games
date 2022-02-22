from .models import Account
from .serializers import AccountSerializer
from rest_framework import viewsets

class AccountView(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer