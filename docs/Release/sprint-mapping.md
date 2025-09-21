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


📌 **Sprint Mapping – Release único**

**Sprint 1: (16 – 22 de septiembre 2025)**
	- **Objetivo:** Implementar la estructura académica base.
	- **PBI:**
		- Gestión de Facultades, Carreras y Profesores
		- Definición de roles (Profesor, Coordinador, Autoridad, DGIP, CEI)
		- Control de accesos inicial
	- **Dependencia:** Ninguna (base para todo el sistema)
	- **Valor comercial:** La EPN obtiene la estructura organizativa digitalizada como prerequisito de la acreditación

**Sprint 2: (23 – 29 de septiembre 2025)**
	- **Objetivo:** Gestionar materias y PEAs.
	- **PBI:**
		- Registro de Materias
		- Registro de Programas de Estudio Académico (PEA)
		- Registro de Resultados de Aprendizaje de Asignaturas (RAA)
	- **Dependencia:** Requiere Facultades y Carreras del Sprint 1
	- **Valor comercial:** Profesores pueden ingresar información estandarizada que será usada para evidencias de acreditación

**Sprint 3: (30 de septiembre – 6 de octubre 2025)**
	- **Objetivo:** Configurar RA y OPP.
	- **PBI:**
		- Registro de Resultados de Aprendizaje de Carrera (RA)
		- Registro de Objetivos de Perfil Profesional (OPP)
	- **Dependencia:** Requiere PEA y RAA del Sprint 2
	- **Valor comercial:** Coordinadores pueden formalizar el perfil de egreso de las carreras alineado con la profesión

**Sprint 4: (7 – 13 de octubre 2025)**
	- **Objetivo:** Relacionar RAAs, RAs, OPP y criterios EUR-ACE.
	- **PBI:**
		- Registro de Objetivos EUR-ACE
		- Definición de relaciones: RAA → RA → OPP → EUR-ACE (con nivel de aporte)
	- **Dependencia:** Requiere RA, OPP y RAA de sprints previos
	- **Valor comercial:** El sistema ya permite verificar la trazabilidad de los aprendizajes hacia los criterios EUR-ACE

**Sprint 5: (14 – 20 de octubre 2025)**
	- **Objetivo:** Generar evidencias y reportes de acreditación.
	- **PBI:**
		- Generación de reportes de cumplimiento por carrera y facultad
		- Dashboards de seguimiento para DGIP, CEI y Autoridades
	- **Dependencia:** Requiere datos y relaciones académicas del Sprint 4
	- **Valor comercial:** La EPN obtiene reportes verificables listos para presentar a evaluadores externos y demostrar el cumplimiento del sello EUR-ACE
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


📌 **Release Mapping – Sistema de Gestión de Acreditación EUR-ACE**

**Sprint 1: (16 – 22 de septiembre)**
	- **Objetivo:** Construir la base organizativa del sistema.
	- **PBI:**
		- Gestión de organización académica (Facultades, Carreras, Materias, Profesores)
		- Configuración inicial de roles básicos
	- **Dependencias:** Ninguna, es el cimiento
	- **Valor comercial:** Permite tener la estructura mínima institucional para sustentar todo el flujo de acreditación

**Sprint 2: (23 – 29 de septiembre)**
	- **Objetivo:** Registrar información académica básica por asignatura.
	- **PBI:**
		- Gestión de PEAs
		- Registro de RAA (contribuciones de asignaturas)
	- **Dependencias:** Requiere organización académica del Sprint 1
	- **Valor comercial:** Facultades y profesores empiezan a digitalizar información esencial para acreditación

**Sprint 3: (30 de septiembre – 6 de octubre)**
	- **Objetivo:** Formalizar resultados de aprendizaje y objetivos de carrera.
	- **PBI:**
		- Gestión de RA de carrera
		- Gestión de OPP
	- **Dependencias:** Requiere PEAs y RAA del Sprint 2
	- **Valor comercial:** Carreras comienzan a estructurar el perfil de egreso y la conexión con la profesión de ingeniería

**Sprint 4: (7 – 13 de octubre)**
	- **Objetivo:** Alinear carreras con criterios internacionales.
	- **PBI:**
		- Gestión de objetivos EUR-ACE
		- Definición de relaciones (RAA → RA → OPP → EUR-ACE)
	- **Dependencias:** Requiere RA y OPP del Sprint 3
	- **Valor comercial:** El CEI y coordinadores pueden verificar trazabilidad y alineación con estándares EUR-ACE

**Sprint 5: (14 – 20 de octubre)**
	- **Objetivo:** Verificación y generación de evidencias de acreditación.
	- **PBI:**
		- Reportes de cumplimiento EUR-ACE
		- Gestión de roles avanzada (permisos CEI, DGIP, autoridades)
	- **Dependencias:** Requiere relaciones definidas del Sprint 4
	- **Valor comercial:** La EPN puede presentar evidencias verificables a evaluadores externos, cumpliendo el objetivo del producto

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


📌 **Release Mapping – Sistema de Acreditación EUR-ACE**

**Sprint 1: (16 de septiembre – 22 de septiembre)**
	- **Objetivo:** Establecer la base académica digital para que la EPN organice facultades, carreras y materias en un sistema unificado.
	- **PBI:**
		- Gestión de organización académica
		- Gestión de roles y accesos básicos

**Sprint 2: (23 de septiembre – 29 de septiembre)**
	- **Objetivo:** Habilitar a los profesores para registrar PEAs y resultados de aprendizaje de asignaturas como evidencia inicial para la acreditación.
	- **PBI:**
		- Gestión de PEA
		- Gestión de RAA

**Sprint 3: (30 de septiembre – 6 de octubre)**
	- **Objetivo:** Permitir a los coordinadores definir el perfil de egreso y el perfil profesional, alineando cada carrera con los objetivos de la profesión de ingeniería.
	- **PBI:**
		- Gestión de RA de carrera
		- Gestión de OPP

**Sprint 4: (7 de octubre – 13 de octubre)**
	- **Objetivo:** Conectar resultados de aprendizaje y objetivos profesionales con los criterios EUR-ACE, asegurando trazabilidad académica.
	- **PBI:**
		- Gestión de objetivos EUR-ACE
		- Definición de relaciones académicas (RAA → RA → OPP → EUR-ACE)

**Sprint 5: (14 de octubre – 20 de octubre)**
	- **Objetivo:** Entregar reportes claros y verificables que demuestren el cumplimiento de los criterios EUR-ACE para cada carrera y facultad.
	- **PBI:**
		- Generación de reportes de cumplimiento EUR-ACE

✅ Con este mapeo, cada sprint aporta valor comercial tangible: desde organizar la información, capturar evidencias académicas, hasta entregar reportes listos para la acreditación.

## PROMPT 4

**Prompt:**

ROL Actua como un Product owner que es experto en gestión de productos de Software.

objetivo:

Definir el SPRINT maapping para construir el producto software

CONTEXTO

EUR-ACE es una etiqueta de calidad y un sistema de acreditación para programas de estudios de ingeniería a nivel de grado y máster. La etiqueta, que es reconocida a nivel europeo e internacional, es un certificado que garantiza que el programa de estudios cumple con altos estándares de calidad y con las exigencias de la profesión de ingeniería.

La Escuela Politécnica Nacional, o EPN, es una universidad pública, de grado y posgrado, ubicada en Quito (Ecuador). Reconocida por la investigación y la educación en ciencias básicas, ingenierías y tecnología, ofrece programas doctorales, de maestría y de grado.

La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

Cada carrera de la EPN cuenta con resultados de aprendizaje (RA): generales y específicos que son los resultados que se garantizan que el estudiante tenga cuando termina la carrera.

También cada carrera cuenta con Objetivos de perfil profesional que son los objetivos que se espera que un estudiante realice en su vida profesional.

Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : -- Unidad Académica " -- Carrera -- Unidad de organización curricular -- Nombre de la asignatura -- Código

-- Créditos -- Resultados de aprendizaje de la asignatura (RAA)

