from rest_framework.response import Response
from rest_framework.views import APIView

from .permissions import IsNotAuthenticated, TokenHeaderAuthentication


class AccountRegisterView(APIView):
    permission_classes = (IsNotAuthenticated,)

    def post(self, request, format=None):
        return Response({'message': 'hello'})


class LogoutView(APIView):
    permission_classes = (TokenHeaderAuthentication,)

    def get(self, request, format=None):
        return Response({})
