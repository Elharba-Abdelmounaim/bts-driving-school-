from rest_framework import permissions

class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_autheticated and  request.user.role == 'admin'

class IsInstructor(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_autheticated and request.user.role == 'instructor'

class IsStudent(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_autheticated and request.user.role == 'student'

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True # GET 
        return request.user.is_autheticated and request.user.role == 'admin'
        