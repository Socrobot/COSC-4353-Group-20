# Generated by Django 4.0.2 on 2022-03-10 00:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50, unique=True)),
                ('Address', models.CharField(max_length=100, unique=True)),
                ('Address2', models.CharField(default='', max_length=100, unique=True)),
                ('City', models.CharField(max_length=100, unique=True)),
                ('State', models.CharField(max_length=2, unique=True)),
                ('ZipCode', models.CharField(max_length=9, unique=True)),
            ],
        ),
    ]
