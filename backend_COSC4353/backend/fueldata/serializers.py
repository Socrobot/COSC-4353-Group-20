from rest_framework import serializers
from .models import FuelData

class FuelDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FuelData
        fields = ('gallons', 'delivery', 'sugPrice', 'totalPrice')