from django.contrib import admin
from .models import FuelData
# Register your models here.

class FuelDataAdmin(admin.ModelAdmin):
    list_display = ('gallons', 'delivery', 'sugPrice', 'totalPrice')

admin.site.register(FuelData, FuelDataAdmin)