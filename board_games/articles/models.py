from django.db import models

class Article(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)
    text = models.TextField()