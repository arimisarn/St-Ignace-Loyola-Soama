from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/accounts/", include("accounts.urls")),
    path("st-ignace/", include("st_ignace.urls")),
    path("st-augustin/", include("st_augustin.urls")),
    path("st-baptiste/", include("st_baptiste.urls")),
    path("st-trinite/", include("st_trinite.urls")),
]
