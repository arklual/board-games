from .models import Topic
from .serializers import TopicSerializer
from rest_framework import viewsets

class TopicView(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
