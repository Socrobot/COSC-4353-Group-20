from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import FuelDataSerializer
from .models import FuelData
from rest_framework.response import Response

from rest_framework import filters

from cgitb import lookup
from urllib import response

from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend

# import api view from rest framework
from rest_framework.views import APIView
# Create your views here.



class FuelDataView(viewsets.ModelViewSet):
    serializer_class = FuelDataSerializer
    queryset = FuelData.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['username']





