from .models import Article
from .serializers import ArticleSerializer
from rest_framework import generics

class ArticleListCreate(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer