# Generated by Django 4.0.2 on 2022-04-21 00:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userdata', '0007_userinfo_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='username',
            field=models.CharField(default='invaliddata', max_length=100, unique=True),
        ),
    ]