Bien para evaluar que los RA de la carrera se estén cumpliendo se verifica como los RAA de cada materia aportan con un nivel (Bajo , Medio , Alto) a los RA .

También para Evaluar los OPP se verifica como los RA aportan a los OPP.

Para lograr la acreditación es importante los RA ya que con estos se verifica los objetivos EUR-ACE Es decir se verifica que los RA cumplan con los objetivos EURACE.

ACCION

Crea el SPRINT MAPPING  identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses "y ni o " las hu deben ser claras

**Respuesta:**

# Sprint Mapping - Release 1 (5 Semanas)

## Objetivo del Release:
Construir la base organizacional y curricular del sistema, habilitar la gestión de resultados de aprendizaje y sus relaciones de aporte, y proporcionar una primera visión del cumplimiento EUR-ACE para un programa de ingeniería.

---

## Sprint 1: (Día 1 – Día 5)
**Objetivo:** Establecer la infraestructura fundamental del sistema, incluyendo la organización académica básica, la gestión de usuarios y la definición de los objetivos EUR-ACE.
**Valor Comercial:** Proporciona la columna vertebral del sistema, asegurando que los usuarios autorizados puedan acceder y que los criterios de acreditación EUR-ACE estén registrados, un paso esencial para cualquier proceso de acreditación.
**PBIs:**
  { "title": "HU: Login Seguro", "como": "Usuario del sistema", "quiero": "acceder al sistema de forma segura con mis credenciales", "para": "realizar las acciones correspondientes a mi rol.", "acceptanceCriteria": [ "El usuario puede iniciar sesión con credenciales válidas.", "El sistema redirige al usuario a la vista inicial de su rol.", "La sesión permanece activa por un tiempo definido.", "El usuario puede cerrar sesión de forma segura."], "storyPoints": 3, "priority": 1, "backendTasks": ["Implementación de autenticación JWT/OAuth.", "Gestión de sesiones de usuario.", "Protección de rutas por roles."], "frontendTasks": ["Diseño e implementación de la pantalla de login.", "Integración de la lógica de autenticación en la aplicación.", "Manejo de estados de sesión de usuario."]},
  { "title": "HU: Gestionar Facultades", "como": "DGIP", "quiero": "registrar y actualizar facultades", "para": "establecer la estructura organizativa de la EPN en el sistema.", "acceptanceCriteria": [ "Se puede crear una nueva facultad con nombre y código único.", "Se puede ver una lista de todas las facultades.", "Se puede modificar la información de una facultad existente.", "Se puede eliminar una facultad si no tiene carreras asociadas."], "storyPoints": 5, "priority": 1, "backendTasks": ["Desarrollo del API REST para CRUD de Facultades.", "Validación de unicidad de código/nombre de facultad.", "Implementación de lógica para verificar dependencias antes de eliminar."], "frontendTasks": ["Diseño e implementación de la interfaz para listar facultades.", "Diseño e implementación de formularios para crear/editar facultades.", "Integración con el API de Facultades."]},
  { "title": "HU: Gestionar Carreras", "como": "DGIP", "quiero": "registrar y actualizar carreras, asociándolas a una facultad", "para": "organizar las ofertas académicas de la EPN.", "acceptanceCriteria": [ "Se puede crear una nueva carrera, seleccionando la facultad a la que pertenece.", "Se puede ver una lista de todas las carreras, mostrando su facultad asociada.", "Se puede modificar la información de una carrera existente.", "Se puede eliminar una carrera si no tiene coordinadores o datos curriculares asociados."], "storyPoints": 5, "priority": 1, "backendTasks": ["Desarrollo del API REST para CRUD de Carreras.", "Asociación de carrera con facultad en la base de datos.", "Validación de unicidad de código/nombre de carrera por facultad."], "frontendTasks": ["Diseño e implementación de la interfaz para listar carreras.", "Formularios para crear/editar carreras con selector de facultad.", "Integración con el API de Carreras."]},
  { "title": "HU: Gestionar Criterios EUR-ACE", "como": "Miembro del CEI", "quiero": "registrar y consultar los criterios de acreditación EUR-ACE", "para": "definir los estándares de calidad del sistema.", "acceptanceCriteria": [ "Se puede crear un nuevo criterio EUR-ACE con código y descripción.", "Se puede ver una lista de todos los criterios EUR-ACE.", "Se puede modificar un criterio EUR-ACE existente.", "Se puede eliminar un criterio EUR-ACE si no tiene relaciones activas con RA."], "storyPoints": 5, "priority": 1, "backendTasks": ["Desarrollo del API REST para CRUD de Criterios EUR-ACE.", "Validación de unicidad de código EUR-ACE.", "Implementación de lógica para verificar dependencias antes de eliminar."], "frontendTasks": ["Interfaz para listar criterios EUR-ACE.", "Formularios para crear/editar criterios EUR-ACE.", "Integración con el API de Criterios EUR-ACE."]},
  { "title": "HU: Asignar Roles a Profesores", "como": "DGIP", "quiero": "asignar roles (Coordinador, Autoridad, CEI) a los profesores registrados en el sistema", "para": "controlar los permisos de acceso y las funcionalidades que cada usuario puede realizar.", "acceptanceCriteria": [ "El DGIP puede ver una lista de profesores existentes.", "El DGIP puede seleccionar un profesor y asignarle uno o varios roles (ej. 'Coordinador', 'Autoridad', 'CEI').", "Los roles asignados se reflejan en los permisos del usuario al iniciar sesión.", "Se puede modificar o revocar un rol a un profesor."], "storyPoints": 5, "priority": 1, "backendTasks": ["Desarrollo de API para gestionar usuarios y sus roles.", "Lógica para asociar roles a un usuario.", "Validación de permisos del DGIP para esta acción."], "frontendTasks": ["Interfaz para listar usuarios/profesores con sus roles actuales.", "Componente para asignar/modificar roles a usuarios.", "Integración con el API de gestión de roles."]}
