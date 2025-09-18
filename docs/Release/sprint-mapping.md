# SPRINT MAPPING – RELEASE ÚNICO SISTEMA DE ACREDITACIÓN EUR-ACE

---

## PROMPT 3

### ROL 
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

### Objetivo 
Ahora necesito definir un sprint mapping en este iría el objetivo de cada sprint. El sprint mapping debe ser de una semana, ten en cuenta que para el desarrollo nos vamos a apoyar de la IA, bien máximo debe haber 5 sprints.

### Contexto
Recordemos como funciona el proyecto:

La Escuela Politécnica Nacional busca un producto software que le ayude a verificar las carreras que se acreditan bajo el sello EUR-ACE. La universidad está dividida en Facultades, cada una con carreras, profesores y autoridades. Para ser coordinador o autoridad primero se debe ser profesor. Cada carrera tiene un solo coordinador y existe la DGIP como entidad superior académica. La autoridad administra la facultad, el coordinador gestiona la carrera. El sello EUR-ACE es un certificado internacional que garantiza altos estándares de calidad en programas de ingeniería.

Cada carrera cuenta con resultados de aprendizaje (RA) generales y específicos. Para validar el cumplimiento de los RA, cada carrera tiene materias y un programa de estudios académicos (PEA) con información relevante de cada materia (unidad académica, carrera, código, créditos, resultados de aprendizaje de la asignatura - RAA). Los RAA validan el cumplimiento de los RA con un nivel de aporte (alto, medio, bajo).

Para acreditar una carrera es necesario que los RA cumplan con los criterios EUR-ACE con un nivel de aporte. El software ayudará a la EPN a verificar qué carreras logran acreditarse mediante reportes de cumplimiento.

### Accion 
Crea un release mapping identificando dependencias y valor comercial en cada sprint y sigue este formato:


### formato de salida 
5. Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI: Sprint 2 de esta manera se tiene un poco más claro la trayectoria

---

## RESPUESTA

📌 Sprint Mapping – Release único

Sprint 1: (16 – 22 de septiembre 2025)

Objetivo: Implementar la estructura académica base.

PBI:
- Gestión de Facultades, Carreras y Profesores.
- Definición de roles (Profesor, Coordinador, Autoridad, DGIP, CEI).
- Control de accesos inicial.

Dependencia: Ninguna (base para todo el sistema).

Valor comercial: La EPN obtiene la estructura organizativa digitalizada como prerequisito de la acreditación.

Sprint 2: (23 – 29 de septiembre 2025)

Objetivo: Gestionar materias y PEAs.

PBI:
- Registro de Materias.
- Registro de Programas de Estudio Académico (PEA).
- Registro de Resultados de Aprendizaje de Asignaturas (RAA).

Dependencia: Requiere Facultades y Carreras del Sprint 1.

Valor comercial: Profesores pueden ingresar información estandarizada que será usada para evidencias de acreditación.

Sprint 3: (30 de septiembre – 6 de octubre 2025)

Objetivo: Configurar RA y OPP.

PBI:
- Registro de Resultados de Aprendizaje de Carrera (RA).
- Registro de Objetivos de Perfil Profesional (OPP).

Dependencia: Requiere PEA y RAA del Sprint 2.

Valor comercial: Coordinadores pueden formalizar el perfil de egreso de las carreras alineado con la profesión.

Sprint 4: (7 – 13 de octubre 2025)

Objetivo: Relacionar RAAs, RAs, OPP y criterios EUR-ACE.

PBI:
- Registro de Objetivos EUR-ACE.
- Definición de relaciones: RAA → RA → OPP → EUR-ACE (con nivel de aporte).

Dependencia: Requiere RA, OPP y RAA de sprints previos.

Valor comercial: El sistema ya permite verificar la trazabilidad de los aprendizajes hacia los criterios EUR-ACE.

Sprint 5: (14 – 20 de octubre 2025)

Objetivo: Generar evidencias y reportes de acreditación.

PBI:
- Generación de reportes de cumplimiento por carrera y facultad.
- Dashboards de seguimiento para DGIP, CEI y Autoridades.

Dependencia: Requiere datos y relaciones académicas del Sprint 4.

Valor comercial: La EPN obtiene reportes verificables listos para presentar a evaluadores externos y demostrar el cumplimiento del sello EUR-ACE.
# SPRINT MAPPING – SISTEMA DE GESTIÓN DE ACREDITACIÓN EUR-ACE

---

## PROMPT 2

### Rol 
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

### Objetivo 
Ahora necesito definir un sprint mapping en este iría el objetivo de cada sprint. El sprint mapping debe ser de una semana, ten en cuenta que para el desarrollo nos vamos a apoyar de la IA, bien máximo debe haber 5 sprints.

### Contexto
Recuerda cómo funciona el proyecto.


### Accio 
Crea un release mapping identificando dependencias y valor comercial en cada sprint y sigue este formato:

