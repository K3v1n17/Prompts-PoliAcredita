Velocidad del Equipo:

Velocidad Baja: 54 Story Points (sp)
Velocidad Alta: 75 Story Points (sp)

## PROMPT 1

**Fecha:** 29 sept 2025, 04:01 a m. (UTC)

**Prompt:**

Devuelve SOLO un array JSON válido (sin texto extra ni code fences).

🎯 Objetivo

Analizar los prototipos (imágenes) con la finalidad de identificar las Historias de Usuario (HUs) representadas.

📌 Contexto

Cada HU debe cumplir con los criterios INVEST:

Independent: Puede completarse de forma autónoma.

Negotiable: Contiene detalles discutibles con stakeholders.

Valuable: Aporta valor al usuario y al producto.

Estimable: Se puede desglosar y estimar en esfuerzo.

Small: Lo suficientemente pequeña para estimarse con precisión.

Testable: Tiene criterios de aceptación claros y verificables.

🎯 Objetivo del Sprint 1

 Establecer la estructura jerarquica academica y la gestion de roles
📌 PBI del Sprint

Gestión de organización académica (Facultades, Carreras, Materias, Profesores).

📊 Velocidad Histórica del Equipo

Velocidad baja: 54 sp

Velocidad alta: 75 sp

📌 Ejemplos de HU (histórico del equipo)

HU: Agregar miembro de la CEI
Como administrador quiero registrar a los miembros de la CEI → 3 sp

HU: Listar miembros de la CEI
Como administrador quiero listar los miembros de la CEI → 3 sp

HU: Paginar autoridades
Como administrador quiero listar las autoridades por grupos → 1 sp

HU: Filtrar autoridades
Como administrador quiero filtrar las autoridades por una palabra → 1 sp

HU: Paginar miembros de la CEI
Como administrador quiero listar los miembros de la CEI por grupos → 1 sp

HU: Filtrar miembros de la CEI
Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp

📌 Formato de salida requerido por HU
{
  "title": "HU: ...",
  "como": "...",
  "quiero": "...",
  "para": "...",
  "acceptanceCriteria": [
    "Criterio 1",
    "Criterio 2"
  ],
  "storyPoints": number,
  "priority": number (1 = alta, 2 = media, 3 = baja),
  "frontendTasks": [
    { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number }
  ],
  "backendTasks": [
    { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number }
  ]
}

⏱️ Reglas de estimación de tareas (FE/BE)

Front-end: 0 a 1 hora por tarea (ej: 0.1, 0.3, 0.5, 1).

Back-end: 0 a 1 hora por tarea (idem).

Usa verbos en infinitivo para títulos de tareas.

No repetir títulos de tareas.

**Respuesta:**

### HU sin título
**Como:** 
**Quiero:** 
**Para:** 
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales
**Para:** acceder a mis funcionalidades correspondientes a mi rol

Criterios de aceptación:

- El sistema muestra un formulario con campos para email institucional y contraseña
- Al ingresar credenciales válidas, el usuario es redirigido al Dashboard
- Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- Existe un enlace para '¿Olvidaste mi contraseña?'

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y profesores
**Para:** obtener una visión general rápida del estado de la EPN

Criterios de aceptación:

- El Dashboard muestra el 'Total Facultades' registradas
- El Dashboard muestra el 'Total Carreras' registradas
- El Dashboard muestra el 'Total Profesores' registrados
- Existe un botón 'Ver' junto a cada contador para navegar al detalle

**Story Points:** 2
**Prioridad:** Media (2)

---

### HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

Criterios de aceptación:

- El Dashboard muestra una sección de 'Últimos Cambios' con columnas 'Acción', 'Descripción', 'Fecha'
- La tabla muestra las últimas acciones relevantes (ej. creación de carrera, actualización de profesor, eliminación de facultad)
- Cada acción muestra el tipo de acción, una breve descripción y la fecha en que ocurrió

**Story Points:** 3
**Prioridad:** Media (2)

---

### HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación la ejecución de tareas comunes

Criterios de aceptación:

- El Dashboard muestra una sección de 'Acciones Rápidas'
- Esta sección incluye un botón o enlace para 'Nueva Facultad'
- Esta sección incluye un botón o enlace para 'Nueva Carrera'
- Esta sección incluye un botón o enlace para 'Nuevo Profesor'

