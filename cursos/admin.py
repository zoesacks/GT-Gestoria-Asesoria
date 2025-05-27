from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import RegistroCurso, InformacionCursos

@admin.register(RegistroCurso)
class RegistroCursoAdmin(ImportExportModelAdmin):
    list_display = ('nombre_completo', 'correo_electronico', 'telefono', 'fecha_registro')
    search_fields = ('nombre_completo', 'correo_electronico')
    list_filter = ('fecha_registro',)

@admin.register(InformacionCursos)
class InformacionCursosAdmin(ImportExportModelAdmin):
    list_display = ('titulo', 'descripcion', 'fecha_inicio')

    def has_add_permission(self, request):
        # Permitir agregar solo si no existe ningún registro
        if InformacionCursos.objects.count() >= 1:
            return False
        return True

    def has_delete_permission(self, request, obj=None):
        # Deshabilitar eliminar registros
        return False