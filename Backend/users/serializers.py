from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
)
from rest_framework_jwt.settings import api_settings

from .models import CustomUser, Moder, NowUser


class UserCreateSerializer(ModelSerializer):
    token = SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = [
            'email',
            'username',
            'password',
            'token',
            'type'
        ]
        extra_kwargs = {"password": {"write_only": True}}

    @staticmethod
    def get_token(request):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(request)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        typer = 'common'
        if str(Moder.objects.all()).find(validated_data['username']) != -1:
            typer = 'moder'
        user = CustomUser.objects.create(
            email=validated_data['email'],
            username=validated_data['username'],
            type=typer,
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'type', 'email')
        error_css_class = 'error'


class ModerSerializer(ModelSerializer):
    class Meta:
        model = Moder
        fields = [
            'name',
            'type',
        ]


class NowUserCreateSerializer(ModelSerializer):
    class Meta:
        model = NowUser
        fields = [
            'username',
            'type',
            'email'
        ]

    def create(self, validated_data):
        NowUser.objects.all().delete()
        typer = 'common'
        if str(Moder.objects.all()).find(validated_data['username']) != -1:
            typer = 'moder'
        user = NowUser.objects.create(
            username=validated_data['username'],
            type=typer,
            email=validated_data['email']
        )
        user.save()
        return user


class NowUserSerializer(ModelSerializer):
    class Meta:
        model = NowUser
        fields = [
            'username',
            'type',
            'email',
        ]
