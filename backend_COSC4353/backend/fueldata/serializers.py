from rest_framework import serializers
from .models import FuelData

class FuelDataSerializer(serializers.ModelSerializer):
    #gallons = serializers.IntegerField()
    #delivery = serializers.DateField()
    #sugPrice = serializers.FloatField(max_value=10000)
    #totalPrice = serializers.FloatField(max_value=10000)


    class Meta:
        model = FuelData
        fields = ('username', 'gallons', 'delivery', 'sugPrice', 'totalPrice')