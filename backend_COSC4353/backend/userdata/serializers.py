from dataclasses import field
from rest_framework import serializers
from .models import UserInfo

class UserInfoSerializer(serializers.ModelSerializer):
    
    # Namefield = serializers.CharField(max_length=50)
    # Addressfield = serializers.CharField(max_length=100)
    # Address2field = serializers.CharField(max_length=100)
    # Cityfield = serializers.CharField(max_length=100)
    # Statefield = serializers.CharField(max_length=2)
    # ZipCodefield = serializers.CharField(max_length=9)
    
    
    class Meta:
        model = UserInfo
        fields = ('Namefield','Addressfield','Address2field','Cityfield','Statefield','ZipCodefield')

