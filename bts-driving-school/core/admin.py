from django.contrib import admin
from .models import User, Student, Instructor, Vehicle, Wallet, LicenseCategory

# --------------------
# User
# --------------------
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'role', 'email', 'phone')
    list_filter = ('role', 'is_active', 'is_staff')
    search_fields = ('username', 'email', 'phone')
    ordering = ('username',)

# --------------------
# Student
# --------------------
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('user', 'national_id', 'license_category', 'enrollment_date')
    search_fields = ('user__username', 'national_id')
    list_filter = ('license_category',)

# --------------------
# Instructor
# --------------------
@admin.register(Instructor)
class InstructorAdmin(admin.ModelAdmin):
    list_display = ('user', 'active')
    search_fields = ('user__username',)
    list_filter = ('active',)

# --------------------
# Vehicle
# --------------------
@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ('plate_on', 'type', 'category', 'status')
    search_fields = ('plate_on',)
    list_filter = ('type', 'category', 'status')

# --------------------
# Wallet
# --------------------
@admin.register(Wallet)
class WalletAdmin(admin.ModelAdmin):
    list_display = ('student', 'get_username', 'credits_balance', 'last_update')
    search_fields = ('student__user__username',)
    list_filter = ('credits_balance',)

    def get_username(self, obj):
        return obj.student.user.username
    get_username.short_description = 'Username'

# --------------------
# LicenseCategory
# --------------------
@admin.register(LicenseCategory)
class LicenseCategoryAdmin(admin.ModelAdmin):
    list_display = ('code', 'name')
    search_fields = ('code', 'name')
