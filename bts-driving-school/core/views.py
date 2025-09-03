from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Student, Instructor, Vehicle, Wallet, LicenseCategory
from .serializers import (
    StudentSerializer, InstructorSerializer, VehicleSerializer,
    WalletSerializer, LicenseCategorySerializer
    )
from .permissions import IsAdmin, IsAdminOrReadOnly

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]


class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]


class WalletViewSet(viewsets.ModelViewSet):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer
    permission_classes = [IsAuthenticated, IsAdmin]


class LicenseCategoryViewSet(viewsets.ModelViewSet):
    queryset = LicenseCategory.objects.all()
    serializer_class = LicenseCategorySerializer
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]


