# Generated by Django 4.0.3 on 2022-04-01 23:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fueldata', '0002_alter_fueldata_gallons'),
    ]

    operations = [
        migrations.AddField(
            model_name='fueldata',
            name='username',
            field=models.CharField(default='', max_length=100),
        ),
    ]
