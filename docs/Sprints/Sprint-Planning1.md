

<!-- SPRINT:Sprint_Planning_1_Historias_de_Usuario:START -->



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

### HU: Registrar Facultad
**Como:** Administrador Académico
**Quiero:** registrar una nueva facultad
**Para:** establecer la estructura organizativa fundamental de la EPN

Criterios de aceptación:

- El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.
- La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.
- Al enviar el formulario, la facultad se guarda exitosamente en el sistema.
- Se muestra un mensaje de confirmación de registro de facultad exitoso.
- La nueva facultad aparece en el listado de facultades.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Listar Facultades
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las facultades registradas
**Para:** consultar y verificar la estructura organizativa de la EPN

Criterios de aceptación:

- Se muestra una tabla o listado con todas las facultades registradas.
- Cada facultad muestra al menos su 'Nombre' y 'Código'.
- Los datos de las facultades se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Registrar Carrera
**Como:** Administrador Académico
**Quiero:** registrar una nueva carrera asociada a una facultad existente
**Para:** expandir la oferta académica dentro de la estructura de la EPN

Criterios de aceptación:

- El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.
- El selector de 'Facultad' muestra una lista de las facultades existentes.
- La validación de campos obligatorios funciona correctamente.
- Al enviar el formulario, la carrera se guarda con su facultad asociada.
- Se muestra un mensaje de confirmación de registro de carrera exitoso.
- La nueva carrera aparece en el listado de carreras.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Listar Carreras
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las carreras registradas, incluyendo su facultad
**Para:** consultar la oferta académica y su organización dentro de la EPN

Criterios de aceptación:

- Se muestra una tabla o listado con todas las carreras registradas.
- Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.
- Los datos de las carreras se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Registrar Materia
**Como:** Administrador Académico
**Quiero:** registrar una nueva materia asociada a una carrera existente
**Para:** establecer el plan de estudios de las carreras de la EPN

Criterios de aceptación:

- El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.
- El selector de 'Carrera' muestra una lista de las carreras existentes.
- La validación de campos obligatorios funciona correctamente.
- Al enviar el formulario, la materia se guarda con su carrera asociada.
- Se muestra un mensaje de confirmación de registro de materia exitoso.
- La nueva materia aparece en el listado de materias.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Listar Materias
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad
**Para:** consultar el plan de estudios y su organización

Criterios de aceptación:

- Se muestra una tabla o listado con todas las materias registradas.
- Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.
- Los datos de las materias se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Registrar Profesor
**Como:** Administrador Académico
**Quiero:** registrar un nuevo profesor en el sistema con su información básica
**Para:** incorporar al personal docente a la plataforma y gestionarlo

Criterios de aceptación:

- El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.
- Al enviar el formulario, el profesor se guarda exitosamente en el sistema.
- Se muestra un mensaje de confirmación de registro de profesor exitoso.
- El nuevo profesor aparece en el listado de profesores.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Listar Profesores
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todos los profesores registrados
**Para:** consultar y gestionar el personal docente de la EPN

Criterios de aceptación:

- Se muestra una tabla o listado con todos los profesores registrados.
- Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- Los datos de los profesores se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

<!-- --- -->

## PROMPT 2

**Fecha:** 27 sept 2025, 07:05 p m. (UTC)

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

### HU: Registrar Facultad
**Como:** Administrador Académico
**Quiero:** registrar una nueva facultad
**Para:** establecer la estructura organizativa fundamental de la EPN

Criterios de aceptación:

- El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.
- La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.
- Al enviar el formulario, la facultad se guarda exitosamente en el sistema.
- Se muestra un mensaje de confirmación de registro de facultad exitoso.
- La nueva facultad aparece en el listado de facultades.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Listar Facultades
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las facultades registradas
**Para:** consultar y verificar la estructura organizativa de la EPN

Criterios de aceptación:

- Se muestra una tabla o listado con todas las facultades registradas.
- Cada facultad muestra al menos su 'Nombre' y 'Código'.
- Los datos de las facultades se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Registrar Carrera
**Como:** Administrador Académico
**Quiero:** registrar una nueva carrera asociada a una facultad existente
**Para:** expandir la oferta académica dentro de la estructura de la EPN

Criterios de aceptación:

- El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.
- El selector de 'Facultad' muestra una lista de las facultades existentes.
- La validación de campos obligatorios funciona correctamente.
- Al enviar el formulario, la carrera se guarda con su facultad asociada.
- Se muestra un mensaje de confirmación de registro de carrera exitoso.
- La nueva carrera aparece en el listado de carreras.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Listar Carreras
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las carreras registradas, incluyendo su facultad
**Para:** consultar la oferta académica y su organización dentro de la EPN

Criterios de aceptación:

