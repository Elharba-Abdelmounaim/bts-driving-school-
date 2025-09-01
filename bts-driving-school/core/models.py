from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('instructor', 'Instructor'),
        ('student', 'Student'),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES , default='student')
    phone = models.CharField(max_length=20, blank=True, null=True)
    center_id = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.username} ({self.role})"



class Student(models.Model):
    LICENSE_CHOICES = [
        ('AM', 'AM'),
        ('A1','A1'),
        ('A', 'A'),
        ('B', 'B'),
        ('C', 'C'),
        ('D', 'D'),
        ('EB', 'EB'),
        ('EC', 'EC'),
        ('ED', 'ED'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    national_id = models.CharField(max_length=20, unique=True)

    license_category = models.CharField(max_length=3, choices=LICENSE_CHOICES)

    enrollment_date = models.DateField(auto_now_add=True)
    avatar = models.ImageField(upload_to="students/", blank=True ,null=True)

    def __str__(self):
        return f"{self.user.username} - {self.license_category}"



class LicenseCategory(models.Model):
    code = models.CharField(max_length=3, unique=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.code


class Instructor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    license_types = models.ManyToManyField(LicenseCategory, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.user.username

class Vehicle(models.Model):
    VEHICLE_TYPES = (
        ('car', 'Car'),
        ('moto', 'Motorcycle'),
        ('truck', 'Truck'),
        ('bus', 'Bus'),
    )

    LICENSE_CATEGORIES = [
        ('AM', 'AM'),
        ('A1', 'A1'),
        ('A', 'A'),
        ('B', 'B'),
        ('C', 'C'),
        ('D', 'D'),
        ('EB', 'EB'),
        ('EC', 'EC'),
        ('ED', 'ED'),
    ]

    STATUS_CHOICES = (
        ('available', 'Available'),
        ('in_use', 'In Use'),
        ('maintenance', 'Maintenance'),
    )

    plate_on = models.CharField(max_length=20, unique=True)
    type = models.CharField(max_length=20, choices=VEHICLE_TYPES)
    category = models.CharField(max_length=3, choices=LICENSE_CATEGORIES)

    status = models.CharField(max_length=20,choices=STATUS_CHOICES, default="available")

    def __str__(self):
        return f"{self.plate_on} ({self.type})"

class Wallet(models.Model):
    student = models.OneToOneField(Student, on_delete=models.CASCADE)
    credits_balance = models.IntegerField(default=22)
    last_update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.student.user.username} - {self.credits_balance} حصص"