**Dependencias:** Ninguna interna en este sprint. PBIs de sprints posteriores dependen de esta base.

---

## Sprint 2: (Día 6 – Día 10)
**Objetivo:** Habilitar a los Coordinadores de Carrera para definir los resultados de aprendizaje de la carrera (RA), los objetivos de perfil profesional (OPP) y gestionar las asignaturas, incluyendo la asignación de profesores.
**Valor Comercial:** Permite poblar el contenido académico fundamental de cada carrera, sentando las bases para el mapeo de resultados de aprendizaje, un valor crítico para la acreditación.
**PBIs:**
  { "title": "HU: Gestionar Resultados de Aprendizaje de Carrera (RA)", "como": "Coordinador de carrera", "quiero": "definir y mantener los resultados de aprendizaje de mi carrera", "para": "establecer de manera formalizada el perfil de egreso de los estudiantes.", "acceptanceCriteria": [ "Se puede crear un RA (general o específico) para mi carrera.", "Se puede ver una lista de RA de mi carrera.", "Se puede modificar un RA existente.", "Se puede eliminar un RA si no tiene relaciones de aporte con RAA, OPP o EUR-ACE."], "storyPoints": 5, "priority": 1, "backendTasks": ["API CRUD para RA, asociando a Carrera.", "Validación de unicidad de RA por carrera.", "Control de acceso para Coordinador de carrera."], "frontendTasks": ["Interfaz para listar RA por carrera.", "Formularios para crear/editar RA.", "Integración con API de RA."]},
  { "title": "HU: Gestionar Objetivos de Perfil Profesional (OPP)", "como": "Coordinador de carrera", "quiero": "registrar los objetivos de perfil profesional para mi carrera", "para": "establecer las expectativas del desempeño profesional de los egresados y alinear el perfil de egreso con las competencias de la profesión de ingeniería.", "acceptanceCriteria": [ "Se puede crear un OPP para mi carrera con código y descripción.", "Se puede ver una lista de OPP de mi carrera.", "Se puede modificar un OPP existente.", "Se puede eliminar un OPP si no tiene relaciones de aporte con RA."], "storyPoints": 5, "priority": 1, "backendTasks": ["API CRUD para OPP, asociando a Carrera.", "Validación de unicidad de código OPP por carrera.", "Control de acceso para Coordinador de carrera."], "frontendTasks": ["Interfaz para listar OPP por carrera.", "Formularios para crear/editar OPP.", "Integración con API de OPP."]},
  { "title": "HU: Gestionar Asignaturas de Carrera", "como": "Coordinador de carrera", "quiero": "crear y actualizar las asignaturas asociadas a mi carrera", "para": "definir la estructura curricular de mi carrera.", "acceptanceCriteria": [ "Se puede crear una nueva asignatura con nombre, código y créditos, asociándola a mi carrera.", "Se puede ver una lista de asignaturas de mi carrera.", "Se puede modificar la información de una asignatura existente.", "Se puede eliminar una asignatura si no tiene PEAs asociados."], "storyPoints": 5, "priority": 1, "backendTasks": ["API CRUD para Asignaturas, asociando a Carrera.", "Validación de unicidad de código de asignatura por carrera.", "Control de acceso para Coordinador de carrera."], "frontendTasks": ["Interfaz para listar asignaturas por carrera.", "Formularios para crear/editar asignaturas.", "Integración con API de Asignaturas."]},
  { "title": "HU: Asignar Profesor a Asignatura", "como": "Coordinador de carrera", "quiero": "asignar profesores a las asignaturas de mi carrera", "para": "definir quién es responsable de cada curso.", "acceptanceCriteria": [ "El coordinador puede seleccionar una asignatura y asignar uno o varios profesores a ella.", "Se puede ver la lista de profesores asignados a una asignatura.", "Se puede remover un profesor de una asignatura.", "El sistema valida que solo profesores registrados puedan ser asignados."], "storyPoints": 3, "priority": 2, "backendTasks": ["API para gestionar la relación Profesor-Asignatura.", "Control de acceso para Coordinador de carrera."], "frontendTasks": ["Interfaz de selección de profesores para asignaturas.", "Visualización de profesores asignados."]},
  { "title": "HU: Filtrar Entidades por Carrera", "como": "Coordinador de carrera", "quiero": "filtrar listados de RAA, RA, OPP y Asignaturas por mi carrera", "para": "gestionar eficientemente la información relevante para mi rol.", "acceptanceCriteria": [ "En los listados de RAA, RA, OPP y Asignaturas, existe una opción para filtrar por la carrera del coordinador.", "Al aplicar el filtro, solo se muestran las entidades correspondientes a la carrera seleccionada (o asignada al coordinador)." ], "storyPoints": 3, "priority": 2, "backendTasks": ["Ajustar APIs existentes para soportar filtrado por carrera.", "Asegurar que el coordinador solo puede ver sus datos."], "frontendTasks": ["Implementar componentes de filtro en las vistas correspondientes.", "Actualizar lógica de carga de datos para usar el filtro de carrera."]}
