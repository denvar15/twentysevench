from django.conf import settings
from django.db import models


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    authorer = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    respondent = models.CharField(max_length=100, default='no respondent')
    type = models.CharField(max_length=100, default='flud')
    content = models.TextField(max_length=200)
    published = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.title)



