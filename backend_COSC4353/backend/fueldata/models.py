from django.db import models

# Create your models here.

class FuelData(models.Model):
    username = models.CharField(max_length=100, default='invaliddata')
    gallons = models.IntegerField()
    delivery = models.DateField()
    sugPrice = models.FloatField(max_length=10000)
    totalPrice = models.FloatField(max_length=10000)

    def __unicode__(self):
        return self.delivery


