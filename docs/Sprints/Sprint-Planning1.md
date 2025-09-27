
# PROMPT

**Objetivo:**
Analizar los prototipos (imágenes) con la finalidad de encontrar las HUs representadas en las mismas.

**Contexto:**
Para las HUs se debe cumplir con los criterios INVEST:

- **Independent (Independiente):** Una historia debe poder completarse por sí sola, sin depender estrictamente de que otras historias se terminen antes.
- **Negotiable (Negociable):** La historia debe tener detalles que se puedan debatir y acordar con las partes interesadas (ej. desarrolladores, diseñadores).
- **Valuable (Valiosa):** La historia debe responder a una necesidad genuina del usuario y contribuir a la visión del producto y los objetivos comerciales.
- **Estimable (Estimable):** La historia debe poder desglosarse en tareas claras, de forma que el equipo pueda estimar el esfuerzo necesario para completarla.
- **Small (Pequeña):** La historia debe ser lo suficientemente pequeña para poder estimarse con precisión razonable; si es muy grande, debe dividirse en partes más manejables.
- **Testable (Testeable):** Deben existir criterios claros de aceptación que permitan verificar si la historia se implementó con éxito (ej. pruebas de usuario, verificaciones de funcionalidad).

Las HUs que debes representar corresponden a mi primer sprint, el cual tiene por objetivo:

**Objetivo:** Establecer la base organizativa de la EPN y asegurar el acceso controlado de usuarios.

**PBIs:**
- Gestión de organización académica (Facultades, Carreras, Materias, Profesores)

**Ejemplo de HUs previas:**
- HU :  Agregar miembro de la CEI
  Como administrador
  quiero registrar a los miembros de la cei  ------ > 3sp
- HU :Listar miembros de la cei              -------- > 3sp
  Como administrador
   quiero listar los miembros de la CEI
- HU : Paginar autoridades
  Como administrador
  quiero listar las autoridades por grupos         ---- ? 1 sp
- HU : Filtrar autoridades  ---- > 1sp
  Como administrador
  quiero filtrar las autoridades por una palabra

**Formato de salida por HU (obligatorio):**
- title, como, quiero, para
- acceptanceCriteria: array de strings claros y verificables
- storyPoints: número
- priority: 1 = alta, 2 = media, 3 = baja (elige según impacto/urgencia)
- frontendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }
- backendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

**Reglas para horas por tarea (FE/BE):**
Devuelve horas numéricas (no strings), en horas.
Si no hay señal específica, usa por defecto: originalEstimate = 3, remainingWork = 0, completedWork = 0.
Si la HU es más compleja en un lado (FE o BE), ajusta las horas de esas tareas (p.ej., 4–6h) manteniendo tareas pequeñas (≤6h).
No repitas títulos de tareas; usa verbos en infinitivo.

**ACCIÓN:**
Crea mi sprint planning 1 con las HUs representadas en los prototipos (imágenes).

**Ejemplo de salida (formato exacto que debe producir tu generación):**

```json
[
	{
		"title": "HU: Iniciar Sesión en el Sistema",
		"como": "usuario EPN",
		"quiero": "acceder con mis credenciales institucionales",
		"para": "usar las funcionalidades de mi rol",
		"acceptanceCriteria": [
			"Se muestra formulario con email institucional y contraseña",
			"Credenciales válidas redirigen al dashboard",
			"Credenciales inválidas muestran mensaje claro",
			"Existe enlace para recuperar contraseña"
		],
		"storyPoints": 3,
		"priority": 1,
		"frontendTasks": [
			{ "title": "Diseñar formulario de login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
			{ "title": "Validar formato de email en cliente", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
			{ "title": "Enviar credenciales y manejar estados de éxito/error", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
		],
		"backendTasks": [
			{ "title": "Crear endpoint POST /auth/login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
			{ "title": "Verificar credenciales y generar JWT", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
		]
	}
]
```

# RESPUESTA

```json
[
{
"title": "HU: Iniciar Sesión en el Sistema",
"como": "usuario EPN",
"quiero": "acceder con mis credenciales institucionales",
"para": "usar las funcionalidades de mi rol",
"acceptanceCriteria": [
"Se muestra formulario con email institucional y contraseña",
"Credenciales válidas redirigen al dashboard",
"Credenciales inválidas muestran mensaje claro",
"Existe enlace para recuperar contraseña"
],
"storyPoints": 3,
"priority": 1,
"frontendTasks": [
{ "title": "Diseñar formulario de login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Validar formato de email en cliente", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Enviar credenciales y manejar estados de éxito/error", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint POST /auth/login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Verificar credenciales y generar JWT", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Visualizar Dashboard Administrativo",
"como": "administrador",
"quiero": "ver un resumen ejecutivo de las métricas clave del sistema",
"para": "tener una visión rápida del estado general de las facultades, carreras y usuarios",
"acceptanceCriteria": [
"Se muestra contador de Total Facultades registradas",
"Se muestra contador de Total Carreras registradas",
"Se muestra contador de Usuarios Activos",
"Se visualiza Estado Acreditación con porcentaje visual",
"Se presenta sección Acceso Rápido con enlaces funcionales",
"Se muestra Actividad Reciente con timestamp, usuario y acción"
],
"storyPoints": 5,
"priority": 1,
"frontendTasks": [
{ "title": "Diseñar layout del dashboard principal", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar componentes de métricas y contadores", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear visualización de estado de acreditación", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Integrar tabla de actividad reciente", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint GET /dashboard/metrics", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar consultas para contadores de entidades", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear endpoint GET /dashboard/recent-activity", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Registrar Nueva Facultad",
"como": "administrador",
"quiero": "crear una nueva facultad en el sistema",
"para": "establecer las entidades académicas de la institución",
"acceptanceCriteria": [
"Se muestra modal con formulario de nueva facultad",
"Se valida que el código de facultad sea único",
"Se permite asignar un decano desde lista de usuarios",
"Se guarda correctamente en base de datos",
"Se muestra mensaje de confirmación al guardar"
],
"storyPoints": 3,
"priority": 1,
"frontendTasks": [
{ "title": "Crear modal de nueva facultad", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar validaciones de formulario", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Integrar selector de decano con API", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint POST /facultades", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar validación de unicidad de código", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear modelo y esquema de facultad", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Gestionar Facultades",
"como": "administrador",
"quiero": "visualizar y administrar todas las facultades",
"para": "mantener actualizada la información académica",
"acceptanceCriteria": [
"Se muestra tabla con código, nombre, cantidad de carreras y decano",
"Se permite buscar por código de facultad",
"Se permite buscar por nombre de facultad",
"Se implementa paginación de resultados",
"Se permite editar información de facultad",
"Se permite eliminar facultad si no tiene dependencias"
],
"storyPoints": 5,
"priority": 1,
"frontendTasks": [
{ "title": "Crear tabla de gestión de facultades", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar buscadores por código y nombre", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Agregar componente de paginación", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear modal de edición de facultad", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint GET /facultades con paginación", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar filtros de búsqueda", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear endpoint PUT /facultades/:id", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear endpoint DELETE /facultades/:id", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Registrar Nueva Carrera",
"como": "administrador",
"quiero": "crear una nueva carrera académica",
"para": "definir la oferta educativa de cada facultad",
"acceptanceCriteria": [
"Se muestra modal con formulario de nueva carrera",
"Se permite seleccionar facultad de lista existente",
"Se valida unicidad de código por facultad",
"Se permite asignar coordinador de lista de usuarios",
"Se guarda correctamente con validaciones",
"Se muestra confirmación de creación exitosa"
],
"storyPoints": 3,
"priority": 2,
"frontendTasks": [
{ "title": "Crear modal de nueva carrera", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar selectores de facultad y coordinador", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Agregar validaciones de formulario", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint POST /carreras", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar validación de código único por facultad", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear modelo y relaciones de carrera", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Gestionar Carreras",
"como": "administrador",
"quiero": "administrar todas las carreras del sistema",
"para": "mantener actualizada la oferta académica",
"acceptanceCriteria": [
"Se muestra tabla con código, nombre, facultad, coordinador y estado",
"Se permite buscar por nombre de carrera",
"Se permite filtrar por facultad",
"Se permite filtrar por estado",
"Se implementa paginación de resultados",
"Se permite editar información de carrera",
"Se permite cambiar estado de carrera"
],
"storyPoints": 5,
"priority": 1,
"frontendTasks": [
{ "title": "Crear tabla de gestión de carreras", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar buscador por nombre", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Agregar filtros por facultad y estado", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear modal de edición de carrera", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint GET /carreras con filtros", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar búsqueda y filtros múltiples", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear endpoint PUT /carreras/:id", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Registrar Nuevo Profesor",
"como": "administrador",
"quiero": "registrar profesores en el sistema",
"para": "gestionar el personal académico de la institución",
"acceptanceCriteria": [
"Se muestra modal con formulario de nuevo profesor",
"Se valida unicidad de cédula en el sistema",
"Se valida unicidad de email institucional",
"Se permite seleccionar facultad de adscripción",
"Se guarda información completa del profesor",
"Se muestra confirmación de registro exitoso"
],
"storyPoints": 3,
"priority": 2,
"frontendTasks": [
{ "title": "Crear modal de nuevo profesor", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar validaciones de cédula y email", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Integrar selector de facultad", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint POST /profesores", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar validaciones de unicidad", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear modelo y esquema de profesor", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Gestionar Profesores",
"como": "administrador",
"quiero": "administrar la información de todos los profesores",
"para": "mantener actualizado el registro del personal académico",
"acceptanceCriteria": [
"Se muestra tabla con cédula, nombre, email, facultad, rol y estado",
"Se permite buscar por cédula",
"Se permite buscar por nombre",
"Se permite filtrar por facultad",
"Se permite filtrar por rol",
"Se permite filtrar por estado",
"Se implementa paginación",
"Se permite editar información del profesor",
"Se permite cambiar estado activo/inactivo"
],
"storyPoints": 5,
"priority": 1,
"frontendTasks": [
{ "title": "Crear tabla de gestión de profesores", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar búsquedas por cédula y nombre", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Agregar filtros múltiples", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear modal de edición de profesor", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint GET /profesores con filtros", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar búsqueda y filtros avanzados", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear endpoint PUT /profesores/:id", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear endpoint PUT /profesores/:id/estado", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Gestionar Usuarios del Sistema",
"como": "administrador",
"quiero": "administrar usuarios y sus roles",
"para": "controlar el acceso y permisos en el sistema",
"acceptanceCriteria": [
"Se muestra tabla con email, nombre, rol, estado y último acceso",
"Se permite buscar por nombre o email",
"Se implementa paginación de usuarios",
"Se permite asignar rol a usuario",
"Se permite desactivar usuario",
"Se muestra modal para asignación de roles"
],
"storyPoints": 5,
"priority": 1,
"frontendTasks": [
{ "title": "Crear tabla de gestión de usuarios", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar búsqueda por nombre y email", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear modal de asignación de roles", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Integrar acciones de estado de usuario", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint GET /usuarios con paginación", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear endpoint PUT /usuarios/:id/rol", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear endpoint PUT /usuarios/:id/estado", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar control de permisos por rol", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Gestionar Permisos de Roles",
"como": "administrador",
"quiero": "configurar permisos por rol",
"para": "controlar granularmente el acceso a funcionalidades",
"acceptanceCriteria": [
"Se muestra lista de roles del sistema",
"Se presenta matriz de permisos por rol",
"Se permite modificar permisos de cada rol",
"Se guardan cambios de permisos inmediatamente",
"Se valida integridad de permisos por rol"
],
"storyPoints": 5,
"priority": 1,
"frontendTasks": [
{ "title": "Crear interfaz de gestión de roles", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar matriz de permisos", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Agregar controles de modificación de permisos", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint GET /roles/permisos", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear endpoint PUT /roles/:id/permisos", "originalEstimate": 4, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar modelo de permisos granular", "originalEstimate": 5, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Consultar Mi Perfil",
"como": "usuario del sistema",
"quiero": "ver mi información personal y rol",
"para": "verificar mis datos y permisos asignados",
"acceptanceCriteria": [
"Se muestra información personal completa",
"Se visualiza rol asignado",
"Se presenta resumen de permisos",
"Se accede desde menú principal",
"Información se carga automáticamente"
],
"storyPoints": 2,
"priority": 3,
"frontendTasks": [
{ "title": "Crear página de perfil de usuario", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Mostrar información personal y rol", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Integrar con menú de navegación", "originalEstimate": 1, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint GET /perfil", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Incluir rol y permisos en respuesta", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Actualizar Teléfono en Mi Perfil",
"como": "usuario del sistema",
"quiero": "modificar mi número de teléfono",
"para": "mantener actualizados mis datos de contacto",
"acceptanceCriteria": [
"Campo teléfono es editable en perfil",
"Se valida formato de teléfono",
"Cambios se guardan correctamente",
"Se muestra confirmación de actualización"
],
"storyPoints": 2,
"priority": 3,
"frontendTasks": [
{ "title": "Habilitar edición de campo teléfono", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar validación de formato", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Agregar botón guardar cambios", "originalEstimate": 1, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint PUT /perfil/telefono", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Validar formato en backend", "originalEstimate": 1, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Cambiar Contraseña de Perfil",
"como": "usuario del sistema",
"quiero": "cambiar mi contraseña",
"para": "mantener segura mi cuenta",
"acceptanceCriteria": [
"Se muestra modal de cambio de contraseña",
"Se solicita contraseña actual",
"Se solicita nueva contraseña y confirmación",
"Se valida contraseña actual antes del cambio",
"Se aplican políticas de seguridad",
"Se muestra confirmación de cambio exitoso"
],
"storyPoints": 3,
"priority": 2,
"frontendTasks": [
{ "title": "Crear modal de cambio de contraseña", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar validaciones de seguridad", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Manejar respuestas y notificaciones", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint POST /perfil/cambiar-password", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Verificar contraseña actual", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar políticas de seguridad", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
]
},
{
"title": "HU: Consultar Historial de Sesiones",
"como": "usuario del sistema",
"quiero": "ver mi historial de accesos",
"para": "monitorear la actividad de mi cuenta",
"acceptanceCriteria": [
"Se muestra tabla de historial de sesiones",
"Se presenta fecha y hora de cada acceso",
"Se muestra dirección IP de acceso",
"Se indica dispositivo utilizado",
"Se accede desde perfil de usuario"
],
"storyPoints": 2,
"priority": 3,
"frontendTasks": [
{ "title": "Crear tabla de historial de sesiones", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Formatear fecha, hora e IP", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint GET /perfil/sesiones", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Implementar registro de sesiones", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Crear modelo de historial", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 }
]
}
]
```