- Se muestra una tabla o listado con todas las carreras registradas.
- Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.
- Los datos de las carreras se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Registrar Materia
**Como:** Administrador Académico
**Quiero:** registrar una nueva materia asociada a una carrera existente
**Para:** establecer el plan de estudios de las carreras de la EPN

Criterios de aceptación:

- El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.
- El selector de 'Carrera' muestra una lista de las carreras existentes.
- La validación de campos obligatorios funciona correctamente.
- Al enviar el formulario, la materia se guarda con su carrera asociada.
- Se muestra un mensaje de confirmación de registro de materia exitoso.
- La nueva materia aparece en el listado de materias.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Listar Materias
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad
**Para:** consultar el plan de estudios y su organización

Criterios de aceptación:

- Se muestra una tabla o listado con todas las materias registradas.
- Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.
- Los datos de las materias se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Registrar Profesor
**Como:** Administrador Académico
**Quiero:** registrar un nuevo profesor en el sistema con su información básica
**Para:** incorporar al personal docente a la plataforma y gestionarlo

Criterios de aceptación:

- El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.
- Al enviar el formulario, el profesor se guarda exitosamente en el sistema.
- Se muestra un mensaje de confirmación de registro de profesor exitoso.
- El nuevo profesor aparece en el listado de profesores.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Listar Profesores
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todos los profesores registrados
**Para:** consultar y gestionar el personal docente de la EPN

Criterios de aceptación:

- Se muestra una tabla o listado con todos los profesores registrados.
- Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- Los datos de los profesores se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

<!-- --- -->

## PROMPT 3

**Fecha:** 27 sept 2025, 07:12 p m. (UTC)

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
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes ) tambien debes darle el objetivo del sprint debe ser uno comercial

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

### HU: Registrar Facultad
**Como:** Administrador Académico
**Quiero:** registrar una nueva facultad
**Para:** establecer la estructura organizativa fundamental de la EPN y optimizar la gestión inicial de la oferta académica

Criterios de aceptación:

- El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.
- La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.
- Al enviar el formulario, la facultad se guarda exitosamente en el sistema.
- Se muestra un mensaje de confirmación de registro de facultad exitoso.
- La nueva facultad aparece en el listado de facultades.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Listar Facultades
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las facultades registradas
**Para:** consultar y verificar la estructura organizativa de la EPN, mejorando la eficiencia administrativa

Criterios de aceptación:

- Se muestra una tabla o listado con todas las facultades registradas.
- Cada facultad muestra al menos su 'Nombre' y 'Código'.
- Los datos de las facultades se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Registrar Carrera
**Como:** Administrador Académico
**Quiero:** registrar una nueva carrera asociada a una facultad existente
**Para:** expandir la oferta académica dentro de la estructura de la EPN y agilizar la preparación de nuevos programas

Criterios de aceptación:

- El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.
- El selector de 'Facultad' muestra una lista de las facultades existentes.
- La validación de campos obligatorios funciona correctamente.
- Al enviar el formulario, la carrera se guarda con su facultad asociada.
- Se muestra un mensaje de confirmación de registro de carrera exitoso.
- La nueva carrera aparece en el listado de carreras.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Listar Carreras
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las carreras registradas, incluyendo su facultad
**Para:** consultar la oferta académica y su organización dentro de la EPN, facilitando la auditoría y planificación

Criterios de aceptación:

- Se muestra una tabla o listado con todas las carreras registradas.
- Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.
- Los datos de las carreras se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Registrar Materia
**Como:** Administrador Académico
**Quiero:** registrar una nueva materia asociada a una carrera existente
**Para:** establecer el plan de estudios de las carreras de la EPN y asegurar la correcta estructuración curricular

Criterios de aceptación:

- El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.
- El selector de 'Carrera' muestra una lista de las carreras existentes.
- La validación de campos obligatorios funciona correctamente.
- Al enviar el formulario, la materia se guarda con su carrera asociada.
- Se muestra un mensaje de confirmación de registro de materia exitoso.
- La nueva materia aparece en el listado de materias.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Listar Materias
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad
**Para:** consultar el plan de estudios y su organización, mejorando la transparencia y gestión curricular

Criterios de aceptación:

- Se muestra una tabla o listado con todas las materias registradas.
- Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.
- Los datos de las materias se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Registrar Profesor
**Como:** Administrador Académico
**Quiero:** registrar un nuevo profesor en el sistema con su información básica
**Para:** incorporar al personal docente a la plataforma y agilizar la asignación de recursos humanos

Criterios de aceptación:

- El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.
- Al enviar el formulario, el profesor se guarda exitosamente en el sistema.
- Se muestra un mensaje de confirmación de registro de profesor exitoso.
- El nuevo profesor aparece en el listado de profesores.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Listar Profesores
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todos los profesores registrados
**Para:** consultar y gestionar el personal docente de la EPN, mejorando la administración de recursos humanos

