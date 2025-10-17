<!-- SPRINT:Sprint_Planning_3_Historias_de_Usuario:START -->


<!-- --- -->

## PROMPT 1

**Fecha:** 17 oct 2025, 03:46 a m. (UTC)

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
sprint planning 3
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

### HU: Listar Asignaturas (PEA)
**Como:** Profesor
**Quiero:** listar las asignaturas
**Para:** visualizar los programas de estudio

Criterios de aceptación:

- La página de 'Asignaturas (PEA)' muestra una tabla con Código, Nombre, Unidad de Integración Curricular, Créditos y Nivel Referencial.
- La tabla muestra las asignaturas asociadas al profesor o a su rol.
- Cada fila de la tabla incluye iconos para editar y eliminar la asignatura.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Buscar Asignaturas (PEA)
**Como:** Profesor
**Quiero:** buscar asignaturas por código o descripción
**Para:** encontrar rápidamente un programa de estudio específico

Criterios de aceptación:

- Existe un campo de búsqueda ('Buscar por código o descripción...') en la página de Asignaturas.
- Al ingresar texto en el campo de búsqueda, la tabla de asignaturas se actualiza mostrando solo las coincidencias.
- La búsqueda filtra por código y descripción de la asignatura.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Filtrar Asignaturas por Pénsum (PEA)
**Como:** Profesor
**Quiero:** filtrar las asignaturas por pénsum
**Para:** acotar la búsqueda a un plan de estudios específico

Criterios de aceptación:

- Existe un selector desplegable ('Pénsum') en la página de Asignaturas.
- El selector muestra los años de pénsum disponibles.
- Al seleccionar un pénsum, la tabla de asignaturas se actualiza mostrando solo las asignaturas de ese pénsum.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Filtrar Asignaturas por Periodo académico (PEA)
**Como:** Profesor
**Quiero:** filtrar las asignaturas por periodo académico
**Para:** ver los programas activos en un ciclo

Criterios de aceptación:

- Existe un selector desplegable ('Periodo académico') en la página de Asignaturas.
- El selector de periodo académico muestra los periodos disponibles.
- Al seleccionar un periodo, la tabla de asignaturas se actualiza mostrando solo las asignaturas de ese periodo.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Paginar Asignaturas (PEA)
**Como:** Profesor
**Quiero:** paginar las asignaturas
**Para:** navegar por un gran número de programas de estudio

Criterios de aceptación:

- Los controles de paginación (Previous, Next, números de página) se muestran debajo de la tabla de asignaturas.
- Al hacer clic en un número de página o en 'Previous'/'Next', la tabla muestra el conjunto correspondiente de asignaturas.
- La paginación funciona correctamente junto con la búsqueda y los filtros.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Crear Asignatura (PEA)
**Como:** Profesor
**Quiero:** crear una nueva asignatura
**Para:** registrar los detalles de un programa de estudio

Criterios de aceptación:

- Al hacer clic en '+ Nueva Asignatura', se muestra el formulario 'Crear/Editar Asignatura (PEA)'.
- El formulario contiene campos obligatorios: Código, Nombre, Unidad de integración curricular, Tipo de asignatura, Pénsum, Número de créditos, Nivel Referencial.
- Al rellenar los campos y hacer clic en 'Guardar', la nueva asignatura se guarda y aparece en la lista.

**Story Points:** 8
**Prioridad:** Alta (1)

---

### HU: Editar Asignatura (PEA)
**Como:** Profesor
**Quiero:** editar una asignatura existente
**Para:** actualizar los detalles de un programa de estudio

Criterios de aceptación:

- Al hacer clic en el icono de edición de una asignatura, el formulario 'Crear/Editar Asignatura (PEA)' se carga con los datos de la asignatura seleccionada.
- Al modificar los campos y hacer clic en 'Guardar', los cambios se aplican a la asignatura y se reflejan en la lista.

**Story Points:** 8
**Prioridad:** Alta (1)

