# GT Gestoría & Asesoría

Soluciones profesionales para tus trámites administrativos, catastrales e inmobiliarios.

## Descripción

Este proyecto es un sitio web desarrollado con Django para la gestión y promoción de servicios de gestoría, asesoría y cursos de capacitación. Incluye información sobre servicios, equipo, contacto, testimonios y un sistema de registro para cursos.

## Estructura del proyecto

- **GTGestoriaAsesoria/**: Configuración principal de Django.
- **cursos/**: App para la gestión y registro de cursos.
- **home/**: App principal para páginas de inicio, servicios, nosotros y contacto.
- **static/**: Archivos estáticos (CSS, JS, imágenes).
- **templates/**: Plantillas HTML para las distintas páginas.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <url-del-repo>
   cd YG-Gestoria-Asesoria-2
   ```

2. Instala las dependencias:
   ```sh
   pip install -r requirements.txt
   ```

3. Realiza las migraciones:
   ```sh
   python manage.py migrate
   ```

4. Ejecuta el servidor de desarrollo:
   ```sh
   python manage.py runserver
   ```

5. Accede a la web en [http://localhost:8000](http://localhost:8000)

## Funcionalidades principales

- Página de inicio con presentación de servicios y equipo.
- Sección de servicios detallados con filtros.
- Página "Nosotros" con historia, valores, equipo y certificaciones.
- Formulario de contacto con integración a WhatsApp.
- Registro a cursos y cuenta regresiva para lanzamientos.
- Panel de administración para gestión de cursos y registros.

## Personalización

- Modifica los archivos en `templates/` para cambiar el contenido de las páginas.
- Cambia los estilos en `static/css/styles.css`.
- Agrega o edita imágenes en `static/img/`.

## Créditos

Desarrollado por el equipo de SacksVerse.

---
¿Dudas o sugerencias? Encontranos en sacksverse.com.ar
