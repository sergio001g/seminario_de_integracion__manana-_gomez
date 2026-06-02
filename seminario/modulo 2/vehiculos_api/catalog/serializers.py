from rest_framework import serializers
from .models import Marca, Vehiculo

class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = ["id", "nombre"]

class VehiculoSerializer(serializers.ModelSerializer):
    marca_nombre = serializers.CharField(source="marca.nombre", read_only=True)

    class Meta:
        model = Vehiculo
        fields = ["id", "marca", "marca_nombre", "modelo", "anio", "placa", "color", "creado_en"]

class BitacoraSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    vehiculo_id = serializers.IntegerField()
    descripcion = serializers.CharField(max_length=255)
    fecha = serializers.DateTimeField(read_only=True)
    costo = serializers.DecimalField(max_digits=10, decimal_places=2, default=0)

    def to_representation(self, instance):
        if "_id" in instance:
            instance["id"] = str(instance.pop("_id"))
        return super().to_representation(instance)
