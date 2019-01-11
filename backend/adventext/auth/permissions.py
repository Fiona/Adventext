from rest_framework import permissions
from rest_framework_simplejwt.authentication import JWTAuthentication


class IsNotAuthenticated(permissions.BasePermission):
    message = 'Not accessible if authenticated.'

    def has_permission(self, request, view):
        return not request.user or not request.user.is_authenticated


class TokenHeaderAuthentication(JWTAuthentication):
    pass
