from .models import Topic, Message
from .serializers import ForumSerializer, MessagesSerializer
from rest_framework import viewsets

class ForumView(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = ForumSerializer

class MessagesView(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessagesSerializer