from django.shortcuts import render
from cursos.models import RegistroCurso, InformacionCursos
from django.db import IntegrityError

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
    info_curso = InformacionCursos.objects.first()
    mensaje = None
    error = None

    if request.method == 'POST':
        nombre = request.POST.get('name')
        correo = request.POST.get('email')
        telefono = request.POST.get('phone')

        try:
            RegistroCurso.objects.create(
                nombre_completo=nombre,
                correo_electronico=correo,
                telefono=telefono
            )
            mensaje = "¡Registro exitoso! Te hemos inscrito correctamente."
        except IntegrityError:
            error = "Este correo electrónico ya está registrado."

    context = {
        'info_curso': info_curso,
        'mensaje': mensaje,
        'error': error
    }

    return render(request, 'cursos.html', context)

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