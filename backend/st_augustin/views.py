from rest_framework import viewsets
from rest_framework import generics
from .models import MembreAugustin
from .serializers import MembreAugustinSerializer

from .serializers import MembreSerializer
class MembreAugustinViewSet(viewsets.ModelViewSet):
    queryset = MembreAugustin.objects.all()
    serializer_class = MembreAugustinSerializer

class MembreListAPIView(generics.ListAPIView):
    queryset = MembreAugustin.objects.all()
    serializer_class = MembreSerializer

# Détails d'un membre
class MembreDetailAPIView(generics.RetrieveAPIView):
    queryset = MembreAugustin.objects.all()
    serializer_class = MembreSerializer
