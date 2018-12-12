from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
)

from .serializers import (
    NewsSerializer,
    NewsCreateSerializer,
)
from .models import Item


class SingleNewsView(RetrieveAPIView):
    queryset = Item.objects.all()
    serializer_class = NewsSerializer
    lookup_field = 'pk'


class NewsCreateView(CreateAPIView):
    serializer_class = NewsCreateSerializer


class NewsListView(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = NewsSerializer

