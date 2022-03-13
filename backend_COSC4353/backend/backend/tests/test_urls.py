from signal import siginterrupt
from django.test import SimpleTestCase
from django.urls import reverse, resolve
from login_signup.views import UserViewSet

class TestUrls(SimpleTestCase):

    def test_api_login_signup_url_is_resolved(self):
        url = reverse('login_signup')
        print(resolve(url))
