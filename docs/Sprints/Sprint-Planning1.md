

<!-- SPRINT:Sprint_Planning_1_Historias_de_Usuario:START -->

# 📌 Sprint Planning 1 – Historias de Usuario

## HU: Registrar Facultad
**Como:** Administrador Académico
**Quiero:** registrar una nueva facultad
**Para:** establecer la estructura organizativa fundamental de la EPN

**Criterios de aceptación**
- El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.
- La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.
- Al enviar el formulario, la facultad se guarda exitosamente en el sistema.
- Se muestra un mensaje de confirmación de registro de facultad exitoso.
- La nueva facultad aparece en el listado de facultades.

**Story Points:** 3 · **Prioridad:** Alta (1)

---

## HU: Listar Facultades
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las facultades registradas
**Para:** consultar y verificar la estructura organizativa de la EPN

**Criterios de aceptación**
- Se muestra una tabla o listado con todas las facultades registradas.
- Cada facultad muestra al menos su 'Nombre' y 'Código'.
- Los datos de las facultades se cargan correctamente desde el backend.

**Story Points:** 3 · **Prioridad:** Alta (1)

---

## HU: Registrar Carrera
**Como:** Administrador Académico
**Quiero:** registrar una nueva carrera asociada a una facultad existente
**Para:** expandir la oferta académica dentro de la estructura de la EPN

**Criterios de aceptación**
- El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.
- El selector de 'Facultad' muestra una lista de las facultades existentes.
- La validación de campos obligatorios funciona correctamente.
- Al enviar el formulario, la carrera se guarda con su facultad asociada.
- Se muestra un mensaje de confirmación de registro de carrera exitoso.
- La nueva carrera aparece en el listado de carreras.

**Story Points:** 4 · **Prioridad:** Alta (1)

---

## HU: Listar Carreras
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las carreras registradas, incluyendo su facultad
**Para:** consultar la oferta académica y su organización dentro de la EPN

**Criterios de aceptación**
- Se muestra una tabla o listado con todas las carreras registradas.
- Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.
- Los datos de las carreras se cargan correctamente desde el backend.

**Story Points:** 3 · **Prioridad:** Alta (1)

---

## HU: Registrar Materia
**Como:** Administrador Académico
**Quiero:** registrar una nueva materia asociada a una carrera existente
**Para:** establecer el plan de estudios de las carreras de la EPN

**Criterios de aceptación**
- El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.
- El selector de 'Carrera' muestra una lista de las carreras existentes.
- La validación de campos obligatorios funciona correctamente.
- Al enviar el formulario, la materia se guarda con su carrera asociada.
- Se muestra un mensaje de confirmación de registro de materia exitoso.
- La nueva materia aparece en el listado de materias.

**Story Points:** 4 · **Prioridad:** Alta (1)

---

## HU: Listar Materias
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad
**Para:** consultar el plan de estudios y su organización

**Criterios de aceptación**
- Se muestra una tabla o listado con todas las materias registradas.
- Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.
- Los datos de las materias se cargan correctamente desde el backend.

**Story Points:** 3 · **Prioridad:** Alta (1)

---

## HU: Registrar Profesor
**Como:** Administrador Académico
**Quiero:** registrar un nuevo profesor en el sistema con su información básica
**Para:** incorporar al personal docente a la plataforma y gestionarlo

**Criterios de aceptación**
- El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.
- Al enviar el formulario, el profesor se guarda exitosamente en el sistema.
- Se muestra un mensaje de confirmación de registro de profesor exitoso.
- El nuevo profesor aparece en el listado de profesores.

**Story Points:** 3 · **Prioridad:** Alta (1)

---

## HU: Listar Profesores
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todos los profesores registrados
**Para:** consultar y gestionar el personal docente de la EPN

**Criterios de aceptación**
- Se muestra una tabla o listado con todos los profesores registrados.
- Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- Los datos de los profesores se cargan correctamente desde el backend.

**Story Points:** 3 · **Prioridad:** Alta (1)

> _Actualizado: 2025-09-27T18:59:26.781Z_

<!-- SPRINT:Sprint_Planning_1_Historias_de_Usuario:END -->

## PROMPT 1

**Fecha:** 27 sept 2025, 07:00 p m. (UTC)

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
