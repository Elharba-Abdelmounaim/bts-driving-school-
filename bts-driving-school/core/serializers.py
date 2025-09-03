from rest_framework import serializers
from .models import User, Student, Instructor, Vehicle, Wallet, LicenseCategory

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role', 'phone']

class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Student
        fields = ['id', 'user', 'national_id', 'license_category', 'enrollment_date', 'avatar']

class InstructorSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    license_types = serializers.StringRelatedField(many=True)

    class Meta :
        model = Instructor
        fields = ['id', 'user', 'license_types', 'active']

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ['id', 'plate_on', 'type', 'category', 'status']

class WalletSerializer(serializers.ModelSerializer):
    student = StudentSerializer()

    class Meta:
        model = Wallet
        fields = ['id', 'student', 'credits_balance', 'last_update']

class LicenseCategorySerializer(serializers.ModelSerializer):
    class Meta : 
        model = LicenseCategory
        fields = ['id', 'code', 'name']
