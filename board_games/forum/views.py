from django.shortcuts import redirect
from .models import Topic, Message
from .serializers import ForumSerializer, MessagesSerializer
from rest_framework import viewsets
from frontend.views import forum

class ForumView(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = ForumSerializer

class MessagesView(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessagesSerializer
    
def create_topic(request):
    title_of_topic = request.GET['title']
    new_topic = Topic(title=title_of_topic)
    new_topic.save()
    return redirect(forum)