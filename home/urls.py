from django.urls import path
from .views import home_view, contacto_view, cursos_view, nosotros_view, servicios_view
urlpatterns = [
    path('', home_view, name='home'),
    path('contacto/', contacto_view, name='contacto'),
    path('cursos/', cursos_view, name='cursos'),
    path('nosotros/', nosotros_view, name='nosotros'),
    path('servicios/', servicios_view, name='servicios')
]