### Formato de salida 
5. Sprint Mapping
Sprint 1: (1 de mayo – 15 de mayo)
Objetivo:
PBI:
Sprint 2
de esta manera se tiene un poco más claro la trayectoria.

---

## RESPUESTA

📌 Release Mapping – Sistema de Gestión de Acreditación EUR-ACE

Sprint 1: (16 – 22 de septiembre)

Objetivo: Construir la base organizativa del sistema.

PBI:
- Gestión de organización académica (Facultades, Carreras, Materias, Profesores).
- Configuración inicial de roles básicos.

Dependencias: Ninguna, es el cimiento.

Valor comercial: Permite tener la estructura mínima institucional para sustentar todo el flujo de acreditación.

Sprint 2: (23 – 29 de septiembre)

Objetivo: Registrar información académica básica por asignatura.

PBI:
- Gestión de PEAs.
- Registro de RAA (contribuciones de asignaturas).

Dependencias: Requiere organización académica del Sprint 1.

Valor comercial: Facultades y profesores empiezan a digitalizar información esencial para acreditación.

Sprint 3: (30 de septiembre – 6 de octubre)

Objetivo: Formalizar resultados de aprendizaje y objetivos de carrera.

PBI:
- Gestión de RA de carrera.
- Gestión de OPP.

Dependencias: Requiere PEAs y RAA del Sprint 2.

Valor comercial: Carreras comienzan a estructurar el perfil de egreso y la conexión con la profesión de ingeniería.

Sprint 4: (7 – 13 de octubre)

Objetivo: Alinear carreras con criterios internacionales.

PBI:
- Gestión de objetivos EUR-ACE.
- Definición de relaciones (RAA → RA → OPP → EUR-ACE).

Dependencias: Requiere RA y OPP del Sprint 3.

Valor comercial: El CEI y coordinadores pueden verificar trazabilidad y alineación con estándares EUR-ACE.

Sprint 5: (14 – 20 de octubre)

Objetivo: Verificación y generación de evidencias de acreditación.

PBI:
- Reportes de cumplimiento EUR-ACE.
- Gestión de roles avanzada (permisos CEI, DGIP, autoridades).

Dependencias: Requiere relaciones definidas del Sprint 4.

Valor comercial: La EPN puede presentar evidencias verificables a evaluadores externos, cumpliendo el objetivo del producto.

✅ Con este plan, en 5 semanas se completa el Release Único, siguiendo una secuencia lógica de dependencias y asegurando que en cada sprint se entrega valor comercial incremental.
# RELEASE MAPPING – SISTEMA DE ACREDITACIÓN EUR-ACE

---

## PROMPT 1

### Objetivo
Ahora necesito definir un release mapping en este iría el objetivo de cada sprint. El release mapping debe ser de una semana, ten en cuenta que para el desarrollo nos vamos a apoyar de la IA, bien máximo debe haber 5 sprints.

### Accion 
Crea un release mapping identificando dependencias y valor comercial en cada sprint.

### Contexto 
Además, necesito que los objetivos de cada sprint sean comerciales y que tenga el siguiente formato:


### Formato de salida
5. Sprint Mapping
Sprint 1: (1 de mayo – 15 de mayo)

Objetivo:
PBI:

Sprint 2

de esta manera se tiene un poco más claro la trayectoria.

---

## RESPUESTA

📌 Release Mapping – Sistema de Acreditación EUR-ACE

Sprint 1: (16 de septiembre – 22 de septiembre)

Objetivo: Establecer la base académica digital para que la EPN organice facultades, carreras y materias en un sistema unificado.
PBI: Gestión de organización académica, gestión de roles y accesos básicos.

Sprint 2: (23 de septiembre – 29 de septiembre)

Objetivo: Habilitar a los profesores para registrar PEAs y resultados de aprendizaje de asignaturas como evidencia inicial para la acreditación.
PBI: Gestión de PEA y gestión de RAA.

Sprint 3: (30 de septiembre – 6 de octubre)

Objetivo: Permitir a los coordinadores definir el perfil de egreso y el perfil profesional, alineando cada carrera con los objetivos de la profesión de ingeniería.
PBI: Gestión de RA de carrera, gestión de OPP.

Sprint 4: (7 de octubre – 13 de octubre)

Objetivo: Conectar resultados de aprendizaje y objetivos profesionales con los criterios EUR-ACE, asegurando trazabilidad académica.
PBI: Gestión de objetivos EUR-ACE, definición de relaciones académicas (RAA → RA → OPP → EUR-ACE).

Sprint 5: (14 de octubre – 20 de octubre)

Objetivo: Entregar reportes claros y verificables que demuestren el cumplimiento de los criterios EUR-ACE para cada carrera y facultad.
PBI: Generación de reportes de cumplimiento EUR-ACE.

✅ Con este mapeo, cada sprint aporta valor comercial tangible: desde organizar la información, capturar evidencias académicas, hasta entregar reportes listos para la acreditación.
