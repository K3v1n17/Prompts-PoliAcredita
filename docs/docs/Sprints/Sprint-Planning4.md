<!-- SPRINT:Sprint_Planning_4_Historias_de_Usuario:START -->


<!-- --- -->

## PROMPT 1

**Fecha:** 24 oct 2025, 04:42 a m. (UTC)

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
uan 
📊 Velocidad Histórica del Equipo
Velocidad baja: 54 sp
Velocidad alta: 75 sp
📌 Ejemplos de HU (histórico del equipo) con su estimación en sp 
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
hu :HU9: Patrón wizard para RA y OPP 
Como coordinador
quiero conocer los pasos de creación de una relación RA-OPP
para validar el aporte de los RA a los OPP
Desglosemos esta estructura:
Una historia de usuario expresa una necesidad del usuario y el valor que obtiene, no las acciones técnicas ni múltiples propósitos a la vez.
Se redacta con la fórmula:
Como [rol/usuario], quiero [funcionalidad o acción principal], para [beneficio o propósito]
🧩 Ejemplo:
Como estudiante,
quiero registrar mis avances en un formulario,
para llevar un control de mi progreso.
👉 Aquí la historia representa la funcionalidad de registrar avances, no el acto de “entrar a la sección”. adeas cada hu debe tener una solo accion 
Reglas de estimación de tareas (FE/BE) Front-end: 0 a 1 hora por tarea (ej: 0.1, 0.3, 0.5, 1). Back-end: 0 a 1 hora por tarea (idem). Usa verbos en infinitivo para títulos de tareas. No repetir títulos de tareas.
Accion :
sprint planning 4
Crea mi  hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada , fíjate en todas las imágenes , para la historias de usuario deben ser directas no concatenedas con "y" ni con "o" , para las tareas de front y back necesito que seas especifico 
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

### 🎯 HU: Visualizar Reporte Asignatura vs Criterios EURACE
**Como:** Coordinador de Carrera
**Quiero:** visualizar el reporte de contribución de asignaturas a los criterios EURACE
**Para:** analizar la alineación de los programas de estudio con los estándares de acreditación

#### Criterios de Aceptación

- ✅ La página de 'Reporte: Asignatura vs Criterios EURACE' se muestra correctamente.
- ✅ El reporte muestra una matriz con las 'Asignaturas' en las filas y los 'Criterios EUR-ACE' en las columnas.
- ✅ Las celdas de la matriz indican la existencia de una contribución con un checkmark.


**Story Points:** 5**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Asignatura vs Criterios EURACE por Facultad
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de asignaturas vs criterios EURACE por facultad
**Para:** acotar la información a facultades específicas

#### Criterios de Aceptación

- ✅ El reporte incluye un campo de búsqueda de 'Facultad'.
- ✅ Al seleccionar una facultad, la matriz se actualiza mostrando solo las asignaturas de esa facultad.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Asignatura vs Criterios EURACE por Carrera
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de asignaturas vs criterios EURACE por carrera
**Para:** analizar la contribución de asignaturas dentro de una carrera específica

#### Criterios de Aceptación

- ✅ El reporte incluye un selector de 'Carrera'.
- ✅ Al seleccionar una carrera, la matriz se actualiza mostrando solo las asignaturas de esa carrera.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Asignatura vs Criterios EURACE por Nivel de Aporte
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de asignaturas vs criterios EURACE por nivel de aporte
**Para:** identificar las contribuciones de una intensidad específica

#### Criterios de Aceptación

- ✅ El reporte incluye opciones de filtro por 'Nivel de aporte' (Alto, Medio, Bajo).
- ✅ Al seleccionar una o más opciones, la matriz se actualiza mostrando solo las contribuciones que coinciden con el nivel seleccionado.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Visualizar Trazabilidad detallada de Contribución Asignatura-Criterio
**Como:** Coordinador de Carrera
**Quiero:** ver el detalle de la trazabilidad de la contribución de una asignatura a un criterio EURACE
**Para:** entender la justificación completa de una relación RAA-RA-EURACE

#### Criterios de Aceptación

- ✅ La página de 'Trazabilidad de [Nombre de Asignatura]' se carga mostrando el detalle.
- ✅ La trazabilidad presenta un flujo visual: Resultado de Aprendizaje Asignatura (RAA) -> Resultado de Aprendizaje (RA) -> Justificación RA-EURACE -> Criterio EUR-ACE.
- ✅ La información se agrupa por 'Nivel de aporte' (Alto, Medio, Bajo).


**Story Points:** 5**Prioridad:** Alta (1)


