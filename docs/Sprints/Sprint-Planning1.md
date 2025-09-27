
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

# RESPUESTA (formateada)

## HU: Iniciar Sesión en el Sistema
**Como:** usuario EPN
**Quiero:** acceder con mis credenciales institucionales
**Para:** usar las funcionalidades de mi rol
**Story Points:** 3 · **Prioridad:** Alta

**Criterios de aceptación**
- Se muestra formulario con email institucional y contraseña
- Credenciales válidas redirigen al dashboard
- Credenciales inválidas muestran mensaje claro
- Existe enlace para recuperar contraseña

**Tareas Frontend**
- Diseñar formulario de login — OE: 3h · Rem: 0h · Comp: 0h
- Validar formato de email en cliente — OE: 2h · Rem: 0h · Comp: 0h
- Enviar credenciales y manejar estados de éxito/error — OE: 3h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint POST /auth/login — OE: 3h · Rem: 0h · Comp: 0h
- Verificar credenciales y generar JWT — OE: 3h · Rem: 0h · Comp: 0h


---

## HU: Visualizar Dashboard Administrativo
**Como:** administrador
**Quiero:** ver un resumen ejecutivo de las métricas clave del sistema
**Para:** tener una visión rápida del estado general de las facultades, carreras y usuarios
**Story Points:** 5 · **Prioridad:** Alta

**Criterios de aceptación**
- Se muestra contador de Total Facultades registradas
- Se muestra contador de Total Carreras registradas
- Se muestra contador de Usuarios Activos
- Se visualiza Estado Acreditación con porcentaje visual
- Se presenta sección Acceso Rápido con enlaces funcionales
- Se muestra Actividad Reciente con timestamp, usuario y acción

**Tareas Frontend**
- Diseñar layout del dashboard principal — OE: 4h · Rem: 0h · Comp: 0h
- Implementar componentes de métricas y contadores — OE: 3h · Rem: 0h · Comp: 0h
- Crear visualización de estado de acreditación — OE: 3h · Rem: 0h · Comp: 0h
- Integrar tabla de actividad reciente — OE: 3h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint GET /dashboard/metrics — OE: 4h · Rem: 0h · Comp: 0h
- Implementar consultas para contadores de entidades — OE: 3h · Rem: 0h · Comp: 0h
- Crear endpoint GET /dashboard/recent-activity — OE: 3h · Rem: 0h · Comp: 0h


---

## HU: Registrar Nueva Facultad
**Como:** administrador
**Quiero:** crear una nueva facultad en el sistema
**Para:** establecer las entidades académicas de la institución
**Story Points:** 3 · **Prioridad:** Alta

**Criterios de aceptación**
- Se muestra modal con formulario de nueva facultad
- Se valida que el código de facultad sea único
- Se permite asignar un decano desde lista de usuarios
- Se guarda correctamente en base de datos
- Se muestra mensaje de confirmación al guardar

**Tareas Frontend**
- Crear modal de nueva facultad — OE: 3h · Rem: 0h · Comp: 0h
- Implementar validaciones de formulario — OE: 2h · Rem: 0h · Comp: 0h
- Integrar selector de decano con API — OE: 3h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint POST /facultades — OE: 3h · Rem: 0h · Comp: 0h
- Implementar validación de unicidad de código — OE: 2h · Rem: 0h · Comp: 0h
- Crear modelo y esquema de facultad — OE: 3h · Rem: 0h · Comp: 0h


---

## HU: Gestionar Facultades
**Como:** administrador
**Quiero:** visualizar y administrar todas las facultades
**Para:** mantener actualizada la información académica
**Story Points:** 5 · **Prioridad:** Alta

**Criterios de aceptación**
- Se muestra tabla con código, nombre, cantidad de carreras y decano
- Se permite buscar por código de facultad
- Se permite buscar por nombre de facultad
- Se implementa paginación de resultados
- Se permite editar información de facultad
- Se permite eliminar facultad si no tiene dependencias

