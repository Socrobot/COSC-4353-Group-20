# Generated by Django 4.0.3 on 2022-04-03 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userdata', '0006_alter_userinfo_address2field'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='username',
            field=models.CharField(default='invaliddata', max_length=100),
        ),
    ]
