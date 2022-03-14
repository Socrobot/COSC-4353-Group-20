from django.test import TestCase
from login_signup.serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class Userserializerstest(TestCase):
    def setUp(self):
        self.user_attributes = {
            'id': 1,
            'username': "testing321@gmail.com",
            'password': "thiswillwork123!",
        }

        self.serializer_data = {
            'id': 1,
            'username': "testing321@gmail.com",
            'password': "thiswillwork123!",
        }

        self.user = User.objects.create(**self.user_attributes)
        self.serializer = UserSerializer(instance=self.user)

    def test_contains_expected_fields_user(self):
        data = self.serializer.data

        self.assertEqual(set(data.keys()), set(['id', 'username', 'password']))

    def test_id_content(self):
        data = self.serializer.data

        self.assertEqual(data['id'], self.user_attributes['id'])

    def test_username_content(self):
        data = self.serializer.data

        self.assertEqual(data['username'], self.user_attributes['username'])

    def test_password_content(self):
        data = self.serializer.data

        self.assertEqual(data['password'], self.user_attributes['password'])

    def test_min_bound(self):
        self.serializer_data['username'] = "testing321@gmail.com"

        serializer = UserSerializer(data=self.serializer_data)

        self.assertFalse(serializer.is_valid())
        self.assertEqual(set(serializer.errors), set(['username']))