**Tareas Frontend**
- Crear tabla de gestión de facultades — OE: 4h · Rem: 0h · Comp: 0h
- Implementar buscadores por código y nombre — OE: 3h · Rem: 0h · Comp: 0h
- Agregar componente de paginación — OE: 2h · Rem: 0h · Comp: 0h
- Crear modal de edición de facultad — OE: 3h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint GET /facultades con paginación — OE: 4h · Rem: 0h · Comp: 0h
- Implementar filtros de búsqueda — OE: 3h · Rem: 0h · Comp: 0h
- Crear endpoint PUT /facultades/:id — OE: 3h · Rem: 0h · Comp: 0h
- Crear endpoint DELETE /facultades/:id — OE: 2h · Rem: 0h · Comp: 0h


---

## HU: Registrar Nueva Carrera
**Como:** administrador
**Quiero:** crear una nueva carrera académica
**Para:** definir la oferta educativa de cada facultad
**Story Points:** 3 · **Prioridad:** Media

**Criterios de aceptación**
- Se muestra modal con formulario de nueva carrera
- Se permite seleccionar facultad de lista existente
- Se valida unicidad de código por facultad
- Se permite asignar coordinador de lista de usuarios
- Se guarda correctamente con validaciones
- Se muestra confirmación de creación exitosa

**Tareas Frontend**
- Crear modal de nueva carrera — OE: 3h · Rem: 0h · Comp: 0h
- Implementar selectores de facultad y coordinador — OE: 3h · Rem: 0h · Comp: 0h
- Agregar validaciones de formulario — OE: 2h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint POST /carreras — OE: 3h · Rem: 0h · Comp: 0h
- Implementar validación de código único por facultad — OE: 3h · Rem: 0h · Comp: 0h
- Crear modelo y relaciones de carrera — OE: 3h · Rem: 0h · Comp: 0h


---

## HU: Gestionar Carreras
**Como:** administrador
**Quiero:** administrar todas las carreras del sistema
**Para:** mantener actualizada la oferta académica
**Story Points:** 5 · **Prioridad:** Alta

**Criterios de aceptación**
- Se muestra tabla con código, nombre, facultad, coordinador y estado
- Se permite buscar por nombre de carrera
- Se permite filtrar por facultad
- Se permite filtrar por estado
- Se implementa paginación de resultados
- Se permite editar información de carrera
- Se permite cambiar estado de carrera

**Tareas Frontend**
- Crear tabla de gestión de carreras — OE: 4h · Rem: 0h · Comp: 0h
- Implementar buscador por nombre — OE: 2h · Rem: 0h · Comp: 0h
- Agregar filtros por facultad y estado — OE: 3h · Rem: 0h · Comp: 0h
- Crear modal de edición de carrera — OE: 3h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint GET /carreras con filtros — OE: 4h · Rem: 0h · Comp: 0h
- Implementar búsqueda y filtros múltiples — OE: 3h · Rem: 0h · Comp: 0h
- Crear endpoint PUT /carreras/:id — OE: 3h · Rem: 0h · Comp: 0h


---

## HU: Registrar Nuevo Profesor
**Como:** administrador
**Quiero:** registrar profesores en el sistema
**Para:** gestionar el personal académico de la institución
**Story Points:** 3 · **Prioridad:** Media

**Criterios de aceptación**
- Se muestra modal con formulario de nuevo profesor
- Se valida unicidad de cédula en el sistema
- Se valida unicidad de email institucional
- Se permite seleccionar facultad de adscripción
- Se guarda información completa del profesor
- Se muestra confirmación de registro exitoso

**Tareas Frontend**
- Crear modal de nuevo profesor — OE: 3h · Rem: 0h · Comp: 0h
- Implementar validaciones de cédula y email — OE: 3h · Rem: 0h · Comp: 0h
- Integrar selector de facultad — OE: 2h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint POST /profesores — OE: 3h · Rem: 0h · Comp: 0h
- Implementar validaciones de unicidad — OE: 3h · Rem: 0h · Comp: 0h
- Crear modelo y esquema de profesor — OE: 3h · Rem: 0h · Comp: 0h


