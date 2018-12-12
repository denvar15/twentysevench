from rest_framework.serializers import (
    ModelSerializer,
)
from .models import Item


class NewsSerializer(ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'author', 'title', 'content', 'published']


class NewsCreateSerializer(ModelSerializer):

    class Meta:
        model = Item
        fields = ['author', 'title', 'content', 'published']

