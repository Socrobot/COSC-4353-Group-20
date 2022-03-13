from urllib import response
from django.test import TestCase


class URLTesting(TestCase):
    def test_apipage(self):
        response = self.client.get('http://127.0.0.1:8000/api/')
        self.assertEqual(response.status_code, 200)

    def test_adminpage(self):
        response = self.client.get('http://127.0.0.1:8000/admin/')
        self.assertEqual(response.status_code, 302)

    def test_authpage(self):
        response = self.client.get('http://127.0.0.1:8000/auth/')
        self.assertEqual(response.status_code, 405)

    def test_login_signuppage(self):
        response = self.client.get('http://127.0.0.1:8000/api/login_signup/')
        self.assertEqual(response.status_code, 200)
