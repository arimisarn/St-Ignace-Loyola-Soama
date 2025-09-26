from rest_framework import serializers
from .models import MembreBaptiste

class MembreBaptisteSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembreBaptiste
        fields = "__all__"



class MembreSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembreBaptiste
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