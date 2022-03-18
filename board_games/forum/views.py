from django.shortcuts import get_object_or_404, redirect
from .models import Topic, Message
from .serializers import ForumSerializer, MessagesSerializer
from rest_framework import viewsets
from frontend.views import forum, topic as topic_view

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

def create_message(request, topic_id):
    message = request.POST['message']
    topic = get_object_or_404(Topic, id=topic_id)
    new_message = Message(user=request.user, text=message, topic=topic)
    new_message.save()
    return redirect(topic_view, topic_id)