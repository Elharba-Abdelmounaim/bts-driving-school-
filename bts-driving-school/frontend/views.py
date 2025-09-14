from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# صفحة تسجيل الدخول
def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            return render(request, "Login.html", {"error": "Invalid credentials"})
    return render(request, "Login.html")

# صفحة الداشبورد (لازم تسجيل الدخول)
@login_required(login_url='login')
def dashboard(request):
    return render(request, "Student/student_dashboard.html")

# صفحة البروفايل
@login_required(login_url='login')
def profile(request):
    return render(request, "Student/profile.html")

# صفحات أخرى
@login_required(login_url='login')
def wallet(request):
    return render(request, "Student/wallet.html")

@login_required(login_url='login')
def lessons(request):
    return render(request, "Student/lessons.html")

@login_required(login_url='login')
def exams(request):
    return render(request, "Student/exams.html")


# تسجيل الخروج
def logout_view(request):
    logout(request)
    return redirect('login')
