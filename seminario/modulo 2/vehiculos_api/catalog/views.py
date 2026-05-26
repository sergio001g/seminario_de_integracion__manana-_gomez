from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from .models import Marca, Vehiculo
from .serializers import MarcaSerializer, VehiculoSerializer, BitacoraSerializer
from .permissions import IsAdminOrReadOnly
from .db import get_db
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from bson import ObjectId

class MarcaViewSet(viewsets.ModelViewSet):
    queryset = Marca.objects.all().order_by("id")
    serializer_class = MarcaSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    search_fields = ["nombre"]
    ordering_fields = ["id", "nombre"]

class VehiculoViewSet(viewsets.ModelViewSet):
    queryset = Vehiculo.objects.select_related("marca").all().order_by("-id")
    serializer_class = VehiculoSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ["marca"]
    search_fields = ["modelo", "placa", "color", "marca__nombre"]
    ordering_fields = ["id", "anio", "modelo", "placa", "creado_en"]

    def get_queryset(self):
        qs = super().get_queryset()
        anio_min = self.request.query_params.get("anio_min")
        anio_max = self.request.query_params.get("anio_max")
        if anio_min:
            qs = qs.filter(anio__gte=int(anio_min))
        if anio_max:
            qs = qs.filter(anio__lte=int(anio_max))
        return qs

    def get_permissions(self):
        # Público: SOLO listar vehículos
        if self.action == "list":
            return [AllowAny()]
        return super().get_permissions()

class BitacoraViewSet(viewsets.ViewSet):
    permission_classes = [IsAdminOrReadOnly]
    collection = get_db()["bitacoras"]

    def list(self, request):
        cursor = self.collection.find().sort("fecha", -1)
        data = list(cursor)
        serializer = BitacoraSerializer(data, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = BitacoraSerializer(data=request.data)
        if serializer.is_valid():
            doc = serializer.validated_data
            doc["fecha"] = datetime.now()
            result = self.collection.insert_one(doc)
            doc["id"] = str(result.inserted_id)
            return Response(doc, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            doc = self.collection.find_one({"_id": ObjectId(pk)})
            if doc:
                serializer = BitacoraSerializer(doc)
                return Response(serializer.data)
            return Response({"error": "No encontrado"}, status=status.HTTP_404_NOT_FOUND)
        except:
            return Response({"error": "ID inválido"}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            result = self.collection.delete_one({"_id": ObjectId(pk)})
            if result.deleted_count:
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response({"error": "No encontrado"}, status=status.HTTP_404_NOT_FOUND)
        except:
            return Response({"error": "ID inválido"}, status=status.HTTP_400_BAD_REQUEST)
