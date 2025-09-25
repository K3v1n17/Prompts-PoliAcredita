
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