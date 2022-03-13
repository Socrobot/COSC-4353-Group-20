from django.shortcuts import render

# import view sets from the REST framework
from rest_framework import viewsets, status

# import the TodoSerializer from the serializer file
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):

    # define a variable and populate it
    # with the Todo list objects
    queryset = User.objects.all()

    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid(raise_exception=False):
            return Response({"Fail": "Used or Invalid Email"}, status=status.HTTP_400_BAD_REQUEST)

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response({"Success": "Accepted Email"}, status=status.HTTP_201_CREATED, headers=headers)
