# Generated by Django 4.0.2 on 2022-04-22 02:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userdata', '0010_alter_userinfo_namefield'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserInfo',
            new_name='UserInfos',
        ),
    ]