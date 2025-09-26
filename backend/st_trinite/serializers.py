from rest_framework import serializers
from .models import MembreTrinite

class MembreTriniteSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembreTrinite
        fields = "__all__"



class MembreSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembreTrinite
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