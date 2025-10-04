from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet, InstructorViewSet, VehicleViewSet, WalletViewSet, LicenseCategoryViewSet, MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'instructors', InstructorViewSet)
router.register(r'vehicles', VehicleViewSet)
router.register(r'wallets', WalletViewSet)
router.register(r'license-categories', LicenseCategoryViewSet)

urlpatterns = [
    
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
]
