from dataclasses import field
from rest_framework import serializers
from .models import UserInfo

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ('Namefield','Addressfield','Address2field','Cityfield','Statefield','ZipCodefield')

