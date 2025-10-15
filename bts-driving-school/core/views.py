from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Student, Instructor, Vehicle, Wallet, LicenseCategory
from .serializers import (
    StudentSerializer, InstructorSerializer, VehicleSerializer,
    WalletSerializer, LicenseCategorySerializer
    )
from .permissions import IsAdmin, IsAdminOrReadOnly
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

    # get => looke your profile 
    # patch => | partial + update | your profile 
    # @شؤفهخى => it's name " decorator"

    @action(detail=False, methods=['get'], url_path='me')
    def get_my_profile(self, request):
        student = Student.objects.filter(user=request.user).first()
        if not student:
            return Response({"detail": "لم يتم العثور على ملف الطالب لهذا المستخدم"}, status=404)
        serializer = self.get_serializer(student)

        return Response(serializer.data)

    @action(detail=False, methods=['patch'], url_path='update-me')
    def update_my_profile(self, request):
        student = Student.objects.get(user=request.user)
        if not student:
            return Response({"detail": "لم يتم العثور على ملف الطالب  لتحديثه"}, status=404)
        serializer = self.get_serializer(student, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)




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

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

