from email.headerregistry import Address
from django.db import models
import string
import random

# Create your models here.


class UserInfo(models.Model):

    username = models.CharField(max_length=100, default='invaliddata')
    Namefield = models.CharField(max_length=50, unique=True)
    Addressfield = models.CharField(max_length=100, unique=True)
    Address2field = models.CharField(max_length=100, blank=True)
    Cityfield = models.CharField(max_length=100)
    Statefield = models.CharField(max_length=2)
    ZipCodefield = models.CharField(max_length=9)

    def __unicode__(self):
        return self.Namefield
