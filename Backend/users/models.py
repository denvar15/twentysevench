from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models


class CustomUserManager(UserManager):
    pass


class CustomUser(AbstractUser):
    type = models.CharField(max_length=50, default='common')
    objects = CustomUserManager()


class Moder(models.Model):
    type = models.CharField(max_length=100, default='common')
    name = models.CharField(max_length=100)

    def __str__(self):
        return str(self.name)


class NowUser(models.Model):
    type = models.CharField(max_length=100, default='common')
    username = models.CharField(max_length=100)
    email = models.EmailField(default='ex@ex.ex')

    def __str__(self):
        return str(self.username)
