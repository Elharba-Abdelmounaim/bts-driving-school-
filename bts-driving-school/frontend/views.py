from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout 
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from core.models import Student, Wallet


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

def register_view(request):
    User = get_user_model()

    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        national_id = request.POST['national_id']
        phone = request.POST['phone']
        license_category = request.POST['license_category']

        # تحقق من وجود المستخدم مسبقًا
        if User.objects.filter(username=username).exists():
            return render(request, "Register.html", {"error": "Username already exists"})

        # إنشاء المستخدم
        user = User.objects.create_user(username=username, email=email, password=password, phone=phone, role="student")

        # إنشاء الطالب المرتبط بالمستخدم
        student = Student.objects.create(user=user, national_id=national_id, license_category=license_category)

        # إنشاء محفظة افتراضية للطالب
        Wallet.objects.create(student=student, credits_balance=22)

        # توجيهه إلى صفحة تسجيل الدخول بعد التسجيل
        return redirect('login')

    return render(request, "Register.html")

# صفحة الداشبورد (لازم تسجيل الدخول)
@login_required(login_url='login')
def dashboard(request):
    student = Student.objects.get(user=request.user)
    wallet = Wallet.objects.get(student=student)


  

    return render(request, "Student/student_dashboard.html")

# صفحة البروفايل
@login_required(login_url='login')
def profile(request):
    student = Student.objects.get(user=request.user)
    wallet = Wallet.objects.get(student=student)
    context = {
        "student": student,
        "wallet": wallet,
    }
    return render(request, "Student/profile.html", context)

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