---

### HU: Eliminar Asignatura (PEA)
**Como:** Profesor
**Quiero:** eliminar una asignatura
**Para:** retirar un programa de estudio obsoleto o incorrecto

Criterios de aceptación:

- Al hacer clic en el icono de eliminar de una asignatura, se muestra una confirmación antes de la eliminación.
- Tras la confirmación, la asignatura se elimina del sistema y desaparece de la lista.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Listar Resultados de Aprendizaje de Asignatura (RAA)
**Como:** Profesor
**Quiero:** listar los resultados de aprendizaje de una asignatura
**Para:** visualizar sus competencias específicas

Criterios de aceptación:

- Dentro de la edición de una asignatura, la pestaña 'Gestión de Resultados de Aprendizaje Asignatura (RAA)' muestra una tabla con Código, Tipo y Descripción de los RAA.
- La tabla muestra los RAA asociados a la asignatura actualmente seleccionada.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Crear Resultado de Aprendizaje de Asignatura (RAA)
**Como:** Profesor
**Quiero:** crear un nuevo resultado de aprendizaje de asignatura
**Para:** definir las competencias específicas

Criterios de aceptación:

- Al hacer clic en '+ Nuevo RAA' en la pestaña 'Gestión de Resultados de Aprendizaje Asignatura (RAA)', se muestra el modal 'Agregar Resultado de Aprendizaje de Asignatura (RAA)'.
- El modal contiene campos para Código, Tipo (dropdown con Conocimientos, Destrezas, Valores y actitudes) y Descripción.
- Al rellenar los campos y hacer clic en 'Guardar', el nuevo RAA se guarda y aparece en la tabla.

**Story Points:** 8
**Prioridad:** Alta (1)

---

### HU: Editar Resultado de Aprendizaje de Asignatura (RAA)
**Como:** Profesor
**Quiero:** editar un resultado de aprendizaje de asignatura existente
**Para:** actualizar su descripción o tipo

Criterios de aceptación:

- Al hacer clic en el icono de edición de un RAA en la tabla, el modal 'Agregar Resultado de Aprendizaje de Asignatura (RAA)' se carga con los datos del RAA seleccionado.
- Al modificar los campos y hacer clic en 'Guardar', los cambios se aplican al RAA y se reflejan en la tabla.

**Story Points:** 5
**Prioridad:** Alta (1)

---

### HU: Eliminar Resultado de Aprendizaje de Asignatura (RAA)
**Como:** Profesor
**Quiero:** eliminar un resultado de aprendizaje de asignatura
**Para:** corregir o retirar competencias

Criterios de aceptación:

- Al hacer clic en el icono de eliminar de un RAA, se muestra una confirmación antes de la eliminación.
- Tras la confirmación, el RAA se elimina del sistema y desaparece de la tabla.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Listar Objetivos de Perfil Profesional (OPP)
**Como:** Coordinador de Carrera
**Quiero:** listar los objetivos de perfil profesional
**Para:** consultar las capacidades del graduado

Criterios de aceptación:

- La página de 'Gestión de Objetivos de Carrera (OPP)' muestra una tabla con Código y Descripción de los OPP.
- La tabla muestra todos los OPP definidos para la carrera asignada al coordinador.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Crear Objetivo de Perfil Profesional (OPP)
**Como:** Coordinador de Carrera
**Quiero:** crear un nuevo objetivo de perfil profesional
**Para:** definir una capacidad del graduado

Criterios de aceptación:

- Al hacer clic en '+ Nuevo OPP', se muestra un formulario o modal para agregar un OPP.
- El formulario contiene campos para Código y Descripción.
- Al rellenar los campos y hacer clic en 'Guardar', el nuevo OPP se guarda y aparece en la lista.

**Story Points:** 5
**Prioridad:** Alta (1)

---

