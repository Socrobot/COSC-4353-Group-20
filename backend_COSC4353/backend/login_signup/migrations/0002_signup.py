# Generated by Django 4.0.3 on 2022-03-09 02:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login_signup', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Signup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password_signup', models.CharField(max_length=500)),
            ],
        ),
    ]