### 🎯 HU: Visualizar Reporte Objetivos de Carrera vs Resultados de Aprendizaje vs Asignaturas
**Como:** Coordinador de Carrera
**Quiero:** visualizar el reporte de alineación entre objetivos de carrera, resultados de aprendizaje y asignaturas
**Para:** evaluar la coherencia y el alcance del programa académico

#### Criterios de Aceptación

- ✅ La página de 'Reporte: Objetivos de Carrera vs Resultados de Aprendizaje vs Asignaturas' se muestra correctamente.
- ✅ El reporte presenta una estructura organizada mostrando 'Objetivos de Carrera', sus 'Resultados de Aprendizaje' asociados y las 'Asignaturas' que contribuyen a estos.
- ✅ Se muestra la alineación de todos los elementos para la carrera seleccionada.


**Story Points:** 5**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Objetivos de Carrera vs Resultados de Aprendizaje vs Asignaturas por Facultad
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de alineación por facultad
**Para:** acotar la información a facultades específicas

#### Criterios de Aceptación

- ✅ El reporte incluye un campo de búsqueda de 'Facultad'.
- ✅ Al seleccionar una facultad, el reporte se actualiza mostrando solo los datos relacionados con esa facultad.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Objetivos de Carrera vs Resultados de Aprendizaje vs Asignaturas por Carrera
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de alineación por carrera
**Para:** analizar la alineación de un programa de estudios específico

#### Criterios de Aceptación

- ✅ El reporte incluye un selector de 'Carrera'.
- ✅ Al seleccionar una carrera, el reporte se actualiza mostrando solo los datos de esa carrera.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Objetivos de Carrera vs Resultados de Aprendizaje vs Asignaturas por Nivel de Aporte
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de alineación por nivel de aporte
**Para:** identificar las relaciones de una intensidad específica

#### Criterios de Aceptación

- ✅ El reporte incluye opciones de filtro por 'Nivel de aporte' (Alto, Medio, Bajo).
- ✅ Al seleccionar una o más opciones, el reporte se actualiza mostrando solo las relaciones que coinciden con el nivel seleccionado.


**Story Points:** 1**Prioridad:** Alta (1)

<!-- --- -->

## PROMPT 2

**Fecha:** 25 oct 2025, 01:38 a m. (UTC)

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
uan 
📊 Velocidad Histórica del Equipo
Velocidad baja: 54 sp
Velocidad alta: 75 sp
📌 Ejemplos de HU (histórico del equipo) con su estimación en sp 
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
hu :HU9: Patrón wizard para RA y OPP 
Como coordinador
quiero conocer los pasos de creación de una relación RA-OPP
para validar el aporte de los RA a los OPP
Desglosemos esta estructura:
Una historia de usuario expresa una necesidad del usuario y el valor que obtiene, no las acciones técnicas ni múltiples propósitos a la vez.
Se redacta con la fórmula:
Como [rol/usuario], quiero [funcionalidad o acción principal], para [beneficio o propósito]
🧩 Ejemplo:
Como estudiante,
quiero registrar mis avances en un formulario,
para llevar un control de mi progreso.
👉 Aquí la historia representa la funcionalidad de registrar avances, no el acto de “entrar a la sección”. adeas cada hu debe tener una solo accion 
Reglas de estimación de tareas (FE/BE) Front-end: 0 a 1 hora por tarea (ej: 0.1, 0.3, 0.5, 1). Back-end: 0 a 1 hora por tarea (idem). Usa verbos en infinitivo para títulos de tareas. No repetir títulos de tareas.
Accion :
sprint planning 4
Crea mi  hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada , fíjate en todas las imágenes , para la historias de usuario deben ser directas no concatenedas con "y" ni con "o" , para las tareas de front y back necesito que seas especifico 
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

### 🎯 HU: Visualizar Reporte Asignatura vs Criterios EURACE
**Como:** Coordinador de Carrera
**Quiero:** visualizar el reporte de contribución de asignaturas a los criterios EURACE
**Para:** analizar la alineación de los programas de estudio con los estándares de acreditación

#### Criterios de Aceptación

- ✅ La página de 'Reporte: Asignatura vs Criterios EURACE' se muestra correctamente.
- ✅ El reporte muestra una matriz con las 'Asignaturas' en las filas y los 'Criterios EUR-ACE' en las columnas.
- ✅ Las celdas de la matriz indican la existencia de una contribución con un checkmark.


**Story Points:** 5**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Asignatura vs Criterios EURACE por Facultad
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de asignaturas vs criterios EURACE por facultad
**Para:** acotar la información a facultades específicas

#### Criterios de Aceptación

