from rest_framework import serializers
from .models import CustomUser  # <- ici CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ("username", "nom_eglise", "password")

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            nom_eglise=validated_data['nom_eglise']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
