from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView
)

from .serializers import (
    PostCreateSerializer,
    PostDetailSerializer,
    PostListSerializer
)
from .models import Post
from .permissions import IsOwnerOrReadOnly


class NewPostCreateView(CreateAPIView):
    serializer_class = PostCreateSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class NewPostDeleteView(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    lookup_field = 'pk'


class NewPostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer


class NewPostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    lookup_field = 'pk'


class NewPostUpdateView(RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostCreateSerializer
    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = 'pk'
