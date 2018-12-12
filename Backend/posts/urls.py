from django.conf.urls import url
from .views import (
    NewPostCreateView,
    NewPostDetailView,
    NewPostDeleteView,
    NewPostListView,
    NewPostUpdateView,
)

urlpatterns = [
    url(r'^$', NewPostListView.as_view(), name='List'),
    url(r'^create', NewPostCreateView.as_view(), name='Create'),
    url(r'^detail/(?P<pk>[\d-]+)/$', NewPostDetailView.as_view(), name='Details'),
    url(r'^update/(?P<pk>[\d-]+)/$', NewPostUpdateView.as_view(), name='Update'),
    url(r'^delete/(?P<pk>[\d-]+)/$', NewPostDeleteView.as_view(), name='Delete'),
]