## PROMPT 1

**Prompt:**

Objetivo 
 analizar los prototipos (imágenes) con la finalidad de encontrar las hus representadas en las mismas 

contexto :

Para las hus se debe cumplir con los criterios Criterios INVEST:

INVEST significa:

Independent (Independiente): Una historia debe poder completarse por sí sola, sin depender estrictamente de que otras historias se terminen antes.

Negotiable (Negociable): La historia debe tener detalles que se puedan debatir y acordar con las partes interesadas (ej. desarrolladores, diseñadores).

Valuable (Valiosa): La historia debe responder a una necesidad genuina del usuario y contribuir a la visión del producto y los objetivos comerciales.

Estimable (Estimable): La historia debe poder desglosarse en tareas claras, de forma que el equipo pueda estimar el esfuerzo necesario para completarla.

Small (Pequeña): La historia debe ser lo suficientemente pequeña para poder estimarse con precisión razonable; si es muy grande, debe dividirse en partes más manejables.

Testable (Testeable): Deben existir criterios claros de aceptación que permitan verificar si la historia se implementó con éxito (ej. pruebas de usuario, verificaciones de funcionalidad).

Las hus que debes representar corresponden a mi primer sprint el cual tiene por objetivo : Objetivo: Establecer la base organizativa de la EPN y asegurar el acceso controlado de usuarios.
 y sus pbis :  PBI: - Gestión de organización académica (Facultades, Carreras, Materias, Profesores)



Te proporciono unas hu de ejemplo que realizo mi equipo con anterioridad con su respectiva estimación 
HU :  Agregar miembro de la CEI

Como administrador

quiero registrar a los miembros de la cei  ------ > 3sp


HU :Listar miembros de la cei              -------- > 3sp

Como administrador

quiero listar los miembros de la CEI


HU : Paginar autoridades
Como administrador
quiero listar las autoridades por grupos         ---- ? 1 sp

HU : Filtrar autoridades  ---- > 1sp

Como administrador
quiero filtrar las autoridades por una palabra


Formato de salida por HU (obligatorio):

title, como, quiero, para

acceptanceCriteria: array de strings claros y verificables

storyPoints: número

priority: 1 = alta, 2 = media, 3 = baja (elige según impacto/urgencia)

frontendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

backendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

Reglas para horas por tarea (FE/BE):

Devuelve horas numéricas (no strings), en horas.

Si no hay señal específica, usa por defecto: originalEstimate = 3, remainingWork = 0, completedWork = 0.

Si la HU es más compleja en un lado (FE o BE), ajusta las horas de esas tareas (p.ej., 4–6h) manteniendo tareas pequeñas (≤6h).

No repitas títulos de tareas; usa verbos en infinitivo.



ACCION :
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes )

Ejemplo de salida (formato exacto que debe producir tu generación)

