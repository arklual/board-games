from django.contrib import admin
from .models import Topic, Message 

class MessageAdmin(admin.ModelAdmin):
   pass

class MessageInline(admin.StackedInline):
    model = Message

class TopicAdmin(admin.ModelAdmin):
    list = ('title')
    inlines = [MessageInline, ]
    
admin.site.register(Topic, TopicAdmin)