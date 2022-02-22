from django.db import models
from django.forms import CharField

class Topic(models.Model):
    title = models.CharField(max_length=255, default='Новая тема')