### HU: Editar Objetivo de Perfil Profesional (OPP)
**Como:** Coordinador de Carrera
**Quiero:** editar un objetivo de perfil profesional existente
**Para:** actualizar su descripción

Criterios de aceptación:

- Al hacer clic en el icono de edición de un OPP, el formulario/modal se carga con los datos del OPP seleccionado.
- Al modificar los campos y hacer clic en 'Guardar', los cambios se aplican al OPP y se reflejan en la tabla.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Eliminar Objetivo de Perfil Profesional (OPP)
**Como:** Coordinador de Carrera
**Quiero:** eliminar un objetivo de perfil profesional
**Para:** retirar una capacidad obsoleta o incorrecta

Criterios de aceptación:

- Al hacer clic en el icono de eliminar de un OPP, se muestra una confirmación antes de la eliminación.
- Tras la confirmación, el OPP se elimina del sistema y desaparece de la lista.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Buscar Objetivos de Perfil Profesional (OPP)
**Como:** Coordinador de Carrera
**Quiero:** buscar objetivos de perfil profesional
**Para:** encontrar rápidamente una capacidad específica

Criterios de aceptación:

- Existe un campo de búsqueda en la página de OPP.
- Al ingresar texto en el campo de búsqueda, la tabla de OPPs se actualiza mostrando las coincidencias.
- La búsqueda filtra por código y descripción del OPP.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Paginar Objetivos de Perfil Profesional (OPP)
**Como:** Coordinador de Carrera
**Quiero:** paginar los objetivos de perfil profesional
**Para:** navegar por la lista de capacidades

Criterios de aceptación:

- Los controles de paginación se muestran debajo de la tabla de OPPs.
- Al hacer clic en los controles, la tabla muestra el conjunto correspondiente de OPPs.
- La paginación funciona correctamente junto con la búsqueda.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Visualizar Matriz de Contribución RAA vs RA
**Como:** Coordinador de Carrera
**Quiero:** visualizar la matriz de contribución RAA vs RA de una asignatura
**Para:** entender cómo las asignaturas aportan a la carrera

Criterios de aceptación:

- La página 'Matriz: Resultados de aprendizaje de Asignatura (RAA) y Resultados de aprendizaje (RA)' muestra una cuadrícula.
- Las filas representan RAAs y las columnas representan RAs para una asignatura seleccionada.
- Los puntos de intersección muestran un indicador visual (ej. checkmark) si existe una relación.

**Story Points:** 8
**Prioridad:** Alta (1)

---

### HU: Buscar Asignatura para Matriz RAA vs RA
**Como:** Coordinador de Carrera
**Quiero:** buscar una asignatura para la matriz RAA vs RA
**Para:** consultar sus contribuciones

Criterios de aceptación:

- Existe un campo de búsqueda ('Buscar una Asignatura') en la página de la matriz RAA vs RA.
- Al ingresar texto, se muestra una lista desplegable de asignaturas coincidentes para seleccionar.
- Al seleccionar una asignatura, la matriz se actualiza mostrando las relaciones para esa asignatura.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Vincular RAA con RA
**Como:** Coordinador de Carrera
**Quiero:** vincular un Resultado de Aprendizaje de Asignatura (RAA) a un Resultado de Aprendizaje (RA) de mi carrera
**Para:** entender cómo cada asignatura contribuye a las competencias globales

Criterios de aceptación:

- Al hacer clic en '+ Nueva Relación' en la matriz RAA vs RA, se inicia un proceso de wizard.
- El paso 1 del wizard permite seleccionar un RAA de una lista paginada y filtrable.
- El paso 2 del wizard permite seleccionar un RA de una lista paginada y filtrable.
- El paso 3 del wizard permite seleccionar el 'Nivel de Aporte' (Alto, Medio, Bajo) y añadir una justificación.
- Al guardar en el paso 3, la relación se registra y se muestra en la matriz actualizada.

**Story Points:** 13
**Prioridad:** Alta (1)

<!-- --- -->
