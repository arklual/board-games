from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
    path('signin', views.signin ),
    path('signup', views.signup ),
    path('blog', views.blog ),
    path('blog/<int:id>', views.article ),
    path('forum', views.forum ),
]