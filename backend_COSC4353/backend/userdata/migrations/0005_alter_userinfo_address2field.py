# Generated by Django 4.0.2 on 2022-03-31 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userdata', '0004_alter_userinfo_address2field'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='Address2field',
            field=models.CharField(default='', max_length=100),
        ),
    ]
