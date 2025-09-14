from rest_framework import serializers
from .models import User, Student, Instructor, Vehicle, Wallet, LicenseCategory
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role', 'phone']

class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Student
        fields = ['id', 'user', 'national_id', 'license_category', 'enrollment_date', 'avatar']

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', {})
        user = instance.user
        user.username = user_data.get('username', user.username)
        user.email = user_data.get('email', user.email)
        user.phone = user_data.get('phone', user.phone)
        user.save()

        instance.license_category = validated_data.get('license_category', instance.license_category)
        if validated_data.get('avatar'):
            instance.avatar = validated_data.get('avatar')
        instance.save()
        return instance

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

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        token['role'] = user.role  
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data['role'] = self.user.role  
        return data