---

## HU: Gestionar Profesores
**Como:** administrador
**Quiero:** administrar la información de todos los profesores
**Para:** mantener actualizado el registro del personal académico
**Story Points:** 5 · **Prioridad:** Alta

**Criterios de aceptación**
- Se muestra tabla con cédula, nombre, email, facultad, rol y estado
- Se permite buscar por cédula
- Se permite buscar por nombre
- Se permite filtrar por facultad
- Se permite filtrar por rol
- Se permite filtrar por estado
- Se implementa paginación
- Se permite editar información del profesor
- Se permite cambiar estado activo/inactivo

**Tareas Frontend**
- Crear tabla de gestión de profesores — OE: 4h · Rem: 0h · Comp: 0h
- Implementar búsquedas por cédula y nombre — OE: 3h · Rem: 0h · Comp: 0h
- Agregar filtros múltiples — OE: 3h · Rem: 0h · Comp: 0h
- Crear modal de edición de profesor — OE: 3h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint GET /profesores con filtros — OE: 4h · Rem: 0h · Comp: 0h
- Implementar búsqueda y filtros avanzados — OE: 3h · Rem: 0h · Comp: 0h
- Crear endpoint PUT /profesores/:id — OE: 3h · Rem: 0h · Comp: 0h
- Crear endpoint PUT /profesores/:id/estado — OE: 2h · Rem: 0h · Comp: 0h


---

## HU: Gestionar Usuarios del Sistema
**Como:** administrador
**Quiero:** administrar usuarios y sus roles
**Para:** controlar el acceso y permisos en el sistema
**Story Points:** 5 · **Prioridad:** Alta

**Criterios de aceptación**
- Se muestra tabla con email, nombre, rol, estado y último acceso
- Se permite buscar por nombre o email
- Se implementa paginación de usuarios
- Se permite asignar rol a usuario
- Se permite desactivar usuario
- Se muestra modal para asignación de roles

**Tareas Frontend**
- Crear tabla de gestión de usuarios — OE: 4h · Rem: 0h · Comp: 0h
- Implementar búsqueda por nombre y email — OE: 2h · Rem: 0h · Comp: 0h
- Crear modal de asignación de roles — OE: 3h · Rem: 0h · Comp: 0h
- Integrar acciones de estado de usuario — OE: 3h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint GET /usuarios con paginación — OE: 3h · Rem: 0h · Comp: 0h
- Crear endpoint PUT /usuarios/:id/rol — OE: 3h · Rem: 0h · Comp: 0h
- Crear endpoint PUT /usuarios/:id/estado — OE: 2h · Rem: 0h · Comp: 0h
- Implementar control de permisos por rol — OE: 4h · Rem: 0h · Comp: 0h


---

## HU: Gestionar Permisos de Roles
**Como:** administrador
**Quiero:** configurar permisos por rol
**Para:** controlar granularmente el acceso a funcionalidades
**Story Points:** 5 · **Prioridad:** Alta

**Criterios de aceptación**
- Se muestra lista de roles del sistema
- Se presenta matriz de permisos por rol
- Se permite modificar permisos de cada rol
- Se guardan cambios de permisos inmediatamente
- Se valida integridad de permisos por rol

**Tareas Frontend**
- Crear interfaz de gestión de roles — OE: 4h · Rem: 0h · Comp: 0h
- Implementar matriz de permisos — OE: 4h · Rem: 0h · Comp: 0h
- Agregar controles de modificación de permisos — OE: 3h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint GET /roles/permisos — OE: 3h · Rem: 0h · Comp: 0h
- Crear endpoint PUT /roles/:id/permisos — OE: 4h · Rem: 0h · Comp: 0h
- Implementar modelo de permisos granular — OE: 5h · Rem: 0h · Comp: 0h


