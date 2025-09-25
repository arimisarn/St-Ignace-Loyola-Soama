from rest_framework import viewsets
from rest_framework import generics
from .models import MembreIgnace
from .serializers import MembreIgnaceSerializer

from .serializers import MembreSerializer
class MembreIgnaceViewSet(viewsets.ModelViewSet):
    queryset = MembreIgnace.objects.all()
    serializer_class = MembreIgnaceSerializer

class MembreListAPIView(generics.ListAPIView):
    queryset = MembreIgnace.objects.all()
    serializer_class = MembreSerializer

# Détails d'un membre
class MembreDetailAPIView(generics.RetrieveAPIView):
    queryset = MembreIgnace.objects.all()
    serializer_class = MembreSerializer
