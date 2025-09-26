from rest_framework import viewsets
from rest_framework import generics
from .models import MembreTrinite
from .serializers import MembreTriniteSerializer

from .serializers import MembreSerializer
class MembreTriniteViewSet(viewsets.ModelViewSet):
    queryset = MembreTrinite.objects.all()
    serializer_class = MembreTriniteSerializer

class MembreListAPIView(generics.ListAPIView):
    queryset = MembreTrinite.objects.all()
    serializer_class = MembreSerializer

# Détails d'un membre
class MembreDetailAPIView(generics.RetrieveAPIView):
    queryset = MembreTrinite.objects.all()
    serializer_class = MembreSerializer
