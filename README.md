## 🚗 Driving School App

A modern web application designed to help driving schools manage lessons, students, and cars. The app provides a smooth interface for both instructors and learners to schedule, track, and manage driving lessons.

### 📌 Features
- 📝 Student Management – Add, edit, and monitor student progress.

- 👨‍🏫 Instructor Management – Assign lessons and track performance.

- 🚗 Vehicle Management – Track cars, motorcycles, and buses.

- 💳 Wallet – Manage student credits for lessons.

- 📊 Progress Tracking – Monitor student learning and lesson completion.

- 🌐 Admin Panel – Manage all entities with Django Admin.


### 🛠️ Technologies Used

- Backend: Django + Django REST Framework

- Database: PostgreSQL

- Authentication: JWT (planned)

- Deployment: Docker (optional)

### ⚙️ Installation & Setup

Clone the repository:
```
git clone https://github.com/your-username/driving-school-app.git
cd driving-school-app

```
Set up virtual environment and install dependencies:
```
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

```
Apply migrations:
```
python manage.py makemigrations
python manage.py migrate
```

Create superuser to access Admin:
```

python manage.py createsuperuser
```

Run development server:
```
python manage.py runserver
```

Open in browser:
```
http://127.0.0.1:8000/admin/
```