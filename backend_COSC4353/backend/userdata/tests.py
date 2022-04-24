from os import name
from django.test import TestCase
from userdata.models import UserInfo
from userdata.views import UserInfoView
from django.utils import timezone
from django.urls import reverse
from urllib import response
from userdata.serializers import UserInfoSerializer

from rest_framework import serializers

# models test
class ModelTest(TestCase):

    def create_whatever(self, id = 1 ,username = "retrs235534@gmail.com", Namefield = "James clivl", Addressfield = "1003 mians streets", Address2field = "", Cityfield = "Houston", Statefield = "TX", ZipCodefield = "75645" ):
        return UserInfo.objects.create(id=id,username=username,Namefield=Namefield, Addressfield = Addressfield, Address2field = Address2field, Cityfield = Cityfield , Statefield = Statefield, ZipCodefield = ZipCodefield)

    def test_whatever_creation(self):
        w = self.create_whatever()
        self.assertTrue(isinstance(w, UserInfo))
        self.assertEqual(w.__unicode__(), w.Namefield)





class SerializerTest2(TestCase):
    def setUp(self):
        self.user_attributes = {
            "id": 1,
            "username": "retrs235534@gmail.com",
            "Namefield": "James clivl",
            "Addressfield": "1003 mians streets", 
            "Address2field": "", 
            "Cityfield": "Houston", 
            "Statefield": "TX", 
            "ZipCodefield": "75645"
        }

        self.serializer_data = {
            "id": 2,
            "username": "retrs2334@gmail.com",
            "Namefield": "James clvl",
            "Addressfield": "1003 mian stryeets", 
            "Address2field": "y", 
            "Cityfield": "Houton", 
            "Statefield": "AL", 
            "ZipCodefield": "75657"
        }

        self.UserInfo = UserInfo.objects.create(**self.user_attributes)
        self.serializer = UserInfoSerializer(instance=self.UserInfo)


    def test_contains_expected_fields(self):
        data = self.serializer.data

        self.assertEqual(set(data.keys()), set(['id','username','Namefield', 'Addressfield', 'Address2field', 'Cityfield', 'Statefield','ZipCodefield']))

    def test_Name_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['Namefield'], self.user_attributes['Namefield'])

    def test_address1_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['Addressfield'], self.user_attributes['Addressfield'])



    def test_address2_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['Address2field'], self.user_attributes['Address2field'])
        

    def test_city_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['Cityfield'], self.user_attributes['Cityfield'])

    def test_state_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['Statefield'], self.user_attributes['Statefield'])

    def test_zipcode_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['ZipCodefield'], self.user_attributes['ZipCodefield'])    

    def test_username_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['username'], self.user_attributes['username']) 

    def test_id_field_content(self):
        data = self.serializer.data

        self.assertEqual(data['id'], self.user_attributes['id'])    