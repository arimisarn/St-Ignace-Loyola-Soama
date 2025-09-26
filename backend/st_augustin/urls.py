from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MembreAugustinViewSet

router = DefaultRouter()
router.register(r'membres', MembreAugustinViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
