from rest_framework import viewsets
from rest_framework import generics
from .models import MembreBaptiste
from .serializers import MembreBaptisteSerializer

from .serializers import MembreSerializer
class MembreBaptisteViewSet(viewsets.ModelViewSet):
    queryset = MembreBaptiste.objects.all()
    serializer_class = MembreBaptisteSerializer

class MembreListAPIView(generics.ListAPIView):
    queryset = MembreBaptiste.objects.all()
    serializer_class = MembreSerializer

# Détails d'un membre
class MembreDetailAPIView(generics.RetrieveAPIView):
    queryset = MembreBaptiste.objects.all()
    serializer_class = MembreSerializer
