"""Authentication (login/registration/token) related URLs"""
from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import AccountRegisterView

urlpatterns = [
    path('account/register/', AccountRegisterView.as_view(), name='account_register'),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
