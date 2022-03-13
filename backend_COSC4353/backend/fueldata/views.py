from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import FuelDataSerializer
from .models import FuelData
from rest_framework.response import Response

from cgitb import lookup
from urllib import response

from django.shortcuts import render



# import api view from rest framework
from rest_framework.views import APIView
# Create your views here.

class FuelDataView(viewsets.ModelViewSet):
    serializer_class = FuelDataSerializer
    queryset = FuelData.objects.all()


    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid(raise_exception=False):
            return Response({"Fail": "Used or Invalid Email"}, status=status.HTTP_400_BAD_REQUEST)

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response({"Success": "Accepted Email"}, status=status.HTTP_201_CREATED, headers=headers)