---

## HU: Consultar Mi Perfil
**Como:** usuario del sistema
**Quiero:** ver mi información personal y rol
**Para:** verificar mis datos y permisos asignados
**Story Points:** 2 · **Prioridad:** Baja

**Criterios de aceptación**
- Se muestra información personal completa
- Se visualiza rol asignado
- Se presenta resumen de permisos
- Se accede desde menú principal
- Información se carga automáticamente

**Tareas Frontend**
- Crear página de perfil de usuario — OE: 3h · Rem: 0h · Comp: 0h
- Mostrar información personal y rol — OE: 2h · Rem: 0h · Comp: 0h
- Integrar con menú de navegación — OE: 1h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint GET /perfil — OE: 2h · Rem: 0h · Comp: 0h
- Incluir rol y permisos en respuesta — OE: 2h · Rem: 0h · Comp: 0h


---

## HU: Actualizar Teléfono en Mi Perfil
**Como:** usuario del sistema
**Quiero:** modificar mi número de teléfono
**Para:** mantener actualizados mis datos de contacto
**Story Points:** 2 · **Prioridad:** Baja

**Criterios de aceptación**
- Campo teléfono es editable en perfil
- Se valida formato de teléfono
- Cambios se guardan correctamente
- Se muestra confirmación de actualización

**Tareas Frontend**
- Habilitar edición de campo teléfono — OE: 2h · Rem: 0h · Comp: 0h
- Implementar validación de formato — OE: 2h · Rem: 0h · Comp: 0h
- Agregar botón guardar cambios — OE: 1h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint PUT /perfil/telefono — OE: 2h · Rem: 0h · Comp: 0h
- Validar formato en backend — OE: 1h · Rem: 0h · Comp: 0h


---

## HU: Cambiar Contraseña de Perfil
**Como:** usuario del sistema
**Quiero:** cambiar mi contraseña
**Para:** mantener segura mi cuenta
**Story Points:** 3 · **Prioridad:** Media

**Criterios de aceptación**
- Se muestra modal de cambio de contraseña
- Se solicita contraseña actual
- Se solicita nueva contraseña y confirmación
- Se valida contraseña actual antes del cambio
- Se aplican políticas de seguridad
- Se muestra confirmación de cambio exitoso

**Tareas Frontend**
- Crear modal de cambio de contraseña — OE: 3h · Rem: 0h · Comp: 0h
- Implementar validaciones de seguridad — OE: 3h · Rem: 0h · Comp: 0h
- Manejar respuestas y notificaciones — OE: 2h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint POST /perfil/cambiar-password — OE: 3h · Rem: 0h · Comp: 0h
- Verificar contraseña actual — OE: 2h · Rem: 0h · Comp: 0h
- Implementar políticas de seguridad — OE: 3h · Rem: 0h · Comp: 0h


---

## HU: Consultar Historial de Sesiones
**Como:** usuario del sistema
**Quiero:** ver mi historial de accesos
**Para:** monitorear la actividad de mi cuenta
**Story Points:** 2 · **Prioridad:** Baja

**Criterios de aceptación**
- Se muestra tabla de historial de sesiones
- Se presenta fecha y hora de cada acceso
- Se muestra dirección IP de acceso
- Se indica dispositivo utilizado
- Se accede desde perfil de usuario

**Tareas Frontend**
- Crear tabla de historial de sesiones — OE: 3h · Rem: 0h · Comp: 0h
- Formatear fecha, hora e IP — OE: 2h · Rem: 0h · Comp: 0h


**Tareas Backend**
- Crear endpoint GET /perfil/sesiones — OE: 3h · Rem: 0h · Comp: 0h
- Implementar registro de sesiones — OE: 3h · Rem: 0h · Comp: 0h
- Crear modelo de historial — OE: 2h · Rem: 0h · Comp: 0h


> _Actualizado: 2025-09-27T18:29:26.120Z_