**Dependencias:** Depende de la configuración de Facultades, Carreras y Asignación de Roles (Sprint 1).

---

## Sprint 3: (Día 11 – Día 15)
**Objetivo:** Habilitar a los profesores para ingresar y gestionar los Programas de Estudio Académicos (PEA) y sus Resultados de Aprendizaje de la Asignatura (RAA).
**Valor Comercial:** Permite la carga de la información detallada de cada asignatura, vital para la evaluación de cómo los cursos individuales contribuyen a los objetivos de la carrera y la acreditación EUR-ACE.
**PBIs:**
  { "title": "HU: Gestionar PEA de Asignatura", "como": "Profesor", "quiero": "ingresar y actualizar el programa de estudios académicos (PEA) de mis asignaturas", "para": "documentar la planificación curricular de los cursos que imparto.", "acceptanceCriteria": [ "El profesor puede crear un nuevo PEA para una de sus asignaturas.", "El profesor puede modificar los datos generales de un PEA existente (Unidad Académica, Unidad de organización curricular, Nombre, Código, Créditos).", "Se puede eliminar un PEA si no tiene RAA asociados.", "El profesor solo puede gestionar PEAs de las asignaturas a las que está asignado."], "storyPoints": 5, "priority": 1, "backendTasks": ["API CRUD para PEA, controlando acceso por profesor asignado.", "Validación de datos del PEA."], "frontendTasks": ["Interfaz para listar PEAs del profesor.", "Formularios para crear/editar PEA.", "Integración con API de PEA."]},
  { "title": "HU: Gestionar RAA de Asignatura", "como": "Profesor", "quiero": "ingresar y actualizar los resultados de aprendizaje de la asignatura (RAA) asociados a un PEA de mis asignaturas", "para": "evidenciar la contribución de cada materia al perfil de egreso de la carrera.", "acceptanceCriteria": [ "El profesor puede crear un RAA para un PEA existente, definiendo su tipo (conocimiento, destrezas, valores, actitudes).", "El profesor puede modificar la descripción y tipo de un RAA existente.", "Se puede eliminar un RAA si no tiene relaciones de aporte con RA.", "El profesor solo puede gestionar RAA de las asignaturas a las que está asignado."], "storyPoints": 5, "priority": 1, "backendTasks": ["API CRUD para RAA, asociando a PEA y controlando acceso por profesor.", "Validación de unicidad de RAA por PEA."], "frontendTasks": ["Interfaz para listar RAA asociados a un PEA.", "Formularios para crear/editar RAA.", "Integración con API de RAA."]},
  { "title": "HU: Visualizar PEA Completo", "como": "Profesor", "quiero": "ver el programa de estudios académicos (PEA) completo de mis asignaturas, incluyendo sus RAA", "para": "consultar toda la información relevante de mis cursos.", "acceptanceCriteria": [ "El profesor puede acceder a la vista de los PEA de las asignaturas asignadas a él.", "Se muestra toda la información del PEA: Unidad Académica, Carrera, Unidad de organización curricular, Nombre, Código, Créditos.", "Se muestran los RAA asociados a la asignatura con su descripción y tipo.", "La información es de solo lectura."], "storyPoints": 3, "priority": 2, "backendTasks": ["API de solo lectura para obtener detalles de PEA y RAA por asignatura, filtrado por profesor asignado.", "Control de acceso para Profesores."], "frontendTasks": ["Interfaz de usuario para visualizar PEA y RAA.", "Integración de componentes de visualización de datos."]},
  { "title": "HU: Consultar Criterios EUR-ACE Detallados", "como": "Miembro del CEI", "quiero": "consultar la descripción detallada de los criterios EUR-ACE", "para": "tener una comprensión completa de los requisitos de acreditación.", "acceptanceCriteria": [ "Se puede seleccionar un criterio EUR-ACE de una lista.", "Se muestra la descripción completa y cualquier subcriterio asociado al criterio seleccionado.", "La información es de solo lectura."], "storyPoints": 1, "priority": 2, "backendTasks": ["Modificar API de Criterios EUR-ACE para devolver detalles completos."], "frontendTasks": ["Interfaz de usuario para ver el detalle de un criterio EUR-ACE."]}
