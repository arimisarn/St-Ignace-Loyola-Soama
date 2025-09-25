from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    nom_eglise = models.CharField(max_length=100)
    
    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',  # <== changer
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups'
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set_permissions',  # <== changer
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions'
    )
