from django.contrib import admin
from .models import Marca, Vehiculo

@admin.register(Marca)
class MarcaAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre")
    search_fields = ("nombre",)

@admin.register(Vehiculo)
class VehiculoAdmin(admin.ModelAdmin):
    list_display = ("id", "marca", "modelo", "anio", "placa", "color")
    list_filter = ("marca", "anio")
    search_fields = ("modelo", "placa", "marca__nombre")
