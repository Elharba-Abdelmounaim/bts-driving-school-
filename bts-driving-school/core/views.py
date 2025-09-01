from django.http import HttpResponse

def home(request):
    return HttpResponse("مرحبا بكم في نظام إدارة مراكز السياقة!")