Criterios de aceptación:

- Se muestra una tabla o listado con todos los profesores registrados.
- Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- Los datos de los profesores se cargan correctamente desde el backend.

**Story Points:** 3
**Prioridad:** Alta (1)

<!-- --- -->

## PROMPT 4

**Fecha:** 28 sept 2025, 04:58 a m. (UTC)

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
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes ) tambien debes darle el objetivo del sprint debe ser uno comercial

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

### HU sin título
**Como:** 
**Quiero:** 
**Para:** 
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: Iniciar Sesión en Poliacredita
**Como:** usuario EPN
**Quiero:** acceder con mis credenciales institucionales
**Para:** usar las funcionalidades de mi rol

Criterios de aceptación:

- Se muestra formulario con campos Email, Contraseña, y selector de Rol (temporal)
- Al ingresar credenciales válidas, el usuario es redirigido al Dashboard
- Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- Existe un enlace para 'Olvidé mi contraseña'

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Visualizar Dashboard General
**Como:** usuario autenticado
**Quiero:** ver un resumen de la información clave del sistema
**Para:** obtener una visión rápida del estado de la EPN

Criterios de aceptación:

- Al iniciar sesión, se redirige al Dashboard por defecto
- El Dashboard muestra el conteo total de Facultades
- El Dashboard muestra el conteo total de Carreras
- El Dashboard muestra el conteo total de Profesores
- Se muestra una sección de 'Últimos Cambios' con acciones y fechas
- Se muestran 'Acciones Rápidas' para 'Nueva Facultad', 'Nueva Carrera', 'Nuevo Profesor'

**Story Points:** 5
**Prioridad:** Alta (1)

---

### HU: Listar Facultades Registradas
**Como:** administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

Criterios de aceptación:

- Existe una página dedicada a 'Facultades' accesible desde la navegación principal
- Se muestra una tabla con 'Código', 'Nombre', 'Autoridades', 'Carreras' y 'Acciones' para cada facultad
- La tabla permite ver detalles, editar o eliminar una facultad
- Los datos se cargan correctamente en la tabla
- Se muestra el botón 'Nueva Facultad'

**Story Points:** 8
**Prioridad:** Alta (1)

---

### HU: Registrar Nueva Facultad
**Como:** administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

Criterios de aceptación:

- Al hacer clic en 'Nueva Facultad' (desde Dashboard o listado), se abre un formulario para el registro
- El formulario incluye campos para 'Código' y 'Nombre' de la facultad
- Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- Al enviar datos inválidos (ej. código duplicado), se muestra un mensaje de error claro

**Story Points:** 5
**Prioridad:** Alta (1)

---

### HU: Registrar Nueva Carrera
**Como:** administrador del sistema
**Quiero:** agregar una nueva carrera al sistema
**Para:** organizar la oferta académica dentro de las facultades

Criterios de aceptación:

- Al hacer clic en 'Nueva Carrera' (desde Dashboard), se abre un formulario de registro
- El formulario incluye campos para 'Nombre de la Carrera', y un selector para la 'Facultad' a la que pertenece
- Al enviar datos válidos, la carrera se guarda y se muestra el mensaje de éxito
- Al enviar datos inválidos, se muestra un mensaje de error claro

**Story Points:** 5
**Prioridad:** Alta (1)

---

### HU: Registrar Nuevo Profesor
**Como:** administrador del sistema
**Quiero:** agregar un nuevo profesor al sistema
**Para:** incluir al personal docente en la gestión académica

Criterios de aceptación:

- Al hacer clic en 'Nuevo Profesor' (desde Dashboard), se abre un formulario de registro
- El formulario incluye campos para el 'Nombre', 'Email', y otros datos relevantes del profesor (ej. 'Departamento')
- Al enviar datos válidos, el profesor se guarda y se muestra el mensaje de éxito
- Al enviar datos inválidos (ej. email duplicado), se muestra un mensaje de error claro

**Story Points:** 5
**Prioridad:** Alta (1)

---

### HU: Buscar Facultades por Nombre o Código
**Como:** administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

Criterios de aceptación:

- Existe un campo de búsqueda ('Buscar por Nombre o Código') en la página de listado de Facultades
- Al escribir texto en el campo de búsqueda, la tabla se filtra y muestra solo las facultades que coinciden
- La búsqueda debe ser insensible a mayúsculas y minúsculas
- Al borrar el texto de búsqueda, se muestra el listado completo de facultades

**Story Points:** 3
**Prioridad:** Media (2)

<!-- --- -->

## PROMPT 5

**Fecha:** 28 sept 2025, 05:02 a m. (UTC)

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
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes ) tambien debes darle el objetivo del sprint debe ser uno comercial

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

