from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MembreBaptisteViewSet

router = DefaultRouter()
router.register(r'membres', MembreBaptisteViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
