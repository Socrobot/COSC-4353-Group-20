from django.contrib import admin

# import the model Todo
from .models import Signup

# create a class for the admin-model integration


# class LoginAdmin(admin.ModelAdmin):

#     # add the fields of the model here
#     list_display = ("email_login", "password_login")


# # we will need to register the
# # model class and the Admin model class
# # using the register() method
# # of admin.site class
# admin.site.register(Login, LoginAdmin)


class SignupAdmin(admin.ModelAdmin):
    # add the fields of the model here
    list_display = ("email_signup", "password_signup")


# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Signup, SignupAdmin)