- El sistema muestra un formulario de inicio de sesión con campos para email institucional
- El sistema muestra un campo para contraseña
- Al ingresar credenciales válidas, el usuario es redirigido al Dashboard
- Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- Existe un enlace para '¿Olvidaste mi contraseña?'

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Visualizar Dashboard General
**Como:** Administrador
**Quiero:** ver un resumen ejecutivo de las métricas clave del sistema
**Para:** obtener una visión rápida del estado general de las facultades, carreras y usuarios

Criterios de aceptación:

- El Dashboard muestra el 'Total Facultades' registradas
- El Dashboard muestra el 'Total Carreras' registradas
- El Dashboard muestra el 'Total Profesores' registrados
- El Dashboard muestra una sección de 'Últimos Cambios' con Acción, Descripción y Fecha
- El Dashboard muestra una sección de 'Acciones Rápidas' con botones para 'Nueva Facultad', 'Nueva Carrera', 'Nuevo Profesor'

**Story Points:** 3
**Prioridad:** Media (2)

---

### HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

Criterios de aceptación:

- Existe una página dedicada a 'Facultades' accesible desde la navegación principal
- Se muestra una tabla con 'Código', 'Nombre', 'Autoridades', 'Carreras' y 'Acciones' para cada facultad
- La tabla de facultades soporta paginación
- Los datos se cargan correctamente en la tabla
- Se muestra el botón 'Nueva Facultad'

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

- Existe un selector de filtro ('Todas las Carreras') en la página de listado de Facultades
- Al seleccionar una opción del filtro, la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- Las opciones del filtro deben ser claras y relevantes (ej. por tipo de carrera o decano si aplica en el contexto)

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
- La vista detallada muestra toda la información de la facultad (código, nombre, descripción, decano, lista de carreras asociadas)

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

**Story Points:** 5
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

**Story Points:** 5
**Prioridad:** Alta (1)

<!-- --- -->

## PROMPT 6

**Fecha:** 28 sept 2025, 05:05 a m. (UTC)

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
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes ) tambien debes darle el objetivo del sprint debe ser uno comercial

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

- El sistema muestra un formulario de inicio de sesión con campos para email institucional
- El sistema muestra un campo para contraseña
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

**Story Points:** 3
**Prioridad:** Media (2)

---

### HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

Criterios de aceptación:

- El Dashboard muestra una sección de 'Últimos Cambios' con columnas 'Acción', 'Descripción', 'Fecha'
- La tabla muestra las 5-10 últimas acciones relevantes del sistema (ej. creación, actualización, eliminación, asignación)
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
- Esta sección incluye botones o enlaces para 'Nueva Facultad'
- Esta sección incluye botones o enlaces para 'Nueva Carrera'
- Esta sección incluye botones o enlaces para 'Nuevo Profesor'

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
- La vista detallada muestra toda la información de la facultad (código, nombre, descripción, decano, lista de carreras asociadas)

**Story Points:** 2
**Prioridad:** Media (2)

<!-- --- -->

## PROMPT 7

**Fecha:** 29 sept 2025, 02:52 a m. (UTC)

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

ten en cuenta que para el desarrollo (codficacion) se va usar la IA lo que reduce significativamente la estimacion de las horas de esfuerz para las tareas y en general para las hu 

te comento que mi historico de sp para las hu que logro mi equipo en anteriores sprints es de :

Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint

No repitas títulos de tareas; usa verbos en infinitivo.
ACCION :
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes ) tambien debes darle el objetivo del sprint debe ser uno comercial
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

- El sistema muestra un formulario de inicio de sesión con campos para email institucional
- El sistema muestra un campo para contraseña
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
- La vista detallada muestra toda la información de la facultad (código, nombre, descripción, decano, lista de carreras asociadas)

**Story Points:** 2
**Prioridad:** Media (2)

<!-- --- -->

## PROMPT 8

**Fecha:** 29 sept 2025, 02:58 a m. (UTC)

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

ten en cuenta que para el desarrollo se va usar la inteligenca artificial  lo que reduce significativamente la estimacion de las horas para las tareas en el caso del front el diseño de las pantallas toma como maximo 20 minutos para el caso del back es igual ayudame significativamente el uso de la inteligencia artificial 

te comento que mi historico de sp para las hu que logro mi equipo en anteriores sprints es de :

Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint

No repitas títulos de tareas; usa verbos en infinitivo.
ACCION :
Crea mi sprint planning 1 con las hus representadas en los prototipos (imagenes ) tambien debes darle el objetivo del sprint debe ser uno comercial
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

- El sistema muestra un formulario de inicio de sesión con campos para email institucional
- El sistema muestra un campo para contraseña
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
- La vista detallada muestra toda la información de la facultad (código, nombre, descripción, decano, lista de carreras asociadas)

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
