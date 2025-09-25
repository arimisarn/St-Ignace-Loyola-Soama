from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MembreIgnaceViewSet

router = DefaultRouter()
router.register(r'membres', MembreIgnaceViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