- ✅ El reporte incluye un campo de búsqueda de 'Facultad'.
- ✅ Al seleccionar una facultad, la matriz se actualiza mostrando solo las asignaturas de esa facultad.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Asignatura vs Criterios EURACE por Carrera
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de asignaturas vs criterios EURACE por carrera
**Para:** analizar la contribución de asignaturas dentro de una carrera específica

#### Criterios de Aceptación

- ✅ El reporte incluye un selector de 'Carrera'.
- ✅ Al seleccionar una carrera, la matriz se actualiza mostrando solo las asignaturas de esa carrera.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Asignatura vs Criterios EURACE por Nivel de Aporte
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de asignaturas vs criterios EURACE por nivel de aporte
**Para:** identificar las contribuciones de una intensidad específica

#### Criterios de Aceptación

- ✅ El reporte incluye opciones de filtro por 'Nivel de aporte' (Alto, Medio, Bajo).
- ✅ Al seleccionar una o más opciones, la matriz se actualiza mostrando solo las contribuciones que coinciden con el nivel seleccionado.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Buscar Asignatura en Reporte Asignatura vs Criterios EURACE
**Como:** Coordinador de Carrera
**Quiero:** buscar asignaturas por código o nombre en el reporte Asignatura vs Criterios EURACE
**Para:** encontrar rápidamente la contribución de asignaturas específicas

#### Criterios de Aceptación

- ✅ Un campo de búsqueda 'Buscar por código o nombre de asignatura' aparece en el reporte.
- ✅ Al ingresar texto, la tabla de asignaturas se filtra mostrando las filas coincidentes en tiempo real.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Visualizar Trazabilidad detallada de Contribución Asignatura-Criterio
**Como:** Coordinador de Carrera
**Quiero:** ver el detalle de la trazabilidad de la contribución de una asignatura a un criterio EURACE
**Para:** entender la justificación completa de una relación RAA-RA-EURACE

#### Criterios de Aceptación

- ✅ La página de 'Trazabilidad de [Nombre de Asignatura]' se carga mostrando el detalle.
- ✅ La trazabilidad presenta un flujo visual: Resultado de Aprendizaje Asignatura (RAA) → Resultado de Aprendizaje (RA) → Justificación RA-EURACE → Criterio EUR-ACE.
- ✅ La información se agrupa por 'Nivel de aporte' (Alto, Medio, Bajo).


**Story Points:** 5**Prioridad:** Alta (1)


### 🎯 HU: Visualizar Reporte Objetivos de Carrera vs Resultados de Aprendizaje vs Asignaturas
**Como:** Coordinador de Carrera
**Quiero:** visualizar el reporte de alineación entre objetivos de carrera, resultados de aprendizaje y asignaturas
**Para:** evaluar la coherencia y el alcance del programa académico

#### Criterios de Aceptación

- ✅ La página de 'Reporte: Objetivos de Carrera vs Resultados de Aprendizaje vs Asignaturas' se muestra correctamente.
- ✅ El reporte presenta una estructura organizada mostrando 'Objetivos de Carrera', sus 'Resultados de Aprendizaje' asociados y las 'Asignaturas' que contribuyen a estos.
- ✅ Se muestra la alineación de todos los elementos para la carrera seleccionada.


**Story Points:** 5**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Objetivos de Carrera vs Resultados de Aprendizaje vs Asignaturas por Facultad
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de alineación por facultad
**Para:** acotar la información a facultades específicas

#### Criterios de Aceptación

- ✅ El reporte incluye un campo de búsqueda de 'Facultad'.
- ✅ Al seleccionar una facultad, el reporte se actualiza mostrando solo los datos relacionados con esa facultad.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Objetivos de Carrera vs Resultados de Aprendizaje vs Asignaturas por Carrera
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de alineación por carrera
**Para:** analizar la alineación de un programa de estudios específico

#### Criterios de Aceptación

- ✅ El reporte incluye un selector de 'Carrera'.
- ✅ Al seleccionar una carrera, el reporte se actualiza mostrando solo los datos de esa carrera.


**Story Points:** 1**Prioridad:** Alta (1)


### 🎯 HU: Filtrar Reporte Objetivos de Carrera vs Resultados de Aprendizaje vs Asignaturas por Nivel de Aporte
**Como:** Coordinador de Carrera
**Quiero:** filtrar el reporte de alineación por nivel de aporte
**Para:** identificar las relaciones de una intensidad específica

#### Criterios de Aceptación

- ✅ El reporte incluye opciones de filtro por 'Nivel de aporte' (Alto, Medio, Bajo).
- ✅ Al seleccionar una o más opciones, el reporte se actualiza mostrando solo las relaciones que coinciden con el nivel seleccionado.


**Story Points:** 1**Prioridad:** Alta (1)

<!-- --- -->
