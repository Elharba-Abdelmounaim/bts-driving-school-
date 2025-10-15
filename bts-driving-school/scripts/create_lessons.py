from core.models import Lesson, Student, Instructor, Vehicle
from datetime import date, time, timedelta

def run():
    students = Student.objects.all()
    instructors = Instructor.objects.all()
    vehicles = Vehicle.objects.all()

    for student in students:
        instructor = instructors.first() if instructors.exists() else None
        vehicle = vehicles.first() if vehicles.exists() else None

        Lesson.objects.create(
            student=student,
            instructor=instructor,
            vehicle=vehicle,
            title="درس نظري تجريبي",
            lesson_type="theory",
            date=date.today() - timedelta(days=1),
            time=time(9, 0),
            duration=60,
            status="completed"
        )

        Lesson.objects.create(
            student=student,
            instructor=instructor,
            vehicle=vehicle,
            title="درس عملي تجريبي",
            lesson_type="practice",
            date=date.today() + timedelta(days=1),
            time=time(10, 0),
            duration=60,
            status="upcoming"
        )

        Lesson.objects.create(
            student=student,
            instructor=instructor,
            vehicle=vehicle,
            title="درس ملغى تجريبي",
            lesson_type="practice",
            date=date.today() + timedelta(days=2),
            time=time(11, 0),
            duration=60,
            status="canceled"
        )
