from statistics import mode
from django.db import models
from account.models import Account

class Topic(models.Model):
    title = models.CharField(max_length=255, default='Новая тема')
    
    def __str__(self):
        return f'{self.id}. {self.title}'
    
class Message(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    user = models.ForeignKey(Account, on_delete=models.CASCADE, null=True)
    text = models.TextField()
