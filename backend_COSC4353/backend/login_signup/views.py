from cgitb import lookup
from urllib import response

from django.shortcuts import render

# import view sets from the REST framework
from rest_framework import viewsets, status

# import api view from rest framework
from rest_framework.views import APIView

# import the TodoSerializer from the serializer file
from .serializers import SignupSerializer

# import the login model from the models file
from .models import Signup


from rest_framework.response import Response


# create a class for the login model viewsets

class LoginView(viewsets.ModelViewSet):

    def create(self, request, *args, **kwargs):
        return Response({"Success": "Accepted Email"}, status=status.HTTP_201_CREATED)


class SignupView(viewsets.ModelViewSet):

    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = SignupSerializer

    # define a variable and populate it
    # with the Todo list objects
    queryset = Signup.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid(raise_exception=False):
            return Response({"Fail": "Used or Invalid Email"}, status=status.HTTP_400_BAD_REQUEST)

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response({"Success": "Accepted Email"}, status=status.HTTP_201_CREATED, headers=headers)
