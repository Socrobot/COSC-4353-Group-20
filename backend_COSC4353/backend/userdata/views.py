from winreg import QueryValue
from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import viewsets, status
from .serializers import UserInfoSerializer
from .models import UserInfo

# Create your views here.

class UserInfoView(viewsets.ModelViewSet):
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer
