from rest_framework import permissions

class IsAdmin(permissions.BasePermission):
    def has_premission(self, request, view):
        return request.user.role == 'admin'

class IsInstructor(permissions.BasePermission):
    def has_premission(self, request, view):
        return request.user.role == 'instructor'

class IsStudent(permissions.BasePermission):
    def has_premission(self, request, view):
        return request.user.role == 'student'

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_premission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.role == 'admin'
        