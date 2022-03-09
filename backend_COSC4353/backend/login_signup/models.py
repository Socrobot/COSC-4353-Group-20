from django.db import models

# Create your models here.


# class Login(models.Model):
#     email_login = models.CharField(max_length=150)
#     password_login = models.CharField(max_length=500)

#     def __str__(self):

#         # it will return the title
#         return self.email_login


class Signup(models.Model):
    email_signup = models.CharField(
        max_length=150, default="testing@gmail.com")
    password_signup = models.CharField(max_length=500)

    def __str__(self):

        return self.email_signup
