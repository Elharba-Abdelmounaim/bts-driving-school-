#!/bin/bash

sudo systemctl stop postgresql

echo "Activating virtual environment..."
source venv/bin/activate


echo "Starting Docker containers..."

docker compose down
docker compose up -d



echo "Checking container status..."
docker ps --format "table {{.Names}}\t{{.Status}}"


echo "Starting Django development server..."
python manage.py runserver
