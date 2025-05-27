from django.shortcuts import render
from cursos.models import RegistroCurso, InformacionCursos

# Create your views here.
def home_view(request):
    """
    Render the home page.
    """
    return render(request, 'home.html')

def contacto_view(request):
    """
    Render the contact page.
    """
    return render(request, 'contacto.html')

def cursos_view(request):
    """
    Render the courses page with the first InformacionCursos instance.
    """
    info_curso = InformacionCursos.objects.first()
    return render(request, 'cursos.html', {'info_curso': info_curso})

def nosotros_view(request):
    """
    Render the about us page.
    """
    return render(request, 'nosotros.html')

def servicios_view(request):
    """
    Render the services page.
    """
    return render(request, 'servicios.html')