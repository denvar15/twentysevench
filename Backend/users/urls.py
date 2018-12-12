from django.conf.urls import url

from .views import (
    UserCreateView,
    NowUserCreate,
    NowUserView
)

from rest_framework_jwt.views import obtain_jwt_token

app_name = 'users'

urlpatterns = [
    url(r'^register/$', UserCreateView.as_view(), name='users'),
    url(r'^home/login/token/$', obtain_jwt_token),
    url(r'^create/now_user/$', NowUserCreate.as_view()),
    url(r'^get/now_user/$', NowUserView.as_view())
]
