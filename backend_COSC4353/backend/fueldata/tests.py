from django.test import TestCase
from fueldata.models import FuelData
from fueldata.views import FuelDataView
from django.utils import timezone
from django.urls import reverse
from urllib import response
from fueldata.serializers import FuelDataSerializer

from rest_framework import serializers

# models test
class ModelTest(TestCase):

    def create_whatever(self, username = "Outofstate@gmail.com", gallons="2", delivery="2022-07-07", sugPrice = "12", totalPrice = "100"):
        return FuelData.objects.create(username=username,gallons=gallons, delivery=delivery, sugPrice=sugPrice, totalPrice=totalPrice)

    def test_whatever_creation(self):
        w = self.create_whatever()
        self.assertTrue(isinstance(w, FuelData))
        self.assertEqual(w.__unicode__(), w.delivery)





class SerializerTest2(TestCase):
    def setUp(self):
        self.fuel_attributes = {
            'username': "Outofstate@gmail.com",
            'gallons': 10,
            'delivery': "2022-07-05",
            'sugPrice': 12.50,
            'totalPrice': 259.78
        }

        self.serializer_data = {
            'username': "Outofate@gmail.com",
            'gallons': 98,
            'delivery': "2022-12-11",
            'sugPrice': 35.60,
            'totalPrice': 8529.78
        }

        self.FuelData = FuelData.objects.create(**self.fuel_attributes)
        self.serializer = FuelDataSerializer(instance=self.FuelData)


    def test_contains_expected_fields(self):
        data = self.serializer.data

        self.assertEqual(set(data.keys()), set(['username','gallons', 'delivery', 'sugPrice', 'totalPrice']))

    def test_gallon_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['gallons'], self.fuel_attributes['gallons'])

    def test_delivery_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['delivery'], self.fuel_attributes['delivery'])



    def test_sugPrice_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['sugPrice'], self.fuel_attributes['sugPrice'])

    def test_username_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['username'], self.fuel_attributes['username'])
        

    def test_totPrice_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['totalPrice'], self.fuel_attributes['totalPrice'])

