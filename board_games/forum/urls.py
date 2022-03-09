from django.urls import path,include               
from rest_framework import routers                 
from . import views                             

router = routers.DefaultRouter()                   
router.register(r'forum', views.ForumView, 'forum')  
router.register(r'messages', views.MessagesView, 'messages')  

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/create-topic/', views.create_topic),
]