# Generated by Django 4.0.2 on 2022-03-12 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userdata', '0003_rename_address2_userinfo_address2field_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='Address2field',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]