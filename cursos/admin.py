from django.contrib import admin
from import_export.admin import ExportMixin
from import_export import resources
from .models import RegistroCurso, InformacionCursos


class RegistroCursoResource(resources.ModelResource):
    class Meta:
        model = RegistroCurso
        exclude = ('id',)


@admin.register(RegistroCurso)
class RegistroCursoAdmin(ExportMixin, admin.ModelAdmin):
    resource_class = RegistroCursoResource
    list_display = ('nombre_completo', 'correo_electronico', 'telefono', 'fecha_registro')
    search_fields = ('nombre_completo', 'correo_electronico')
    list_filter = ('fecha_registro',)
    readonly_fields = ('nombre_completo', 'correo_electronico', 'telefono', 'fecha_registro')


@admin.register(InformacionCursos)
class InformacionCursosAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'descripcion', 'fecha_inicio')

    def has_add_permission(self, request):
        # Permitir agregar solo si no existe ningún registro
        if InformacionCursos.objects.count() >= 1:
            return False
        return True

    def has_delete_permission(self, request, obj=None):
        # Deshabilitar eliminar registros
        return False