**Story Points:** 2
**Prioridad:** Media (2)

---

### HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

Criterios de aceptación:

- Existe una página dedicada a 'Facultades' accesible desde la navegación principal
- Se muestra una tabla con columnas 'Código', 'Nombre', 'Autoridades', 'Carreras' y 'Acciones' para cada facultad
- Los datos de las facultades se cargan correctamente en la tabla
- Se muestra el botón 'Nueva Facultad' en la página

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Buscar Facultades por Nombre o Código
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

Criterios de aceptación:

- Existe un campo de búsqueda ('Buscar por Nombre o Código') en la página de listado de Facultades
- Al escribir texto en el campo de búsqueda, la tabla se filtra y muestra solo las facultades que coinciden
- La búsqueda debe ser insensible a mayúsculas y minúsculas
- Al borrar el texto de búsqueda, se muestra el listado completo de facultades

**Story Points:** 2
**Prioridad:** Media (2)

---

### HU: Filtrar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por criterios específicos

Criterios de aceptación:

- Existe un selector de filtro (ej. 'Todas las Carreras') en la página de listado de Facultades
- Al seleccionar una opción del filtro, la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- Las opciones del filtro deben ser claras y relevantes (ej. por tipo de carrera o decano si aplica en el contexto)

**Story Points:** 2
**Prioridad:** Media (2)

---

### HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

Criterios de aceptación:

- Existe un componente de paginación en la parte inferior de la tabla de Facultades
- El componente permite ir a la página siguiente
- El componente permite ir a la página anterior
- El componente permite ir directamente a una página específica
- Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes

**Story Points:** 2
**Prioridad:** Media (2)

---

### HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

Criterios de aceptación:

- Al hacer clic en 'Nueva Facultad' (desde Dashboard o listado), se abre un formulario de registro
- El formulario incluye campos para 'Código' y 'Nombre' de la facultad
- Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- Al enviar datos inválidos (ej. código duplicado), se muestra un mensaje de error claro

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

Criterios de aceptación:

- Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- Al hacer clic en el icono de edición, se abre un formulario con los datos de la facultad precargados
- Al guardar los cambios, la información de la facultad se actualiza correctamente
- El sistema valida la unicidad del código de la facultad si se modifica

**Story Points:** 3
**Prioridad:** Media (2)

---

### HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

Criterios de aceptación:

- Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- Si la facultad no tiene carreras asociadas, se elimina del sistema
- Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación

**Story Points:** 3
**Prioridad:** Media (2)

---

### HU: Visualizar Detalle de Facultad
**Como:** Administrador del sistema
**Quiero:** ver la información completa de una facultad
**Para:** consultar sus detalles específicos

Criterios de aceptación:

- Existe un icono de 'Ver' (ojo) en la columna 'Acciones' de cada facultad en el listado
- Al hacer clic en el icono 'Ver', se navega a una vista detallada de la facultad
- La vista detallada muestra toda la información de la facultad (código, nombre, decano, lista de carreras asociadas)

**Story Points:** 2
**Prioridad:** Media (2)

---

### HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

Criterios de aceptación:

- El sistema muestra un formulario con campos para Código, Nombre, Modalidad, Duración en años
- Existe un selector para asociar la carrera a una Facultad existente
- Existe un selector para asignar un Coordinador de una lista de usuarios existentes
- El Código de la carrera es validado como único dentro de la facultad seleccionada
- Al guardar, la carrera queda registrada exitosamente

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Registrar Nuevo Profesor
**Como:** Administrador
**Quiero:** ingresar la información de un nuevo profesor
**Para:** registrarlo en el sistema

Criterios de aceptación:

- El sistema muestra un formulario con campos para Cédula, Nombres, Apellidos, Email, Teléfono, Facultad, Título Académico
- La Cédula del profesor es validada como única en el sistema
- El Email del profesor es validado como único en el sistema
- La Facultad se selecciona de una lista preexistente de facultades
- Al guardar, el profesor queda registrado exitosamente

**Story Points:** 3
**Prioridad:** Alta (1)

<!-- --- -->
