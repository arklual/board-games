from calendar import c
from django.urls import path,include               
from rest_framework import routers            
from . import views                             

router = routers.DefaultRouter()                   
router.register(r'accounts', views.AccountView, 'accounts')  

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/signup/', views.create_user)
]