**Dependencias:** Depende de la gestión de Asignaturas y Asignación de Profesores (Sprint 2). Los profesores deben tener el rol asignado (Sprint 1).

---

## Sprint 4: (Día 16 – Día 20)
**Objetivo:** Establecer las relaciones de aporte fundamentales entre los Resultados de Aprendizaje de las Asignaturas (RAA) y los Resultados de Aprendizaje de la Carrera (RA), así como de los RA a los Objetivos de Perfil Profesional (OPP).
**Valor Comercial:** Construye la trazabilidad académica crítica, mostrando cómo el contenido de los cursos contribuye a los objetivos de la carrera y a las competencias profesionales, elementos clave para la evaluación de la calidad.
**PBIs:**
  { "title": "HU: Establecer Aporte RAA a RA", "como": "Coordinador de carrera", "quiero": "definir el nivel de aporte de cada RAA de una asignatura a los RA de mi carrera", "para": "comprender la contribución de los resultados de las asignaturas a los resultados de la carrera.", "acceptanceCriteria": [ "Se puede seleccionar un RAA y un RA y asignar un nivel de aporte (Bajo, Medio, Alto).", "Se puede modificar el nivel de aporte de una relación existente.", "Se puede eliminar una relación de aporte RAA-RA.", "El sistema valida que no existan duplicados para la misma relación RAA-RA."], "storyPoints": 5, "priority": 1, "backendTasks": ["API CRUD para gestionar la tabla de relaciones RAA-RA (incluyendo nivel de aporte)."] , "frontendTasks": ["Interfaz para crear/editar relaciones RAA-RA con selector de nivel de aporte.", "Integración con el API de relaciones RAA-RA."]},
  { "title": "HU: Visualizar Aporte RAA a RA", "como": "Coordinador de carrera", "quiero": "ver una lista de todas las relaciones entre RAA y RA con sus niveles de aporte", "para": "revisar cómo las asignaturas contribuyen a los resultados de la carrera.", "acceptanceCriteria": [ "Se muestra una tabla con RAA, RA y su nivel de aporte.", "La tabla puede ser filtrada por RAA, RA o asignatura."], "storyPoints": 3, "priority": 1, "backendTasks": ["Modificar API para listar relaciones RAA-RA con filtros."], "frontendTasks": ["Diseño e implementación de la tabla de visualización de relaciones RAA-RA.", "Implementación de filtros en la interfaz."]},
  { "title": "HU: Establecer Aporte RA a OPP", "como": "Coordinador de carrera", "quiero": "definir el nivel de aporte de cada RA de la carrera a los OPP", "para": "evaluar cómo los resultados de aprendizaje contribuyen al perfil profesional.", "acceptanceCriteria": [ "Se puede seleccionar un RA y un OPP y asignar un nivel de aporte (Bajo, Medio, Alto).", "Se puede modificar el nivel de aporte de una relación RA-OPP existente.", "Se puede eliminar una relación RA-OPP.", "El sistema valida que no existan duplicados para la misma relación RA-OPP."], "storyPoints": 5, "priority": 1, "backendTasks": ["API CRUD para gestionar la tabla de relaciones RA-OPP (incluyendo nivel de aporte)."] , "frontendTasks": ["Interfaz para crear/editar relaciones RA-OPP con selector de nivel de aporte.", "Integración con el API de relaciones RA-OPP."]},
  { "title": "HU: Visualizar Aporte RA a OPP", "como": "Coordinador de carrera", "quiero": "ver todas las relaciones entre RA y OPP con sus niveles de aporte", "para": "revisar la alineación de la carrera con el perfil profesional.", "acceptanceCriteria": [ "Se muestra una tabla con RA, OPP y su nivel de aporte.", "La tabla puede ser filtrada por RA o OPP."], "storyPoints": 3, "priority": 1, "backendTasks": ["Modificar API para listar relaciones RA-OPP con filtros."], "frontendTasks": ["Diseño e implementación de la tabla de visualización de relaciones RA-OPP.", "Implementación de filtros en la interfaz."]},
  { "title": "HU: Wizard para Aporte RAA a RA", "como": "Coordinador de carrera", "quiero": "seguir un proceso guiado paso a paso para crear una relación entre RAA y RA", "para": "asegurar la correcta definición del aporte de los RAA a los RA.", "acceptanceCriteria": [ "El usuario es guiado a través de pasos claros: seleccionar RAA, seleccionar RA, asignar nivel de aporte.", "Se muestran mensajes de validación en cada paso.", "Se permite retroceder o avanzar en los pasos.", "La relación se guarda exitosamente al finalizar el wizard."], "storyPoints": 3, "priority": 2, "backendTasks": ["Reutilizar lógica de creación de relación RAA-RA del PBI anterior."], "frontendTasks": ["Diseño e implementación del componente wizard para la creación de relaciones RAA-RA.", "Integración del wizard con el API."]}
