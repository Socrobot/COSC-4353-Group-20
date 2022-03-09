# import serializers from the REST framework
from rest_framework import serializers

# import the todo data model
from .models import Signup

# create a serializer class


# class LoginSerializer(serializers.ModelSerializer):

#     # create a meta class
#     class Meta:
#         model = Login
#         fields = ('email_login', 'password_login')


class SignupSerializer(serializers.ModelSerializer):

    # create a meta class
    class Meta:
        model = Signup
        fields = ('email_signup', 'password_signup')
