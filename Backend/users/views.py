from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import (
    AllowAny
)

from .serializers import (
    UserCreateSerializer,
    UserSerializer,
    ModerSerializer,
    NowUserCreateSerializer,
    NowUserSerializer,
)

from .models import CustomUser, Moder, NowUser


class UserCreateView(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = [AllowAny]


def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }


class ModerCreateView(CreateAPIView):
    queryset = Moder.objects.all()
    serializer_class = ModerSerializer


class NowUserCreate(CreateAPIView):
    queryset = NowUser.objects.all()
    serializer_class = NowUserCreateSerializer
    permission_classes = [AllowAny]


class NowUserView(ListAPIView):
    queryset = NowUser.objects.all()
    serializer_class = NowUserSerializer