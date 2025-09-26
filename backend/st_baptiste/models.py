from django.db import models
from datetime import date


class MembreBaptiste(models.Model):
    # code kristianina ne sera plus généré ici, seulement côté frontend
    code_kristianina = models.CharField(max_length=20, unique=True)
    code_fianakaviana = models.CharField(max_length=50)
    code_fianakaviana_niaviana = models.CharField(max_length=50)

    nom = models.CharField(max_length=120)
    prenom = models.CharField(max_length=120)
    date_naissance = models.DateField()
    age = models.PositiveIntegerField(null=True, blank=True)

    profession = models.CharField(max_length=150, blank=True)
    adresse = models.TextField(blank=True)

    voina_vahatra_tafika = models.CharField(
        max_length=10,
        choices=[("voina", "Voina"), ("vahatra", "Vahatra"), ("tafika", "Tafika")],
        blank=True,
    )

    mariage_ok = models.BooleanField(default=False)
    mariage_date = models.DateField(null=True, blank=True)

    batemy_ok = models.BooleanField(default=False)
    batemy_date = models.DateField(null=True, blank=True)

    confesy_ok = models.BooleanField(default=False)
    komnio_ok = models.BooleanField(default=False)
    kofirmasion_ok = models.BooleanField(default=False)
    filaharana_ok = models.BooleanField(default=False)

    andraikitra = models.JSONField(default=list, blank=True)
    faritra = models.CharField(max_length=100, blank=True)
    apv = models.CharField(max_length=100, blank=True)
    fm_vm = models.JSONField(default=list, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["code_kristianina"]

    def __str__(self):
        return f"{self.code_kristianina} - {self.nom} {self.prenom}"

    def save(self, *args, **kwargs):
        # Calcul de l'âge automatiquement
        today = date.today()
        self.age = (
            today.year
            - self.date_naissance.year
            - (
                (today.month, today.day)
                < (self.date_naissance.month, self.date_naissance.day)
            )
        )
        super().save(*args, **kwargs)
