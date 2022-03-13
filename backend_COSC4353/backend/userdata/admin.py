from django.contrib import admin

# Register your models here.
from .models import UserInfo


class UserDataAdmin(admin.ModelAdmin):
    # add the fields of the model here
    list_display = ("Namefield", "Addressfield","Address2field","Cityfield","Statefield","ZipCodefield")


admin.site.register(UserInfo, UserDataAdmin)
