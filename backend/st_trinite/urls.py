from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MembreTriniteViewSet

router = DefaultRouter()
router.register(r'membres', MembreTriniteViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