**Dependencias:** Depende de la gestión de RAA (Sprint 3) y RA y OPP (Sprint 2).

---

## Sprint 5: (Día 21 – Día 25)
**Objetivo:** Completar la vinculación de los Resultados de Aprendizaje de la Carrera (RA) con los objetivos EUR-ACE y generar un reporte inicial del cumplimiento, proporcionando una primera visión de la acreditación.
**Valor Comercial:** Ofrece la capacidad de evaluar directamente el alineamiento de la carrera con los estándares internacionales EUR-ACE y genera la primera evidencia verificable, un hito crucial en el proceso de acreditación.
**PBIs:**
  { "title": "HU: Establecer Aporte RA a EUR-ACE", "como": "Coordinador de carrera", "quiero": "definir el nivel de aporte de cada RA de la carrera a los criterios EUR-ACE", "para": "verificar el cumplimiento de los estándares de acreditación.", "acceptanceCriteria": [ "Se puede seleccionar un RA y un criterio EUR-ACE y asignar un nivel de aporte (Bajo, Medio, Alto).", "Se puede modificar el nivel de aporte de una relación RA-EUR-ACE existente.", "Se puede eliminar una relación RA-EUR-ACE.", "El sistema valida que no existan duplicados para la misma relación RA-EUR-ACE."], "storyPoints": 5, "priority": 1, "backendTasks": ["API CRUD para gestionar la tabla de relaciones RA-EUR-ACE (incluyendo nivel de aporte)."] , "frontendTasks": ["Interfaz para crear/editar relaciones RA-EUR-ACE con selector de nivel de aporte.", "Integración con el API de relaciones RA-EUR-ACE."]},
  { "title": "HU: Visualizar Aporte RA a EUR-ACE", "como": "Coordinador de carrera", "quiero": "ver todas las relaciones entre RA y criterios EUR-ACE con sus niveles de aporte", "para": "entender la alineación de la carrera con los estándares de acreditación.", "acceptanceCriteria": [ "Se muestra una tabla con RA, criterios EUR-ACE y su nivel de aporte.", "La tabla puede ser filtrada por RA o criterio EUR-ACE."], "storyPoints": 3, "priority": 1, "backendTasks": ["Modificar API para listar relaciones RA-EUR-ACE con filtros."], "frontendTasks": ["Diseño e implementación de la tabla de visualización de relaciones RA-EUR-ACE.", "Implementación de filtros en la interfaz."]},
  { "title": "HU: Reporte Simple Cumplimiento RA-EUR-ACE", "como": "DGIP", "quiero": "generar un reporte simple del grado de cumplimiento de los criterios EUR-ACE por carrera", "para": "presentar evidencias iniciales a los evaluadores externos.", "acceptanceCriteria": [ "Se puede seleccionar una carrera y ver los criterios EUR-ACE y los RA que aportan a ellos.", "El reporte muestra el nivel de aporte de cada RA a cada criterio EUR-ACE.", "La información se presenta de forma tabular o en un dashboard básico.", "El reporte solo muestra la información configurada previamente."], "storyPoints": 8, "priority": 1, "backendTasks": ["Desarrollo de API para obtener datos consolidados de relaciones RA-EUR-ACE.", "Optimización de consultas para reportes."], "frontendTasks": ["Diseño e implementación de la interfaz del reporte (tabla/dashboard simple)."]},
  { "title": "HU: Wizard para Aporte RA a EUR-ACE", "como": "Coordinador de carrera", "quiero": "seguir un proceso guiado paso a paso para crear una relación entre RA y criterios EUR-ACE", "para": "validar el aporte de los RA a los criterios EUR-ACE de manera estructurada.", "acceptanceCriteria": [ "El usuario es guiado a través de pasos claros: seleccionar RA, seleccionar criterio EUR-ACE, asignar nivel de aporte.", "Se muestran mensajes de validación en cada paso.", "Se permite retroceder o avanzar en los pasos.", "La relación se guarda exitosamente al finalizar el wizard."], "storyPoints": 3, "priority": 2, "backendTasks": ["Reutilizar lógica de creación de relación RA-EUR-ACE del PBI anterior."], "frontendTasks": ["Diseño e implementación del componente wizard para la creación de relaciones RA-EUR-ACE.", "Integración del wizard con el API."]}
**Dependencias:** Depende de las relaciones de RA a OPP (Sprint 4) y la gestión de Criterios EUR-ACE (Sprint 1) y RA (Sprint 2).

<!-- --- -->
