from rest_framework import serializers
from .models import MembreIgnace

class MembreIgnaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembreIgnace
        fields = "__all__"



class MembreSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembreIgnace
        fields = [
            "id",
            "code_kristianina",
            "nom",
            "prenom",
            "adresse",
            "faritra",
            "apv",
            # si besoin, ajouter les autres champs pour la page détail
        ]