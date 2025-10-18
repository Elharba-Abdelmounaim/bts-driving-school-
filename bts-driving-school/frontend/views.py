from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout 
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from datetime import date, timedelta
from core.models import Student, Wallet , Lesson , Instructor, Vehicle



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

        
        if User.objects.filter(username=username).exists():
            return render(request, "Register.html", {"error": "Username already exists"})

        
        user = User.objects.create_user(username=username, email=email, password=password, phone=phone, role="student")

        
        student = Student.objects.create(user=user, national_id=national_id, license_category=license_category)

        
        Wallet.objects.create(student=student, credits_balance=22)

        instructors = Instructor.objects.filter(active=True)
        instructor = instructor.first() if instructors.exists() else None
        lessons_data = [
            {"title": "الدرس النظري الأول", "lesson_type": "theory", "date": date.today() + timedelta(days=1), "time": "09:00"},
            {"title": "الدرس العملي الأول", "lesson_type": "practice", "date": date.today() + timedelta(days=3), "time": "10:00"},
            {"title": "الدرس النظري الثاني", "lesson_type": "theory", "date": date.today() + timedelta(days=5), "time": "14:00"},
        ]
        for i in lessons_data:
            Lesson.objects.create(
                student=student,
                instructor=instructor,
                title =i['title'],
                lesson_type=i['lesson_type'],
                date=i["date"],
                time=i["time"],
                status='upcoming'
            )
 
      
        return redirect('login')

    return render(request, "Register.html")


@login_required(login_url='login')
def dashboard(request):
    student = Student.objects.get(user=request.user)
    wallet = Wallet.objects.get(student=student)
    lessons = Lesson.objects.filter(student=student)

    completed_lesson = lessons.filter(status='completed').count()
    total_lessons = lessons.count()
    progress = (completed_lesson / total_lessons * 100) if total_lessons else 0

    amount_paid = wallet.credits_balance 
    total_amount = 2500 
    amount_remaining = total_amount - amount_paid

    next_lesson = lessons.filter(status='upcoming').order_by('date', 'time').first()

    context = {
    "student": student,
    "wallet": wallet,
    "lessons": lessons,
    "total_lessons": total_lessons,
    "completed_lessons": completed_lesson,
    "progress": progress,
    "amount_paid": amount_paid,
    "amount_remaining": amount_remaining,
    "next_lesson": next_lesson,
    }
    return render(request, "Student/student_dashboard.html", context)


@login_required(login_url='login')
def profile(request):
    student = Student.objects.get(user=request.user)
    wallet = Wallet.objects.get(student=student)
    context = {
        "student": student,
        "wallet": wallet,
    }
    return render(request, "Student/profile.html", context)


@login_required(login_url='login')
def wallet(request):
    return render(request, "Student/wallet.html")

@login_required(login_url='login')
def lessons(request):
    return render(request, "Student/lessons.html")

@login_required(login_url='login')
def exams(request):
    return render(request, "Student/exams.html")



def logout_view(request):
    logout(request)
    return redirect('login')