[
{
"title": "HU: Iniciar Sesión en el Sistema",
"como": "usuario EPN",
"quiero": "acceder con mis credenciales institucionales",
"para": "usar las funcionalidades de mi rol",
"acceptanceCriteria": [
"Se muestra formulario con email institucional y contraseña",
"Credenciales válidas redirigen al dashboard",
"Credenciales inválidas muestran mensaje claro",
"Existe enlace para recuperar contraseña"
],
"storyPoints": 3,
"priority": 1,
"frontendTasks": [
{ "title": "Diseñar formulario de login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Validar formato de email en cliente", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Enviar credenciales y manejar estados de éxito/error", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint POST /auth/login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Verificar credenciales y generar JWT", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0

**Respuesta:**

```json
{
  "title": "HU: Iniciar Sesión en el Sistema",
  "como": "Usuario del sistema SAGA EPN EUR-ACE",
  "quiero": "ingresar mis credenciales institucionales",
  "para": "acceder a mis funcionalidades correspondientes a mi rol",
  "acceptanceCriteria": [
    "El sistema muestra un formulario de inicio de sesión con campos para email institucional y contraseña",
    "Al ingresar credenciales válidas, el usuario es redirigido al Dashboard",
    "Al ingresar credenciales inválidas, se muestra un mensaje de error claro",
    "Existe un enlace para '¿Olvidaste tu contraseña?'"
  ],
  "storyPoints": 3,
  "priority": 1,
  "frontendTasks": [
    {
      "title": "Diseñar y maquetar formulario de inicio de sesión",
      "originalEstimate": 3,
      "remainingWork": 0,
      "completedWork": 0
    },
    {
      "title": "Implementar validación de formato de email en cliente",
      "originalEstimate": 3,
      "remainingWork": 0,
      "completedWork": 0
    },
    {
      "title": "Integrar API de login y manejar respuestas (éxito/error)",
      "originalEstimate": 4,
      "remainingWork": 0,
      "completedWork": 0
    },
    {
      "title": "Implementar redirección al Dashboard tras login exitoso",
      "originalEstimate": 2,
      "remainingWork": 0,
      "completedWork": 0
    }
  ],
  "backendTasks": [
    {
      "title": "Crear endpoint de autenticación POST /auth/login",
      "originalEstimate": 3,
      "remainingWork": 0,
      "completedWork": 0
    },
    {
      "title": "Implementar lógica de validación de credenciales",
      "originalEstimate": 4,
      "remainingWork": 0,
      "completedWork": 0
    },
    {
      "title": "Generar y gestionar tokens de autenticación (JWT)",
      "originalEstimate": 4,
      "remainingWork": 0,
      "completedWork": 0
    },
    {
      "title": "Implementar hashing de contraseñas seguro",
      "originalEstimate": 3,
      "remainingWork": 0,
      "completedWork": 0
    }
  ]
}
```

<!-- --- -->

## PROMPT 2

**Prompt:**

Objetivo 
 analizar los prototipos (imágenes) con la finalidad de encontrar las hus representadas en las mismas 

contexto :

Para las hus se debe cumplir con los criterios Criterios INVEST:

INVEST significa:

Independent (Independiente): Una historia debe poder completarse por sí sola, sin depender estrictamente de que otras historias se terminen antes.

Negotiable (Negociable): La historia debe tener detalles que se puedan debatir y acordar con las partes interesadas (ej. desarrolladores, diseñadores).

Valuable (Valiosa): La historia debe responder a una necesidad genuina del usuario y contribuir a la visión del producto y los objetivos comerciales.

Estimable (Estimable): La historia debe poder desglosarse en tareas claras, de forma que el equipo pueda estimar el esfuerzo necesario para completarla.

Small (Pequeña): La historia debe ser lo suficientemente pequeña para poder estimarse con precisión razonable; si es muy grande, debe dividirse en partes más manejables.

Testable (Testeable): Deben existir criterios claros de aceptación que permitan verificar si la historia se implementó con éxito (ej. pruebas de usuario, verificaciones de funcionalidad).

Las hus que debes representar corresponden a mi primer sprint el cual tiene por objetivo : Objetivo: Establecer la base organizativa de la EPN y asegurar el acceso controlado de usuarios.
 y sus pbis :  PBI: - Gestión de organización académica (Facultades, Carreras, Materias, Profesores)



Te proporciono unas hu de ejemplo que realizo mi equipo con anterioridad con su respectiva estimación 
HU :  Agregar miembro de la CEI

Como administrador

quiero registrar a los miembros de la cei  ------ > 3sp


HU :Listar miembros de la cei              -------- > 3sp

Como administrador

quiero listar los miembros de la CEI


HU : Paginar autoridades
Como administrador
quiero listar las autoridades por grupos         ---- ? 1 sp

HU : Filtrar autoridades  ---- > 1sp

Como administrador
quiero filtrar las autoridades por una palabra


Formato de salida por HU (obligatorio):

title, como, quiero, para

acceptanceCriteria: array de strings claros y verificables

storyPoints: número

priority: 1 = alta, 2 = media, 3 = baja (elige según impacto/urgencia)

frontendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

backendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

Reglas para horas por tarea (FE/BE):

Devuelve horas numéricas (no strings), en horas.

Si no hay señal específica, usa por defecto: originalEstimate = 3, remainingWork = 0, completedWork = 0.

Si la HU es más compleja en un lado (FE o BE), ajusta las horas de esas tareas (p.ej., 4–6h) manteniendo tareas pequeñas (≤6h).

No repitas títulos de tareas; usa verbos en infinitivo.



ACCION :
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes )

Ejemplo de salida (formato exacto que debe producir tu generación)

[
{
"title": "HU: Iniciar Sesión en el Sistema",
"como": "usuario EPN",
"quiero": "acceder con mis credenciales institucionales",
"para": "usar las funcionalidades de mi rol",
"acceptanceCriteria": [
"Se muestra formulario con email institucional y contraseña",
"Credenciales válidas redirigen al dashboard",
"Credenciales inválidas muestran mensaje claro",
"Existe enlace para recuperar contraseña"
],
"storyPoints": 3,
"priority": 1,
"frontendTasks": [
{ "title": "Diseñar formulario de login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Validar formato de email en cliente", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
{ "title": "Enviar credenciales y manejar estados de éxito/error", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
],
"backendTasks": [
{ "title": "Crear endpoint POST /auth/login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
{ "title": "Verificar credenciales y generar JWT", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0

**Respuesta:**

```json
[
  {
    "title": "HU: Iniciar Sesión en el Sistema",
    "como": "Usuario del sistema SAGA EPN EUR-ACE",
    "quiero": "ingresar mis credenciales institucionales",
    "para": "acceder a mis funcionalidades correspondientes a mi rol",
    "acceptanceCriteria": [
      "El sistema muestra un formulario de inicio de sesión con campos para email institucional y contraseña",
      "Al ingresar credenciales válidas, el usuario es redirigido al Dashboard",
      "Al ingresar credenciales inválidas, se muestra un mensaje de error claro",
      "Existe un enlace para '¿Olvidaste tu contraseña?'"
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar formulario de inicio de sesión",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de formato de email en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar API de login y manejar respuestas (éxito/error)",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar redirección al Dashboard tras login exitoso",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint de autenticación POST /auth/login",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de validación de credenciales",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Generar y gestionar tokens de autenticación (JWT)",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar hashing de contraseñas seguro",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Visualizar Dashboard Administrativo",
    "como": "Administrador",
    "quiero": "ver un resumen ejecutivo de las métricas clave del sistema",
    "para": "tener una visión rápida del estado general de las facultades, carreras y usuarios",
    "acceptanceCriteria": [
      "El Dashboard muestra el 'Total Facultades' registradas",
      "El Dashboard muestra el 'Total Carreras' registradas",
      "El Dashboard muestra el 'Usuarios Activos'",
      "El Dashboard muestra el 'Estado Acreditación' con un porcentaje visual",
      "El Dashboard muestra una sección de 'Acceso Rápido' a 'Gestionar Usuarios', 'Generar Reportes', 'Revisar Documentos'",
      "El Dashboard muestra una sección de 'Actividad Reciente' con Timestamp, Usuario, Acción"
    ],
    "storyPoints": 3,
    "priority": 2,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar interfaz del Dashboard",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar datos de contadores (Facultades, Carreras, Usuarios)",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar visualización de 'Estado Acreditación' (gráfico/barra)",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar y mostrar datos de 'Actividad Reciente'",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Configurar enlaces de 'Acceso Rápido'",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /dashboard/metrics para contadores y estado",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Crear endpoint GET /dashboard/activity para actividad reciente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Optimizar consultas para métricas de rendimiento",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Registrar Nuevo Profesor",
    "como": "Administrador",
    "quiero": "ingresar la información de un nuevo profesor",
    "para": "registrarlo en el sistema y asociarlo a una facultad",
    "acceptanceCriteria": [
      "El sistema muestra un formulario con campos para Cédula, Nombres, Apellidos, Email, Teléfono, Facultad, Título Académico",
      "La Cédula del profesor es validada como única en el sistema",
      "El Email del profesor es validado como único en el sistema",
      "La Facultad se selecciona de una lista preexistente de facultades",
      "Al guardar, el profesor queda registrado exitosamente"
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar modal 'Nuevo Profesor'",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar selector de 'Facultad' con datos del backend",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de campos en cliente para profesor",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Enviar datos del formulario de profesor y manejar respuesta",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /profesores",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de unicidad de Cédula y Email para profesores",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Diseñar/actualizar esquema de base de datos para profesores",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Asociar profesor a facultad existente en base de datos",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Registrar Nueva Facultad",
    "como": "Administrador",
    "quiero": "ingresar los datos de una nueva facultad",
    "para": "crear una nueva entidad académica en el sistema y asignar un decano",
    "acceptanceCriteria": [
      "El sistema muestra un formulario con campos para Código, Nombre, Descripción",
      "Existe un selector para asignar un Decano de una lista de usuarios elegibles",
      "El Código de la facultad es validado como único en el sistema",
      "Al guardar, la facultad queda registrada exitosamente"
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar modal 'Nueva Facultad'",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar selector de 'Decano' con datos de usuarios elegibles",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de campos en cliente para facultad (código único)",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Enviar datos del formulario de facultad y manejar respuesta",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /facultades",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de unicidad de código de facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Diseñar/actualizar esquema de base de datos para facultades",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Asociar facultad a decano existente en base de datos",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Registrar Nueva Carrera",
    "como": "Administrador",
    "quiero": "ingresar la información de una nueva carrera",
    "para": "agregar una oferta académica asociada a una facultad y un coordinador",
    "acceptanceCriteria": [
      "El sistema muestra un formulario con campos para Código, Nombre, Modalidad, Duración en años",
      "Existe un selector para asociar la carrera a una Facultad existente",
      "Existe un selector para asignar un Coordinador de una lista de usuarios elegibles",
      "El Código de la carrera es validado como único dentro de la facultad seleccionada",
      "Al guardar, la carrera queda registrada exitosamente"
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar modal 'Nueva Carrera'",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar selectores de 'Facultad' y 'Coordinador' con datos del backend",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de campos en cliente para carrera",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Enviar datos del formulario de carrera y manejar respuesta",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /carreras",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de unicidad de código de carrera por facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Diseñar/actualizar esquema de base de datos para carreras",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Asociar carrera a facultad y coordinador existentes",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Gestionar Facultades (Consultar, Editar, Eliminar)",
    "como": "Administrador",
    "quiero": "visualizar la lista de facultades registradas",
    "para": "buscar, consultar sus detalles, actualizar su información o eliminarla del sistema",
    "acceptanceCriteria": [
      "El Administrador puede ver una tabla con la lista de facultades, mostrando Código, Nombre, número de Carreras, Decano",
      "El Administrador puede buscar facultades por código o nombre",
      "La lista de facultades soporta paginación",
      "Existe un botón para editar la información de una facultad que abre un formulario de edición",
      "Existe un botón para eliminar una facultad"
    ],
    "storyPoints": 5,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar tabla de 'Gestión de Facultades'",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de búsqueda por código o nombre de facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar componente de paginación para la tabla de facultades",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Diseñar e integrar modal/formulario de edición de facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar botones de edición y eliminación de facultad con APIs",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /facultades con búsqueda y paginación",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar endpoint PUT /facultades/:id para actualizar información",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar endpoint DELETE /facultades/:id para eliminar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de dependencias al eliminar facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Gestionar Carreras (Consultar, Editar, Eliminar)",
    "como": "Administrador",
    "quiero": "visualizar la lista de carreras registradas",
    "para": "buscar, filtrar, actualizar su información o eliminarla del sistema",
    "acceptanceCriteria": [
      "El Administrador puede ver una tabla con la lista de carreras, mostrando Código, Nombre, Facultad, Coordinador, Estado",
      "El Administrador puede buscar carreras por nombre",
      "El Administrador puede filtrar la lista por Facultad",
      "El Administrador puede filtrar la lista por Estado",
      "La lista de carreras soporta paginación",
      "Existe un botón para editar la información de una carrera que abre un formulario de edición",
      "Existe un botón para eliminar una carrera"
    ],
    "storyPoints": 5,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar tabla de 'Gestión de Carreras'",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de búsqueda por nombre de carrera",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar filtros por Facultad y Estado para carreras",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar componente de paginación para la tabla de carreras",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Diseñar e integrar modal/formulario de edición de carrera",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar botones de edición y eliminación de carrera con APIs",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /carreras con filtros, búsqueda y paginación",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar endpoint PUT /carreras/:id para actualizar información",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar endpoint DELETE /carreras/:id para eliminar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de dependencias al eliminar carrera",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Gestionar Profesores (Consultar, Editar, Desactivar)",
    "como": "Administrador",
    "quiero": "visualizar la lista de profesores registrados",
    "para": "buscar, filtrar, actualizar su información o cambiar su estado de actividad",
    "acceptanceCriteria": [
      "El Administrador puede ver una tabla con la lista de profesores, mostrando Cédula, Nombre, Email, Facultad, Rol, Estado",
      "El Administrador puede buscar profesores por cédula o nombre",
      "El Administrador puede filtrar la lista por Facultad",
      "El Administrador puede filtrar la lista por Rol",
      "El Administrador puede filtrar la lista por Estado",
      "La lista de profesores soporta paginación",
      "Existe un botón para editar la información de un profesor que abre un formulario de edición",
      "Existe un botón para cambiar el estado (Activo/Inactivo) de un profesor"
    ],
    "storyPoints": 5,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar tabla de 'Gestión de Profesores'",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de búsqueda de profesor por cédula y nombre",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar filtros por Facultad, Rol y Estado para profesores",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar componente de paginación para la tabla de profesores",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Diseñar e integrar modal/formulario de edición de profesor",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar botones de edición y cambio de estado de profesor con APIs",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /profesores con filtros, búsqueda y paginación",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar endpoint PUT /profesores/:id para actualizar información",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar endpoint PUT /profesores/:id/estado para cambiar estado",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Asegurar permisos de acceso para Administrador en profesores",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Gestionar Usuarios del Sistema (Consultar, Asignar Rol, Desactivar)",
    "como": "Administrador",
    "quiero": "visualizar la lista de usuarios registrados",
    "para": "buscar, asignar roles específicos o cambiar su estado de acceso",
    "acceptanceCriteria": [
      "El Administrador puede ver una tabla con la lista de usuarios, mostrando Email, Nombre, Rol, Estado, Último Acceso",
      "El Administrador puede buscar usuarios por nombre o email",
      "La lista de usuarios soporta paginación",
      "Existe un botón 'Asignar Rol' para un usuario que abre una interfaz para seleccionar un nuevo rol",
      "Existe un botón 'Desactivar' para cambiar el estado de un usuario a 'Inactivo'"
    ],
    "storyPoints": 5,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar tabla de 'Gestión de Usuarios'",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de búsqueda de usuario por nombre o email",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar componente de paginación para la tabla de usuarios",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Diseñar e integrar modal/sección 'Asignar Rol' a usuario",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar botones 'Asignar Rol' y 'Desactivar' con APIs para usuarios",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /usuarios con búsqueda y paginación",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Crear endpoint GET /roles para obtener roles disponibles",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar endpoint PUT /usuarios/:id/rol para asignar rol",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar endpoint PUT /usuarios/:id/estado para cambiar estado",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Asegurar permisos de acceso para Administrador en usuarios",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Gestionar Permisos de Roles",
    "como": "Administrador",
    "quiero": "modificar los permisos asociados a cada rol predefinido",
    "para": "controlar granularmente el acceso a las funcionalidades del sistema",
    "acceptanceCriteria": [
      "El Administrador puede ver una lista de roles predefinidos (Administrador, CI, Coordinador, Decano)",
      "Para cada rol, el sistema muestra una lista de funcionalidades (ej. Ver Facultades, Crear Carreras) con checkboxes",
      "Para cada funcionalidad, se permite seleccionar o deseleccionar el permiso correspondiente para ese rol",
      "Existe un botón 'Guardar cambios' para aplicar las modificaciones de permisos",
      "Los cambios en los permisos se aplican inmediatamente"
    ],
    "storyPoints": 5,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar la pestaña 'Roles' en 'Gestión de Usuarios y Roles'",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar interfaz para listar roles y sus permisos (checkboxes/toggles)",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar datos de roles y permisos desde el backend",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para enviar cambios de permisos al backend",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar feedback de guardado de permisos exitoso/fallido",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Diseñar/actualizar esquema de base de datos para roles y permisos",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Crear endpoint GET /roles/permissions para consultar permisos por rol",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Crear endpoint PUT /roles/:id/permissions para actualizar permisos de un rol",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de autorización granular basada en permisos",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Consultar Mi Perfil",
    "como": "Usuario del sistema",
    "quiero": "ver mi información personal y mi rol asignado",
    "para": "confirmar mis datos y permisos",
    "acceptanceCriteria": [
      "El usuario puede acceder a la sección 'Mi Perfil' desde el menú de navegación",
      "El sistema muestra la 'Información Personal' del usuario (Nombre Completo, Email Institucional, Facultad, Departamento, Teléfono)",
      "El sistema muestra el 'Rol Asignado' del usuario",
      "El sistema muestra un 'Resumen de Permisos' asociados a su rol"
    ],
    "storyPoints": 2,
    "priority": 2,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar la interfaz 'Mi Perfil'",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar carga y visualización de información personal del usuario",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar rol asignado y resumen de permisos",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /profile para obtener datos del usuario autenticado",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Incluir información de rol y permisos en la respuesta del perfil",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Actualizar Teléfono en Mi Perfil",
    "como": "Usuario del sistema",
    "quiero": "modificar mi número de teléfono de contacto",
    "para": "mantener mis datos actualizados en el sistema",
    "acceptanceCriteria": [
      "En la sección 'Mi Perfil', el campo 'Teléfono' es editable",
      "El usuario puede ingresar un nuevo número de teléfono",
      "Al guardar, el número de teléfono se actualiza correctamente en la base de datos",
      "El sistema valida el formato del número de teléfono ingresado"
    ],
    "storyPoints": 2,
    "priority": 3,
    "frontendTasks": [
      {
        "title": "Habilitar edición del campo 'Teléfono' en 'Mi Perfil'",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de formato de teléfono en cliente",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar botón 'Guardar Cambios' para actualizar el teléfono",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint PUT /profile/telefono para actualizar el teléfono",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de formato de teléfono en backend",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Cambiar Contraseña de Perfil",
    "como": "Usuario del sistema",
    "quiero": "establecer una nueva contraseña para mi cuenta",
    "para": "asegurar la protección de mi información",
    "acceptanceCriteria": [
      "En la sección 'Mi Perfil', existe un botón 'Cambiar Contraseña'",
      "Al hacer clic, se muestra una interfaz para ingresar la contraseña actual",
      "Al hacer clic, se muestra una interfaz para ingresar la nueva contraseña",
      "Al hacer clic, se muestra una interfaz para confirmar la nueva contraseña",
      "El sistema valida la contraseña actual antes de permitir el cambio",
      "El sistema aplica requisitos de seguridad para la nueva contraseña (ej. longitud mínima, caracteres especiales)",
      "Al completar el cambio, el usuario es notificado del éxito"
    ],
    "storyPoints": 3,
    "priority": 2,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar modal/sección 'Cambiar Contraseña'",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de seguridad para la nueva contraseña en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Enviar datos de cambio de contraseña a la API y manejar respuestas",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar notificaciones de éxito o error en el proceso de cambio de contraseña",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /profile/change-password",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para verificar la contraseña actual del usuario",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de seguridad para la nueva contraseña en backend",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Actualizar de forma segura el hash de la contraseña",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Consultar Historial de Sesiones en Mi Perfil",
    "como": "Usuario del sistema",
    "quiero": "revisar la lista de mis sesiones anteriores",
    "para": "monitorear la actividad de mi cuenta",
    "acceptanceCriteria": [
      "En la sección 'Mi Perfil', se muestra una tabla de 'Historial de Sesiones'",
      "Cada entrada del historial incluye 'Fecha y Hora' de la sesión",
      "Cada entrada del historial incluye la 'Dirección IP' desde la que se inició la sesión",
      "Cada entrada del historial incluye el 'Dispositivo' utilizado para la sesión"
    ],
    "storyPoints": 2,
    "priority": 3,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar la tabla de 'Historial de Sesiones'",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar carga y visualización de datos de historial de sesiones",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Formatear datos de Fecha, Hora, IP y Dispositivo del historial de sesiones",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Diseñar/actualizar esquema de base de datos para historial de sesiones",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Crear endpoint GET /profile/sessions para historial del usuario autenticado",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Registrar información de sesión al iniciar sesión",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  }
]
```

<!-- --- -->

## PROMPT 3

**Prompt:**

Devuelve SOLO un array JSON (sin texto extra ni code fences). 

Objetivo 
 analizar los prototipos (imágenes) con la finalidad de encontrar las hus representadas en las mismas 

contexto :

Para las hus se debe cumplir con los criterios Criterios INVEST:

INVEST significa:

Independent (Independiente): Una historia debe poder completarse por sí sola, sin depender estrictamente de que otras historias se terminen antes.

Negotiable (Negociable): La historia debe tener detalles que se puedan debatir y acordar con las partes interesadas (ej. desarrolladores, diseñadores).

Valuable (Valiosa): La historia debe responder a una necesidad genuina del usuario y contribuir a la visión del producto y los objetivos comerciales.

Estimable (Estimable): La historia debe poder desglosarse en tareas claras, de forma que el equipo pueda estimar el esfuerzo necesario para completarla.

Small (Pequeña): La historia debe ser lo suficientemente pequeña para poder estimarse con precisión razonable; si es muy grande, debe dividirse en partes más manejables.

Testable (Testeable): Deben existir criterios claros de aceptación que permitan verificar si la historia se implementó con éxito (ej. pruebas de usuario, verificaciones de funcionalidad).

Las hus que debes representar corresponden a mi primer sprint el cual tiene por objetivo : Objetivo: Establecer la base organizativa de la EPN y asegurar el acceso controlado de usuarios.
 y sus pbis :  PBI: - Gestión de organización académica (Facultades, Carreras, Materias, Profesores)



Te proporciono unas hu de ejemplo que realizo mi equipo con anterioridad con su respectiva estimación 
HU :  Agregar miembro de la CEI

Como administrador

quiero registrar a los miembros de la cei  ------ > 3sp


HU :Listar miembros de la cei              -------- > 3sp

Como administrador

quiero listar los miembros de la CEI


HU : Paginar autoridades
Como administrador
quiero listar las autoridades por grupos         ---- ? 1 sp

HU : Filtrar autoridades  ---- > 1sp

Como administrador
quiero filtrar las autoridades por una palabra


Formato de salida por HU (obligatorio):

title, como, quiero, para

acceptanceCriteria: array de strings claros y verificables

storyPoints: número

priority: 1 = alta, 2 = media, 3 = baja (elige según impacto/urgencia)

frontendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

backendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

Reglas para horas por tarea (FE/BE):

Devuelve horas numéricas (no strings), en horas.

Si no hay señal específica, usa por defecto: originalEstimate = 3, remainingWork = 0, completedWork = 0.

Si la HU es más compleja en un lado (FE o BE), ajusta las horas de esas tareas (p.ej., 4–6h) manteniendo tareas pequeñas (≤6h).

No repitas títulos de tareas; usa verbos en infinitivo.



ACCION :
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes )

Ejemplo de salida[
  {
    "title": "HU: Iniciar Sesión en el Sistema",
    "como": "usuario EPN",
    "quiero": "acceder con mis credenciales institucionales",
    "para": "usar las funcionalidades de mi rol",
    "acceptanceCriteria": [
      "Se muestra formulario con email institucional y contraseña",
      "Credenciales válidas redirigen al dashboard",
      "Credenciales inválidas muestran mensaje claro",
      "Existe enlace para recuperar contraseña"
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      { "title": "Diseñar formulario de login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
      { "title": "Validar formato de email en cliente", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
      { "title": "Enviar credenciales y manejar estados de éxito/error", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
    ],
    "backendTasks": [
      { "title": "Crear endpoint POST /auth/login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
      { "title": "Verificar credenciales y generar JWT", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
    ]
  }
]

**Respuesta:**

```json
[
  {
    "title": "HU: Iniciar Sesión en el Sistema",
    "como": "usuario EPN",
    "quiero": "acceder con mis credenciales institucionales",
    "para": "usar las funcionalidades de mi rol y gestionar la información académica",
    "acceptanceCriteria": [
      "Se muestra formulario con email institucional y contraseña",
      "Credenciales válidas redirigen al dashboard o vista inicial del rol",
      "Credenciales inválidas muestran mensaje claro de error",
      "Existe un mecanismo o enlace para recuperar/restablecer contraseña (si aplica al sistema de EPN)"
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y maquetar formulario de login",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de formato de email institucional en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de credenciales a API y manejar estados de carga/error",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Redirigir a la vista principal tras login exitoso",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /auth/login",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para verificar credenciales contra base de datos",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Generar y firmar token JWT para sesión",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Configurar middleware de autenticación y autorización",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Registrar Nueva Facultad",
    "como": "administrador",
    "quiero": "añadir los datos de una nueva Facultad al sistema",
    "para": "establecer la estructura organizativa académica de la EPN",
    "acceptanceCriteria": [
      "Como administrador, puedo acceder a un formulario de creación de Facultad.",
      "El formulario incluye campos para nombre y código de la facultad.",
      "Los campos obligatorios (nombre, código) deben ser validados.",
      "El código de la facultad debe ser único a nivel de EPN.",
      "Al guardar, la nueva Facultad es registrada y puedo ver un mensaje de éxito."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y crear formulario para registrar Facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones básicas en formulario (requeridos)",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos del formulario al backend",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar mensaje de éxito o error al usuario",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /api/facultades para creación",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para guardar nueva Facultad en BD",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Validar unicidad del código de Facultad en backend",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Configurar manejo de errores y respuestas de API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Listar y Filtrar Facultades",
    "como": "administrador",
    "quiero": "ver una lista de todas las Facultades registradas y poder buscar entre ellas",
    "para": "gestionar y consultar la estructura académica existente",
    "acceptanceCriteria": [
      "Como administrador, puedo ver una tabla o lista de Facultades.",
      "La lista muestra el nombre y código de cada Facultad.",
      "La lista debe estar paginada por defecto (ej. 10 elementos por página).",
      "Puedo usar un campo de búsqueda para filtrar Facultades por nombre o código.",
      "El filtro debe actualizar la lista en tiempo real o al presionar Enter."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y crear componente de tabla/lista para Facultades",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar campo de búsqueda y lógica de filtrado",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Añadir componente de paginación a la tabla/lista",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar con endpoint de listado de Facultades con parámetros de paginación y filtro",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /api/facultades para listar con paginación y filtro",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de consulta a BD con paginación",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de filtrado por nombre/código en consulta",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Registrar Nueva Carrera",
    "como": "administrador",
    "quiero": "añadir los datos de una nueva Carrera y asociarla a una Facultad",
    "para": "extender la estructura organizativa académica con los programas de estudio",
    "acceptanceCriteria": [
      "Como administrador, puedo acceder a un formulario de creación de Carrera.",
      "El formulario incluye campos para nombre, código de la Carrera y un selector para la Facultad a la que pertenece.",
      "Los campos obligatorios (nombre, código, Facultad) deben ser validados.",
      "El código de la Carrera debe ser único a nivel de EPN.",
      "Al guardar, la nueva Carrera es registrada y se muestra un mensaje de éxito."
    ],
    "storyPoints": 4,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y crear formulario para registrar Carrera",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar selector de Facultad que cargue Facultades existentes",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de campos obligatorios en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos del formulario (incluyendo ID de Facultad) al backend",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar mensaje de éxito o error al usuario",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /api/carreras para creación",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para guardar nueva Carrera con asociación a Facultad en BD",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Validar unicidad del código de Carrera y existencia de Facultad en backend",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Configurar manejo de errores y respuestas de API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Listar y Filtrar Carreras",
    "como": "administrador",
    "quiero": "ver una lista de todas las Carreras registradas, incluyendo su Facultad, y poder buscar entre ellas",
    "para": "gestionar y consultar los programas de estudio de la EPN",
    "acceptanceCriteria": [
      "Como administrador, puedo ver una tabla o lista de Carreras.",
      "La lista muestra el nombre, código de cada Carrera y el nombre de la Facultad a la que pertenece.",
      "La lista debe estar paginada por defecto.",
      "Puedo usar un campo de búsqueda para filtrar Carreras por nombre o código.",
      "El filtro puede opcionalmente permitir filtrar por el nombre de la Facultad."
    ],
    "storyPoints": 4,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y crear componente de tabla/lista para Carreras",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar campo de búsqueda y lógica de filtrado (incluyendo por Facultad)",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Añadir componente de paginación a la tabla/lista",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar con endpoint de listado de Carreras con parámetros de paginación y filtro",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /api/carreras para listar con paginación y filtro",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de consulta a BD con paginación y unión con tabla de Facultades",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de filtrado por nombre/código/facultad en consulta",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Registrar Nueva Materia",
    "como": "administrador",
    "quiero": "añadir los datos de una nueva Materia y asociarla a una Carrera",
    "para": "definir el contenido curricular de los programas de estudio",
    "acceptanceCriteria": [
      "Como administrador, puedo acceder a un formulario de creación de Materia.",
      "El formulario incluye campos para nombre, código de la Materia y un selector para la Carrera a la que pertenece.",
      "Los campos obligatorios (nombre, código, Carrera) deben ser validados.",
      "El código de la Materia debe ser único a nivel de EPN.",
      "Al guardar, la nueva Materia es registrada y se muestra un mensaje de éxito."
    ],
    "storyPoints": 4,
    "priority": 2,
    "frontendTasks": [
      {
        "title": "Diseñar y crear formulario para registrar Materia",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar selector de Carrera que cargue Carreras existentes",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de campos obligatorios en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos del formulario (incluyendo ID de Carrera) al backend",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar mensaje de éxito o error al usuario",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /api/materias para creación",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para guardar nueva Materia con asociación a Carrera en BD",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Validar unicidad del código de Materia y existencia de Carrera en backend",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Configurar manejo de errores y respuestas de API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Listar y Filtrar Materias",
    "como": "administrador",
    "quiero": "ver una lista de todas las Materias registradas, incluyendo su Carrera y Facultad, y poder buscar entre ellas",
    "para": "gestionar y consultar el plan de estudios completo de la EPN",
    "acceptanceCriteria": [
      "Como administrador, puedo ver una tabla o lista de Materias.",
      "La lista muestra el nombre, código de cada Materia y el nombre de la Carrera y Facultad a la que pertenece.",
      "La lista debe estar paginada por defecto.",
      "Puedo usar un campo de búsqueda para filtrar Materias por nombre o código.",
      "El filtro puede opcionalmente permitir filtrar por el nombre de la Carrera o Facultad."
    ],
    "storyPoints": 4,
    "priority": 2,
    "frontendTasks": [
      {
        "title": "Diseñar y crear componente de tabla/lista para Materias",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar campo de búsqueda y lógica de filtrado (incluyendo por Carrera/Facultad)",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Añadir componente de paginación a la tabla/lista",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar con endpoint de listado de Materias con parámetros de paginación y filtro",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /api/materias para listar con paginación y filtro",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de consulta a BD con paginación y unión con tablas de Carrera y Facultad",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de filtrado por nombre/código/carrera/facultad en consulta",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Registrar Nuevo Profesor",
    "como": "administrador",
    "quiero": "añadir los datos de un nuevo Profesor al sistema",
    "para": "mantener un registro completo del personal docente de la EPN",
    "acceptanceCriteria": [
      "Como administrador, puedo acceder a un formulario de creación de Profesor.",
      "El formulario incluye campos para nombre, apellido, email institucional y cédula/identificación.",
      "Los campos obligatorios (nombre, apellido, email, cédula) deben ser validados.",
      "El email institucional y la cédula deben ser únicos a nivel de EPN.",
      "Al guardar, el nuevo Profesor es registrado y se muestra un mensaje de éxito."
    ],
    "storyPoints": 3,
    "priority": 2,
    "frontendTasks": [
      {
        "title": "Diseñar y crear formulario para registrar Profesor",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones básicas en formulario (requeridos, formato email)",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos del formulario al backend",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar mensaje de éxito o error al usuario",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /api/profesores para creación",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para guardar nuevo Profesor en BD",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Validar unicidad de email y cédula de Profesor en backend",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Configurar manejo de errores y respuestas de API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "HU: Listar y Filtrar Profesores",
    "como": "administrador",
    "quiero": "ver una lista de todos los Profesores registrados y poder buscar entre ellos",
    "para": "gestionar y consultar el personal docente de la EPN",
    "acceptanceCriteria": [
      "Como administrador, puedo ver una tabla o lista de Profesores.",
      "La lista muestra el nombre completo, email y cédula de cada Profesor.",
      "La lista debe estar paginada por defecto.",
      "Puedo usar un campo de búsqueda para filtrar Profesores por nombre, apellido, email o cédula.",
      "El filtro debe actualizar la lista en tiempo real o al presionar Enter."
    ],
    "storyPoints": 3,
    "priority": 2,
    "frontendTasks": [
      {
        "title": "Diseñar y crear componente de tabla/lista para Profesores",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar campo de búsqueda y lógica de filtrado",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Añadir componente de paginación a la tabla/lista",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar con endpoint de listado de Profesores con parámetros de paginación y filtro",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /api/profesores para listar con paginación y filtro",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de consulta a BD con paginación",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de filtrado por múltiples campos en consulta",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  }
]
```

<!-- --- -->

## PROMPT 4

**Prompt:**

Devuelve SOLO un array JSON (sin texto extra ni code fences). 

Objetivo 
 analizar los prototipos (imágenes) con la finalidad de encontrar las hus representadas en las mismas 

contexto :

Para las hus se debe cumplir con los criterios Criterios INVEST:

INVEST significa:

Independent (Independiente): Una historia debe poder completarse por sí sola, sin depender estrictamente de que otras historias se terminen antes.

Negotiable (Negociable): La historia debe tener detalles que se puedan debatir y acordar con las partes interesadas (ej. desarrolladores, diseñadores).

Valuable (Valiosa): La historia debe responder a una necesidad genuina del usuario y contribuir a la visión del producto y los objetivos comerciales.

Estimable (Estimable): La historia debe poder desglosarse en tareas claras, de forma que el equipo pueda estimar el esfuerzo necesario para completarla.

Small (Pequeña): La historia debe ser lo suficientemente pequeña para poder estimarse con precisión razonable; si es muy grande, debe dividirse en partes más manejables.

Testable (Testeable): Deben existir criterios claros de aceptación que permitan verificar si la historia se implementó con éxito (ej. pruebas de usuario, verificaciones de funcionalidad).

Las hus que debes representar corresponden a mi primer sprint el cual tiene por objetivo : Objetivo: Establecer la base organizativa de la EPN y asegurar el acceso controlado de usuarios.
 y sus pbis :  PBI: - Gestión de organización académica (Facultades, Carreras, Materias, Profesores)



Te proporciono unas hu de ejemplo que realizo mi equipo con anterioridad con su respectiva estimación 
HU :  Agregar miembro de la CEI

Como administrador

quiero registrar a los miembros de la cei  ------ > 3sp


HU :Listar miembros de la cei              -------- > 3sp

Como administrador

quiero listar los miembros de la CEI


HU : Paginar autoridades
Como administrador
quiero listar las autoridades por grupos         ---- ? 1 sp

HU : Filtrar autoridades  ---- > 1sp

Como administrador
quiero filtrar las autoridades por una palabra


Formato de salida por HU (obligatorio):

title, como, quiero, para

acceptanceCriteria: array de strings claros y verificables

storyPoints: número

priority: 1 = alta, 2 = media, 3 = baja (elige según impacto/urgencia)

frontendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

backendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

Reglas para horas por tarea (FE/BE):

Devuelve horas numéricas (no strings), en horas.

Si no hay señal específica, usa por defecto: originalEstimate = 3, remainingWork = 0, completedWork = 0.

Si la HU es más compleja en un lado (FE o BE), ajusta las horas de esas tareas (p.ej., 4–6h) manteniendo tareas pequeñas (≤6h).

No repitas títulos de tareas; usa verbos en infinitivo.



ACCION :
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes )

Ejemplo de salida[
  {
    "title": "HU: Iniciar Sesión en el Sistema",
    "como": "usuario EPN",
    "quiero": "acceder con mis credenciales institucionales",
    "para": "usar las funcionalidades de mi rol",
    "acceptanceCriteria": [
      "Se muestra formulario con email institucional y contraseña",
      "Credenciales válidas redirigen al dashboard",
      "Credenciales inválidas muestran mensaje claro",
      "Existe enlace para recuperar contraseña"
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      { "title": "Diseñar formulario de login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
      { "title": "Validar formato de email en cliente", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
      { "title": "Enviar credenciales y manejar estados de éxito/error", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
    ],
    "backendTasks": [
      { "title": "Crear endpoint POST /auth/login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
      { "title": "Verificar credenciales y generar JWT", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
    ]
  }
]

**Respuesta:**

```json
[
  {
    "title": "Iniciar Sesión en el Sistema",
    "como": "administrador EPN",
    "quiero": "acceder con mis credenciales institucionales",
    "para": "usar las funcionalidades de gestión académica",
    "acceptanceCriteria": [
      "Se muestra formulario de inicio de sesión con campos para email institucional y contraseña.",
      "Credenciales de administrador válidas redirigen al dashboard de administración.",
      "Credenciales inválidas o incompletas muestran un mensaje de error claro y específico.",
      "Existe un mecanismo para recuperar la contraseña (el enlace debe existir, la implementación completa puede ser posterior).",
      "El sistema maneja la sesión de usuario (ej. token JWT)."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Desarrollar interfaz de formulario de login",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de email y contraseña en cliente",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir API de autenticación y manejar respuesta",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Almacenar token de sesión de forma segura",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /auth/login para autenticación",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Verificar credenciales de usuario y rol de administrador",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Generar y devolver token de acceso (JWT)",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para refrescar tokens (si aplica)",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Facultad",
    "como": "administrador",
    "quiero": "ingresar los datos de una nueva facultad",
    "para": "establecer la estructura organizativa de la EPN",
    "acceptanceCriteria": [
      "Se muestra un formulario para registrar facultades con campos como nombre y descripción.",
      "El formulario valida los datos de entrada (ej. nombre no vacío).",
      "La facultad se guarda exitosamente y se muestra un mensaje de confirmación.",
      "Errores de validación o del servidor se comunican claramente al usuario."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Desarrollar formulario de registro de facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de formulario en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar con API para crear facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Manejar feedback de usuario (éxito/error) al guardar",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear API POST /facultades para registrar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de negocio para guardar facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Validar datos de entrada de facultad en servidor",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Persistir facultad en base de datos",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Facultades",
    "como": "administrador",
    "quiero": "visualizar todas las facultades registradas",
    "para": "tener una visión general de la estructura académica",
    "acceptanceCriteria": [
      "Se muestra una tabla con la lista de facultades existentes.",
      "Cada facultad en la lista muestra al menos su nombre y descripción.",
      "La lista se carga automáticamente al navegar a la sección de facultades.",
      "Si no hay facultades, se muestra un mensaje indicándolo."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y construir componente de tabla de facultades",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir API GET /facultades para obtener datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar lista de facultades en la UI",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar manejo de estados de carga y error de la lista",
        "originalEstimate": 1,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear API GET /facultades para listar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Obtener todas las facultades de la base de datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Preparar datos de facultades para enviar al cliente",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Carrera",
    "como": "administrador",
    "quiero": "ingresar los datos de una nueva carrera y asociarla a una facultad",
    "para": "detallar la oferta académica de la EPN",
    "acceptanceCriteria": [
      "Se muestra un formulario para registrar carreras con campos como nombre, descripción, y un selector para la facultad asociada.",
      "El formulario permite seleccionar una facultad existente de una lista.",
      "El formulario valida los datos de entrada (ej. nombre no vacío, facultad seleccionada).",
      "La carrera se guarda exitosamente y se muestra un mensaje de confirmación.",
      "Errores de validación o del servidor se comunican claramente al usuario."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Desarrollar formulario de registro de carrera",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Obtener lista de facultades para selector de carrera",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de formulario de carrera en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar con API para crear carrera",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear API POST /carreras para registrar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de negocio para guardar carrera",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Validar datos de entrada de carrera en servidor (incluyendo ID de facultad)",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Persistir carrera en base de datos",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Carreras",
    "como": "administrador",
    "quiero": "visualizar todas las carreras registradas junto a su facultad",
    "para": "tener una visión clara de la oferta académica por facultad",
    "acceptanceCriteria": [
      "Se muestra una tabla con la lista de carreras existentes.",
      "Cada carrera en la lista muestra su nombre, descripción y la facultad a la que pertenece.",
      "La lista se carga automáticamente al navegar a la sección de carreras.",
      "Si no hay carreras, se muestra un mensaje indicándolo."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y construir componente de tabla de carreras",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir API GET /carreras para obtener datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar lista de carreras con datos de facultad",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear API GET /carreras para listar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Obtener todas las carreras de la base de datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Incluir información de la facultad asociada a cada carrera",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Preparar datos de carreras para enviar al cliente",
        "originalEstimate": 1,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Materia",
    "como": "administrador",
    "quiero": "ingresar los datos de una nueva materia y asociarla a una carrera",
    "para": "definir los contenidos académicos dentro de cada carrera",
    "acceptanceCriteria": [
      "Se muestra un formulario para registrar materias con campos como nombre, código, descripción, y un selector para la carrera asociada.",
      "El formulario permite seleccionar una carrera existente de una lista.",
      "El formulario valida los datos de entrada (ej. nombre no vacío, carrera seleccionada).",
      "La materia se guarda exitosamente y se muestra un mensaje de confirmación.",
      "Errores de validación o del servidor se comunican claramente al usuario."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Desarrollar formulario de registro de materia",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Obtener lista de carreras para selector de materia",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de formulario de materia en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar con API para crear materia",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear API POST /materias para registrar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de negocio para guardar materia",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Validar datos de entrada de materia en servidor (incluyendo ID de carrera)",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Persistir materia en base de datos",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Materias",
    "como": "administrador",
    "quiero": "visualizar todas las materias registradas junto a su carrera",
    "para": "tener una visión clara de los contenidos académicos por carrera",
    "acceptanceCriteria": [
      "Se muestra una tabla con la lista de materias existentes.",
      "Cada materia en la lista muestra su nombre, código, descripción y la carrera a la que pertenece.",
      "La lista se carga automáticamente al navegar a la sección de materias.",
      "Si no hay materias, se muestra un mensaje indicándolo."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y construir componente de tabla de materias",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir API GET /materias para obtener datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar lista de materias con datos de carrera",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear API GET /materias para listar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Obtener todas las materias de la base de datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Incluir información de la carrera asociada a cada materia",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Preparar datos de materias para enviar al cliente",
        "originalEstimate": 1,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Profesor",
    "como": "administrador",
    "quiero": "ingresar los datos de un nuevo profesor y asociarlo a una facultad",
    "para": "integrar el personal docente en la estructura organizativa",
    "acceptanceCriteria": [
      "Se muestra un formulario para registrar profesores con campos como nombre, apellido, email institucional, y un selector para la facultad asociada.",
      "El formulario permite seleccionar una facultad existente de una lista.",
      "El formulario valida los datos de entrada (ej. email institucional válido, facultad seleccionada).",
      "El profesor se guarda exitosamente y se muestra un mensaje de confirmación.",
      "Errores de validación o del servidor se comunican claramente al usuario."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Desarrollar formulario de registro de profesor",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Obtener lista de facultades para selector de profesor",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validaciones de formulario de profesor en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar con API para crear profesor",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear API POST /profesores para registrar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de negocio para guardar profesor",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Validar datos de entrada de profesor en servidor (incluyendo ID de facultad y formato de email)",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Persistir profesor en base de datos",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Profesores",
    "como": "administrador",
    "quiero": "visualizar todos los profesores registrados junto a su facultad",
    "para": "tener una visión clara del personal docente y su adscripción",
    "acceptanceCriteria": [
      "Se muestra una tabla con la lista de profesores existentes.",
      "Cada profesor en la lista muestra su nombre, apellido, email y la facultad a la que pertenece.",
      "La lista se carga automáticamente al navegar a la sección de profesores.",
      "Si no hay profesores, se muestra un mensaje indicándolo."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y construir componente de tabla de profesores",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir API GET /profesores para obtener datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Mostrar lista de profesores con datos de facultad",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear API GET /profesores para listar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Obtener todos los profesores de la base de datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Incluir información de la facultad asociada a cada profesor",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Preparar datos de profesores para enviar al cliente",
        "originalEstimate": 1,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  }
]
```

<!-- --- -->

## PROMPT 5

**Prompt:**

Devuelve SOLO un array JSON (sin texto extra ni code fences). 

Objetivo 
 analizar los prototipos (imágenes) con la finalidad de encontrar las hus representadas en las mismas 

contexto :

Para las hus se debe cumplir con los criterios Criterios INVEST:

INVEST significa:

Independent (Independiente): Una historia debe poder completarse por sí sola, sin depender estrictamente de que otras historias se terminen antes.

Negotiable (Negociable): La historia debe tener detalles que se puedan debatir y acordar con las partes interesadas (ej. desarrolladores, diseñadores).

Valuable (Valiosa): La historia debe responder a una necesidad genuina del usuario y contribuir a la visión del producto y los objetivos comerciales.

Estimable (Estimable): La historia debe poder desglosarse en tareas claras, de forma que el equipo pueda estimar el esfuerzo necesario para completarla.

Small (Pequeña): La historia debe ser lo suficientemente pequeña para poder estimarse con precisión razonable; si es muy grande, debe dividirse en partes más manejables.

Testable (Testeable): Deben existir criterios claros de aceptación que permitan verificar si la historia se implementó con éxito (ej. pruebas de usuario, verificaciones de funcionalidad).

Las hus que debes representar corresponden a mi primer sprint el cual tiene por objetivo : Objetivo: Establecer la base organizativa de la EPN y asegurar el acceso controlado de usuarios.
 y sus pbis :  PBI: - Gestión de organización académica (Facultades, Carreras, Materias, Profesores)



Te proporciono unas hu de ejemplo que realizo mi equipo con anterioridad con su respectiva estimación 
HU :  Agregar miembro de la CEI

Como administrador

quiero registrar a los miembros de la cei  ------ > 3sp


HU :Listar miembros de la cei              -------- > 3sp

Como administrador

quiero listar los miembros de la CEI


HU : Paginar autoridades
Como administrador
quiero listar las autoridades por grupos         ---- ? 1 sp

HU : Filtrar autoridades  ---- > 1sp

Como administrador
quiero filtrar las autoridades por una palabra


Formato de salida por HU (obligatorio):

title, como, quiero, para

acceptanceCriteria: array de strings claros y verificables

storyPoints: número

priority: 1 = alta, 2 = media, 3 = baja (elige según impacto/urgencia)

frontendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

backendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

Reglas para horas por tarea (FE/BE):

Devuelve horas numéricas (no strings), en horas.

Si no hay señal específica, usa por defecto: originalEstimate = 3, remainingWork = 0, completedWork = 0.

Si la HU es más compleja en un lado (FE o BE), ajusta las horas de esas tareas (p.ej., 4–6h) manteniendo tareas pequeñas (≤6h).

No repitas títulos de tareas; usa verbos en infinitivo.



ACCION :
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes )

Ejemplo de salida[
  {
    "title": "HU: Iniciar Sesión en el Sistema",
    "como": "usuario EPN",
    "quiero": "acceder con mis credenciales institucionales",
    "para": "usar las funcionalidades de mi rol",
    "acceptanceCriteria": [
      "Se muestra formulario con email institucional y contraseña",
      "Credenciales válidas redirigen al dashboard",
      "Credenciales inválidas muestran mensaje claro",
      "Existe enlace para recuperar contraseña"
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      { "title": "Diseñar formulario de login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
      { "title": "Validar formato de email en cliente", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
      { "title": "Enviar credenciales y manejar estados de éxito/error", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
    ],
    "backendTasks": [
      { "title": "Crear endpoint POST /auth/login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
      { "title": "Verificar credenciales y generar JWT", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
    ]
  }
]

**Respuesta:**

```json
[
  {
    "title": "Registrar Facultad",
    "como": "Administrador Académico",
    "quiero": "registrar una nueva facultad",
    "para": "establecer la estructura organizativa fundamental de la EPN",
    "acceptanceCriteria": [
      "El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.",
      "La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.",
      "Al enviar el formulario, la facultad se guarda exitosamente en el sistema.",
      "Se muestra un mensaje de confirmación de registro de facultad exitoso.",
      "La nueva facultad aparece en el listado de facultades."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario para registrar facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos del formulario en el cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar el envío de datos a la API y manejar la respuesta de éxito/error",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /facultades para el registro",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de negocio para crear facultad, incluyendo validaciones",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos para Facultad",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Facultades",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todas las facultades registradas",
    "para": "consultar y verificar la estructura organizativa de la EPN",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todas las facultades registradas.",
      "Cada facultad muestra al menos su 'Nombre' y 'Código'.",
      "Los datos de las facultades se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de tabla/listado para facultades",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /facultades y renderizar los datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /facultades para obtener todas las facultades",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar facultades en la base de datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Carrera",
    "como": "Administrador Académico",
    "quiero": "registrar una nueva carrera asociada a una facultad existente",
    "para": "expandir la oferta académica dentro de la estructura de la EPN",
    "acceptanceCriteria": [
      "El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.",
      "El selector de 'Facultad' muestra una lista de las facultades existentes.",
      "La validación de campos obligatorios funciona correctamente.",
      "Al enviar el formulario, la carrera se guarda con su facultad asociada.",
      "Se muestra un mensaje de confirmación de registro de carrera exitoso.",
      "La nueva carrera aparece en el listado de carreras."
    ],
    "storyPoints": 4,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario para registrar carrera con selector de facultad",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET para cargar facultades en el selector",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos del formulario en el cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar el envío de datos a la API y manejar la respuesta",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /carreras para el registro",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para crear carrera, incluyendo asociación a facultad y validaciones",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos para Carrera con relación a Facultad",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Carreras",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todas las carreras registradas, incluyendo su facultad",
    "para": "consultar la oferta académica y su organización dentro de la EPN",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todas las carreras registradas.",
      "Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.",
      "Los datos de las carreras se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de tabla/listado para carreras",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /carreras y renderizar los datos, incluyendo el nombre de la facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /carreras para obtener todas las carreras con su facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar carreras con sus relaciones en la base de datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Materia",
    "como": "Administrador Académico",
    "quiero": "registrar una nueva materia asociada a una carrera existente",
    "para": "establecer el plan de estudios de las carreras de la EPN",
    "acceptanceCriteria": [
      "El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.",
      "El selector de 'Carrera' muestra una lista de las carreras existentes.",
      "La validación de campos obligatorios funciona correctamente.",
      "Al enviar el formulario, la materia se guarda con su carrera asociada.",
      "Se muestra un mensaje de confirmación de registro de materia exitoso.",
      "La nueva materia aparece en el listado de materias."
    ],
    "storyPoints": 4,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario para registrar materia con selector de carrera",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET para cargar carreras en el selector",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos del formulario en el cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar el envío de datos a la API y manejar la respuesta",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /materias para el registro",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para crear materia, incluyendo asociación a carrera y validaciones",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos para Materia con relación a Carrera",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Materias",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad",
    "para": "consultar el plan de estudios y su organización",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todas las materias registradas.",
      "Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.",
      "Los datos de las materias se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de tabla/listado para materias",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /materias y renderizar los datos, incluyendo carrera y facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /materias para obtener todas las materias con sus relaciones",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar materias con sus relaciones en la base de datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Profesor",
    "como": "Administrador Académico",
    "quiero": "registrar un nuevo profesor en el sistema con su información básica",
    "para": "incorporar al personal docente a la plataforma y gestionarlo",
    "acceptanceCriteria": [
      "El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.",
      "La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.",
      "Al enviar el formulario, el profesor se guarda exitosamente en el sistema.",
      "Se muestra un mensaje de confirmación de registro de profesor exitoso.",
      "El nuevo profesor aparece en el listado de profesores."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario para registrar profesor",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos del formulario en el cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar el envío de datos a la API y manejar la respuesta",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /profesores para el registro",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de negocio para crear profesor, incluyendo validaciones",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos para Profesor",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Profesores",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todos los profesores registrados",
    "para": "consultar y gestionar el personal docente de la EPN",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todos los profesores registrados.",
      "Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.",
      "Los datos de los profesores se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de tabla/listado para profesores",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /profesores y renderizar los datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /profesores para obtener todos los profesores",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar profesores en la base de datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  }
]
```

<!-- --- -->

## PROMPT 6

**Prompt:**

Devuelve SOLO un array JSON (sin texto extra ni code fences). 

Objetivo 
 analizar los prototipos (imágenes) con la finalidad de encontrar las hus representadas en las mismas 

contexto :

Para las hus se debe cumplir con los criterios Criterios INVEST:

INVEST significa:

Independent (Independiente): Una historia debe poder completarse por sí sola, sin depender estrictamente de que otras historias se terminen antes.

Negotiable (Negociable): La historia debe tener detalles que se puedan debatir y acordar con las partes interesadas (ej. desarrolladores, diseñadores).

Valuable (Valiosa): La historia debe responder a una necesidad genuina del usuario y contribuir a la visión del producto y los objetivos comerciales.

Estimable (Estimable): La historia debe poder desglosarse en tareas claras, de forma que el equipo pueda estimar el esfuerzo necesario para completarla.

Small (Pequeña): La historia debe ser lo suficientemente pequeña para poder estimarse con precisión razonable; si es muy grande, debe dividirse en partes más manejables.

Testable (Testeable): Deben existir criterios claros de aceptación que permitan verificar si la historia se implementó con éxito (ej. pruebas de usuario, verificaciones de funcionalidad).

Las hus que debes representar corresponden a mi primer sprint el cual tiene por objetivo : Objetivo: Establecer la base organizativa de la EPN y asegurar el acceso controlado de usuarios.
 y sus pbis :  PBI: - Gestión de organización académica (Facultades, Carreras, Materias, Profesores)



Te proporciono unas hu de ejemplo que realizo mi equipo con anterioridad con su respectiva estimación 
HU :  Agregar miembro de la CEI

Como administrador

quiero registrar a los miembros de la cei  ------ > 3sp


HU :Listar miembros de la cei              -------- > 3sp

Como administrador

quiero listar los miembros de la CEI


HU : Paginar autoridades
Como administrador
quiero listar las autoridades por grupos         ---- ? 1 sp

HU : Filtrar autoridades  ---- > 1sp

Como administrador
quiero filtrar las autoridades por una palabra


Formato de salida por HU (obligatorio):

title, como, quiero, para

acceptanceCriteria: array de strings claros y verificables

storyPoints: número

priority: 1 = alta, 2 = media, 3 = baja (elige según impacto/urgencia)

frontendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

backendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

Reglas para horas por tarea (FE/BE):

Devuelve horas numéricas (no strings), en horas.

Si no hay señal específica, usa por defecto: originalEstimate = 3, remainingWork = 0, completedWork = 0.

Si la HU es más compleja en un lado (FE o BE), ajusta las horas de esas tareas (p.ej., 4–6h) manteniendo tareas pequeñas (≤6h).

No repitas títulos de tareas; usa verbos en infinitivo.



ACCION :
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes )

Ejemplo de salida[
  {
    "title": "HU: Iniciar Sesión en el Sistema",
    "como": "usuario EPN",
    "quiero": "acceder con mis credenciales institucionales",
    "para": "usar las funcionalidades de mi rol",
    "acceptanceCriteria": [
      "Se muestra formulario con email institucional y contraseña",
      "Credenciales válidas redirigen al dashboard",
      "Credenciales inválidas muestran mensaje claro",
      "Existe enlace para recuperar contraseña"
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      { "title": "Diseñar formulario de login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
      { "title": "Validar formato de email en cliente", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
      { "title": "Enviar credenciales y manejar estados de éxito/error", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
    ],
    "backendTasks": [
      { "title": "Crear endpoint POST /auth/login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
      { "title": "Verificar credenciales y generar JWT", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
    ]
  }
]

**Respuesta:**

```json
[
  {
    "title": "Registrar Facultad",
    "como": "Administrador Académico",
    "quiero": "registrar una nueva facultad",
    "para": "establecer la estructura organizativa fundamental de la EPN",
    "acceptanceCriteria": [
      "El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.",
      "La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.",
      "Al enviar el formulario, la facultad se guarda exitosamente en el sistema.",
      "Se muestra un mensaje de confirmación de registro de facultad exitoso.",
      "La nueva facultad aparece en el listado de facultades."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario de registro de facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos en cliente para facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos de facultad a la API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /facultades para registrar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de negocio para crear facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos de Facultad",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Facultades",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todas las facultades registradas",
    "para": "consultar y verificar la estructura organizativa de la EPN",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todas las facultades registradas.",
      "Cada facultad muestra al menos su 'Nombre' y 'Código'.",
      "Los datos de las facultades se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de listado de facultades",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /facultades y renderizar datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /facultades para obtener todas",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar facultades en DB",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Carrera",
    "como": "Administrador Académico",
    "quiero": "registrar una nueva carrera asociada a una facultad existente",
    "para": "expandir la oferta académica dentro de la estructura de la EPN",
    "acceptanceCriteria": [
      "El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.",
      "El selector de 'Facultad' muestra una lista de las facultades existentes.",
      "La validación de campos obligatorios funciona correctamente.",
      "Al enviar el formulario, la carrera se guarda con su facultad asociada.",
      "Se muestra un mensaje de confirmación de registro de carrera exitoso.",
      "La nueva carrera aparece en el listado de carreras."
    ],
    "storyPoints": 4,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario para registrar carrera",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Cargar facultades en el selector del formulario de carrera",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos de carrera en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos de carrera a la API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /carreras para registrar",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para crear carrera con asociación a facultad",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos de Carrera",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Carreras",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todas las carreras registradas, incluyendo su facultad",
    "para": "consultar la oferta académica y su organización dentro de la EPN",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todas las carreras registradas.",
      "Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.",
      "Los datos de las carreras se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de listado de carreras",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /carreras y renderizar datos con facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /carreras para obtener todas con facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar carreras con sus relaciones",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Materia",
    "como": "Administrador Académico",
    "quiero": "registrar una nueva materia asociada a una carrera existente",
    "para": "establecer el plan de estudios de las carreras de la EPN",
    "acceptanceCriteria": [
      "El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.",
      "El selector de 'Carrera' muestra una lista de las carreras existentes.",
      "La validación de campos obligatorios funciona correctamente.",
      "Al enviar el formulario, la materia se guarda con su carrera asociada.",
      "Se muestra un mensaje de confirmación de registro de materia exitoso.",
      "La nueva materia aparece en el listado de materias."
    ],
    "storyPoints": 4,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario para registrar materia",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Cargar carreras en el selector del formulario de materia",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos de materia en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos de materia a la API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /materias para registrar",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para crear materia con asociación a carrera",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos de Materia",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Materias",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad",
    "para": "consultar el plan de estudios y su organización",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todas las materias registradas.",
      "Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.",
      "Los datos de las materias se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de listado de materias",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /materias y renderizar datos con carrera y facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /materias para obtener todas con relaciones",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar materias con sus relaciones",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Profesor",
    "como": "Administrador Académico",
    "quiero": "registrar un nuevo profesor en el sistema con su información básica",
    "para": "incorporar al personal docente a la plataforma y gestionarlo",
    "acceptanceCriteria": [
      "El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.",
      "La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.",
      "Al enviar el formulario, el profesor se guarda exitosamente en el sistema.",
      "Se muestra un mensaje de confirmación de registro de profesor exitoso.",
      "El nuevo profesor aparece en el listado de profesores."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario para registrar profesor",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos de profesor en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos de profesor a la API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /profesores para registrar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de negocio para crear profesor",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos de Profesor",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Profesores",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todos los profesores registrados",
    "para": "consultar y gestionar el personal docente de la EPN",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todos los profesores registrados.",
      "Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.",
      "Los datos de los profesores se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de listado de profesores",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /profesores y renderizar datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /profesores para obtener todos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar profesores en DB",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  }
]
```

<!-- --- -->

## PROMPT 7

**Prompt:**

Devuelve SOLO un array JSON (sin texto extra ni code fences). 

Objetivo 
 analizar los prototipos (imágenes) con la finalidad de encontrar las hus representadas en las mismas 

contexto :

Para las hus se debe cumplir con los criterios Criterios INVEST:

INVEST significa:

Independent (Independiente): Una historia debe poder completarse por sí sola, sin depender estrictamente de que otras historias se terminen antes.

Negotiable (Negociable): La historia debe tener detalles que se puedan debatir y acordar con las partes interesadas (ej. desarrolladores, diseñadores).

Valuable (Valiosa): La historia debe responder a una necesidad genuina del usuario y contribuir a la visión del producto y los objetivos comerciales.

Estimable (Estimable): La historia debe poder desglosarse en tareas claras, de forma que el equipo pueda estimar el esfuerzo necesario para completarla.

Small (Pequeña): La historia debe ser lo suficientemente pequeña para poder estimarse con precisión razonable; si es muy grande, debe dividirse en partes más manejables.

Testable (Testeable): Deben existir criterios claros de aceptación que permitan verificar si la historia se implementó con éxito (ej. pruebas de usuario, verificaciones de funcionalidad).

Las hus que debes representar corresponden a mi primer sprint el cual tiene por objetivo : Objetivo: Establecer la base organizativa de la EPN y asegurar el acceso controlado de usuarios.
 y sus pbis :  PBI: - Gestión de organización académica (Facultades, Carreras, Materias, Profesores)



Te proporciono unas hu de ejemplo que realizo mi equipo con anterioridad con su respectiva estimación 
HU :  Agregar miembro de la CEI

Como administrador

quiero registrar a los miembros de la cei  ------ > 3sp


HU :Listar miembros de la cei              -------- > 3sp

Como administrador

quiero listar los miembros de la CEI


HU : Paginar autoridades
Como administrador
quiero listar las autoridades por grupos         ---- ? 1 sp

HU : Filtrar autoridades  ---- > 1sp

Como administrador
quiero filtrar las autoridades por una palabra


Formato de salida por HU (obligatorio):

title, como, quiero, para

acceptanceCriteria: array de strings claros y verificables

storyPoints: número

priority: 1 = alta, 2 = media, 3 = baja (elige según impacto/urgencia)

frontendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

backendTasks: array de objetos { "title": string, "originalEstimate": number, "remainingWork": number, "completedWork": number }

Reglas para horas por tarea (FE/BE):

Devuelve horas numéricas (no strings), en horas.

Si no hay señal específica, usa por defecto: originalEstimate = 3, remainingWork = 0, completedWork = 0.

Si la HU es más compleja en un lado (FE o BE), ajusta las horas de esas tareas (p.ej., 4–6h) manteniendo tareas pequeñas (≤6h).

No repitas títulos de tareas; usa verbos en infinitivo.



ACCION :
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes )

Ejemplo de salida[
  {
    "title": "HU: Iniciar Sesión en el Sistema",
    "como": "usuario EPN",
    "quiero": "acceder con mis credenciales institucionales",
    "para": "usar las funcionalidades de mi rol",
    "acceptanceCriteria": [
      "Se muestra formulario con email institucional y contraseña",
      "Credenciales válidas redirigen al dashboard",
      "Credenciales inválidas muestran mensaje claro",
      "Existe enlace para recuperar contraseña"
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      { "title": "Diseñar formulario de login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
      { "title": "Validar formato de email en cliente", "originalEstimate": 2, "remainingWork": 0, "completedWork": 0 },
      { "title": "Enviar credenciales y manejar estados de éxito/error", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
    ],
    "backendTasks": [
      { "title": "Crear endpoint POST /auth/login", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 },
      { "title": "Verificar credenciales y generar JWT", "originalEstimate": 3, "remainingWork": 0, "completedWork": 0 }
    ]
  }
]

**Respuesta:**

```json
[
  {
    "title": "Registrar Facultad",
    "como": "Administrador Académico",
    "quiero": "registrar una nueva facultad",
    "para": "establecer la estructura organizativa fundamental de la EPN",
    "acceptanceCriteria": [
      "El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.",
      "La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.",
      "Al enviar el formulario, la facultad se guarda exitosamente en el sistema.",
      "Se muestra un mensaje de confirmación de registro de facultad exitoso.",
      "La nueva facultad aparece en el listado de facultades."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario de registro de facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos en cliente para facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos de facultad a la API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /facultades para registrar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de negocio para crear facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos de Facultad",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Facultades",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todas las facultades registradas",
    "para": "consultar y verificar la estructura organizativa de la EPN",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todas las facultades registradas.",
      "Cada facultad muestra al menos su 'Nombre' y 'Código'.",
      "Los datos de las facultades se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de listado de facultades",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /facultades y renderizar datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /facultades para obtener todas",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar facultades en DB",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Carrera",
    "como": "Administrador Académico",
    "quiero": "registrar una nueva carrera asociada a una facultad existente",
    "para": "expandir la oferta académica dentro de la estructura de la EPN",
    "acceptanceCriteria": [
      "El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.",
      "El selector de 'Facultad' muestra una lista de las facultades existentes.",
      "La validación de campos obligatorios funciona correctamente.",
      "Al enviar el formulario, la carrera se guarda con su facultad asociada.",
      "Se muestra un mensaje de confirmación de registro de carrera exitoso.",
      "La nueva carrera aparece en el listado de carreras."
    ],
    "storyPoints": 4,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario para registrar carrera",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Cargar facultades en el selector del formulario de carrera",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos de carrera en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos de carrera a la API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /carreras para registrar",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para crear carrera con asociación a facultad",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos de Carrera",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Carreras",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todas las carreras registradas, incluyendo su facultad",
    "para": "consultar la oferta académica y su organización dentro de la EPN",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todas las carreras registradas.",
      "Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.",
      "Los datos de las carreras se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de listado de carreras",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /carreras y renderizar datos con facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /carreras para obtener todas con facultad",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar carreras con sus relaciones",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Materia",
    "como": "Administrador Académico",
    "quiero": "registrar una nueva materia asociada a una carrera existente",
    "para": "establecer el plan de estudios de las carreras de la EPN",
    "acceptanceCriteria": [
      "El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.",
      "El selector de 'Carrera' muestra una lista de las carreras existentes.",
      "La validación de campos obligatorios funciona correctamente.",
      "Al enviar el formulario, la materia se guarda con su carrera asociada.",
      "Se muestra un mensaje de confirmación de registro de materia exitoso.",
      "La nueva materia aparece en el listado de materias."
    ],
    "storyPoints": 4,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario para registrar materia",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Cargar carreras en el selector del formulario de materia",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos de materia en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos de materia a la API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /materias para registrar",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para crear materia con asociación a carrera",
        "originalEstimate": 5,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos de Materia",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Materias",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad",
    "para": "consultar el plan de estudios y su organización",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todas las materias registradas.",
      "Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.",
      "Los datos de las materias se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de listado de materias",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /materias y renderizar datos con carrera y facultad",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /materias para obtener todas con relaciones",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar materias con sus relaciones",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Registrar Profesor",
    "como": "Administrador Académico",
    "quiero": "registrar un nuevo profesor en el sistema con su información básica",
    "para": "incorporar al personal docente a la plataforma y gestionarlo",
    "acceptanceCriteria": [
      "El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.",
      "La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.",
      "Al enviar el formulario, el profesor se guarda exitosamente en el sistema.",
      "Se muestra un mensaje de confirmación de registro de profesor exitoso.",
      "El nuevo profesor aparece en el listado de profesores."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar formulario para registrar profesor",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar validación de campos de profesor en cliente",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Integrar envío de datos de profesor a la API",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint POST /profesores para registrar",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica de negocio para crear profesor",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Definir y configurar el modelo de datos de Profesor",
        "originalEstimate": 2,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  },
  {
    "title": "Listar Profesores",
    "como": "Administrador Académico",
    "quiero": "visualizar un listado de todos los profesores registrados",
    "para": "consultar y gestionar el personal docente de la EPN",
    "acceptanceCriteria": [
      "Se muestra una tabla o listado con todos los profesores registrados.",
      "Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.",
      "Los datos de los profesores se cargan correctamente desde el backend."
    ],
    "storyPoints": 3,
    "priority": 1,
    "frontendTasks": [
      {
        "title": "Diseñar y desarrollar componente de listado de profesores",
        "originalEstimate": 4,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Consumir endpoint GET /profesores y renderizar datos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ],
    "backendTasks": [
      {
        "title": "Crear endpoint GET /profesores para obtener todos",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      },
      {
        "title": "Implementar lógica para consultar profesores en DB",
        "originalEstimate": 3,
        "remainingWork": 0,
        "completedWork": 0
      }
    ]
  }
]
```

<!-- --- -->
