from rest_framework import serializers
from .models import MembreAugustin

class MembreAugustinSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembreAugustin
        fields = "__all__"



class MembreSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembreAugustin
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