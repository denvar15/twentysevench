from django.conf.urls import url
from .views import (
    NewsCreateView,
    NewsListView,
    SingleNewsView
)

urlpatterns = [
    url(r'^detail/(?P<pk>[\d-]+)/$', SingleNewsView.as_view(), name='Details'),
    url(r'^$', NewsListView.as_view(), name='List'),
    url(r'^create', NewsCreateView.as_view(), name='Create'),
]
