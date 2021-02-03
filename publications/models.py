from django.db import models


# Create your models here.
class User(models.Model):
    email = models.EmailField(max_length=255, null=False, unique=True)
    first_name = models.CharField(max_length=255, null=False)
    last_name = models.CharField(max_length=255, null=False)


class Publication(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=False)
    year = models.IntegerField(null=False)
