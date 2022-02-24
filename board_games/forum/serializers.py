from rest_framework import serializers
from .models import Topic, Message

class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ('id', 'title')
        
class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'title', 'text', 'topic')