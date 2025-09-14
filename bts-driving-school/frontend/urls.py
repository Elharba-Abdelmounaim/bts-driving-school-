from django.urls import path
from django.views.generic import RedirectView
from . import views
urlpatterns = [
    path('', RedirectView.as_view(url='/dashboard/', permanent=False)),  
    path('login/', views.login_view, name="login"),
    path('dashboard/', views.dashboard, name="dashboard"),
    path('profile/', views.profile, name='profile'),
    path('wallet/', views.wallet, name='wallet'),
    path('lessons/', views.lessons, name='lessons'),
    path('exams/', views.exams, name='exams'),
    path('logout/', views.logout_view, name='logout'),
]
