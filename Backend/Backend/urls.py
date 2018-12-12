from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^blog/api/', include('posts.urls'), name='blog'),
    url(r'^accounts/api/', include('users.urls')),
    url(r'^news/api/', include('news.urls')),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^rest-auth/', include('rest_auth.urls')),
]
