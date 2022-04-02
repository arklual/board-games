from .models import Article
from .serializers import ArticleSerializer
from rest_framework import viewsets

class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
