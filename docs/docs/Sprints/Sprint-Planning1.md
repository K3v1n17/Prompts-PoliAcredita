

<!-- SPRINT:Sprint_Planning_1_Historias_de_Usuario:START -->

## Índice


1. [PROMPT 1](#prompt-1)
2. [PROMPT 2](#prompt-2)
3. [PROMPT 3](#prompt-3)
4. [PROMPT 4](#prompt-4)
5. [PROMPT 5](#prompt-5)
6. [PROMPT 6](#prompt-6)
7. [PROMPT 7](#prompt-7)
8. [PROMPT 8](#prompt-8)
9. [PROMPT 9](#prompt-9)
10. [PROMPT 10](#prompt-10)   
11. [PROMPT 11](#prompt-11)
12. [PROMPT 12](#prompt-12)
13. [PROMPT 13](#prompt-13)
14. [PROMPT 14](#prompt-14)
15. [PROMPT 15](#prompt-15)
16. [PROMPT 16](#prompt-16)
17. [PROMPT 17](#prompt-17)
18. [PROMPT 18](#prompt-18)
19. [PROMPT 19](#prompt-19)
20. [PROMPT 20](#prompt-20)
21. [PROMPT 21](#prompt-21)
22. [PROMPT 22](#prompt-22)
23. [PROMPT 23](#prompt-23)
24. [PROMPT 24](#prompt-24)

**Prompt:

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

### 🎯 HU: Registrar Facultad
**Como:** Administrador Académico
**Quiero:** registrar una nueva facultad
**Para:** establecer la estructura organizativa fundamental de la EPN

#### Criterios de Aceptación

- ✅ El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.
- ✅ La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.
- ✅ Al enviar el formulario, la facultad se guarda exitosamente en el sistema.
- ✅ Se muestra un mensaje de confirmación de registro de facultad exitoso.
- ✅ La nueva facultad aparece en el listado de facultades.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las facultades registradas
**Para:** consultar y verificar la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todas las facultades registradas.
- ✅ Cada facultad muestra al menos su 'Nombre' y 'Código'.
- ✅ Los datos de las facultades se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Carrera
**Como:** Administrador Académico
**Quiero:** registrar una nueva carrera asociada a una facultad existente
**Para:** expandir la oferta académica dentro de la estructura de la EPN

#### Criterios de Aceptación

- ✅ El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.
- ✅ El selector de 'Facultad' muestra una lista de las facultades existentes.
- ✅ La validación de campos obligatorios funciona correctamente.
- ✅ Al enviar el formulario, la carrera se guarda con su facultad asociada.
- ✅ Se muestra un mensaje de confirmación de registro de carrera exitoso.
- ✅ La nueva carrera aparece en el listado de carreras.


**Story Points:** 4 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Carreras
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las carreras registradas, incluyendo su facultad
**Para:** consultar la oferta académica y su organización dentro de la EPN

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todas las carreras registradas.
- ✅ Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.
- ✅ Los datos de las carreras se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Materia
**Como:** Administrador Académico
**Quiero:** registrar una nueva materia asociada a una carrera existente
**Para:** establecer el plan de estudios de las carreras de la EPN

#### Criterios de Aceptación

- ✅ El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.
- ✅ El selector de 'Carrera' muestra una lista de las carreras existentes.
- ✅ La validación de campos obligatorios funciona correctamente.
- ✅ Al enviar el formulario, la materia se guarda con su carrera asociada.
- ✅ Se muestra un mensaje de confirmación de registro de materia exitoso.
- ✅ La nueva materia aparece en el listado de materias.


**Story Points:** 4 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Materias
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad
**Para:** consultar el plan de estudios y su organización

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todas las materias registradas.
- ✅ Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.
- ✅ Los datos de las materias se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Profesor
**Como:** Administrador Académico
**Quiero:** registrar un nuevo profesor en el sistema con su información básica
**Para:** incorporar al personal docente a la plataforma y gestionarlo

#### Criterios de Aceptación

- ✅ El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- ✅ La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.
- ✅ Al enviar el formulario, el profesor se guarda exitosamente en el sistema.
- ✅ Se muestra un mensaje de confirmación de registro de profesor exitoso.
- ✅ El nuevo profesor aparece en el listado de profesores.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Profesores
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todos los profesores registrados
**Para:** consultar y gestionar el personal docente de la EPN

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todos los profesores registrados.
- ✅ Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- ✅ Los datos de los profesores se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)

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

### 🎯 HU: Registrar Facultad
**Como:** Administrador Académico
**Quiero:** registrar una nueva facultad
**Para:** establecer la estructura organizativa fundamental de la EPN

#### Criterios de Aceptación

- ✅ El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.
- ✅ La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.
- ✅ Al enviar el formulario, la facultad se guarda exitosamente en el sistema.
- ✅ Se muestra un mensaje de confirmación de registro de facultad exitoso.
- ✅ La nueva facultad aparece en el listado de facultades.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las facultades registradas
**Para:** consultar y verificar la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todas las facultades registradas.
- ✅ Cada facultad muestra al menos su 'Nombre' y 'Código'.
- ✅ Los datos de las facultades se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Carrera
**Como:** Administrador Académico
**Quiero:** registrar una nueva carrera asociada a una facultad existente
**Para:** expandir la oferta académica dentro de la estructura de la EPN

#### Criterios de Aceptación

- ✅ El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.
- ✅ El selector de 'Facultad' muestra una lista de las facultades existentes.
- ✅ La validación de campos obligatorios funciona correctamente.
- ✅ Al enviar el formulario, la carrera se guarda con su facultad asociada.
- ✅ Se muestra un mensaje de confirmación de registro de carrera exitoso.
- ✅ La nueva carrera aparece en el listado de carreras.


**Story Points:** 4 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Carreras
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las carreras registradas, incluyendo su facultad
**Para:** consultar la oferta académica y su organización dentro de la EPN

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todas las carreras registradas.
- ✅ Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.
- ✅ Los datos de las carreras se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Materia
**Como:** Administrador Académico
**Quiero:** registrar una nueva materia asociada a una carrera existente
**Para:** establecer el plan de estudios de las carreras de la EPN

#### Criterios de Aceptación

- ✅ El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.
- ✅ El selector de 'Carrera' muestra una lista de las carreras existentes.
- ✅ La validación de campos obligatorios funciona correctamente.
- ✅ Al enviar el formulario, la materia se guarda con su carrera asociada.
- ✅ Se muestra un mensaje de confirmación de registro de materia exitoso.
- ✅ La nueva materia aparece en el listado de materias.


**Story Points:** 4 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Materias
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad
**Para:** consultar el plan de estudios y su organización

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todas las materias registradas.
- ✅ Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.
- ✅ Los datos de las materias se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Profesor
**Como:** Administrador Académico
**Quiero:** registrar un nuevo profesor en el sistema con su información básica
**Para:** incorporar al personal docente a la plataforma y gestionarlo

#### Criterios de Aceptación

- ✅ El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- ✅ La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.
- ✅ Al enviar el formulario, el profesor se guarda exitosamente en el sistema.
- ✅ Se muestra un mensaje de confirmación de registro de profesor exitoso.
- ✅ El nuevo profesor aparece en el listado de profesores.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Profesores
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todos los profesores registrados
**Para:** consultar y gestionar el personal docente de la EPN

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todos los profesores registrados.
- ✅ Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- ✅ Los datos de los profesores se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)

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

### 🎯 HU: Registrar Facultad
**Como:** Administrador Académico
**Quiero:** registrar una nueva facultad
**Para:** establecer la estructura organizativa fundamental de la EPN y optimizar la gestión inicial de la oferta académica

#### Criterios de Aceptación

- ✅ El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.
- ✅ La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.
- ✅ Al enviar el formulario, la facultad se guarda exitosamente en el sistema.
- ✅ Se muestra un mensaje de confirmación de registro de facultad exitoso.
- ✅ La nueva facultad aparece en el listado de facultades.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las facultades registradas
**Para:** consultar y verificar la estructura organizativa de la EPN, mejorando la eficiencia administrativa

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todas las facultades registradas.
- ✅ Cada facultad muestra al menos su 'Nombre' y 'Código'.
- ✅ Los datos de las facultades se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Carrera
**Como:** Administrador Académico
**Quiero:** registrar una nueva carrera asociada a una facultad existente
**Para:** expandir la oferta académica dentro de la estructura de la EPN y agilizar la preparación de nuevos programas

#### Criterios de Aceptación

- ✅ El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.
- ✅ El selector de 'Facultad' muestra una lista de las facultades existentes.
- ✅ La validación de campos obligatorios funciona correctamente.
- ✅ Al enviar el formulario, la carrera se guarda con su facultad asociada.
- ✅ Se muestra un mensaje de confirmación de registro de carrera exitoso.
- ✅ La nueva carrera aparece en el listado de carreras.


**Story Points:** 4 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Carreras
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las carreras registradas, incluyendo su facultad
**Para:** consultar la oferta académica y su organización dentro de la EPN, facilitando la auditoría y planificación

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todas las carreras registradas.
- ✅ Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.
- ✅ Los datos de las carreras se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Materia
**Como:** Administrador Académico
**Quiero:** registrar una nueva materia asociada a una carrera existente
**Para:** establecer el plan de estudios de las carreras de la EPN y asegurar la correcta estructuración curricular

#### Criterios de Aceptación

- ✅ El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.
- ✅ El selector de 'Carrera' muestra una lista de las carreras existentes.
- ✅ La validación de campos obligatorios funciona correctamente.
- ✅ Al enviar el formulario, la materia se guarda con su carrera asociada.
- ✅ Se muestra un mensaje de confirmación de registro de materia exitoso.
- ✅ La nueva materia aparece en el listado de materias.


**Story Points:** 4 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Materias
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad
**Para:** consultar el plan de estudios y su organización, mejorando la transparencia y gestión curricular

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todas las materias registradas.
- ✅ Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.
- ✅ Los datos de las materias se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Profesor
**Como:** Administrador Académico
**Quiero:** registrar un nuevo profesor en el sistema con su información básica
**Para:** incorporar al personal docente a la plataforma y agilizar la asignación de recursos humanos

#### Criterios de Aceptación

- ✅ El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- ✅ La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.
- ✅ Al enviar el formulario, el profesor se guarda exitosamente en el sistema.
- ✅ Se muestra un mensaje de confirmación de registro de profesor exitoso.
- ✅ El nuevo profesor aparece en el listado de profesores.


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Profesores
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todos los profesores registrados
**Para:** consultar y gestionar el personal docente de la EPN, mejorando la administración de recursos humanos

#### Criterios de Aceptación

- ✅ Se muestra una tabla o listado con todos los profesores registrados.
- ✅ Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- ✅ Los datos de los profesores se cargan correctamente desde el backend.


**Story Points:** 3 | **Prioridad:** Alta (1)

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** usuario EPN
**Quiero:** acceder con mis credenciales institucionales
**Para:** usar las funcionalidades de mi rol

#### Criterios de Aceptación

- ✅ Se muestra formulario con campos Email, Contraseña, y selector de Rol (temporal)
- ✅ Al ingresar credenciales válidas, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para 'Olvidé mi contraseña'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Dashboard General
**Como:** usuario autenticado
**Quiero:** ver un resumen de la información clave del sistema
**Para:** obtener una visión rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ Al iniciar sesión, se redirige al Dashboard por defecto
- ✅ El Dashboard muestra el conteo total de Facultades
- ✅ El Dashboard muestra el conteo total de Carreras
- ✅ El Dashboard muestra el conteo total de Profesores
- ✅ Se muestra una sección de 'Últimos Cambios' con acciones y fechas
- ✅ Se muestran 'Acciones Rápidas' para 'Nueva Facultad', 'Nueva Carrera', 'Nuevo Profesor'


**Story Points:** 5 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Facultades' accesible desde la navegación principal
- ✅ Se muestra una tabla con 'Código', 'Nombre', 'Autoridades', 'Carreras' y 'Acciones' para cada facultad
- ✅ La tabla permite ver detalles, editar o eliminar una facultad
- ✅ Los datos se cargan correctamente en la tabla
- ✅ Se muestra el botón 'Nueva Facultad'


**Story Points:** 8 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nueva Facultad
**Como:** administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en 'Nueva Facultad' (desde Dashboard o listado), se abre un formulario para el registro
- ✅ El formulario incluye campos para 'Código' y 'Nombre' de la facultad
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código duplicado), se muestra un mensaje de error claro


**Story Points:** 5 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nueva Carrera
**Como:** administrador del sistema
**Quiero:** agregar una nueva carrera al sistema
**Para:** organizar la oferta académica dentro de las facultades

#### Criterios de Aceptación

- ✅ Al hacer clic en 'Nueva Carrera' (desde Dashboard), se abre un formulario de registro
- ✅ El formulario incluye campos para 'Nombre de la Carrera', y un selector para la 'Facultad' a la que pertenece
- ✅ Al enviar datos válidos, la carrera se guarda y se muestra el mensaje de éxito
- ✅ Al enviar datos inválidos, se muestra un mensaje de error claro


**Story Points:** 5 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Profesor
**Como:** administrador del sistema
**Quiero:** agregar un nuevo profesor al sistema
**Para:** incluir al personal docente en la gestión académica

#### Criterios de Aceptación

- ✅ Al hacer clic en 'Nuevo Profesor' (desde Dashboard), se abre un formulario de registro
- ✅ El formulario incluye campos para el 'Nombre', 'Email', y otros datos relevantes del profesor (ej. 'Departamento')
- ✅ Al enviar datos válidos, el profesor se guarda y se muestra el mensaje de éxito
- ✅ Al enviar datos inválidos (ej. email duplicado), se muestra un mensaje de error claro


**Story Points:** 5 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Nombre o Código
**Como:** administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por Nombre o Código') en la página de listado de Facultades
- ✅ Al escribir texto en el campo de búsqueda, la tabla se filtra y muestra solo las facultades que coinciden
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 3 | **Prioridad:** Media (2)

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario de inicio de sesión con campos para email institucional
- ✅ El sistema muestra un campo para contraseña
- ✅ Al ingresar credenciales válidas, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste mi contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Dashboard General
**Como:** Administrador
**Quiero:** ver un resumen ejecutivo de las métricas clave del sistema
**Para:** obtener una visión rápida del estado general de las facultades, carreras y usuarios

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' registradas
- ✅ El Dashboard muestra el 'Total Carreras' registradas
- ✅ El Dashboard muestra el 'Total Profesores' registrados
- ✅ El Dashboard muestra una sección de 'Últimos Cambios' con Acción, Descripción y Fecha
- ✅ El Dashboard muestra una sección de 'Acciones Rápidas' con botones para 'Nueva Facultad', 'Nueva Carrera', 'Nuevo Profesor'


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Facultades' accesible desde la navegación principal
- ✅ Se muestra una tabla con 'Código', 'Nombre', 'Autoridades', 'Carreras' y 'Acciones' para cada facultad
- ✅ La tabla de facultades soporta paginación
- ✅ Los datos se cargan correctamente en la tabla
- ✅ Se muestra el botón 'Nueva Facultad'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Nombre o Código
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por Nombre o Código') en la página de listado de Facultades
- ✅ Al escribir texto en el campo de búsqueda, la tabla se filtra y muestra solo las facultades que coinciden
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por criterios específicos

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro, la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ Las opciones del filtro deben ser claras y relevantes (ej. por tipo de carrera o decano si aplica en el contexto)


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en 'Nueva Facultad' (desde Dashboard o listado), se abre un formulario de registro
- ✅ El formulario incluye campos para 'Código' y 'Nombre' de la facultad
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la facultad si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Detalle de Facultad
**Como:** Administrador del sistema
**Quiero:** ver la información completa de una facultad
**Para:** consultar sus detalles específicos

#### Criterios de Aceptación

- ✅ Existe un icono de 'Ver' (ojo) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono 'Ver', se navega a una vista detallada de la facultad
- ✅ La vista detallada muestra toda la información de la facultad (código, nombre, descripción, decano, lista de carreras asociadas)


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para Código, Nombre, Modalidad, Duración en años
- ✅ Existe un selector para asociar la carrera a una Facultad existente
- ✅ Existe un selector para asignar un Coordinador de una lista de usuarios existentes
- ✅ El Código de la carrera es validado como único dentro de la facultad seleccionada
- ✅ Al guardar, la carrera queda registrada exitosamente


**Story Points:** 5 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Profesor
**Como:** Administrador
**Quiero:** ingresar la información de un nuevo profesor
**Para:** registrarlo en el sistema

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para Cédula, Nombres, Apellidos, Email, Teléfono, Facultad, Título Académico
- ✅ La Cédula del profesor es validada como única en el sistema
- ✅ El Email del profesor es validado como único en el sistema
- ✅ La Facultad se selecciona de una lista preexistente de facultades
- ✅ Al guardar, el profesor queda registrado exitosamente


**Story Points:** 5 | **Prioridad:** Alta (1)

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario de inicio de sesión con campos para email institucional
- ✅ El sistema muestra un campo para contraseña
- ✅ Al ingresar credenciales válidas, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste mi contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y profesores
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' registradas
- ✅ El Dashboard muestra el 'Total Carreras' registradas
- ✅ El Dashboard muestra el 'Total Profesores' registrados


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Últimos Cambios' con columnas 'Acción', 'Descripción', 'Fecha'
- ✅ La tabla muestra las 5-10 últimas acciones relevantes del sistema (ej. creación, actualización, eliminación, asignación)
- ✅ Cada acción muestra el tipo de acción, una breve descripción y la fecha en que ocurrió


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación la ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acciones Rápidas'
- ✅ Esta sección incluye botones o enlaces para 'Nueva Facultad'
- ✅ Esta sección incluye botones o enlaces para 'Nueva Carrera'
- ✅ Esta sección incluye botones o enlaces para 'Nuevo Profesor'


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Facultades' accesible desde la navegación principal
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Autoridades', 'Carreras' y 'Acciones' para cada facultad
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón 'Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Nombre o Código
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por Nombre o Código') en la página de listado de Facultades
- ✅ Al escribir texto en el campo de búsqueda, la tabla se filtra y muestra solo las facultades que coinciden
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por criterios específicos

#### Criterios de Aceptación

- ✅ Existe un selector de filtro (ej. 'Todas las Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro, la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ Las opciones del filtro deben ser claras y relevantes (ej. por tipo de carrera o decano si aplica en el contexto)


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en 'Nueva Facultad' (desde Dashboard o listado), se abre un formulario de registro
- ✅ El formulario incluye campos para 'Código' y 'Nombre' de la facultad
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la facultad si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Detalle de Facultad
**Como:** Administrador del sistema
**Quiero:** ver la información completa de una facultad
**Para:** consultar sus detalles específicos

#### Criterios de Aceptación

- ✅ Existe un icono de 'Ver' (ojo) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono 'Ver', se navega a una vista detallada de la facultad
- ✅ La vista detallada muestra toda la información de la facultad (código, nombre, descripción, decano, lista de carreras asociadas)


**Story Points:** 2 | **Prioridad:** Media (2)

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario de inicio de sesión con campos para email institucional
- ✅ El sistema muestra un campo para contraseña
- ✅ Al ingresar credenciales válidas, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste mi contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y profesores
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' registradas
- ✅ El Dashboard muestra el 'Total Carreras' registradas
- ✅ El Dashboard muestra el 'Total Profesores' registrados
- ✅ Existe un botón 'Ver' junto a cada contador para navegar al detalle


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Últimos Cambios' con columnas 'Acción', 'Descripción', 'Fecha'
- ✅ La tabla muestra las últimas acciones relevantes (ej. creación de carrera, actualización de profesor, eliminación de facultad)
- ✅ Cada acción muestra el tipo de acción, una breve descripción y la fecha en que ocurrió


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación la ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acciones Rápidas'
- ✅ Esta sección incluye un botón o enlace para 'Nueva Facultad'
- ✅ Esta sección incluye un botón o enlace para 'Nueva Carrera'
- ✅ Esta sección incluye un botón o enlace para 'Nuevo Profesor'


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Facultades' accesible desde la navegación principal
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Autoridades', 'Carreras' y 'Acciones' para cada facultad
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón 'Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Nombre o Código
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por Nombre o Código') en la página de listado de Facultades
- ✅ Al escribir texto en el campo de búsqueda, la tabla se filtra y muestra solo las facultades que coinciden
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por criterios específicos

#### Criterios de Aceptación

- ✅ Existe un selector de filtro (ej. 'Todas las Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro, la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ Las opciones del filtro deben ser claras y relevantes (ej. por tipo de carrera o decano si aplica en el contexto)


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en 'Nueva Facultad' (desde Dashboard o listado), se abre un formulario de registro
- ✅ El formulario incluye campos para 'Código' y 'Nombre' de la facultad
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la facultad si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Detalle de Facultad
**Como:** Administrador del sistema
**Quiero:** ver la información completa de una facultad
**Para:** consultar sus detalles específicos

#### Criterios de Aceptación

- ✅ Existe un icono de 'Ver' (ojo) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono 'Ver', se navega a una vista detallada de la facultad
- ✅ La vista detallada muestra toda la información de la facultad (código, nombre, descripción, decano, lista de carreras asociadas)


**Story Points:** 2 | **Prioridad:** Media (2)

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario de inicio de sesión con campos para email institucional
- ✅ El sistema muestra un campo para contraseña
- ✅ Al ingresar credenciales válidas, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste mi contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y profesores
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' registradas
- ✅ El Dashboard muestra el 'Total Carreras' registradas
- ✅ El Dashboard muestra el 'Total Profesores' registrados
- ✅ Existe un botón 'Ver' junto a cada contador para navegar al detalle


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Últimos Cambios' con columnas 'Acción', 'Descripción', 'Fecha'
- ✅ La tabla muestra las últimas acciones relevantes (ej. creación de carrera, actualización de profesor, eliminación de facultad)
- ✅ Cada acción muestra el tipo de acción, una breve descripción y la fecha en que ocurrió


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación la ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acciones Rápidas'
- ✅ Esta sección incluye un botón o enlace para 'Nueva Facultad'
- ✅ Esta sección incluye un botón o enlace para 'Nueva Carrera'
- ✅ Esta sección incluye un botón o enlace para 'Nuevo Profesor'


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Facultades' accesible desde la navegación principal
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Autoridades', 'Carreras' y 'Acciones' para cada facultad
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón 'Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Nombre o Código
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por Nombre o Código') en la página de listado de Facultades
- ✅ Al escribir texto en el campo de búsqueda, la tabla se filtra y muestra solo las facultades que coinciden
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por criterios específicos

#### Criterios de Aceptación

- ✅ Existe un selector de filtro (ej. 'Todas las Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro, la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ Las opciones del filtro deben ser claras y relevantes (ej. por tipo de carrera o decano si aplica en el contexto)


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en 'Nueva Facultad' (desde Dashboard o listado), se abre un formulario de registro
- ✅ El formulario incluye campos para 'Código' y 'Nombre' de la facultad
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la facultad si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Detalle de Facultad
**Como:** Administrador del sistema
**Quiero:** ver la información completa de una facultad
**Para:** consultar sus detalles específicos

#### Criterios de Aceptación

- ✅ Existe un icono de 'Ver' (ojo) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono 'Ver', se navega a una vista detallada de la facultad
- ✅ La vista detallada muestra toda la información de la facultad (código, nombre, descripción, decano, lista de carreras asociadas)


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para Código, Nombre, Modalidad, Duración en años
- ✅ Existe un selector para asociar la carrera a una Facultad existente
- ✅ Existe un selector para asignar un Coordinador de una lista de usuarios existentes
- ✅ El Código de la carrera es validado como único dentro de la facultad seleccionada
- ✅ Al guardar, la carrera queda registrada exitosamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Profesor
**Como:** Administrador
**Quiero:** ingresar la información de un nuevo profesor
**Para:** registrarlo en el sistema

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para Cédula, Nombres, Apellidos, Email, Teléfono, Facultad, Título Académico
- ✅ La Cédula del profesor es validada como única en el sistema
- ✅ El Email del profesor es validado como único en el sistema
- ✅ La Facultad se selecciona de una lista preexistente de facultades
- ✅ Al guardar, el profesor queda registrado exitosamente


**Story Points:** 3 | **Prioridad:** Alta (1)

<!-- --- -->

## PROMPT 9

**Fecha:** 29 sept 2025, 03:10 a m. (UTC)

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

Para el desarrollo se utilizará inteligencia artificial, lo que reduce drásticamente la estimación de horas por tarea. Gracias a la asistencia de Copilot Agent, cada actividad se resuelve con gran agilidad:

Front-end: el diseño de pantallas se completa en un rango de 0 a 1 hora máximo.

Back-end: las implementaciones siguen la misma dinámica, con una duración de 0 a 1 hora máximo por tarea.

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario de inicio de sesión con campos para email institucional
- ✅ El sistema muestra un campo para contraseña
- ✅ Al ingresar credenciales válidas, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste mi contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y profesores
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' registradas
- ✅ El Dashboard muestra el 'Total Carreras' registradas
- ✅ El Dashboard muestra el 'Total Profesores' registrados
- ✅ Existe un botón 'Ver' junto a cada contador para navegar al detalle


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Últimos Cambios' con columnas 'Acción', 'Descripción', 'Fecha'
- ✅ La tabla muestra las últimas acciones relevantes (ej. creación de carrera, actualización de profesor, eliminación de facultad)
- ✅ Cada acción muestra el tipo de acción, una breve descripción y la fecha en que ocurrió


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación la ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acciones Rápidas'
- ✅ Esta sección incluye un botón o enlace para 'Nueva Facultad'
- ✅ Esta sección incluye un botón o enlace para 'Nueva Carrera'
- ✅ Esta sección incluye un botón o enlace para 'Nuevo Profesor'


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Facultades' accesible desde la navegación principal
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Autoridades', 'Carreras' y 'Acciones' para cada facultad
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón 'Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Nombre o Código
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por Nombre o Código') en la página de listado de Facultades
- ✅ Al escribir texto en el campo de búsqueda, la tabla se filtra y muestra solo las facultades que coinciden
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por criterios específicos

#### Criterios de Aceptación

- ✅ Existe un selector de filtro (ej. 'Todas las Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro, la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ Las opciones del filtro deben ser claras y relevantes (ej. por tipo de carrera o decano si aplica en el contexto)


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en 'Nueva Facultad' (desde Dashboard o listado), se abre un formulario de registro
- ✅ El formulario incluye campos para 'Código' y 'Nombre' de la facultad
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la facultad si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Detalle de Facultad
**Como:** Administrador del sistema
**Quiero:** ver la información completa de una facultad
**Para:** consultar sus detalles específicos

#### Criterios de Aceptación

- ✅ Existe un icono de 'Ver' (ojo) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono 'Ver', se navega a una vista detallada de la facultad
- ✅ La vista detallada muestra toda la información de la facultad (código, nombre, descripción, decano, lista de carreras asociadas)


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 10

**Fecha:** 29 sept 2025, 03:32 a m. (UTC)

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

Para el desarrollo se utilizará inteligencia artificial, lo que reduce drásticamente la estimación de horas por tarea. Gracias a la asistencia de Copilot Agent, cada actividad se resuelve con gran agilidad:

Front-end: el diseño de pantallas se completa en un rango de 0 a 1 hora máximo.

Back-end: las implementaciones siguen la misma dinámica, con una duración de 0 a 1 hora máximo por tarea puedes poner por ejemplo valores decimales 0,1 , 0,2 ..... 1 .

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario de inicio de sesión con campos para email institucional
- ✅ El sistema muestra un campo para contraseña
- ✅ Al ingresar credenciales válidas, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste mi contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y profesores
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' registradas
- ✅ El Dashboard muestra el 'Total Carreras' registradas
- ✅ El Dashboard muestra el 'Total Profesores' registrados
- ✅ Existe un botón 'Ver' junto a cada contador para navegar al detalle


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Últimos Cambios' con columnas 'Acción', 'Descripción', 'Fecha'
- ✅ La tabla muestra las últimas acciones relevantes (ej. creación de carrera, actualización de profesor, eliminación de facultad)
- ✅ Cada acción muestra el tipo de acción, una breve descripción y la fecha en que ocurrió


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación la ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acciones Rápidas'
- ✅ Esta sección incluye un botón o enlace para 'Nueva Facultad'
- ✅ Esta sección incluye un botón o enlace para 'Nueva Carrera'
- ✅ Esta sección incluye un botón o enlace para 'Nuevo Profesor'


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Facultades' accesible desde la navegación principal
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Autoridades', 'Carreras' y 'Acciones' para cada facultad
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón 'Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Nombre o Código
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por Nombre o Código') en la página de listado de Facultades
- ✅ Al escribir texto en el campo de búsqueda, la tabla se filtra y muestra solo las facultades que coinciden
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por criterios específicos

#### Criterios de Aceptación

- ✅ Existe un selector de filtro (ej. 'Todas las Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro, la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ Las opciones del filtro deben ser claras y relevantes (ej. por tipo de carrera o decano si aplica en el contexto)


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en 'Nueva Facultad' (desde Dashboard o listado), se abre un formulario de registro
- ✅ El formulario incluye campos para 'Código' y 'Nombre' de la facultad
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la facultad si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Detalle de Facultad
**Como:** Administrador del sistema
**Quiero:** ver la información completa de una facultad
**Para:** consultar sus detalles específicos

#### Criterios de Aceptación

- ✅ Existe un icono de 'Ver' (ojo) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono 'Ver', se navega a una vista detallada de la facultad
- ✅ La vista detallada muestra toda la información de la facultad (código, nombre, descripción, decano, lista de carreras asociadas)


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para Código, Nombre, Modalidad, Duración en años
- ✅ Existe un selector para asociar la carrera a una Facultad existente
- ✅ Existe un selector para asignar un Coordinador de una lista de usuarios existentes
- ✅ El Código de la carrera es validado como único dentro de la facultad seleccionada
- ✅ Al guardar, la carrera queda registrada exitosamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Profesor
**Como:** Administrador
**Quiero:** ingresar la información de un nuevo profesor
**Para:** registrarlo en el sistema

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para Cédula, Nombres, Apellidos, Email, Teléfono, Facultad, Título Académico
- ✅ La Cédula del profesor es validada como única en el sistema
- ✅ El Email del profesor es validado como único en el sistema
- ✅ La Facultad se selecciona de una lista preexistente de facultades
- ✅ Al guardar, el profesor queda registrado exitosamente


**Story Points:** 3 | **Prioridad:** Alta (1)

<!-- --- -->

## PROMPT 11

**Fecha:** 29 sept 2025, 04:18 a m. (UTC)

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



Accion :
sprint planning 
Crea mi  hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada 

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil', 'Revisó informe de acreditación', 'Asignó rol a 'profesor@epn.edu.ec'', 'Registró nuevo profesor Juan Pérez')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario de registro de usuario
- ✅ El formulario incluye campos para 'Email', 'Nombre', un selector de 'Rol' y un selector de 'Estado' (Activo/Inactivo)
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. email duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email o nombre
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen un rol específico
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar un rol, la tabla se actualiza mostrando solo los usuarios con ese rol
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('< Previous 1 2 3 Next >') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)

<!-- --- -->

## PROMPT 12

**Fecha:** 29 sept 2025, 04:02 p m. (UTC)

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

📌 PBI del Sprint

Gestión de organización académica (Facultades, Carreras, Materias, Profesores).

📊 Velocidad Histórica del Equipo

Velocidad baja: 54 sp

Velocidad alta: 75 sp

📌 Ejemplos de HU (histórico del equipo)

HU: Agregar miembro de la CEI Como administrador quiero registrar a los miembros de la CEI → 3 sp

HU: Listar miembros de la CEI Como administrador quiero listar los miembros de la CEI → 3 sp

HU: Paginar autoridades Como administrador quiero listar las autoridades por grupos → 1 sp

HU: Filtrar autoridades Como administrador quiero filtrar las autoridades por una palabra → 1 sp

HU: Paginar miembros de la CEI Como administrador quiero listar los miembros de la CEI por grupos → 1 sp

HU: Filtrar miembros de la CEI Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp

Accion : sprint planning Crea mi hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada

📌 Formato de salida requerido por HU { "title": "HU: ...", "como": "...", "quiero": "...", "para": "...", "acceptanceCriteria": [ "Criterio 1", "Criterio 2" ], "storyPoints": number, "priority": number (1 = alta, 2 = media, 3 = baja), "frontendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ], "backendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ] }

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones (Administrador, CEI, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción' y un selector de 'Decano'
- ✅ El selector de 'Decano' permite buscar y seleccionar un usuario existente
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Administrador del sistema
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Administrador del sistema
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Administrador del sistema
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Modalidad', 'Duración en años'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email o nombre
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Asignar roles')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)



### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 13

**Fecha:** 29 sept 2025, 04:32 p m. (UTC)

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

📌 PBI del Sprint

Gestión de organización académica (Facultades, Carreras, Materias, Profesores).

📊 Velocidad Histórica del Equipo

Velocidad baja: 54 sp

Velocidad alta: 75 sp

📌 Ejemplos de HU (histórico del equipo)

HU: Agregar miembro de la CEI Como administrador quiero registrar a los miembros de la CEI → 3 sp

HU: Listar miembros de la CEI Como administrador quiero listar los miembros de la CEI → 3 sp

HU: Paginar autoridades Como administrador quiero listar las autoridades por grupos → 1 sp

HU: Filtrar autoridades Como administrador quiero filtrar las autoridades por una palabra → 1 sp

HU: Paginar miembros de la CEI Como administrador quiero listar los miembros de la CEI por grupos → 1 sp

HU: Filtrar miembros de la CEI Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp

Accion : sprint planning Crea mi hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada

📌 Formato de salida requerido por HU { "title": "HU: ...", "como": "...", "quiero": "...", "para": "...", "acceptanceCriteria": [ "Criterio 1", "Criterio 2" ], "storyPoints": number, "priority": number (1 = alta, 2 = media, 3 = baja), "frontendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ], "backendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ] }

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones (Administrador, CEI, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción' y un selector de 'Decano'
- ✅ El selector de 'Decano' permite buscar y seleccionar un usuario existente
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Administrador del sistema
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Administrador del sistema
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Administrador del sistema
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Modalidad', 'Duración en años'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Asignar roles')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 14

**Fecha:** 29 sept 2025, 04:35 p m. (UTC)

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

📌 PBI del Sprint

Gestión de organización académica (Facultades, Carreras, Materias, Profesores).

📊 Velocidad Histórica del Equipo

Velocidad baja: 54 sp

Velocidad alta: 75 sp

📌 Ejemplos de HU (histórico del equipo)

HU: Agregar miembro de la CEI Como administrador quiero registrar a los miembros de la CEI → 3 sp

HU: Listar miembros de la CEI Como administrador quiero listar los miembros de la CEI → 3 sp

HU: Paginar autoridades Como administrador quiero listar las autoridades por grupos → 1 sp

HU: Filtrar autoridades Como administrador quiero filtrar las autoridades por una palabra → 1 sp

HU: Paginar miembros de la CEI Como administrador quiero listar los miembros de la CEI por grupos → 1 sp

HU: Filtrar miembros de la CEI Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp

Accion : sprint planning Crea mi hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada

📌 Formato de salida requerido por HU { "title": "HU: ...", "como": "...", "quiero": "...", "para": "...", "acceptanceCriteria": [ "Criterio 1", "Criterio 2" ], "storyPoints": number, "priority": number (1 = alta, 2 = media, 3 = baja), "frontendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ], "backendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ] }

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones (Administrador, CEI, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Usuario
**Como:** Administrador
**Quiero:** modificar los datos de un usuario existente
**Para:** corregir o actualizar su información, roles o estado

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada usuario en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos del usuario precargados
- ✅ El formulario permite modificar 'Nombres', 'Apellidos', 'Email', 'Teléfono', 'Roles' y 'Facultad'
- ✅ El sistema valida la unicidad del Email y Cédula si se modifican
- ✅ Al guardar los cambios, la información del usuario se actualiza correctamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción' y un selector de 'Decano'
- ✅ El selector de 'Decano' permite buscar y seleccionar un usuario existente
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Administrador del sistema
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Administrador del sistema
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Administrador del sistema
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Modalidad', 'Duración en años'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Eliminar facultades', 'Ver usuarios')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 15

**Fecha:** 29 sept 2025, 04:51 p m. (UTC)

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

📌 PBI del Sprint

Gestión de organización académica (Facultades, Carreras, Materias, Profesores).

📊 Velocidad Histórica del Equipo

Velocidad baja: 54 sp

Velocidad alta: 75 sp

📌 Ejemplos de HU (histórico del equipo)

HU: Agregar miembro de la CEI Como administrador quiero registrar a los miembros de la CEI → 3 sp

HU: Listar miembros de la CEI Como administrador quiero listar los miembros de la CEI → 3 sp

HU: Paginar autoridades Como administrador quiero listar las autoridades por grupos → 1 sp

HU: Filtrar autoridades Como administrador quiero filtrar las autoridades por una palabra → 1 sp

HU: Paginar miembros de la CEI Como administrador quiero listar los miembros de la CEI por grupos → 1 sp

HU: Filtrar miembros de la CEI Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp

Accion : sprint planning Crea mi hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada

📌 Formato de salida requerido por HU { "title": "HU: ...", "como": "...", "quiero": "...", "para": "...", "acceptanceCriteria": [ "Criterio 1", "Criterio 2" ], "storyPoints": number, "priority": number (1 = alta, 2 = media, 3 = baja), "frontendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ], "backendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ] }

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol'
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Usuario
**Como:** Administrador
**Quiero:** modificar los datos de un usuario existente
**Para:** corregir o actualizar su información, roles o estado

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada usuario en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos del usuario precargados
- ✅ El formulario permite modificar 'Nombres', 'Apellidos', 'Email', 'Teléfono', 'Roles' y 'Facultad'
- ✅ El sistema valida la unicidad del Email y Cédula si se modifican
- ✅ Al guardar los cambios, la información del usuario se actualiza correctamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción' y un selector de 'Decano'
- ✅ El selector de 'Decano' permite buscar y seleccionar un usuario existente
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Administrador del sistema
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Administrador del sistema
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Administrador del sistema
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Modalidad', 'Duración en años'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Eliminar facultades', 'Ver usuarios')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 16

**Fecha:** 29 sept 2025, 06:06 p m. (UTC)

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

La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

📊 Velocidad Histórica del Equipo

Velocidad baja: 54 sp

Velocidad alta: 75 sp

📌 Ejemplos de HU (histórico del equipo)

HU: Agregar miembro de la CEI Como administrador quiero registrar a los miembros de la CEI → 3 sp

HU: Listar miembros de la CEI Como administrador quiero listar los miembros de la CEI → 3 sp

HU: Paginar autoridades Como administrador quiero listar las autoridades por grupos → 1 sp

HU: Filtrar autoridades Como administrador quiero filtrar las autoridades por una palabra → 1 sp

HU: Paginar miembros de la CEI Como administrador quiero listar los miembros de la CEI por grupos → 1 sp

HU: Filtrar miembros de la CEI Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp

Accion : sprint planning Crea mi hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada

📌 Formato de salida requerido por HU { "title": "HU: ...", "como": "...", "quiero": "...", "para": "...", "acceptanceCriteria": [ "Criterio 1", "Criterio 2" ], "storyPoints": number, "priority": number (1 = alta, 2 = media, 3 = baja), "frontendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ], "backendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ] }

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Usuario
**Como:** Administrador
**Quiero:** modificar los datos de un usuario existente
**Para:** corregir o actualizar su información, roles o estado

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada usuario en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos del usuario precargados
- ✅ El formulario permite modificar 'Nombres', 'Apellidos', 'Email', 'Teléfono', 'Roles' y 'Facultad'
- ✅ El sistema valida la unicidad del Email y Cédula si se modifican
- ✅ Al guardar los cambios, la información del usuario se actualiza correctamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción' y un selector de 'Decano'
- ✅ El selector de 'Decano' permite buscar y seleccionar un usuario existente
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Administrador del sistema
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Administrador del sistema
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Administrador del sistema
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Eliminar facultades', 'Ver usuarios')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 17

**Fecha:** 29 sept 2025, 06:18 p m. (UTC)

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

📊 Velocidad Histórica del Equipo
Velocidad baja: 54 sp
Velocidad alta: 75 sp
📌 Ejemplos de HU (histórico del equipo)
HU: Agregar miembro de la CEI Como administrador quiero registrar a los miembros de la CEI → 3 sp
HU: Listar miembros de la CEI Como administrador quiero listar los miembros de la CEI → 3 sp
HU: Paginar autoridades Como administrador quiero listar las autoridades por grupos → 1 sp
HU: Filtrar autoridades Como administrador quiero filtrar las autoridades por una palabra → 1 sp
HU: Paginar miembros de la CEI Como administrador quiero listar los miembros de la CEI por grupos → 1 sp
HU: Filtrar miembros de la CEI Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp


para establecer el rol de la hu fíjate en esta estructura de la epn 
La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

Accion : sprint planning Crea mi hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada
📌 Formato de salida requerido por HU { "title": "HU: ...", "como": "...", "quiero": "...", "para": "...", "acceptanceCriteria": [ "Criterio 1", "Criterio 2" ], "storyPoints": number, "priority": number (1 = alta, 2 = media, 3 = baja), "frontendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ], "backendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ] }
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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones (Administrador, CEI, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil', 'Revisó informe de acreditación', 'Asignó rol a 'profesor@epn.edu.ec'', 'Registró nuevo profesor Juan Pérez')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Usuario
**Como:** Administrador
**Quiero:** modificar los datos de un usuario existente
**Para:** corregir o actualizar su información, roles o estado

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada usuario en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos del usuario precargados
- ✅ El formulario permite modificar 'Nombres', 'Apellidos', 'Email', 'Teléfono', 'Roles' y 'Facultad'
- ✅ El sistema valida la unicidad del Email y Cédula si se modifican
- ✅ Al guardar los cambios, la información del usuario se actualiza correctamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción' y un selector de 'Decano'
- ✅ El selector de 'Decano' permite buscar y seleccionar un usuario existente
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Administrador del sistema
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Administrador del sistema
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Administrador del sistema
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes (que sean profesores)
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Eliminar facultades', 'Ver usuarios')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 18

**Fecha:** 29 sept 2025, 06:18 p m. (UTC)

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

📊 Velocidad Histórica del Equipo
Velocidad baja: 54 sp
Velocidad alta: 75 sp
📌 Ejemplos de HU (histórico del equipo)
HU: Agregar miembro de la CEI Como administrador quiero registrar a los miembros de la CEI → 3 sp
HU: Listar miembros de la CEI Como administrador quiero listar los miembros de la CEI → 3 sp
HU: Paginar autoridades Como administrador quiero listar las autoridades por grupos → 1 sp
HU: Filtrar autoridades Como administrador quiero filtrar las autoridades por una palabra → 1 sp
HU: Paginar miembros de la CEI Como administrador quiero listar los miembros de la CEI por grupos → 1 sp
HU: Filtrar miembros de la CEI Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp


para establecer el rol de la hu fíjate en esta estructura de la epn 
La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

Accion : sprint planning Crea mi hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada
📌 Formato de salida requerido por HU { "title": "HU: ...", "como": "...", "quiero": "...", "para": "...", "acceptanceCriteria": [ "Criterio 1", "Criterio 2" ], "storyPoints": number, "priority": number (1 = alta, 2 = media, 3 = baja), "frontendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ], "backendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ] }
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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Usuario
**Como:** Administrador
**Quiero:** modificar los datos de un usuario existente
**Para:** corregir o actualizar su información, roles o estado

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada usuario en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos del usuario precargados
- ✅ El formulario permite modificar 'Nombres', 'Apellidos', 'Email', 'Teléfono', 'Roles' y 'Facultad'
- ✅ El sistema valida la unicidad del Email y Cédula si se modifican
- ✅ Al guardar los cambios, la información del usuario se actualiza correctamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción' y un selector de 'Decano'
- ✅ El selector de 'Decano' permite buscar y seleccionar un usuario existente
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Administrador del sistema
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Administrador del sistema
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Administrador del sistema
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Eliminar facultades', 'Ver usuarios')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 19

**Fecha:** 29 sept 2025, 06:26 p m. (UTC)

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

📊 Velocidad Histórica del Equipo
Velocidad baja: 54 sp
Velocidad alta: 75 sp
📌 Ejemplos de HU (histórico del equipo)
HU: Agregar miembro de la CEI Como administrador quiero registrar a los miembros de la CEI → 3 sp
HU: Listar miembros de la CEI Como administrador quiero listar los miembros de la CEI → 3 sp
HU: Paginar autoridades Como administrador quiero listar las autoridades por grupos → 1 sp
HU: Filtrar autoridades Como administrador quiero filtrar las autoridades por una palabra → 1 sp
HU: Paginar miembros de la CEI Como administrador quiero listar los miembros de la CEI por grupos → 1 sp
HU: Filtrar miembros de la CEI Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp






Accion : sprint planning Crea mi hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada
📌 Formato de salida requerido por HU { "title": "HU: ...", "como": "...", "quiero": "...", "para": "...", "acceptanceCriteria": [ "Criterio 1", "Criterio 2" ], "storyPoints": number, "priority": number (1 = alta, 2 = media, 3 = baja), "frontendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ], "backendTasks": [ { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number } ] }
⏱️ Reglas de estimación de tareas (FE/BE)
Front-end: 0 a 1 hora por tarea (ej: 0.1, 0.3, 0.5, 1).
Back-end: 0 a 1 hora por tarea (idem).
Usa verbos en infinitivo para títulos de tareas.
No repetir títulos de tareas.

ademas fijate en esta estructura para que establescas roles en las hu :

La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, 

Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , las autoridades administran  la facultad, el coordinador gestiona la carrera .

**Respuesta:**

### HU sin título
**Como:** 
**Quiero:** 
**Para:** 

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones (Administrador, CEI, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil', 'Revisó informe de acreditación', 'Asignó rol a 'profesor@epn.edu.ec'', 'Registró nuevo profesor Juan Pérez')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Usuario
**Como:** Administrador
**Quiero:** modificar los datos de un usuario existente
**Para:** corregir o actualizar su información, roles o estado

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada usuario en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos del usuario precargados
- ✅ El formulario permite modificar 'Nombres', 'Apellidos', 'Email', 'Teléfono', 'Roles' y 'Facultad'
- ✅ El sistema valida la unicidad del Email y Cédula si se modifican
- ✅ Al guardar los cambios, la información del usuario se actualiza correctamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción' y un selector de 'Decano'
- ✅ El selector de 'Decano' permite buscar y seleccionar un usuario existente
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Administrador del sistema
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Administrador del sistema
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Administrador del sistema
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes (que sean profesores)
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Eliminar facultades', 'Ver usuarios')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 20

**Fecha:** 29 sept 2025, 06:47 p m. (UTC)

**Prompt:**

no entiendes que no solo pongas administrador y usuario por algo te doy los roles pues y las acciones que hace cada uno : vuelve a analizar :


Accion :
Sprint planning vuevle a crearme las hus

**Respuesta:**

### HU sin título
**Como:** 
**Quiero:** 
**Para:** 

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones (Administrador, CEI, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil', 'Revisó informe de acreditación', 'Asignó rol a 'profesor@epn.edu.ec'', 'Registró nuevo profesor Juan Pérez')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al guardar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Usuario
**Como:** Administrador
**Quiero:** modificar los datos de un usuario existente
**Para:** corregir o actualizar su información, roles o estado

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada usuario en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos del usuario precargados
- ✅ El formulario permite modificar 'Nombres', 'Apellidos', 'Email', 'Teléfono', 'Roles' y 'Facultad'
- ✅ El sistema valida la unicidad del Email y Cédula si se modifican
- ✅ Al guardar los cambios, la información del usuario se actualiza correctamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción'
- ✅ Existe un selector de 'Decano' que permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ El selector de 'Decano' en el formulario de edición permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Administrador del sistema
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Administrador del sistema
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Administrador del sistema
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes con rol de Profesor
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ El selector de 'Coordinador' en el formulario de edición permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Eliminar facultades', 'Ver usuarios')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 21

**Fecha:** 29 sept 2025, 06:55 p m. (UTC)

**Prompt:**

no entiendes que no solo pongas administrador y usuario por algo te doy los roles pues y las acciones que hace cada uno : vuelve a analizar :


Accion :
Sprint planning vuevle a crearme las hus

**Respuesta:**

### HU sin título
**Como:** 
**Quiero:** 
**Para:** 

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones (Administrador, CEI, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Usuario
**Como:** Administrador
**Quiero:** modificar los datos de un usuario existente
**Para:** corregir o actualizar su información, roles o estado

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada usuario en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos del usuario precargados
- ✅ El formulario permite modificar 'Nombres', 'Apellidos', 'Email', 'Teléfono', 'Roles' y 'Facultad'
- ✅ El sistema valida la unicidad del Email y Cédula si se modifican
- ✅ Al guardar los cambios, la información del usuario se actualiza correctamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción'
- ✅ Existe un selector de 'Decano' que permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ El selector de 'Decano' en el formulario de edición permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes con rol de Profesor
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ El selector de 'Coordinador' en el formulario de edición permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Autoridad (Decano, Subdecano, Jefe de Departamento)
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Eliminar facultades', 'Ver usuarios')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 22

**Fecha:** 04 oct 2025, 03:05 a m. (UTC)

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



Accion :
sprint planning 
Crea mi  hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada 

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional' y 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones (Administrador, CEI, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste mi contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Usuario
**Como:** Administrador
**Quiero:** modificar los datos de un usuario existente
**Para:** corregir o actualizar su información, roles o estado

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada usuario en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos del usuario precargados
- ✅ El formulario permite modificar 'Nombres', 'Apellidos', 'Email', 'Teléfono', 'Roles' y 'Facultad'
- ✅ El sistema valida la unicidad del Email y Cédula si se modifican
- ✅ Al guardar los cambios, la información del usuario se actualiza correctamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** Administrador del sistema
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** Administrador del sistema
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Facultad
**Como:** Administrador del sistema
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción'
- ✅ Existe un selector de 'Decano' que permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ El selector de 'Decano' en el formulario de edición permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** Administrador del sistema
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** Administrador del sistema
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** Administrador del sistema
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** Administrador del sistema
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** Administrador del sistema
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** Administrador
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes con rol de Profesor
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** Administrador del sistema
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ El selector de 'Coordinador' en el formulario de edición permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** Administrador del sistema
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Eliminar facultades', 'Ver usuarios')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 23

**Fecha:** 04 oct 2025, 03:10 a m. (UTC)

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



Accion :
sprint planning 
Crea mi  hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada 

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

**Story Points:** N/A**Prioridad:** N/A


### 🎯 HU: Iniciar Sesión en Poliacredita
**Como:** Usuario del sistema SAGA EPN EUR-ACE
**Quiero:** ingresar mis credenciales institucionales y seleccionar mi rol
**Para:** acceder a mis funcionalidades correspondientes a mi rol

#### Criterios de Aceptación

- ✅ El sistema muestra un formulario con campos para 'Correo Institucional'
- ✅ El sistema muestra un campo para 'Contraseña'
- ✅ El sistema muestra un selector de 'Rol' con opciones (ej. Administrador, CEI, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ Al ingresar credenciales válidas y seleccionar un rol, el usuario es redirigido al Dashboard
- ✅ Al ingresar credenciales inválidas, se muestra un mensaje de error claro
- ✅ Existe un enlace para '¿Olvidaste tu contraseña?'


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Conteo de Entidades en Dashboard
**Como:** Administrador
**Quiero:** ver el número total de facultades, carreras y usuarios activos
**Para:** obtener una visión general rápida del estado de la EPN

#### Criterios de Aceptación

- ✅ El Dashboard muestra el 'Total Facultades' con un valor numérico
- ✅ El Dashboard muestra el 'Total Carreras' con un valor numérico
- ✅ El Dashboard muestra el 'Usuarios Activos' con un valor numérico


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Actividad Reciente en Dashboard
**Como:** Administrador
**Quiero:** ver un registro de las últimas acciones realizadas en el sistema
**Para:** monitorear la actividad de la plataforma

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Actividad Reciente' con columnas 'Hora', 'Usuario', 'Acción'
- ✅ La tabla muestra un listado de acciones recientes (ej. 'Creo nueva facultad FIEC', 'Actualizó datos de carrera Ingeniería Civil')
- ✅ Cada acción muestra la hora en formato relativo ('Hace 5 min', 'Hace 15 min')
- ✅ Cada acción muestra el email del usuario que la realizó
- ✅ Cada acción muestra una descripción concisa de la actividad


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Acceder a Acciones Rápidas desde Dashboard
**Como:** Administrador
**Quiero:** tener enlaces directos a funcionalidades de gestión importantes
**Para:** agilizar mi navegación y ejecución de tareas comunes

#### Criterios de Aceptación

- ✅ El Dashboard muestra una sección de 'Acceso Rápido'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Carreras'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Gestionar Profesores'
- ✅ Esta sección incluye un botón o enlace con icono y texto 'Ver Mi Perfil'
- ✅ Al hacer clic en cada botón, el usuario es redirigido a la página correspondiente


**Story Points:** 1 | **Prioridad:** Media (2)


### 🎯 HU: Listar Usuarios Registrados
**Como:** Administrador
**Quiero:** ver una lista de todos los usuarios registrados con su información clave
**Para:** gestionar el acceso y los roles en el sistema

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Usuarios' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Email', 'Nombre', 'Rol', 'Estado' y 'Acciones'
- ✅ Los datos de los usuarios se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nuevo Usuario' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Registrar Nuevo Usuario
**Como:** Administrador
**Quiero:** crear un nuevo registro de usuario en el sistema
**Para:** permitir que nuevas personas accedan a la plataforma

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nuevo Usuario', se abre un formulario modal de registro de usuario
- ✅ El formulario incluye campos para 'Cédula', 'Nombres', 'Apellidos', 'Email', 'Teléfono'
- ✅ El formulario incluye un selector de 'Rol' con opciones de checkbox (ej. Comité Evaluación Interna, Autoridad Académica, Coordinador de Carrera, Profesor)
- ✅ El formulario incluye un selector de 'Facultad' con función de búsqueda
- ✅ La Cédula y el Email son validados como únicos en el sistema
- ✅ Al enviar datos válidos, el usuario se guarda y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Usuario
**Como:** Administrador
**Quiero:** modificar los datos de un usuario existente
**Para:** corregir o actualizar su información, roles o estado

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada usuario en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos del usuario precargados
- ✅ El formulario permite modificar 'Nombres', 'Apellidos', 'Email', 'Teléfono', 'Roles' y 'Facultad'
- ✅ El sistema valida la unicidad del Email y Cédula si se modifican
- ✅ Al guardar los cambios, la información del usuario se actualiza correctamente


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Usuarios por Palabra Clave
**Como:** Administrador
**Quiero:** encontrar usuarios específicos rápidamente por email, nombre o cédula
**Para:** agilizar la gestión de usuarios

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar usuario...') en la página de listado de Usuarios
- ✅ Al escribir texto, la tabla se filtra y muestra solo los usuarios que coinciden con el email, nombre o cédula
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Rol
**Como:** Administrador
**Quiero:** ver usuarios que tienen uno o más roles específicos
**Para:** organizar la visualización y gestionar permisos por rol

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Roles') en la página de listado de Usuarios
- ✅ Al seleccionar uno o varios roles, la tabla se actualiza mostrando solo los usuarios con esos roles
- ✅ La opción 'Todos los Roles' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Usuarios por Estado
**Como:** Administrador
**Quiero:** ver usuarios que tienen un estado específico (Activo/Inactivo)
**Para:** gestionar el acceso y habilitación/deshabilitación de cuentas

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Usuarios
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo los usuarios con ese estado
- ✅ La opción 'Todos los Estados' muestra todos los usuarios


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Usuarios
**Como:** Administrador
**Quiero:** navegar por el listado de usuarios en bloques manejables
**Para:** gestionar grandes volúmenes de usuarios eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Usuarios
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de usuarios se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Estado de Usuario (Activar/Desactivar)
**Como:** Administrador
**Quiero:** habilitar o deshabilitar el acceso de un usuario
**Para:** controlar quién puede usar el sistema

#### Criterios de Aceptación

- ✅ Existe un botón 'Desactivar' o 'Activar' en la columna 'Acciones' de cada usuario, según el estado actual
- ✅ Al hacer clic en el botón, el estado del usuario cambia (Activo a Inactivo, o viceversa)
- ✅ El estado visual en la tabla se actualiza inmediatamente (ej. texto 'Activo'/'Inactivo' y botón)
- ✅ Se muestra una confirmación o mensaje de éxito/error al usuario


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Listar Facultades Registradas
**Como:** DGIP
**Quiero:** ver todas las facultades con su información principal
**Para:** gestionar la estructura académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Facultades' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Carreras', 'Decano' y 'Acciones'
- ✅ Los datos de las facultades se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Facultad' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Facultades por Código o Nombre
**Como:** DGIP
**Quiero:** encontrar facultades específicas rápidamente
**Para:** agilizar la gestión de facultades

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar por código o nombre...') en la página de listado de Facultades
- ✅ Al escribir texto, la tabla se filtra y muestra solo las facultades que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Facultades por Carreras
**Como:** DGIP
**Quiero:** filtrar el listado de facultades
**Para:** organizar la visualización por la cantidad de carreras que gestionan

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Filtrar por Carreras') en la página de listado de Facultades
- ✅ Al seleccionar una opción del filtro (ej. 'Con más de 5 carreras'), la tabla de facultades se actualiza mostrando solo las que cumplen el criterio
- ✅ La opción 'Todas las Carreras' muestra todas las facultades


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Facultades
**Como:** DGIP
**Quiero:** navegar por el listado de facultades en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Facultades
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de facultades se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)



### 🎯 HU: Registrar Nueva Facultad
**Como:** DGIP
**Quiero:** agregar una nueva facultad al sistema
**Para:** mantener actualizada la estructura organizativa de la EPN

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Facultad', se abre un formulario modal de registro de Facultad
- ✅ El formulario incluye campos para 'Código', 'Nombre', 'Descripción'
- ✅ Existe un selector de 'Decano' que permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al enviar datos válidos, la facultad se guarda y se muestra en el listado
- ✅ Al enviar datos inválidos (ej. código o nombre duplicado), se muestra un mensaje de error claro


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Facultad
**Como:** DGIP
**Quiero:** modificar los datos de una facultad existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la facultad precargados
- ✅ El selector de 'Decano' en el formulario de edición permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al guardar los cambios, la información de la facultad se actualiza correctamente
- ✅ El sistema valida la unicidad del código y nombre de la facultad si se modifican


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Facultad del Sistema
**Como:** DGIP
**Quiero:** remover una facultad del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada facultad en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la facultad no tiene carreras asociadas, se elimina del sistema
- ✅ Si la facultad tiene carreras asociadas, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Listar Carreras Registradas
**Como:** DGIP
**Quiero:** ver todas las carreras con su información principal
**Para:** gestionar la oferta académica de la EPN

#### Criterios de Aceptación

- ✅ Existe una página dedicada a 'Gestión de Carreras' accesible desde la navegación lateral
- ✅ Se muestra una tabla con columnas 'Código', 'Nombre', 'Facultad', 'Coordinador' y 'Acciones'
- ✅ Los datos de las carreras se cargan correctamente en la tabla
- ✅ Se muestra el botón '+ Nueva Carrera' en la página


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Buscar Carreras por Palabra Clave
**Como:** DGIP
**Quiero:** encontrar carreras específicas rápidamente por código o nombre
**Para:** agilizar la gestión de carreras

#### Criterios de Aceptación

- ✅ Existe un campo de búsqueda ('Buscar carrera...') en la página de listado de Carreras
- ✅ Al escribir texto, la tabla se filtra y muestra solo las carreras que coinciden con el código o nombre
- ✅ La búsqueda debe ser insensible a mayúsculas y minúsculas
- ✅ Al borrar el texto de búsqueda, se muestra el listado completo de carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Facultad
**Como:** DGIP
**Quiero:** ver carreras que pertenecen a una facultad específica
**Para:** organizar la visualización de la oferta académica

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todas las Facultades') en la página de listado de Carreras
- ✅ Al seleccionar una facultad, la tabla se actualiza mostrando solo las carreras de esa facultad
- ✅ La opción 'Todas las Facultades' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Filtrar Carreras por Estado
**Como:** DGIP
**Quiero:** ver carreras que tienen un estado específico
**Para:** organizar la visualización por estado de la carrera (ej. activa, inactiva, en revisión)

#### Criterios de Aceptación

- ✅ Existe un selector de filtro ('Todos los Estados') en la página de listado de Carreras
- ✅ Al seleccionar un estado, la tabla se actualiza mostrando solo las carreras con ese estado
- ✅ La opción 'Todos los Estados' muestra todas las carreras


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Paginar Listado de Carreras
**Como:** DGIP
**Quiero:** navegar por el listado de carreras en bloques manejables
**Para:** gestionar grandes volúmenes de información eficientemente

#### Criterios de Aceptación

- ✅ Existe un componente de paginación ('Previous 1 2 3 Next') en la parte inferior de la tabla de Carreras
- ✅ El componente permite ir a la página siguiente
- ✅ El componente permite ir a la página anterior
- ✅ El componente permite ir directamente a una página específica
- ✅ Al cambiar de página, la tabla de carreras se actualiza con los datos correspondientes


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Registrar Nueva Carrera
**Como:** DGIP
**Quiero:** ingresar la información de una nueva carrera
**Para:** agregar una oferta académica

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Carrera', se abre un formulario de registro de carrera
- ✅ El formulario incluye campos para 'Código', 'Nombre'
- ✅ Existe un selector para asociar la carrera a una 'Facultad' existente
- ✅ Existe un selector para asignar un 'Coordinador' de una lista de usuarios existentes con rol de Profesor
- ✅ El Código de la carrera es validado como único
- ✅ Al guardar, la carrera queda registrada exitosamente y se muestra en el listado


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Editar Información de Carrera
**Como:** DGIP
**Quiero:** modificar los datos de una carrera existente
**Para:** corregir o actualizar su información

#### Criterios de Aceptación

- ✅ Existe un icono de edición (lápiz) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de edición, se abre un formulario modal con los datos de la carrera precargados
- ✅ El selector de 'Coordinador' en el formulario de edición permite buscar y seleccionar un usuario existente con rol de Profesor
- ✅ Al guardar los cambios, la información de la carrera se actualiza correctamente
- ✅ El sistema valida la unicidad del código de la carrera si se modifica


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Eliminar Carrera del Sistema
**Como:** DGIP
**Quiero:** remover una carrera del sistema
**Para:** depurar información obsoleta o incorrecta

#### Criterios de Aceptación

- ✅ Existe un icono de eliminación (papelera) en la columna 'Acciones' de cada carrera en el listado
- ✅ Al hacer clic en el icono de eliminación, se muestra una confirmación al usuario
- ✅ Si la carrera no tiene materias o profesores asociados, se elimina del sistema
- ✅ Si la carrera tiene dependencias, el sistema advierte e impide la eliminación


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Permisos por Rol
**Como:** Administrador
**Quiero:** ver los permisos asociados a cada rol definido en el sistema
**Para:** entender las capacidades de cada tipo de usuario y revisar la configuración de seguridad

#### Criterios de Aceptación

- ✅ Existe una página 'Gestión de Roles' accesible desde la navegación lateral
- ✅ La página muestra tarjetas para cada rol (ej. 'Administrador', 'CEI', 'Autoridad de facultad', 'Coordinador de Carrera', 'Profesor')
- ✅ Cada tarjeta de rol muestra un listado de permisos asociados (ej. 'Ver facultades', 'Crear facultades', 'Eliminar facultades', 'Ver usuarios')
- ✅ Los permisos se presentan como checkboxes, mostrando si están habilitados para ese rol


**Story Points:** 3 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Perfil Personal
**Como:** Usuario del sistema
**Quiero:** ver mi información personal y de contacto registrada
**Para:** confirmar mis datos en la plataforma y tenerlos a mano

#### Criterios de Aceptación

- ✅ Existe una página 'Mi Perfil' accesible desde la navegación lateral
- ✅ La página muestra una sección de 'Información Personal' con campos (Nombre Completo, Correo Institucional, Facultad, Teléfono, Fecha de Registro)
- ✅ Todos los campos de información personal muestran los datos del usuario logueado


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Visualizar Roles y Permisos Detallados de Perfil
**Como:** Usuario del sistema
**Quiero:** ver los roles que tengo asignados y los permisos detallados de los mismos
**Para:** comprender mis capacidades y accesos dentro del sistema

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Rol y Permisos'
- ✅ Se muestra el 'Rol Asignado' (ej. 'Profesor', 'Decano')
- ✅ Existe un desplegable o botón 'Ver Permisos Detallados'
- ✅ Al expandir 'Ver Permisos Detallados', se lista los permisos específicos del usuario (ej. 'Visualizar Dashboard', 'Gestionar Cursos', 'Registrar Calificaciones')


**Story Points:** 2 | **Prioridad:** Media (2)


### 🎯 HU: Cambiar Contraseña Personal
**Como:** Usuario del sistema
**Quiero:** actualizar mi contraseña
**Para:** mantener mi cuenta segura regularmente

#### Criterios de Aceptación

- ✅ La página 'Mi Perfil' muestra una sección de 'Cambiar Contraseña'
- ✅ Existe un botón 'Actualizar Contraseña'
- ✅ Al hacer clic en el botón, se abre un formulario modal para cambiar contraseña (campos: Contraseña Actual, Nueva Contraseña, Confirmar Nueva Contraseña)
- ✅ El sistema valida que la 'Contraseña Actual' sea correcta
- ✅ El sistema valida que 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' coincidan y cumplan con políticas de seguridad
- ✅ Al guardar, la contraseña se actualiza y se muestra un mensaje de éxito


**Story Points:** 2 | **Prioridad:** Media (2)

<!-- --- -->

## PROMPT 24

**Fecha:** 10 oct 2025, 03:17 a m. (UTC)

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

ejemplo de tareas con la estimación :
Crear endpoint GET /dashboard/counts	0.5
6975	Implementar lógica para obtener total de Facultades	0.3
6976	Implementar lógica para obtener total de Carreras	0.3
6978	Implementar lógica para obtener total de Usuarios Activos	0.3
7147	Asegurar que el endpoint solo devuelva datos del usuario autenticado	0.3
7161	Crear endpoint GET /me/profile para datos del usuario logueado	0.5
7153	Crear endpoint GET /me/roles-permissions para roles y permisos	0.5
7159	Implementar lógica para obtener roles y permisos del usuario autenticado	0.5

Implementar campo de búsqueda en interfaz de Carreras	0.2
7102	Implementar lógica de filtrado en cliente o API para carreras	0.5
7104	Actualizar tabla de carreras con resultados de búsqueda	0.3
7073	Actualizar tabla de facultades con resultados de filtro	0.2
7063	Implementar validación de campos del formulario de facultad	0.5
7064	Integrar selector de Decano con API de búsqueda de usuarios filtrando por rol de profesor	0.4

Accion :
sprint planning 
Crea mi  hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada 
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

**Respuesta:**

### 🎯 HU: Iniciar Sesión con Rol
**Como:** Usuario de PoliAcredita
**Quiero:** iniciar sesión con mi correo institucional, contraseña y seleccionar mi rol
**Para:** acceder a las funcionalidades específicas que me corresponden en la aplicación.

#### Criterios de Aceptación

- ✅ El usuario puede ingresar su correo institucional y contraseña.
- ✅ El usuario puede seleccionar su rol (Administrador, Coordinador de Carrera, Comité Evaluación Interna (CEI), Autoridad Académica, Profesor) de un selector.
- ✅ Al hacer clic en 'Iniciar Sesión', el sistema valida las credenciales y el rol seleccionado.
- ✅ Si las credenciales y el rol son válidos, el usuario es redirigido a la página de inicio o a su dashboard correspondiente.
- ✅ Si las credenciales o el rol son inválidos, se muestra un mensaje de error claro al usuario.
- ✅ Existe un enlace '¿Olvidaste tu contraseña?' visible y funcional.


**Story Points:** 5 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar y Buscar Criterios EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** ver un listado de los Criterios EUR-ACE y poder buscar por código o descripción
**Para:** consultar los estándares de acreditación relevantes de forma rápida y sencilla.

#### Criterios de Aceptación

- ✅ La página 'Criterios EUR-ACE' muestra una tabla con columnas 'Código' y 'Descripción'.
- ✅ Existe un campo de búsqueda que permite filtrar los criterios por su código o por texto en la descripción.
- ✅ Los resultados de la búsqueda se actualizan dinámicamente o al presionar Enter.
- ✅ La tabla muestra los resultados paginados, permitiendo navegar entre páginas (Previous, Next, números de página).


**Story Points:** 3 | **Prioridad:** Alta (1)


### 🎯 HU: Gestionar Objetivos de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** ver, buscar, paginar, crear, editar y eliminar los Objetivos de Programa (OPP)
**Para:** mantener actualizada y organizada la lista de objetivos de mi carrera para el proceso de acreditación.

#### Criterios de Aceptación

- ✅ La página 'Gestión de Objetivos de Programa (OPP)' muestra una tabla con Código, Descripción y Acciones (íconos de editar y eliminar).
- ✅ Existe un campo de búsqueda que permite filtrar los OPPs por su código o descripción.
- ✅ La tabla muestra los resultados paginados y el usuario puede navegar entre páginas.
- ✅ Hay un botón '+ Nuevo OPP' que abre un formulario modal para crear un OPP.
- ✅ Al hacer clic en el ícono de 'Editar' en un OPP, se abre un formulario modal pre-llenado para modificarlo.
- ✅ Al hacer clic en el ícono de 'Eliminar' en un OPP, se presenta una confirmación y, al aceptar, el OPP es eliminado.


**Story Points:** 8 | **Prioridad:** Alta (1)


### 🎯 HU: Gestionar Resultados de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** ver, buscar, paginar, crear, editar y eliminar Resultados de Aprendizaje (RA), tanto Generales como Específicos
**Para:** administrar eficazmente los resultados de aprendizaje definidos para la carrera y su alineación con EUR-ACE.

#### Criterios de Aceptación

- ✅ La página 'Gestión de Resultados de Aprendizaje (RA)' muestra dos pestañas: 'Resultados Generales (RG)' y 'Resultados Específicos (RE)'.
- ✅ Al seleccionar una pestaña, se muestra la lista correspondiente de RAs en una tabla con Código, Descripción y Acciones.
- ✅ Cada pestaña tiene un campo de búsqueda para filtrar por código o descripción y componentes de paginación.
- ✅ Hay un botón '+ Nuevo RA' que abre un formulario modal para crear un RA, permitiendo seleccionar su 'Tipo' (General o Específico).
- ✅ Al hacer clic en el ícono de 'Editar' en un RA, se abre un formulario modal pre-llenado para modificarlo, incluyendo su tipo.
- ✅ Al hacer clic en el ícono de 'Eliminar' en un RA, se presenta una confirmación y, al aceptar, el RA es eliminado.


**Story Points:** 10 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Matriz de Mapeo OPP vs RA
**Como:** Coordinador de Carrera
**Quiero:** ver la matriz de relaciones entre Objetivos de Programa (OPP) y Resultados de Aprendizaje (RA)
**Para:** comprender visualmente la cobertura de los OPPs por los RAs y evaluar la coherencia curricular.

#### Criterios de Aceptación

- ✅ La página 'Editor Mapeos' muestra una pestaña 'OPP vs RA' que contiene una tabla matriz.
- ✅ La matriz tiene los OPPs como filas y los RAs (Generales y Específicos) como columnas.
- ✅ Las celdas muestran un indicador (ej. checkmark) si existe una relación entre el OPP y el RA correspondiente.
- ✅ La matriz incluye una leyenda clara para 'Objetivos de Carrera' y 'Resultados de Aprendizaje Carrera'.
- ✅ Cada OPP en la matriz tiene un ícono de información (i) que al ser pulsado, muestra la descripción completa del OPP.
- ✅ Hay un botón '+ Nueva Relación' para iniciar el proceso de creación de mapeos.


**Story Points:** 5 | **Prioridad:** Alta (1)


### 🎯 HU: Crear Nueva Relación en Matriz OPP vs RA (Asistente Multipasos)
**Como:** Coordinador de Carrera
**Quiero:** establecer nuevas relaciones entre Objetivos de Programa (OPP) y Resultados de Aprendizaje (RA) a través de un asistente de 3 pasos con justificación
**Para:** documentar explícitamente cómo los resultados de aprendizaje contribuyen a los objetivos del programa.

#### Criterios de Aceptación

- ✅ Al hacer clic en '+ Nueva Relación', se abre un asistente de 3 pasos ('Seleccionar Objetivos de carrera (OPP)', 'Seleccionar Resultados de Aprendizaje (RA)', 'Justificar Relación').
- ✅ Paso 1: Permite seleccionar uno o varios OPPs de una lista con búsqueda y paginación.
- ✅ Paso 2: Permite seleccionar uno o varios RAs (generales o específicos) de una lista con búsqueda, paginación y filtro por 'Tipo de Aprendizaje'.
- ✅ Paso 3: Muestra un resumen de los OPPs y RAs seleccionados y un campo de texto para ingresar una 'Justificación' detallada.
- ✅ Al hacer clic en 'Guardar' en el Paso 3, la nueva relación (o relaciones) con su justificación es registrada y la matriz se actualiza.
- ✅ El botón 'Cancelar' está disponible en todos los pasos y cierra el asistente sin guardar cambios.


**Story Points:** 8 | **Prioridad:** Alta (1)


### 🎯 HU: Visualizar Matriz de Mapeo RA vs EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** ver la matriz de relaciones entre Resultados de Aprendizaje (RA) y Criterios EUR-ACE
**Para:** evaluar cómo los resultados de aprendizaje de la carrera contribuyen al cumplimiento de los criterios EUR-ACE.

#### Criterios de Aceptación

- ✅ Al seleccionar la pestaña 'RA vs EUR-ACE' en la página 'Editor Mapeos', se muestra una tabla matriz.
- ✅ La matriz tiene los RAs (Generales y Específicos) como filas y los Criterios EUR-ACE como columnas.
- ✅ Las celdas muestran un indicador si existe una relación entre el RA y el Criterio EUR-ACE correspondiente.
- ✅ La matriz incluye una leyenda clara para sus elementos.
- ✅ Cada RA en la matriz tiene un ícono de información (i) que al ser pulsado, muestra la descripción completa del RA.


**Story Points:** 5 | **Prioridad:** Alta (1)

<!-- --- -->
