from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField
)
from .models import Post


class PostCreateSerializer(ModelSerializer):
    author = SerializerMethodField()

    class Meta:
        model = Post
        fields = ['title', 'respondent', 'type', 'content', 'author', 'published']

    @staticmethod
    def get_author(obj):
        return str(obj.author.username)


class PostDetailSerializer(ModelSerializer):
    author = SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'title', 'respondent', 'type', 'content', 'published', 'author', 'published']
        lookup_field = 'pk'

    @staticmethod
    def get_author(obj):
        return str(obj.author.username)


class PostListSerializer(ModelSerializer):
    author = SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'title', 'respondent', 'type', 'content', 'author', 'published']

    @staticmethod
    def get_author(obj):
        return str(obj.author.username)
