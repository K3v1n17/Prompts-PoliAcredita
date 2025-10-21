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

## PROMPT 5

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.



ACCION

Crea el SPRINT MAPPING  identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:




FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso .

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

## PROMPT 6

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

ACCION

Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses "y ni o " las hu deben ser claras

[ERROR: Bad request - please check your parameters]

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

ACCION: 
Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses "y ni o " las hu deben ser claras

**Respuesta:**

# Sprint Mapping - Gestión de Acreditación EUR-ACE (Fase 1 - MVP)

Este plan de sprints está diseñado para construir un Producto Mínimo Viable (MVP) del sistema de gestión de acreditación EUR-ACE. Se enfoca en una entrega incremental de valor, estableciendo primero las bases organizativas y de estándares, para luego construir la trazabilidad académica y los reportes esenciales para la acreditación.

## Sprints Planificados:

*   [Sprint 1: Fundación y Estándares](#Sprint_1_Fundacion_y_Estandares)
*   [Sprint 2: Definición Curricular de Carrera](#Sprint_2_Definicion_Curricular_de_Carrera)
*   [Sprint 3: Planificación Detallada de Asignaturas](#Sprint_3_Planificacion_Detallada_de_Asignaturas)
*   [Sprint 4: Trazabilidad Académica Clave](#Sprint_4_Trazabilidad_Academica_Clave)
*   [Sprint 5: Acreditación y Reporte Inicial](#Sprint_5_Acreditacion_y_Reporte_Inicial)

<!-- --- -->

## PROMPT 7

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

ACCION

Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses "y ni o " las hu deben ser claras

[ERROR: Bad request - please check your parameters]

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

ACCION: Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

utiliza el siguiente 
FORMATO DE SALIDA :

Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo:
 PBIs:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso .
para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses "y ni o " las hu deben ser claras

**Respuesta:**

# Sprint Mapping - Gestión de Acreditación EUR-ACE (Fase 1 - MVP)

Este plan de sprints está diseñado para construir un Producto Mínimo Viable (MVP) del sistema de gestión de acreditación EUR-ACE. Se enfoca en una entrega incremental de valor, estableciendo primero las bases organizativas y de estándares, para luego construir la trazabilidad académica y los reportes esenciales para la acreditación.

## Sprints Planificados:

*   [Sprint 1: Fundación y Estándares](#Sprint_1_Fundacion_y_Estandares)
*   [Sprint 2: Definición Curricular de Carrera](#Sprint_2_Definicion_Curricular_de_Carrera)
*   [Sprint 3: Planificación Detallada de Asignaturas](#Sprint_3_Planificacion_Detallada_de_Asignaturas)
*   [Sprint 4: Trazabilidad Académica Clave](#Sprint_4_Trazabilidad_Academica_Clave)
*   [Sprint 5: Acreditación y Reporte Inicial](#Sprint_5_Acreditacion_y_Reporte_Inicial)

<!-- --- -->

## PROMPT 8

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

ACCION

Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses "y ni o " las hu deben ser claras

[ERROR: Bad request - please check your parameters]

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

ACCION: Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

utiliza el siguiente FORMATO DE SALIDA :
Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI: ejemplo : Release Mapping – Sistema de Acreditación EUR-ACE

Sprint 1: (16 de septiembre – 22 de septiembre) - Objetivo: Establecer la base académica digital para que la EPN organice facultades, carreras y materias en un sistema unificado. - PBI: - Gestión de organización académica - Gestión de roles y accesos básicos

Sprint 1: (7 de octubre – 13 de octubre) - Objetivo: ejemplo de objetivo - PBI: - pbis Sprint 2: (7 de octubre – 13 de octubre) - Objetivo: ejemplo de objetivo - PBI: - pbis

Sprint 4: (7 de octubre – 13 de octubre) - Objetivo: ejemplo de objetivo - PBI: - pbis

Sprint 5: () - Objetivo: ejemplo de objetivo - PBI: - pbis

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso . para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso ,

**Respuesta:**

[
  {
    "type": "Wiki",
    "title": "Sprint 1: (1 de mayo – 15 de mayo)",
    "path": "/Sprint_Mapping/Sprint_1_Plan",
    "content": "# Plan del Sprint 1\n\n## Objetivo del Sprint 1:\nEstablecer la base organizativa de la EPN y asegurar un acceso controlado al sistema para todos los roles, cimentando la estructura inicial para la acreditación."
  },
  {
    "title": "HU: Administrar Estructura Organizativa EPN",
    "como": "autoridad de la EPN",
    "quiero": "registrar y administrar facultades, carreras, materias y profesores",
    "para": "estructurar la base organizativa que sustenta la acreditación EUR-ACE",
    "acceptanceCriteria": [
      "La autoridad puede crear, editar y eliminar facultades con sus detalles",
      "La autoridad puede crear, editar y eliminar carreras asociadas a una facultad",
      "La autoridad puede crear, editar y eliminar materias asociadas a una carrera",
      "La autoridad puede registrar profesores y asignarlos a una o varias facultades y materias",
      "Se evita la creación de duplicados para facultades, carreras, materias y profesores por sus códigos únicos o nombres"
    ],
    "storyPoints": 8,
    "priority": 1
  },
  {
    "title": "HU: Gestionar Roles y Accesos de Usuarios",
    "como": "administrador del sistema",
    "quiero": "configurar los roles de usuario (Profesor, Coordinador, Autoridad, DGIP, Miembro del CEI) y sus permisos de acceso",
    "para": "asegurar un uso controlado y seguro de la información de acreditación y permitir que cada usuario realice sus funciones específicas",
    "acceptanceCriteria": [
      "El administrador puede asignar roles a usuarios existentes (profesores)",
      "Cada rol tiene un conjunto predefinido de permisos sobre las funcionalidades del sistema (ej. Profesor solo puede editar sus PEAs)",
      "Los usuarios solo pueden ver y editar la información relevante a su rol y las entidades a las que están asignados (ej. Coordinador solo ve sus carreras)",
      "El sistema autentica a los usuarios al iniciar sesión"
    ],
    "storyPoints": 5,
    "priority": 1
  },
  {
    "type": "Wiki",
    "title": "Sprint 2: (16 de mayo – 30 de mayo)",
    "path": "/Sprint_Mapping/Sprint_2_Plan",
    "content": "# Plan del Sprint 2\n\n## Objetivo del Sprint 2:\nCapacitar a los coordinadores para formalizar los perfiles de egreso y profesionales de cada carrera, sentando las bases de los resultados esperados."
  },
  {
    "title": "HU: Definir Resultados de Aprendizaje de Carrera (RA)",
    "como": "coordinador de carrera",
    "quiero": "definir y mantener los resultados de aprendizaje (generales y específicos) para mi carrera",
    "para": "establecer de manera formalizada el perfil de egreso de los estudiantes",
    "acceptanceCriteria": [
      "El coordinador puede crear nuevos RA (generales/específicos) para su carrera",
      "El coordinador puede editar y eliminar RA existentes para su carrera",
      "Cada RA debe tener un código único y una descripción",
      "Se visualiza la lista de RA definidos para cada carrera"
    ],
    "storyPoints": 3,
    "priority": 2
  },
  {
    "title": "HU: Registrar Objetivos de Perfil Profesional (OPP)",
    "como": "coordinador de carrera",
    "quiero": "registrar los objetivos de perfil profesional para mi carrera",
    "para": "alinear el perfil de egreso con las competencias de la profesión de ingeniería",
    "acceptanceCriteria": [
      "El coordinador puede crear, editar y eliminar OPP para su carrera",
      "Cada OPP debe tener un código único y una descripción",
      "Se visualiza la lista de OPP definidos para cada carrera"
    ],
    "storyPoints": 3,
    "priority": 2
  },
  {
    "type": "Wiki",
    "title": "Sprint 3: (1 de junio – 15 de junio)",
    "path": "/Sprint_Mapping/Sprint_3_Plan",
    "content": "# Plan del Sprint 3\n\n## Objetivo del Sprint 3:\nHabilitar a los profesores para detallar la contribución de sus asignaturas a los resultados de aprendizaje de la carrera, enriqueciendo la evidencia académica."
  },
  {
    "title": "HU: Gestionar PEAs y Resultados de Aprendizaje de Asignaturas (RAA)",
    "como": "profesor",
    "quiero": "ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) de mis materias asignadas",
    "para": "evidenciar la contribución de cada materia al perfil de egreso de la carrera",
    "acceptanceCriteria": [
      "El profesor puede seleccionar una de sus materias asignadas",
      "El profesor puede ingresar los detalles del PEA (Unidad Académica, Carrera, Unidad de organización curricular, Nombre de la asignatura, Código, Créditos)",
      "El profesor puede definir los RAA (Conocimiento, Destrezas, Valores y actitudes) asociados a cada PEA",
      "El profesor puede editar y eliminar RAA existentes",
      "Se asegura que los RAA tengan una descripción clara"
    ],
    "storyPoints": 5,
    "priority": 2
  },
  {
    "type": "Wiki",
    "title": "Sprint 4: (16 de junio – 30 de junio)",
    "path": "/Sprint_Mapping/Sprint_4_Plan",
    "content": "# Plan del Sprint 4\n\n## Objetivo del Sprint 4:\nIntegrar los estándares EUR-ACE y establecer las relaciones clave entre los resultados de aprendizaje a nivel de asignatura y carrera, creando la trazabilidad necesaria para la acreditación."
  },
  {
    "title": "HU: Gestionar Objetivos de Acreditación EUR-ACE",
    "como": "miembro del CEI",
    "quiero": "registrar y consultar los objetivos específicos del sello EUR-ACE",
    "para": "vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales",
    "acceptanceCriteria": [
      "El miembro del CEI puede crear, editar y eliminar objetivos EUR-ACE",
      "Cada objetivo EUR-ACE debe tener un código, una descripción y categoría",
      "Se visualiza la lista completa de objetivos EUR-ACE"
    ],
    "storyPoints": 3,
    "priority": 3
  },
  {
    "title": "HU: Establecer Mapeo de Relaciones Académicas",
    "como": "coordinador de carrera",
    "quiero": "establecer las relaciones de contribución entre RAA, RA, OPP y los objetivos EUR-ACE para mi carrera",
    "para": "garantizar la trazabilidad académica desde la asignatura hasta los criterios de acreditación y evaluar el cumplimiento",
    "acceptanceCriteria": [
      "El coordinador puede vincular RAA de una materia a RA de su carrera, definiendo un nivel de contribución (Bajo, Medio, Alto)",
      "El coordinador puede vincular RA de su carrera a OPP",
      "El coordinador puede vincular RA de su carrera a objetivos EUR-ACE",
      "El sistema muestra visualmente las relaciones establecidas para facilitar la verificación"
    ],
    "storyPoints": 8,
    "priority": 3
  },
  {
    "type": "Wiki",
    "title": "Sprint 5: (1 de julio – 15 de julio)",
    "path": "/Sprint_Mapping/Sprint_5_Plan",
    "content": "# Plan del Sprint 5\n\n## Objetivo del Sprint 5:\nProporcionar a la DGIP las herramientas para generar reportes automatizados y confiables del cumplimiento EUR-ACE, facilitando la auditoría y la toma de decisiones estratégicas."
  },
  {
    "title": "HU: Generar Reportes de Cumplimiento EUR-ACE",
    "como": "DGIP",
    "quiero": "generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera",
    "para": "presentar evidencias verificables a los evaluadores externos y tomar decisiones informadas",
    "acceptanceCriteria": [
      "El DGIP puede seleccionar una facultad y/o carrera para generar un reporte",
      "El reporte muestra el grado de cumplimiento de los objetivos EUR-ACE, basado en las relaciones RAA->RA->EUR-ACE",
      "El reporte es exportable en formatos comunes (ej. PDF, Excel)",
      "El reporte incluye un resumen y detalles de las contribuciones"
    ],
    "storyPoints": 13,
    "priority": 4
  }
]

<!-- --- -->

## PROMPT 9

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

ACCION

Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses "y ni o " las hu deben ser claras

[ERROR: Bad request - please check your parameters]

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

ACCION: Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

utiliza el siguiente FORMATO DE SALIDA :
Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI: ejemplo : Release Mapping – Sistema de Acreditación EUR-ACE

Sprint 1: (16 de septiembre – 22 de septiembre) - Objetivo: Establecer la base académica digital para que la EPN organice facultades, carreras y materias en un sistema unificado. - PBI: - Gestión de organización académica - Gestión de roles y accesos básicos

Sprint 1: (7 de octubre – 13 de octubre) - Objetivo: ejemplo de objetivo - PBI: - pbis Sprint 2: (7 de octubre – 13 de octubre) - Objetivo: ejemplo de objetivo - PBI: - pbis

Sprint 4: (7 de octubre – 13 de octubre) - Objetivo: ejemplo de objetivo - PBI: - pbis

Sprint 5: () - Objetivo: ejemplo de objetivo - PBI: - pbis

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso . para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso ,

**Respuesta:**

[
  {
    "type": "Wiki",
    "title": "Sprint 1: (1 de mayo – 15 de mayo)",
    "path": "/Sprint_Mapping/Sprint_1_Plan",
    "content": "# Plan del Sprint 1\n\n## Objetivo del Sprint 1:\nEstablecer la base organizativa de la EPN y asegurar un acceso controlado al sistema para todos los roles, cimentando la estructura inicial para la acreditación."
  },
  {
    "title": "HU: Administrar Estructura Organizativa EPN",
    "como": "autoridad de la EPN",
    "quiero": "registrar y administrar facultades, carreras, materias y profesores",
    "para": "estructurar la base organizativa que sustenta la acreditación EUR-ACE",
    "acceptanceCriteria": [
      "La autoridad puede crear, editar y eliminar facultades con sus detalles",
      "La autoridad puede crear, editar y eliminar carreras asociadas a una facultad",
      "La autoridad puede crear, editar y eliminar materias asociadas a una carrera",
      "La autoridad puede registrar profesores y asignarlos a una o varias facultades y materias",
      "Se evita la creación de duplicados para facultades, carreras, materias y profesores por sus códigos únicos o nombres"
    ],
    "storyPoints": 8,
    "priority": 1
  },
  {
    "title": "HU: Gestionar Roles y Accesos de Usuarios",
    "como": "administrador del sistema",
    "quiero": "configurar los roles de usuario (Profesor, Coordinador, Autoridad, DGIP, Miembro del CEI) y sus permisos de acceso",
    "para": "asegurar un uso controlado y seguro de la información de acreditación y permitir que cada usuario realice sus funciones específicas",
    "acceptanceCriteria": [
      "El administrador puede asignar roles a usuarios existentes (profesores)",
      "Cada rol tiene un conjunto predefinido de permisos sobre las funcionalidades del sistema (ej. Profesor solo puede editar sus PEAs)",
      "Los usuarios solo pueden ver y editar la información relevante a su rol y las entidades a las que están asignados (ej. Coordinador solo ve sus carreras)",
      "El sistema autentica a los usuarios al iniciar sesión"
    ],
    "storyPoints": 5,
    "priority": 1
  },
  {
    "type": "Wiki",
    "title": "Sprint 2: (16 de mayo – 30 de mayo)",
    "path": "/Sprint_Mapping/Sprint_2_Plan",
    "content": "# Plan del Sprint 2\n\n## Objetivo del Sprint 2:\nCapacitar a los coordinadores para formalizar los perfiles de egreso y profesionales de cada carrera, sentando las bases de los resultados esperados."
  },
  {
    "title": "HU: Definir Resultados de Aprendizaje de Carrera (RA)",
    "como": "coordinador de carrera",
    "quiero": "definir y mantener los resultados de aprendizaje (generales y específicos) para mi carrera",
    "para": "establecer de manera formalizada el perfil de egreso de los estudiantes",
    "acceptanceCriteria": [
      "El coordinador puede crear nuevos RA (generales/específicos) para su carrera",
      "El coordinador puede editar y eliminar RA existentes para su carrera",
      "Cada RA debe tener un código único y una descripción",
      "Se visualiza la lista de RA definidos para cada carrera"
    ],
    "storyPoints": 3,
    "priority": 2
  },
  {
    "title": "HU: Registrar Objetivos de Perfil Profesional (OPP)",
    "como": "coordinador de carrera",
    "quiero": "registrar los objetivos de perfil profesional para mi carrera",
    "para": "alinear el perfil de egreso con las competencias de la profesión de ingeniería",
    "acceptanceCriteria": [
      "El coordinador puede crear, editar y eliminar OPP para su carrera",
      "Cada OPP debe tener un código único y una descripción",
      "Se visualiza la lista de OPP definidos para cada carrera"
    ],
    "storyPoints": 3,
    "priority": 2
  },
  {
    "type": "Wiki",
    "title": "Sprint 3: (1 de junio – 15 de junio)",
    "path": "/Sprint_Mapping/Sprint_3_Plan",
    "content": "# Plan del Sprint 3\n\n## Objetivo del Sprint 3:\nHabilitar a los profesores para detallar la contribución de sus asignaturas a los resultados de aprendizaje de la carrera, enriqueciendo la evidencia académica."
  },
  {
    "title": "HU: Gestionar PEAs y Resultados de Aprendizaje de Asignaturas (RAA)",
    "como": "profesor",
    "quiero": "ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) de mis materias asignadas",
    "para": "evidenciar la contribución de cada materia al perfil de egreso de la carrera",
    "acceptanceCriteria": [
      "El profesor puede seleccionar una de sus materias asignadas",
      "El profesor puede ingresar los detalles del PEA (Unidad Académica, Carrera, Unidad de organización curricular, Nombre de la asignatura, Código, Créditos)",
      "El profesor puede definir los RAA (Conocimiento, Destrezas, Valores y actitudes) asociados a cada PEA",
      "El profesor puede editar y eliminar RAA existentes",
      "Se asegura que los RAA tengan una descripción clara"
    ],
    "storyPoints": 5,
    "priority": 2
  },
  {
    "type": "Wiki",
    "title": "Sprint 4: (16 de junio – 30 de junio)",
    "path": "/Sprint_Mapping/Sprint_4_Plan",
    "content": "# Plan del Sprint 4\n\n## Objetivo del Sprint 4:\nIntegrar los estándares EUR-ACE y establecer las relaciones clave entre los resultados de aprendizaje a nivel de asignatura y carrera, creando la trazabilidad necesaria para la acreditación."
  },
  {
    "title": "HU: Gestionar Objetivos de Acreditación EUR-ACE",
    "como": "miembro del CEI",
    "quiero": "registrar y consultar los objetivos específicos del sello EUR-ACE",
    "para": "vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales",
    "acceptanceCriteria": [
      "El miembro del CEI puede crear, editar y eliminar objetivos EUR-ACE",
      "Cada objetivo EUR-ACE debe tener un código, una descripción y categoría",
      "Se visualiza la lista completa de objetivos EUR-ACE"
    ],
    "storyPoints": 3,
    "priority": 3
  },
  {
    "title": "HU: Establecer Mapeo de Relaciones Académicas",
    "como": "coordinador de carrera",
    "quiero": "establecer las relaciones de contribución entre RAA, RA, OPP y los objetivos EUR-ACE para mi carrera",
    "para": "garantizar la trazabilidad académica desde la asignatura hasta los criterios de acreditación y evaluar el cumplimiento",
    "acceptanceCriteria": [
      "El coordinador puede vincular RAA de una materia a RA de su carrera, definiendo un nivel de contribución (Bajo, Medio, Alto)",
      "El coordinador puede vincular RA de su carrera a OPP",
      "El coordinador puede vincular RA de su carrera a objetivos EUR-ACE",
      "El sistema muestra visualmente las relaciones establecidas para facilitar la verificación"
    ],
    "storyPoints": 8,
    "priority": 3
  },
  {
    "type": "Wiki",
    "title": "Sprint 5: (1 de julio – 15 de julio)",
    "path": "/Sprint_Mapping/Sprint_5_Plan",
    "content": "# Plan del Sprint 5\n\n## Objetivo del Sprint 5:\nProporcionar a la DGIP las herramientas para generar reportes automatizados y confiables del cumplimiento EUR-ACE, facilitando la auditoría y la toma de decisiones estratégicas."
  },
  {
    "title": "HU: Generar Reportes de Cumplimiento EUR-ACE",
    "como": "DGIP",
    "quiero": "generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera",
    "para": "presentar evidencias verificables a los evaluadores externos y tomar decisiones informadas",
    "acceptanceCriteria": [
      "El DGIP puede seleccionar una facultad y/o carrera para generar un reporte",
      "El reporte muestra el grado de cumplimiento de los objetivos EUR-ACE, basado en las relaciones RAA->RA->EUR-ACE",
      "El reporte es exportable en formatos comunes (ej. PDF, Excel)",
      "El reporte incluye un resumen y detalles de las contribuciones"
    ],
    "storyPoints": 13,
    "priority": 4
  }
]

<!-- --- -->

## PROMPT 10

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

ACCION

Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses "y ni o " las hu deben ser claras

[ERROR: Bad request - please check your parameters]

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

te proporciono el conjunto de mrfs : 📌 MRFs del Sistema de Gestión de Acreditación EUR-ACE

Gestión de organización académica Como autoridad de la EPN Quiero registrar y administrar facultades, carreras, materias y profesores Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA) Como profesor Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA) Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

Gestión de resultados de aprendizaje de carrera (RA) Como coordinador de carrera Quiero definir y mantener los resultados de aprendizaje de la carrera Para establecer de manera formalizada el perfil de egreso de los estudiantes.

Gestión de objetivos de perfil profesional (OPP) Como coordinador de carrera Quiero registrar los objetivos de perfil profesional Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

Gestión de objetivos EUR-ACE Como miembro del CEI Quiero registrar y consultar los objetivos EUR-ACE Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

Definición de relaciones académicas Como coordinador de carrera Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

Generación de reportes de cumplimiento EUR-ACE Como DGIP Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera Para presentar evidencias verificables a los evaluadores externos.

Gestión de roles y accesos Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI) Quiero acceder al sistema con permisos según mi rol Para asegurar un uso controlado y seguro de la información de acreditación.

ACCION: Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

utiliza el siguiente FORMATO DE SALIDA :
Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI: ejemplo : Release Mapping – Sistema de Acreditación EUR-ACE

Sprint 1: (16 de septiembre – 22 de septiembre) - Objetivo: Establecer la base académica digital para que la EPN organice facultades, carreras y materias en un sistema unificado. - PBI: - Gestión de organización académica - Gestión de roles y accesos básicos

Sprint 1: (7 de octubre – 13 de octubre) - Objetivo: ejemplo de objetivo - PBI: - pbis Sprint 2: (7 de octubre – 13 de octubre) - Objetivo: ejemplo de objetivo - PBI: - pbis

Sprint 4: (7 de octubre – 13 de octubre) - Objetivo: ejemplo de objetivo - PBI: - pbis

Sprint 5: () - Objetivo: ejemplo de objetivo - PBI: - pbis

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso . para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso ,

**Respuesta:**

Aquí tienes el SPRINT MAPPING para construir el sistema de gestión de acreditación EUR-ACE, actuando como un Product Owner experto. He priorizado las historias de usuario (PBI) basándome en dependencias y el valor comercial inmediato para la EPN en su proceso de acreditación.

---

**Sprint Mapping – Sistema de Acreditación EUR-ACE**

**Sprint 1: (1 de mayo – 15 de mayo)**
*   **Objetivo:** Establecer la base organizativa digital de la EPN y asegurar un acceso controlado, sentando el cimiento fundamental para la gestión de la acreditación.
*   **PBI:**
    *   Gestión de organización académica
    *   Gestión de roles y accesos

**Sprint 2: (16 de mayo – 30 de mayo)**
*   **Objetivo:** Habilitar a los coordinadores para formalizar los perfiles de egreso y profesionales de cada carrera, iniciando la definición de los estándares académicos de la EPN.
*   **PBI:**
    *   Gestión de resultados de aprendizaje de carrera (RA)
    *   Gestión de objetivos de perfil profesional (OPP)

**Sprint 3: (1 de junio – 15 de junio)**
*   **Objetivo:** Permitir a los profesores documentar la contribución detallada de cada asignatura a los resultados de aprendizaje de la carrera, enriqueciendo la evidencia académica.
*   **PBI:**
    *   Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA)

**Sprint 4: (16 de junio – 30 de junio)**
*   **Objetivo:** Integrar los estándares internacionales EUR-ACE y establecer las relaciones clave entre todos los niveles de resultados de aprendizaje, garantizando la trazabilidad académica para la acreditación.
*   **PBI:**
    *   Gestión de objetivos EUR-ACE
    *   Definición de relaciones académicas

**Sprint 5: (1 de julio – 15 de julio)**
*   **Objetivo:** Proporcionar a la DGIP la capacidad de generar reportes automatizados y verificables del cumplimiento EUR-ACE, facilitando la presentación de evidencias a los evaluadores externos.
*   **PBI:**
    *   Generación de reportes de cumplimiento EUR-ACE

---

<!-- --- -->

## PROMPT 11

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

Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:

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

¡Excelente! Como Product Owner, mi objetivo es asegurar que construyamos este Sistema de Gestión de Acreditación EUR-ACE de manera incremental, entregando valor en cada etapa y gestionando las dependencias de forma efectiva para lograr la acreditación de la EPN.

Aquí tienes el Sprint Mapping, priorizando las funcionalidades críticas para establecer una base sólida y avanzar hacia el objetivo de la acreditación EUR-ACE:

---

**Sprint Mapping – Sistema de Acreditación EUR-ACE**

**Sprint 1: (1 de mayo – 15 de mayo)**
*   **Objetivo:** Establecer la estructura organizativa digital fundamental de la EPN y garantizar un acceso seguro y diferenciado para los usuarios, cimentando la base del sistema de acreditación.
*   **PBI:**
    *   Gestión de organización académica
    *   Gestión de roles y accesos

**Sprint 2: (16 de mayo – 30 de mayo)**
*   **Objetivo:** Habilitar a los coordinadores para definir formalmente los perfiles académicos y profesionales de cada carrera, sentando las bases de los resultados esperados para los estudiantes.
*   **PBI:**
    *   Gestión de resultados de aprendizaje de carrera (RA)
    *   Gestión de objetivos de perfil profesional (OPP)

**Sprint 3: (1 de junio – 15 de junio)**
*   **Objetivo:** Permitir a los profesores detallar la contribución de sus asignaturas a los resultados de aprendizaje de la carrera, enriqueciendo la evidencia académica específica.
*   **PBI:**
    *   Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA)

**Sprint 4: (16 de junio – 30 de junio)**
*   **Objetivo:** Integrar los criterios del sello EUR-ACE y establecer las relaciones de trazabilidad cruciales entre los resultados de aprendizaje de asignaturas, carrera y el perfil profesional, validando el cumplimiento de estándares internacionales.
*   **PBI:**
    *   Gestión de objetivos EUR-ACE
    *   Definición de relaciones académicas

**Sprint 5: (1 de julio – 15 de julio)**
*   **Objetivo:** Proporcionar a la DGIP la capacidad de generar reportes automatizados y verificables del cumplimiento EUR-ACE, facilitando la presentación de evidencias a los evaluadores externos y la toma de decisiones estratégicas.
*   **PBI:**
    *   Generación de reportes de cumplimiento EUR-ACE

<!-- --- -->

## PROMPT 12

**Prompt:**

se mas conciso y claro con los objetivos no lo adornes tanto , vuelve a analizar un camino correcto a desarrollar para asegurar evitar dependencias y entregar valor comercial en cada sprint ,

Accion 
crea de nuevo el sprint mapping

**Respuesta:**

¡Absolutamente! Como Product Owner, la claridad y la entrega de valor incremental son primordiales. He reanalizado las dependencias y el valor comercial para optimizar el flujo de trabajo y presentar un Sprint Mapping más conciso y directo.

Aquí tienes la propuesta mejorada:

---

**Sprint Mapping – Sistema de Acreditación EUR-ACE**

**Sprint 1: (1 de mayo – 15 de mayo)**
*   **Objetivo:** Establecer la base organizativa de la EPN y asegurar el acceso controlado de usuarios.
*   **PBI:**
    *   Gestión de roles y accesos
    *   Gestión de organización académica

**Sprint 2: (16 de mayo – 30 de mayo)**
*   **Objetivo:** Definir los perfiles de egreso y profesionales de cada carrera.
*   **PBI:**
    *   Gestión de resultados de aprendizaje de carrera (RA)
    *   Gestión de objetivos de perfil profesional (OPP)

**Sprint 3: (1 de junio – 15 de junio)**
*   **Objetivo:** Registrar los programas de estudio y resultados de aprendizaje por asignatura.
*   **PBI:**
    *   Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA)

**Sprint 4: (16 de junio – 30 de junio)**
*   **Objetivo:** Establecer los criterios EUR-ACE y las relaciones de cumplimiento académico.
*   **PBI:**
    *   Gestión de objetivos EUR-ACE
    *   Definición de relaciones académicas

**Sprint 5: (1 de julio – 15 de julio)**
*   **Objetivo:** Habilitar la generación de reportes de cumplimiento EUR-ACE.
*   **PBI:**
    *   Generación de reportes de cumplimiento EUR-ACE



---

Este Product Backlog está diseñado para proporcionar un MVP robusto y funcional en un mes, permitiendo a la EPN dar pasos concretos hacia la formalización y gestión de la información necesaria para la acreditación EUR-ACE, centrándose en las relaciones más críticas y la infraestructura base.

<!-- --- -->

## PROMPT 13

**Prompt:**

¡Excelente! Como Product Owner con experiencia en gestión de productos de software, me complace ayudarte a definir el SPRINT MAPPING para construir el sistema de gestión de acreditación EUR-ACE para la EPN.

Nuestro objetivo principal es construir un sistema que permita a la EPN gestionar, trazar y reportar el cumplimiento de sus programas de ingeniería con los estándares EUR-ACE, facilitando así el proceso de acreditación. Abordaremos el desarrollo en sprints incrementales, priorizando el valor de negocio y las dependencias para entregar una solución robusta y útil.

Aquí te presento el SPRINT MAPPING propuesto:

---

**Introducción del Product Owner:**

Como Product Owner, mi enfoque es maximizar el valor del producto para la EPN, asegurando que cada sprint entregue funcionalidades útiles y que el equipo de desarrollo tenga una visión clara de lo que necesitamos construir. La acreditación EUR-ACE es crítica, por lo que priorizaremos la trazabilidad y la generación de evidencia.

---

**SPRINT MAPPING**

**Sprint 1: Cimientos Organizacionales y Acceso Seguro**
*   **Período:** (1 de mayo – 15 de mayo)
*   **Objetivo Comercial:** Establecer la estructura organizativa fundamental de la EPN dentro del sistema y asegurar el acceso controlado para todos los usuarios clave, permitiendo la configuración inicial de datos.
*   **PBI:**
    *   **Gestión de Roles y Accesos (MRF 8 - Base):** Permitir el registro de usuarios y la asignación inicial de roles (Autoridad, Profesor, Coordinador, DGIP, CEI) con autenticación segura.
    *   **Gestión de Organización Académica (MRF 1 - CRUD Básico):** Funcionalidades para registrar, modificar y eliminar Facultades, Carreras, Profesores y Asignaturas.
    *   Asignación de profesores a asignaturas y facultades.
*   **Valor Comercial:** Muy Alto. Sin esta base, el sistema no puede funcionar. Proporciona la estructura esencial para gestionar la información académica y garantiza la seguridad y la usabilidad desde el primer momento.

**Sprint 2: Definición de Estándares y Perfiles de Egreso**
*   **Período:** (16 de mayo – 30 de mayo)
*   **Objetivo Comercial:** Habilitar a los usuarios clave (Coordinadores de Carrera y CEI) para establecer los objetivos de aprendizaje de las carreras y los criterios de acreditación EUR-ACE, que son los pilares del proceso de acreditación.
*   **PBI:**
    *   **Gestión de Resultados de Aprendizaje de Carrera (RA) (MRF 3):** Funcionalidad para que el Coordinador de Carrera defina, modifique y consulte los Resultados de Aprendizaje generales y específicos de cada carrera.
    *   **Gestión de Objetivos de Perfil Profesional (OPP) (MRF 4):** Funcionalidad para que el Coordinador de Carrera registre, modifique y consulte los Objetivos de Perfil Profesional.
    *   **Gestión de Objetivos EUR-ACE (MRF 5):** Funcionalidad para que el CEI registre y consulte los objetivos y criterios EUR-ACE.
*   **Valor Comercial:** Alto. Este sprint define "qué" se espera que logren los estudiantes y "qué" se debe cumplir para la acreditación. Es la base conceptual del sistema y sin estos datos, no se puede evaluar el cumplimiento.

**Sprint 3: Detalle Curricular a Nivel de Asignatura**
*   **Período:** (1 de junio – 15 de junio)
*   **Objetivo Comercial:** Permitir a los profesores documentar los programas de estudio de sus asignaturas y definir los resultados de aprendizaje específicos, proveyendo la evidencia granular necesaria.
*   **PBI:**
    *   **Gestión de PEAs y Resultados de Aprendizaje de Asignaturas (RAA) (MRF 2):** Funcionalidad para que el Profesor ingrese y actualice la información de los Programas de Estudios Académicos (PEA) y defina los Resultados de Aprendizaje de Asignatura (RAA) asociados.
    *   Interfaz para vincular PEAs a asignaturas y carreras existentes.
*   **Valor Comercial:** Alto. Captura el detalle de la implementación curricular, demostrando cómo cada asignatura contribuye a los objetivos de la carrera y, por ende, a la acreditación. Es una fuente fundamental de evidencia.

**Sprint 4: Trazabilidad y Relaciones Académicas (El Corazón del Sistema)**
*   **Período:** (16 de junio – 30 de junio)
*   **Objetivo Comercial:** Implementar la lógica central de trazabilidad, permitiendo establecer y visualizar las relaciones entre los diferentes niveles de resultados de aprendizaje y objetivos, crucial para la evaluación EUR-ACE.
*   **PBI:**
    *   **Definición de Relaciones Académicas (MRF 6 - RAA a RA):** Habilitar al Coordinador de Carrera para establecer y especificar el nivel de contribución (Bajo, Medio, Alto) de los RAA de una asignatura a los RA de la carrera.
    *   **Definición de Relaciones Académicas (MRF 6 - RA a OPP):** Habilitar al Coordinador de Carrera para establecer cómo los RA de la carrera contribuyen a los Objetivos de Perfil Profesional (OPP).
    *   **Definición de Relaciones Académicas (MRF 6 - RA a EUR-ACE):** Habilitar al Coordinador de Carrera (o CEI) para vincular los RA de la carrera con los Objetivos EUR-ACE definidos.
    *   Visualización de matrices de trazabilidad (RAA-RA, RA-OPP, RA-EUR-ACE) para una carrera.
*   **Valor Comercial:** **Crítico y extremadamente Alto.** Este sprint entrega la "inteligencia" central del sistema. Sin estas relaciones, la trazabilidad necesaria para la acreditación EUR-ACE no puede ser demostrada, invalidando gran parte del objetivo del producto.

**Sprint 5: Generación de Evidencia para la Acreditación**
*   **Período:** (1 de julio – 15 de julio)
*   **Objetivo Comercial:** Proporcionar a la DGIP las herramientas para generar reportes automáticos que evidencien el grado de cumplimiento de los criterios EUR-ACE, facilitando la evaluación externa.
*   **PBI:**
    *   **Generación de Reportes de Cumplimiento EUR-ACE (MRF 7 - Versión 1):** Funcionalidad para que la DGIP genere un reporte consolidado del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera.
    *   Interfaz de selección de filtros para el reporte (Facultad, Carrera).
    *   Exportación básica del reporte a formatos comunes (ej. PDF).
*   **Valor Comercial:** **Extremadamente Alto.** Este es el output final y el más visible del valor del sistema. Permite a la EPN presentar pruebas verificables a los evaluadores externos, cumpliendo directamente con el objetivo de la acreditación.

---

Este SPRINT MAPPING proporciona una ruta clara y lógica para construir el sistema, comenzando por los fundamentos y avanzando hacia la lógica de negocio central y la entrega de valor a través de los reportes clave para la acreditación EUR-ACE. Cada sprint está diseñado para entregar valor comercial incremental y abordar las dependencias de manera efectiva.

**Respuesta:**

¡Excelente! Como Product Owner con experiencia en gestión de productos de software, me complace ayudarte a definir el SPRINT MAPPING para construir el sistema de gestión de acreditación EUR-ACE para la EPN.

Nuestro objetivo principal es construir un sistema que permita a la EPN gestionar, trazar y reportar el cumplimiento de sus programas de ingeniería con los estándares EUR-ACE, facilitando así el proceso de acreditación. Abordaremos el desarrollo en sprints incrementales, priorizando el valor de negocio y las dependencias para entregar una solución robusta y útil.

Aquí te presento el SPRINT MAPPING propuesto:

---

**Introducción del Product Owner:**

Como Product Owner, mi enfoque es maximizar el valor del producto para la EPN, asegurando que cada sprint entregue funcionalidades útiles y que el equipo de desarrollo tenga una visión clara de lo que necesitamos construir. La acreditación EUR-ACE es crítica, por lo que priorizaremos la trazabilidad y la generación de evidencia.

---

**SPRINT MAPPING**

**Sprint 1: Cimientos Organizacionales y Acceso Seguro**
*   **Período:** (1 de mayo – 15 de mayo)
*   **Objetivo Comercial:** Establecer la estructura organizativa fundamental de la EPN dentro del sistema y asegurar el acceso controlado para todos los usuarios clave, permitiendo la configuración inicial de datos.
*   **PBI:**
    *   **Gestión de Roles y Accesos (MRF 8 - Base):** Permitir el registro de usuarios y la asignación inicial de roles (Autoridad, Profesor, Coordinador, DGIP, CEI) con autenticación segura.
    *   **Gestión de Organización Académica (MRF 1 - CRUD Básico):** Funcionalidades para registrar, modificar y eliminar Facultades, Carreras, Profesores y Asignaturas.
    *   Asignación de profesores a asignaturas y facultades.
*   **Valor Comercial:** Muy Alto. Sin esta base, el sistema no puede funcionar. Proporciona la estructura esencial para gestionar la información académica y garantiza la seguridad y la usabilidad desde el primer momento.

**Sprint 2: Definición de Estándares y Perfiles de Egreso**
*   **Período:** (16 de mayo – 30 de mayo)
*   **Objetivo Comercial:** Habilitar a los usuarios clave (Coordinadores de Carrera y CEI) para establecer los objetivos de aprendizaje de las carreras y los criterios de acreditación EUR-ACE, que son los pilares del proceso de acreditación.
*   **PBI:**
    *   **Gestión de Resultados de Aprendizaje de Carrera (RA) (MRF 3):** Funcionalidad para que el Coordinador de Carrera defina, modifique y consulte los Resultados de Aprendizaje generales y específicos de cada carrera.
    *   **Gestión de Objetivos de Perfil Profesional (OPP) (MRF 4):** Funcionalidad para que el Coordinador de Carrera registre, modifique y consulte los Objetivos de Perfil Profesional.
    *   **Gestión de Objetivos EUR-ACE (MRF 5):** Funcionalidad para que el CEI registre y consulte los objetivos y criterios EUR-ACE.
*   **Valor Comercial:** Alto. Este sprint define "qué" se espera que logren los estudiantes y "qué" se debe cumplir para la acreditación. Es la base conceptual del sistema y sin estos datos, no se puede evaluar el cumplimiento.

**Sprint 3: Detalle Curricular a Nivel de Asignatura**
*   **Período:** (1 de junio – 15 de junio)
*   **Objetivo Comercial:** Permitir a los profesores documentar los programas de estudio de sus asignaturas y definir los resultados de aprendizaje específicos, proveyendo la evidencia granular necesaria.
*   **PBI:**
    *   **Gestión de PEAs y Resultados de Aprendizaje de Asignaturas (RAA) (MRF 2):** Funcionalidad para que el Profesor ingrese y actualice la información de los Programas de Estudios Académicos (PEA) y defina los Resultados de Aprendizaje de Asignatura (RAA) asociados.
    *   Interfaz para vincular PEAs a asignaturas y carreras existentes.
*   **Valor Comercial:** Alto. Captura el detalle de la implementación curricular, demostrando cómo cada asignatura contribuye a los objetivos de la carrera y, por ende, a la acreditación. Es una fuente fundamental de evidencia.

**Sprint 4: Trazabilidad y Relaciones Académicas (El Corazón del Sistema)**
*   **Período:** (16 de junio – 30 de junio)
*   **Objetivo Comercial:** Implementar la lógica central de trazabilidad, permitiendo establecer y visualizar las relaciones entre los diferentes niveles de resultados de aprendizaje y objetivos, crucial para la evaluación EUR-ACE.
*   **PBI:**
    *   **Definición de Relaciones Académicas (MRF 6 - RAA a RA):** Habilitar al Coordinador de Carrera para establecer y especificar el nivel de contribución (Bajo, Medio, Alto) de los RAA de una asignatura a los RA de la carrera.
    *   **Definición de Relaciones Académicas (MRF 6 - RA a OPP):** Habilitar al Coordinador de Carrera para establecer cómo los RA de la carrera contribuyen a los Objetivos de Perfil Profesional (OPP).
    *   **Definición de Relaciones Académicas (MRF 6 - RA a EUR-ACE):** Habilitar al Coordinador de Carrera (o CEI) para vincular los RA de la carrera con los Objetivos EUR-ACE definidos.
    *   Visualización de matrices de trazabilidad (RAA-RA, RA-OPP, RA-EUR-ACE) para una carrera.
*   **Valor Comercial:** **Crítico y extremadamente Alto.** Este sprint entrega la "inteligencia" central del sistema. Sin estas relaciones, la trazabilidad necesaria para la acreditación EUR-ACE no puede ser demostrada, invalidando gran parte del objetivo del producto.

**Sprint 5: Generación de Evidencia para la Acreditación**
*   **Período:** (1 de julio – 15 de julio)
*   **Objetivo Comercial:** Proporcionar a la DGIP las herramientas para generar reportes automáticos que evidencien el grado de cumplimiento de los criterios EUR-ACE, facilitando la evaluación externa.
*   **PBI:**
    *   **Generación de Reportes de Cumplimiento EUR-ACE (MRF 7 - Versión 1):** Funcionalidad para que la DGIP genere un reporte consolidado del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera.
    *   Interfaz de selección de filtros para el reporte (Facultad, Carrera).
    *   Exportación básica del reporte a formatos comunes (ej. PDF).
*   **Valor Comercial:** **Extremadamente Alto.** Este es el output final y el más visible del valor del sistema. Permite a la EPN presentar pruebas verificables a los evaluadores externos, cumpliendo directamente con el objetivo de la acreditación.

---

Este SPRINT MAPPING proporciona una ruta clara y lógica para construir el sistema, comenzando por los fundamentos y avanzando hacia la lógica de negocio central y la entrega de valor a través de los reportes clave para la acreditación EUR-ACE. Cada sprint está diseñado para entregar valor comercial incremental y abordar las dependencias de manera efectiva.

<!-- --- -->

## PROMPT 14

**Fecha:** 28 sept 2025, 04:29 a m. (UTC)

**Prompt:**

PROMPT 3
ROL
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

Objetivo
 necesito definir un sprint mapping en este iría el objetivo de cada sprint. El sprint mapping debe ser de una semana, ten en cuenta que para el desarrollo nos vamos a apoyar de la IA, bien máximo debe haber 5 sprints.

*contexto*

La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE.  


EUR-ACE es una etiqueta de calidad y un sistema de acreditación para programas de estudios de ingeniería a nivel de grado y máster. La etiqueta, que es reconocida a nivel europeo e internacional, es un certificado que garantiza que el programa de estudios cumple con altos estándares de calidad y con las exigencias de la profesión de ingeniería.

La Escuela Politécnica Nacional, o EPN, es una universidad pública, de grado y posgrado, ubicada en Quito (Ecuador). Reconocida por la investigación y la educación en ciencias básicas, ingenierías y tecnología, ofrece programas doctorales, de maestría y de grado.
La Escuela Politécnica Nacional (EPN) se organiza en facultades y departamentos, cada uno con funciones específicas para cumplir sus objetivos académicos y de investigación.

Estructura Academica de la EPN 

La EPN se estructura principalmente en las siguientes unidades:
Facultades: Son las unidades académicas superiores encargadas de planificar, ejecutar, controlar y evaluar los procesos de docencia, investigación y extensión en áreas específicas del conocimiento. Cada facultad está dirigida por un Consejo de Facultad, un Decano y un Subdecano. Tienen capacidad de gestión administrativa y financiera y están integradas por departamentos y carreras afines. 
 
Departamentos: Actúan como las células básicas de la EPN, dependientes de las facultades. Los departamentos son responsables de las actividades de investigación, docencia y extensión en campos específicos. Cada departamento puede diseñar y gestionar programas de maestría y doctorado, y participa en la planificación de los procesos docentes. 
 
La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

Cada carrera de la EPN cuenta con resultados de aprendizaje (RA): 
Los RA (Resultados de Aprendizaje) son las declaraciones operativas y mensurables que desagregan el OPP. Son la unidad fundamental del currículo por resultados.   

Los RA describen de manera precisa lo que se espera que un estudiante sepa, comprenda y sea capaz de hacer al concluir el programa de estudios.
También cada carrera cuenta con Objetivos de perfil profesional (OPP) 

El OPP (Objetivo/Perfil Profesional) es la declaración fundacional que define la identidad del futuro egresado de la EPN. Formalmente, en el diseño curricular moderno de la EPN, este se consolida como el Perfil de Egreso (PE).   

El OPP es la promesa institucional que la EPN suscribe ante la sociedad, detallando las capacidades, conocimientos y actitudes específicos que el profesional poseerá al graduarse.   


Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : – Unidad Académica “ – Carrera – Unidad de organización curricular – Nombre de la asignatura – Código

– Créditos – Resultados de aprendizaje de la asignatura (RAA)

Bien para evaluar que los RA de la carrera se estén cumpliendo se verifica como los RAA de cada materia aportan con un nivel (Bajo , Medio , Alto) a los RA .

También para Evaluar los OPP se verifica como los RA aportan a los OPP.

Para lograr la acreditación es importante los RA ya que con estos se verifica los objetivos EUR-ACE Es decir se verifica que los RA cumplan con los objetivos EURACE.


te proprciono el conjunto de mrfs definidos :
MRF Set 1: Infraestructura Básica y Gestión de Usuarios
(Establece el esqueleto del sistema y quiénes pueden interactuar con él.)

MRF 1.1: Registro de Facultades
Como: Administrador del sistema
Quiero: Registrar una nueva Facultad
Para: Poder organizar la estructura académica de la EPN en el sistema.
MRF 1.2: Registro de Carreras
Como: Administrador del sistema
Quiero: Registrar una nueva Carrera dentro de una Facultad existente
Para: Poder gestionar la información curricular específica de cada programa de estudio.
MRF 1.3: Registro de Usuarios
Como: Administrador del sistema
Quiero: Registrar un nuevo usuario en la plataforma
Para: Permitir que las personas de la EPN accedan y utilicen el sistema.
MRF 1.4: Asignación de Rol de Coordinador de Carrera
Como: Administrador del sistema
Quiero: Asignar el rol de “Coordinador de Carrera” a un usuario
Para: Otorgarle permisos para gestionar la información de una carrera específica.
MRF 1.5: Asignación de Rol de Profesor
Como: Administrador del sistema
Quiero: Asignar el rol de “Profesor” a un usuario
Para: Otorgarle permisos para gestionar la información de sus asignaturas.
MRF Set 2: Definición y Alineación Curricular Interna
(Permite a la EPN digitalizar y verificar la coherencia interna de su currículo.)

MRF 2.1: Definición del Perfil de Egreso (OPP) de una Carrera
Como: Coordinador de Carrera
Quiero: Registrar el Perfil de Egreso (OPP) de mi carrera
Para: Documentar el conjunto de habilidades y conocimientos que distinguen al egresado.
MRF 2.2: Definición de Resultados de Aprendizaje (RA) de Carrera
Como: Coordinador de Carrera
Quiero: Registrar los Resultados de Aprendizaje (RA) esperados para mi carrera
Para: Especificar las competencias globales que los estudiantes deben adquirir al egresar.
MRF 2.3: Registro de Programa de Estudio por Asignatura (PEA)
Como: Profesor
Quiero: Registrar el programa de estudio de una asignatura
Para: Digitalizar la descripción oficial y el contenido de la materia.
MRF 2.4: Definición de Resultados de Aprendizaje de Asignatura (RAA)
Como: Profesor
Quiero: Registrar los Resultados de Aprendizaje de Asignatura (RAA) para mi asignatura
Para: Detallar las competencias específicas que el estudiante obtendrá al finalizar la materia.
MRF 2.5: Mapeo de RAA a RA de Carrera
Como: Coordinador de Carrera
Quiero: Vincular un Resultado de Aprendizaje de Asignatura (RAA) a un Resultado de Aprendizaje (RA) de mi carrera
Para: Entender cómo cada asignatura contribuye a las competencias globales de la carrera.
MRF 2.6: Indicación de Nivel de Contribución de RAA a RA
Como: Coordinador de Carrera
Quiero: Especificar el nivel de contribución (Bajo, Medio, Alto) de un RAA a un RA de mi carrera
Para: Evaluar la intensidad de la aportación de cada asignatura al perfil de egreso.
MRF 2.7: Vinculación de RA de Carrera a Perfil Profesional (OPP)
Como: Coordinador de Carrera
Quiero: Vincular un Resultado de Aprendizaje (RA) de mi carrera a un Objetivo de Perfil Profesional (OPP)
Para: Demostrar la coherencia entre las competencias esperadas y el perfil final del egresado.
MRF Set 3: Verificación Preliminar de Acreditación EUR-ACE
(Permite a la EPN iniciar la autoevaluación frente a los estándares EUR-ACE.)

MRF 3.1: Carga de Estándares de Acreditación EUR-ACE
Como: Administrador del sistema
Quiero: Cargar los criterios y estándares de acreditación EUR-ACE en el sistema
Para: Disponer de la referencia oficial para la evaluación de la calidad.
MRF 3.2: Generación de Informe de Cumplimiento EUR-ACE
Como: Coordinador de Carrera
Quiero: Generar un informe que muestre cómo los Resultados de Aprendizaje (RA) de mi carrera se alinean con los estándares EUR-ACE


nuestro historico de sprint anteriores es :

Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint


ACCION

Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:
FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses “y ni o “ las hu deben ser claras

**Respuesta:**

¡Excelente! Como tu Product Owner, mi enfoque es maximizar el valor entregado en cada iteración. Hemos definido un release de 5 semanas, y ahora lo desglosaremos en sprints semanales, asegurando objetivos comerciales claros y una progresión lógica para alcanzar la acreditación EUR-ACE.

Considerando la velocidad del equipo (54-75 SP por sprint, con el apoyo de la IA, lo que sugiere una alta capacidad por semana) y el total de 191 SP para el release, cada sprint está holgadamente planificado para ser completado.

Aquí tienes el Sprint Mapping detallado para las próximas 5 semanas:

---

### **Sprint Mapping**

**Release Objetivo:** Habilitar la digitalización de la estructura académica y curricular de la EPN, junto con la alineación preliminar con los estándares EUR-ACE, para iniciar el proceso de acreditación de carreras.

---

**Sprint 1: Infraestructura Fundamental y Gestión de Usuarios**
**(Semana 1: Lunes - Domingo)**

*   **Objetivo Comercial:** Establecer la infraestructura esencial de la EPN y la capacidad de gestión de usuarios en el sistema para habilitar operaciones futuras.
*   **Valor Comercial:** Permite a la EPN comenzar a digitalizar su estructura y preparar el sistema para la participación de administradores, coordinadores y profesores, sentando las bases operativas para el proceso de acreditación.
*   **PBI:**
    *   HU-01 (5 sp): Como Administrador del sistema, Quiero registrar una nueva Facultad, Para poder organizar la estructura académica de la EPN en el sistema.
    *   HU-02 (5 sp): Como Administrador del sistema, Quiero registrar un nuevo usuario en la plataforma, Para permitir que las personas de la EPN accedan y utilicen el sistema.
    *   HU-03 (8 sp): Como Administrador del sistema, Quiero registrar una nueva Carrera dentro de una Facultad existente, Para poder gestionar la información curricular específica de cada programa de estudio.
    *   HU-04 (8 sp): Como Administrador del sistema, Quiero asignar el rol de “Profesor” a un usuario, Para otorgarle permisos para gestionar la información de sus asignaturas.
    *   HU-05 (8 sp): Como Administrador del sistema, Quiero asignar el rol de “Coordinador de Carrera” a un usuario, Para otorgarle permisos para gestionar la información de una carrera específica.
*   **Total SP Sprint 1:** 34 SP

---

**Sprint 2: Base de Acreditación y Perfil de Egreso de Carrera**
**(Semana 2: Lunes - Domingo)**

*   **Objetivo Comercial:** Integrar los estándares EUR-ACE en el sistema y definir el marco de alto nivel del perfil profesional y resultados de aprendizaje de la carrera.
*   **Valor Comercial:** Permite a la EPN disponer de la referencia oficial de acreditación y definir la visión del egresado para cada carrera, un paso indispensable para la autoevaluación y conformidad EUR-ACE.
*   **PBI:**
    *   HU-06 (21 sp): Como Administrador del sistema, Quiero cargar los criterios y estándares de acreditación EUR-ACE en el sistema, Para disponer de la referencia oficial para la evaluación de la calidad.
    *   HU-07 (13 sp): Como Coordinador de Carrera, Quiero registrar el Perfil de Egreso (OPP) de mi carrera, Para documentar el conjunto de habilidades y conocimientos que distinguen al egresado.
    *   HU-08 (13 sp): Como Coordinador de Carrera, Quiero registrar los Resultados de Aprendizaje (RA) esperados para mi carrera, Para especificar las competencias globales que los estudiantes deben adquirir al egresar.
*   **Total SP Sprint 2:** 47 SP

---

**Sprint 3: Detalle Curricular y Pre-Alineación**
**(Semana 3: Lunes - Domingo)**

*   **Objetivo Comercial:** Digitalizar el contenido específico de las asignaturas y sus resultados de aprendizaje detallados, preparando el terreno para la validación de la coherencia interna del currículo.
*   **Valor Comercial:** Habilita a los profesores a cargar el detalle oficial de sus materias y a los coordinadores a visualizar las competencias a nivel de asignatura, lo que es fundamental para el mapeo y la trazabilidad curricular.
*   **PBI:**
    *   HU-09 (13 sp): Como Profesor, Quiero registrar el programa de estudio de una asignatura, Para digitalizar la descripción oficial y el contenido de la materia.
    *   HU-10 (8 sp): Como Profesor, Quiero registrar los Resultados de Aprendizaje de Asignatura (RAA) para mi asignatura, Para detallar las competencias específicas que el estudiante obtendrá al finalizar la materia.
    *   HU-11 (21 sp): Como Coordinador de Carrera, Quiero vincular un Resultado de Aprendizaje (RA) de mi carrera a un Objetivo de Perfil Profesional (OPP), Para demostrar la coherencia entre las competencias esperadas y el perfil final del egresado.
*   **Total SP Sprint 3:** 42 SP

---

**Sprint 4: Coherencia Curricular y Contribución**
**(Semana 4: Lunes - Domingo)**

*   **Objetivo Comercial:** Validar la coherencia interna del currículo al mapear cómo los resultados de aprendizaje de las asignaturas contribuyen a los de la carrera y al perfil profesional.
*   **Valor Comercial:** Permite a los coordinadores de carrera comprender la intensidad y el alcance de la contribución de cada asignatura a las competencias globales de la carrera, identificando fortalezas o áreas de mejora en el diseño curricular, crucial para la autoevaluación EUR-ACE.
*   **PBI:**
    *   HU-12 (21 sp): Como Coordinador de Carrera, Quiero vincular un Resultado de Aprendizaje de Asignatura (RAA) a un Resultado de Aprendizaje (RA) de mi carrera, Para entender cómo cada asignatura contribuye a las competencias globales de la carrera.
    *   HU-13 (13 sp): Como Coordinador de Carrera, Quiero especificar el nivel de contribución (Bajo, Medio, Alto) de un RAA a un RA de mi carrera, Para evaluar la intensidad de la aportación de cada asignatura al perfil de egreso.
*   **Total SP Sprint 4:** 34 SP

---

**Sprint 5: Informe de Alineación EUR-ACE**
**(Semana 5: Lunes - Domingo)**

*   **Objetivo Comercial:** Generar un informe ejecutivo que demuestre la alineación de los resultados de aprendizaje de la carrera con los estándares de acreditación EUR-ACE.
*   **Valor Comercial:** Proporciona a la EPN la herramienta principal y la evidencia inicial necesaria para la autoevaluación y la presentación a los organismos de acreditación, acelerando significativamente el proceso hacia la obtención del sello EUR-ACE.
*   **PBI:**
    *   HU-14 (34 sp): Como Coordinador de Carrera, Quiero generar un informe que muestre cómo los Resultados de Aprendizaje (RA) de mi carrera se alinean con los estándares EUR-ACE, Para evaluar el cumplimiento de los criterios de acreditación.
*   **Total SP Sprint 5:** 34 SP

---

Este Sprint Mapping asegura una entrega de valor constante y progresiva, con cada sprint construyendo sobre el anterior para culminar en la capacidad de generar un informe de alineación EUR-ACE, un hito crucial para la EPN. ¡Estamos en el camino correcto!

<!-- --- -->

## PROMPT 15

**Fecha:** 28 sept 2025, 04:33 a m. (UTC)

**Prompt:**

mmm no me gustan los objetivos tienes que ser mas preciso sin dejar ambiguedad de por medio analiza bien el contexto y vuelve a plantearlos , recuerda los objetivos deben ser comericales .

ACCION 
vuelve a crear mi sprint mapping analizando esto que te comento

**Respuesta:**

¡Absolutamente! Entendido. Mis disculpas por la ambigüedad anterior. Como Product Owner, mi responsabilidad es asegurar que cada objetivo de sprint se alinee directamente con el valor comercial y estratégico para la EPN, especialmente en un proceso tan crítico como la acreditación EUR-ACE.

Aquí tienes el Sprint Mapping revisado, con objetivos comerciales claros, concisos y sin ambigüedades, enfocados en el impacto directo para la EPN:

---

### **Sprint Mapping**

**Release Objetivo Comercial Global:** Acelerar el proceso de acreditación EUR-ACE para las carreras de ingeniería de la EPN, mediante la digitalización y autoevaluación estratégica de su currículo frente a estándares de calidad reconocidos internacionalmente.

---

**Sprint 1: Cimientos Organizacionales y Acceso Estratégico**
**(Semana 1: Lunes - Domingo)**

*   **Objetivo Comercial:** Activar la plataforma con la estructura académica fundamental y los roles de usuario clave, garantizando la base operativa para iniciar la gestión estratégica del currículo y el proceso de acreditación.
*   **Valor Comercial:** Permite a la EPN comenzar a organizar digitalmente su institución y asignar responsabilidades críticas, lo que es indispensable para cualquier iniciativa de mejora de calidad y acreditación.
*   **PBI:**
    *   HU-01 (5 sp): Como Administrador del sistema, Quiero registrar una nueva Facultad, Para poder organizar la estructura académica de la EPN en el sistema.
    *   HU-02 (5 sp): Como Administrador del sistema, Quiero registrar un nuevo usuario en la plataforma, Para permitir que las personas de la EPN accedan y utilicen el sistema.
    *   HU-03 (8 sp): Como Administrador del sistema, Quiero registrar una nueva Carrera dentro de una Facultad existente, Para poder gestionar la información curricular específica de cada programa de estudio.
    *   HU-04 (8 sp): Como Administrador del sistema, Quiero asignar el rol de “Profesor” a un usuario, Para otorgarle permisos para gestionar la información de sus asignaturas.
    *   HU-05 (8 sp): Como Administrador del sistema, Quiero asignar el rol de “Coordinador de Carrera” a un usuario, Para otorgarle permisos para gestionar la información de una carrera específica.
*   **Total SP Sprint 1:** 34 SP

---

**Sprint 2: Marco de Calidad y Compromiso de Egreso**
**(Semana 2: Lunes - Domingo)**

*   **Objetivo Comercial:** Establecer los criterios de calidad EUR-ACE en la plataforma y formalizar el compromiso institucional de cada carrera con la sociedad, permitiendo a la EPN definir claramente lo que sus egresados representarán.
*   **Valor Comercial:** Proporciona a la EPN la referencia oficial de los estándares de acreditación y la declaración fundamental de los perfiles profesionales (OPP) y resultados de aprendizaje (RA) de cada carrera, elementos clave para iniciar la autoevaluación formal.
*   **PBI:**
    *   HU-06 (21 sp): Como Administrador del sistema, Quiero cargar los criterios y estándares de acreditación EUR-ACE en el sistema, Para disponer de la referencia oficial para la evaluación de la calidad.
    *   HU-07 (13 sp): Como Coordinador de Carrera, Quiero registrar el Perfil de Egreso (OPP) de mi carrera, Para documentar el conjunto de habilidades y conocimientos que distinguen al egresado.
    *   HU-08 (13 sp): Como Coordinador de Carrera, Quiero registrar los Resultados de Aprendizaje (RA) esperados para mi carrera, Para especificar las competencias globales que los estudiantes deben adquirir al egresar.
*   **Total SP Sprint 2:** 47 SP

---

**Sprint 3: Detalle Curricular y Articulación Estratégica**
**(Semana 3: Lunes - Domingo)**

*   **Objetivo Comercial:** Digitalizar el detalle de la oferta académica por asignatura y validar la consistencia estratégica de los Resultados de Aprendizaje de Carrera (RA) con el Perfil de Egreso (OPP), fortaleciendo la coherencia interna del currículo.
*   **Valor Comercial:** Permite a la EPN asegurar que las competencias globales de la carrera se alinean directamente con el perfil del egresado prometido, un paso esencial para demostrar la calidad del diseño curricular y la preparación para EUR-ACE.
*   **PBI:**
    *   HU-09 (13 sp): Como Profesor, Quiero registrar el programa de estudio de una asignatura, Para digitalizar la descripción oficial y el contenido de la materia.
    *   HU-10 (8 sp): Como Profesor, Quiero registrar los Resultados de Aprendizaje de Asignatura (RAA) para mi asignatura, Para detallar las competencias específicas que el estudiante obtendrá al finalizar la materia.
    *   HU-11 (21 sp): Como Coordinador de Carrera, Quiero vincular un Resultado de Aprendizaje (RA) de mi carrera a un Objetivo de Perfil Profesional (OPP), Para demostrar la coherencia entre las competencias esperadas y el perfil final del egresado.
*   **Total SP Sprint 3:** 42 SP

---

**Sprint 4: Análisis de Contribución y Optimización Curricular**
**(Semana 4: Lunes - Domingo)**

*   **Objetivo Comercial:** Habilitar a la EPN para diagnosticar cómo cada asignatura contribuye a las competencias globales de la carrera, lo que permite la optimización continua del currículo para maximizar el cumplimiento de los estándares de calidad EUR-ACE.
*   **Valor Comercial:** Proporciona información crítica para la toma de decisiones sobre el diseño curricular, permitiendo identificar fortalezas, duplicidades o deficiencias en la formación del estudiante y mejorar la efectividad del programa en su totalidad.
*   **PBI:**
    *   HU-12 (21 sp): Como Coordinador de Carrera, Quiero vincular un Resultado de Aprendizaje de Asignatura (RAA) a un Resultado de Aprendizaje (RA) de mi carrera, Para entender cómo cada asignatura contribuye a las competencias globales de la carrera.
    *   HU-13 (13 sp): Como Coordinador de Carrera, Quiero especificar el nivel de contribución (Bajo, Medio, Alto) de un RAA a un RA de mi carrera, Para evaluar la intensidad de la aportación de cada asignatura al perfil de egreso.
*   **Total SP Sprint 4:** 34 SP

---

**Sprint 5: Evidencia de Alineación EUR-ACE**
**(Semana 5: Lunes - Domingo)**

*   **Objetivo Comercial:** Entregar el informe ejecutivo de alineación EUR-ACE, proporcionando a la EPN la evidencia fundamental para su autoevaluación formal y la presentación a los organismos de acreditación, agilizando la obtención del sello de calidad.
*   **Valor Comercial:** Este informe es el entregable estratégico clave que cataliza el proceso de acreditación, demostrando de manera estructurada y verificable el cumplimiento de los estándares de calidad y reforzando la reputación internacional de la EPN.
*   **PBI:**
    *   HU-14 (34 sp): Como Coordinador de Carrera, Quiero generar un informe que muestre cómo los Resultados de Aprendizaje (RA) de mi carrera se alinean con los estándares EUR-ACE, Para evaluar el cumplimiento de los criterios de acreditación.
*   **Total SP Sprint 5:** 34 SP

---

Este enfoque asegura que cada sprint tenga un impacto comercial directo y medible en el objetivo final de la EPN: lograr la acreditación EUR-ACE.

<!-- --- -->

## PROMPT 16

**Fecha:** 28 sept 2025, 04:38 a m. (UTC)

**Prompt:**

PROMPT 3
ROL
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

Objetivo
 necesito definir un sprint mapping en este iría el objetivo de cada sprint. El sprint mapping debe ser de una semana, ten en cuenta que para el desarrollo nos vamos a apoyar de la IA, bien máximo debe haber 5 sprints.

*contexto*

La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE.  


EUR-ACE es una etiqueta de calidad y un sistema de acreditación para programas de estudios de ingeniería a nivel de grado y máster. La etiqueta, que es reconocida a nivel europeo e internacional, es un certificado que garantiza que el programa de estudios cumple con altos estándares de calidad y con las exigencias de la profesión de ingeniería.

La Escuela Politécnica Nacional, o EPN, es una universidad pública, de grado y posgrado, ubicada en Quito (Ecuador). Reconocida por la investigación y la educación en ciencias básicas, ingenierías y tecnología, ofrece programas doctorales, de maestría y de grado.
La Escuela Politécnica Nacional (EPN) se organiza en facultades y departamentos, cada uno con funciones específicas para cumplir sus objetivos académicos y de investigación.

Estructura Academica de la EPN 

La EPN se estructura principalmente en las siguientes unidades:
Facultades: Son las unidades académicas superiores encargadas de planificar, ejecutar, controlar y evaluar los procesos de docencia, investigación y extensión en áreas específicas del conocimiento. Cada facultad está dirigida por un Consejo de Facultad, un Decano y un Subdecano. Tienen capacidad de gestión administrativa y financiera y están integradas por departamentos y carreras afines. 
 
Departamentos: Actúan como las células básicas de la EPN, dependientes de las facultades. Los departamentos son responsables de las actividades de investigación, docencia y extensión en campos específicos. Cada departamento puede diseñar y gestionar programas de maestría y doctorado, y participa en la planificación de los procesos docentes. 
 
La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

Cada carrera de la EPN cuenta con resultados de aprendizaje (RA): 
Los RA (Resultados de Aprendizaje) son las declaraciones operativas y mensurables que desagregan el OPP. Son la unidad fundamental del currículo por resultados.   

Los RA describen de manera precisa lo que se espera que un estudiante sepa, comprenda y sea capaz de hacer al concluir el programa de estudios.
También cada carrera cuenta con Objetivos de perfil profesional (OPP) 

El OPP (Objetivo/Perfil Profesional) es la declaración fundacional que define la identidad del futuro egresado de la EPN. Formalmente, en el diseño curricular moderno de la EPN, este se consolida como el Perfil de Egreso (PE).   

El OPP es la promesa institucional que la EPN suscribe ante la sociedad, detallando las capacidades, conocimientos y actitudes específicos que el profesional poseerá al graduarse.   


Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : – Unidad Académica “ – Carrera – Unidad de organización curricular – Nombre de la asignatura – Código

– Créditos – Resultados de aprendizaje de la asignatura (RAA)

Bien para evaluar que los RA de la carrera se estén cumpliendo se verifica como los RAA de cada materia aportan con un nivel (Bajo , Medio , Alto) a los RA .

También para Evaluar los OPP se verifica como los RA aportan a los OPP.

Para lograr la acreditación es importante los RA ya que con estos se verifica los objetivos EUR-ACE Es decir se verifica que los RA cumplan con los objetivos EURACE.


te proprciono el conjunto de mrfs definidos :
MRF Set 1: Infraestructura Básica y Gestión de Usuarios
(Establece el esqueleto del sistema y quiénes pueden interactuar con él.)

MRF 1.1: Registro de Facultades
Como: Administrador del sistema
Quiero: Registrar una nueva Facultad
Para: Poder organizar la estructura académica de la EPN en el sistema.
MRF 1.2: Registro de Carreras
Como: Administrador del sistema
Quiero: Registrar una nueva Carrera dentro de una Facultad existente
Para: Poder gestionar la información curricular específica de cada programa de estudio.
MRF 1.3: Registro de Usuarios
Como: Administrador del sistema
Quiero: Registrar un nuevo usuario en la plataforma
Para: Permitir que las personas de la EPN accedan y utilicen el sistema.
MRF 1.4: Asignación de Rol de Coordinador de Carrera
Como: Administrador del sistema
Quiero: Asignar el rol de “Coordinador de Carrera” a un usuario
Para: Otorgarle permisos para gestionar la información de una carrera específica.
MRF 1.5: Asignación de Rol de Profesor
Como: Administrador del sistema
Quiero: Asignar el rol de “Profesor” a un usuario
Para: Otorgarle permisos para gestionar la información de sus asignaturas.
MRF Set 2: Definición y Alineación Curricular Interna
(Permite a la EPN digitalizar y verificar la coherencia interna de su currículo.)

MRF 2.1: Definición del Perfil de Egreso (OPP) de una Carrera
Como: Coordinador de Carrera
Quiero: Registrar el Perfil de Egreso (OPP) de mi carrera
Para: Documentar el conjunto de habilidades y conocimientos que distinguen al egresado.
MRF 2.2: Definición de Resultados de Aprendizaje (RA) de Carrera
Como: Coordinador de Carrera
Quiero: Registrar los Resultados de Aprendizaje (RA) esperados para mi carrera
Para: Especificar las competencias globales que los estudiantes deben adquirir al egresar.
MRF 2.3: Registro de Programa de Estudio por Asignatura (PEA)
Como: Profesor
Quiero: Registrar el programa de estudio de una asignatura
Para: Digitalizar la descripción oficial y el contenido de la materia.
MRF 2.4: Definición de Resultados de Aprendizaje de Asignatura (RAA)
Como: Profesor
Quiero: Registrar los Resultados de Aprendizaje de Asignatura (RAA) para mi asignatura
Para: Detallar las competencias específicas que el estudiante obtendrá al finalizar la materia.
MRF 2.5: Mapeo de RAA a RA de Carrera
Como: Coordinador de Carrera
Quiero: Vincular un Resultado de Aprendizaje de Asignatura (RAA) a un Resultado de Aprendizaje (RA) de mi carrera
Para: Entender cómo cada asignatura contribuye a las competencias globales de la carrera.
MRF 2.6: Indicación de Nivel de Contribución de RAA a RA
Como: Coordinador de Carrera
Quiero: Especificar el nivel de contribución (Bajo, Medio, Alto) de un RAA a un RA de mi carrera
Para: Evaluar la intensidad de la aportación de cada asignatura al perfil de egreso.
MRF 2.7: Vinculación de RA de Carrera a Perfil Profesional (OPP)
Como: Coordinador de Carrera
Quiero: Vincular un Resultado de Aprendizaje (RA) de mi carrera a un Objetivo de Perfil Profesional (OPP)
Para: Demostrar la coherencia entre las competencias esperadas y el perfil final del egresado.
MRF Set 3: Verificación Preliminar de Acreditación EUR-ACE
(Permite a la EPN iniciar la autoevaluación frente a los estándares EUR-ACE.)

MRF 3.1: Carga de Estándares de Acreditación EUR-ACE
Como: Administrador del sistema
Quiero: Cargar los criterios y estándares de acreditación EUR-ACE en el sistema
Para: Disponer de la referencia oficial para la evaluación de la calidad.
MRF 3.2: Generación de Informe de Cumplimiento EUR-ACE
Como: Coordinador de Carrera
Quiero: Generar un informe que muestre cómo los Resultados de Aprendizaje (RA) de mi carrera se alinean con los estándares EUR-ACE


ten de ejemplo estos pobjetivos de story mapping para que te guies en como escribir :
print 1: (15 de mayo – 29 de mayo) 

Objetivo: Gestionar el registro de objetivos EUR-ACE, Resultados de Aprendizaje (RA) de la Carrera y Objetivos de la Carrera. 

Product Backlog Items (PBI): 

 Historia N°1: Registrar Resultados de Aprendizaje de la Carrera (RA)  

Como coordinador 

quiero registrar los resultados de aprendizaje de una carrera 

para describir el perfil de egreso de los estudiantes de la carrera 

Historia N°2: Registrar Objetivos EUR-ACE  
quiero registrar los objetivos EUR-ACE  
para describir los requisitos académicos exigidos a nivel europeo. 
 

Historia N°3: Registrar Objetivos de la Carrera  
Como coordinador 
quiero registrar los objetivos de la carrera 
para describir el perfil profesional de un ingeniero 

Forma 

Sprint 2: (30 de mayo – 12 de junio) 

Objetivo: Gestionar el registro de carreras y las relaciones de los Resultados de Aprendizaje de la Asignatura (RAA) con los Resultados de Aprendizaje de la Carrera (RA). 

Product Backlog Items (PBI): 

Historia N°4: Registro de asignaturas  
Como coordinador, 
quiero registrar la información general de una asignatura 
para presentar información relevante de la asignatura. 
 

Historia N°5: Registro de resultados de aprendizaje del PEA  
Como coordinador, 
quiero registrar los resultados de aprendizaje de una asignatura 
para describir los conocimiento, destrezas, valores y actitudes que el estudiante obtendrá en la asignatura. 
 

Historia N°6: Notificaciones de retroalimentación 
 Como coordinador 
quiero recibir retroalimentación de las acciones que realizo 
para conocer si la operación fue exitosa. 

Forma 

 

Sprint 3: (13 – 26 de junio) 

Objetivo: Gestionar la relación de los resultados de aprendizaje de cada asignatura (RAA) con los objetivos del perfil de egreso (RA) 

nuestro historico de sprint anteriores es :

Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint


ACCION

Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:
FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses “y ni o “ las hu deben ser claras

**Respuesta:**

¡Excelente! Entendido a la perfección. Como tu Product Owner, mi prioridad es traducir las necesidades de la EPN en un plan de sprint claro, con objetivos comerciales directos y sin ambigüedad, enfocados en el valor que el producto entregará para la acreditación EUR-ACE. La optimización del tiempo de desarrollo con IA es un factor clave que consideraremos para maximizar la entrega en cada semana.

Aquí tienes el Sprint Mapping detallado, alineado con tus requerimientos:

---

### **Sprint Mapping**

**Objetivo Comercial Global del Proyecto:** Acelerar y simplificar el proceso de acreditación EUR-ACE para las carreras de ingeniería de la EPN, mediante la digitalización estratégica, alineación curricular y autoevaluación continua frente a estándares de calidad reconocidos internacionalmente.

---

**Sprint 1: Gestión Institucional y Acceso Esencial**
**(Fecha Inicio – Fecha Fin: 06 de Mayo – 12 de Mayo)**

*   **Objetivo Comercial:** Habilitar la infraestructura organizativa y de usuarios clave en la plataforma, permitiendo a la EPN iniciar la digitalización de su estructura académica y la asignación de roles fundamentales, un paso crítico para cualquier proceso de mejora y acreditación.
*   **Valor Comercial:** Provee la base operativa necesaria para que la EPN comience a gestionar digitalmente su personal y su organización académica, eliminando barreras de entrada y agilizando la preparación para la acreditación, lo cual se traduce en eficiencia administrativa y un inicio formal del proceso.
*   **Dependencias:** Ninguna.
*   **PBI:**
    *   Como Administrador del sistema, Quiero registrar una nueva Facultad, Para poder organizar la estructura académica de la EPN en el sistema. (5 SP)
    *   Como Administrador del sistema, Quiero registrar una nueva Carrera dentro de una Facultad existente, Para poder gestionar la información curricular específica de cada programa de estudio. (8 SP)
    *   Como Administrador del sistema, Quiero registrar un nuevo usuario en la plataforma, Para permitir que las personas de la EPN accedan y utilicen el sistema. (5 SP)
    *   Como Administrador del sistema, Quiero asignar el rol de “Coordinador de Carrera” a un usuario, Para otorgarle permisos para gestionar la información de una carrera específica. (8 SP)
    *   Como Administrador del sistema, Quiero asignar el rol de “Profesor” a un usuario, Para otorgarle permisos para gestionar la información de sus asignaturas. (8 SP)
*   **Total SP Sprint 1:** 34 SP

---

**Sprint 2: Declaración Curricular Estratégica y Marco de Calidad EUR-ACE**
**(Fecha Inicio – Fecha Fin: 13 de Mayo – 19 de Mayo)**

*   **Objetivo Comercial:** Dotar a la EPN de las herramientas para formalizar digitalmente el perfil profesional de sus egresados y los resultados de aprendizaje globales por carrera, e integrar los estándares de calidad EUR-ACE. Esto establece el compromiso institucional y la base de competencias para la autoevaluación formal.
*   **Valor Comercial:** Permite a la EPN documentar oficialmente los compromisos de sus programas de ingeniería y tener la referencia oficial EUR-ACE disponible, lo cual es fundamental para la autoevaluación y la comunicación externa de su calidad educativa. Facilita la identificación temprana de alineación con los requisitos de acreditación.
*   **Dependencias:** Sprint 1 (Necesita carreras y coordinadores asignados).
*   **PBI:**
    *   Como Coordinador de Carrera, Quiero registrar el Perfil de Egreso (OPP) de mi carrera, Para documentar el conjunto de habilidades y conocimientos que distinguen al egresado. (8 SP)
    *   Como Coordinador de Carrera, Quiero registrar los Resultados de Aprendizaje (RA) esperados para mi carrera, Para especificar las competencias globales que los estudiantes deben adquirir al egresar. (8 SP)
    *   Como Coordinador de Carrera, Quiero vincular un Resultado de Aprendizaje (RA) de mi carrera a un Objetivo de Perfil Profesional (OPP), Para demostrar la coherencia entre las competencias esperadas y el perfil final del egresado. (13 SP)
    *   Como Administrador del sistema, Quiero cargar los criterios y estándares de acreditación EUR-ACE en el sistema, Para disponer de la referencia oficial para la evaluación de la calidad. (21 SP)
*   **Total SP Sprint 2:** 50 SP

---

**Sprint 3: Detalle Académico y Mapeo Interno de Asignaturas**
**(Fecha Inicio – Fecha Fin: 20 de Mayo – 26 de Mayo)**

*   **Objetivo Comercial:** Habilitar a los profesores para digitalizar la información detallada de sus asignaturas y sus resultados de aprendizaje específicos, y permitir a los coordinadores comenzar a mapear cómo estas contribuyen a los resultados de aprendizaje de la carrera. Esto optimiza el diseño curricular y prepara la evaluación de coherencia interna.
*   **Valor Comercial:** Digitaliza el contenido programático esencial a nivel de asignatura y comienza a construir el vínculo directo entre lo que se enseña en cada materia y las competencias generales de la carrera. Esto es crucial para demostrar la alineación curricular interna requerida por EUR-ACE y para la optimización continua de los programas.
*   **Dependencias:** Sprint 1 (Profesores asignados), Sprint 2 (RA de Carrera definidos).
*   **PBI:**
    *   Como Profesor, Quiero registrar el programa de estudio de una asignatura, Para digitalizar la descripción oficial y el contenido de la materia. (13 SP)
    *   Como Profesor, Quiero registrar los Resultados de Aprendizaje de Asignatura (RAA) para mi asignatura, Para detallar las competencias específicas que el estudiante obtendrá al finalizar la materia. (8 SP)
    *   Como Coordinador de Carrera, Quiero vincular un Resultado de Aprendizaje de Asignatura (RAA) a un Resultado de Aprendizaje (RA) de mi carrera, Para entender cómo cada asignatura contribuye a las competencias globales de la carrera. (13 SP)
    *   Como Coordinador de Carrera, Quiero especificar el nivel de contribución (Bajo, Medio, Alto) de un RAA a un RA de mi carrera, Para evaluar la intensidad de la aportación de cada asignatura al perfil de egreso. (8 SP)
*   **Total SP Sprint 3:** 42 SP

---

**Sprint 4: Diagnóstico de Cumplimiento EUR-ACE**
**(Fecha Inicio – Fecha Fin: 27 de Mayo – 02 de Junio)**

*   **Objetivo Comercial:** Proporcionar a la EPN la capacidad de generar un informe preliminar de alineación de los resultados de aprendizaje de sus carreras con los estándares EUR-ACE, ofreciendo una visión temprana y estratégica de su preparación para la acreditación y facilitando la identificación de brechas y acciones correctivas.
*   **Valor Comercial:** Este informe es un entregable clave que permite a la EPN realizar una autoevaluación formal y temprana frente a los requisitos de EUR-ACE. Esto acelera la toma de decisiones, permite la implementación de acciones correctivas antes de la evaluación externa, reduce riesgos y costos asociados al proceso de acreditación, y fortalece la reputación institucional.
*   **Dependencias:** Sprint 2 (RA de Carrera definidos, EUR-ACE estándares cargados).
*   **PBI:**
    *   Como Coordinador de Carrera, Quiero generar un informe que muestre cómo los Resultados de Aprendizaje (RA) de mi carrera se alinean con los estándares EUR-ACE, Para evaluar el cumplimiento de los criterios de acreditación. (34 SP)
*   **Total SP Sprint 4:** 34 SP

---

Este plan de 4 sprints cubre todos los MRF definidos, con una velocidad promedio por sprint que se alinea con el rango bajo a medio de tu equipo (considerando el apoyo de IA), y lo más importante, cada sprint entrega un valor comercial tangible que acerca a la EPN a su objetivo de acreditación EUR-ACE.

<!-- --- -->

## PROMPT 17

**Fecha:** 28 sept 2025, 04:40 a m. (UTC)

**Prompt:**

esos objetivos esta demasiado largos debes ser consico y directo pues mucho adorno le pones .

ACCION :

Analiza detenidamente y vuelve a crear mi sprint mapping

**Respuesta:**

¡Absolutamente! Mis disculpas por el exceso de "adornos". Como Product Owner, mi trabajo es ser directo y enfocado en el valor. He revisado el Sprint Mapping para ser mucho más conciso y claro en los objetivos comerciales y el valor entregado, manteniendo el formato y la calidad de los PBIs.

---

### **Sprint Mapping (Revisado y Conciso)**

**Objetivo Comercial Global del Proyecto:** Acelerar y simplificar la acreditación EUR-ACE de las carreras de ingeniería de la EPN mediante la digitalización y autoevaluación continua.

---

**Sprint 1: Fundación del Sistema y Gestión de Usuarios**
**(Fecha Inicio – Fecha Fin: 06 de Mayo – 12 de Mayo)**

*   **Objetivo Comercial:** Establecer la infraestructura jerarquica academica y el acceso basado en roles.
*   **Valor Comercial:** Digitaliza la estructura académica inicial de la EPN y habilita el acceso fundamental para el proceso de acreditación.
*   **Dependencias:** Ninguna.
*   **PBI:**
    *   Como Administrador del sistema, Quiero registrar una nueva Facultad, Para organizar la estructura académica de la EPN en el sistema. (5 SP)
    *   Como Administrador del sistema, Quiero registrar una nueva Carrera dentro de una Facultad existente, Para gestionar la información curricular específica de cada programa de estudio. (8 SP)
    *   Como Administrador del sistema, Quiero registrar un nuevo usuario en la plataforma, Para permitir el acceso a las personas de la EPN. (5 SP)
    *   Como Administrador del sistema, Quiero asignar el rol de “Coordinador de Carrera” a un usuario, Para otorgarle permisos de gestión de carrera. (8 SP)
    *   Como Administrador del sistema, Quiero asignar el rol de “Profesor” a un usuario, Para otorgarle permisos de gestión de asignaturas. (8 SP)
*   **Total SP Sprint 1:** 34 SP

---

**Sprint 2: Definición Curricular Central y Estándares EUR-ACE**
**(Fecha Inicio – Fecha Fin: 13 de Mayo – 19 de Mayo)**

*   **Objetivo Comercial:** Gestion de los objetivos de perfil profesional y perfil de egreso .
*   **Valor Comercial:** Formaliza digitalmente el currículo esencial de la EPN y establece el marco de calidad EUR-ACE para la autoevaluación.
*   **Dependencias:** Sprint 1 (Necesita carreras y coordinadores asignados).
*   **PBI:**
    *   Como Coordinador de Carrera, Quiero registrar el Perfil de Egreso (OPP) de mi carrera, Para documentar las habilidades que distinguen al egresado. (8 SP)
    *   Como Coordinador de Carrera, Quiero registrar los Resultados de Aprendizaje (RA) esperados para mi carrera, Para especificar las competencias globales de los estudiantes. (8 SP)
    *   Como Coordinador de Carrera, Quiero vincular un Resultado de Aprendizaje (RA) de mi carrera a un Objetivo de Perfil Profesional (OPP), Para demostrar la coherencia entre competencias y perfil final del egresado. (13 SP)
    *   Como Administrador del sistema, Quiero cargar los criterios y estándares de acreditación EUR-ACE en el sistema, Para disponer de la referencia oficial de evaluación. (21 SP)
*   **Total SP Sprint 2:** 50 SP

---

**Sprint 3: Detalle de Asignaturas y Mapeo de Contribuciones**
**(Fecha Inicio – Fecha Fin: 20 de Mayo – 26 de Mayo)**

*   **Objetivo Comercial:** Registrar programas de estudio de asignaturas (PEA) y sus Resultados de Aprendizaje (RAA), y vincularlos a los RA de carrera.
*   **Valor Comercial:** Digitaliza la contribución de cada asignatura a las competencias de la carrera, demostrando la coherencia curricular interna.
*   **Dependencias:** Sprint 1 (Profesores asignados), Sprint 2 (RA de Carrera definidos).
*   **PBI:**
    *   Como Profesor, Quiero registrar el programa de estudio de una asignatura, Para digitalizar su descripción oficial y contenido. (13 SP)
    *   Como Profesor, Quiero registrar los Resultados de Aprendizaje de Asignatura (RAA) para mi asignatura, Para detallar las competencias específicas que el estudiante obtendrá. (8 SP)
    *   Como Coordinador de Carrera, Quiero vincular un Resultado de Aprendizaje de Asignatura (RAA) a un Resultado de Aprendizaje (RA) de mi carrera, Para entender su contribución a las competencias globales. (13 SP)
    *   Como Coordinador de Carrera, Quiero especificar el nivel de contribución (Bajo, Medio, Alto) de un RAA a un RA de mi carrera, Para evaluar la intensidad de su aporte. (8 SP)
*   **Total SP Sprint 3:** 42 SP

---

**Sprint 4: Diagnóstico Preliminar de Acreditación EUR-ACE**
**(Fecha Inicio – Fecha Fin: 03 de Junio – 09 de Junio)**

*   **Objetivo Comercial:** Generar informes de alineación entre los Resultados de Aprendizaje (RA) de la carrera y los estándares EUR-ACE.
*   **Valor Comercial:** Permite una autoevaluación estratégica y temprana para la acreditación EUR-ACE, identificando brechas y optimizando recursos.
*   **Dependencias:** Sprint 2 (RA de Carrera definidos, estándares EUR-ACE cargados).
*   **PBI:**
    *   Como Coordinador de Carrera, Quiero generar un informe que muestre cómo los Resultados de Aprendizaje (RA) de mi carrera se alinean con los estándares EUR-ACE, Para evaluar el cumplimiento de los criterios de acreditación. (34 SP)
*   **Total SP Sprint 4:** 34 SP

---

<!-- --- -->

## PROMPT 18

**Fecha:** 28 sept 2025, 04:47 a m. (UTC)

**Prompt:**

PROMPT 3
ROL
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

Objetivo
 necesito definir un sprint mapping en este iría el objetivo de cada sprint. El sprint mapping debe ser de una semana, ten en cuenta que para el desarrollo nos vamos a apoyar de la IA, bien máximo debe haber 5 sprints.

*contexto*

La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE.  


EUR-ACE es una etiqueta de calidad y un sistema de acreditación para programas de estudios de ingeniería a nivel de grado y máster. La etiqueta, que es reconocida a nivel europeo e internacional, es un certificado que garantiza que el programa de estudios cumple con altos estándares de calidad y con las exigencias de la profesión de ingeniería.

La Escuela Politécnica Nacional, o EPN, es una universidad pública, de grado y posgrado, ubicada en Quito (Ecuador). Reconocida por la investigación y la educación en ciencias básicas, ingenierías y tecnología, ofrece programas doctorales, de maestría y de grado.
La Escuela Politécnica Nacional (EPN) se organiza en facultades y departamentos, cada uno con funciones específicas para cumplir sus objetivos académicos y de investigación.

Estructura jerarquica Academica de la EPN 

La EPN se estructura principalmente en las siguientes unidades:
Facultades: Son las unidades académicas superiores encargadas de planificar, ejecutar, controlar y evaluar los procesos de docencia, investigación y extensión en áreas específicas del conocimiento. Cada facultad está dirigida por un Consejo de Facultad, un Decano y un Subdecano. Tienen capacidad de gestión administrativa y financiera y están integradas por departamentos y carreras afines. 
 
Departamentos: Actúan como las células básicas de la EPN, dependientes de las facultades. Los departamentos son responsables de las actividades de investigación, docencia y extensión en campos específicos. Cada departamento puede diseñar y gestionar programas de maestría y doctorado, y participa en la planificación de los procesos docentes. 
 
La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

Cada carrera de la EPN cuenta con resultados de aprendizaje (RA): 
Los RA (Resultados de Aprendizaje) son las declaraciones operativas y mensurables que desagregan el OPP. Son la unidad fundamental del currículo por resultados.   

Los RA describen de manera precisa lo que se espera que un estudiante sepa, comprenda y sea capaz de hacer al concluir el programa de estudios.
También cada carrera cuenta con Objetivos de perfil profesional (OPP) 

El OPP (Objetivo/Perfil Profesional) es la declaración fundacional que define la identidad del futuro egresado de la EPN. Formalmente, en el diseño curricular moderno de la EPN, este se consolida como el Perfil de Egreso (PE).   

El OPP es la promesa institucional que la EPN suscribe ante la sociedad, detallando las capacidades, conocimientos y actitudes específicos que el profesional poseerá al graduarse.   


Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : – Unidad Académica “ – Carrera – Unidad de organización curricular – Nombre de la asignatura – Código

– Créditos – Resultados de aprendizaje de la asignatura (RAA)

Bien para evaluar que los RA de la carrera se estén cumpliendo se verifica como los RAA de cada materia aportan con un nivel (Bajo , Medio , Alto) a los RA .

También para Evaluar los OPP se verifica como los RA aportan a los OPP.

Para lograr la acreditación es importante los RA ya que con estos se verifica los objetivos EUR-ACE Es decir se verifica que los RA cumplan con los objetivos EURACE.


te proprciono el conjunto de mrfs definidos :
MRF Set 1: Infraestructura Básica y Gestión de Usuarios
(Establece el esqueleto del sistema y quiénes pueden interactuar con él.)

MRF 1.1: Registro de Facultades
Como: Administrador del sistema
Quiero: Registrar una nueva Facultad
Para: Poder organizar la estructura académica de la EPN en el sistema.
MRF 1.2: Registro de Carreras
Como: Administrador del sistema
Quiero: Registrar una nueva Carrera dentro de una Facultad existente
Para: Poder gestionar la información curricular específica de cada programa de estudio.
MRF 1.3: Registro de Usuarios
Como: Administrador del sistema
Quiero: Registrar un nuevo usuario en la plataforma
Para: Permitir que las personas de la EPN accedan y utilicen el sistema.
MRF 1.4: Asignación de Rol de Coordinador de Carrera
Como: Administrador del sistema
Quiero: Asignar el rol de “Coordinador de Carrera” a un usuario
Para: Otorgarle permisos para gestionar la información de una carrera específica.
MRF 1.5: Asignación de Rol de Profesor
Como: Administrador del sistema
Quiero: Asignar el rol de “Profesor” a un usuario
Para: Otorgarle permisos para gestionar la información de sus asignaturas.
MRF Set 2: Definición y Alineación Curricular Interna
(Permite a la EPN digitalizar y verificar la coherencia interna de su currículo.)

MRF 2.1: Definición del Perfil de Egreso (OPP) de una Carrera
Como: Coordinador de Carrera
Quiero: Registrar el Perfil de Egreso (OPP) de mi carrera
Para: Documentar el conjunto de habilidades y conocimientos que distinguen al egresado.
MRF 2.2: Definición de Resultados de Aprendizaje (RA) de Carrera
Como: Coordinador de Carrera
Quiero: Registrar los Resultados de Aprendizaje (RA) esperados para mi carrera
Para: Especificar las competencias globales que los estudiantes deben adquirir al egresar.
MRF 2.3: Registro de Programa de Estudio por Asignatura (PEA)
Como: Profesor
Quiero: Registrar el programa de estudio de una asignatura
Para: Digitalizar la descripción oficial y el contenido de la materia.
MRF 2.4: Definición de Resultados de Aprendizaje de Asignatura (RAA)
Como: Profesor
Quiero: Registrar los Resultados de Aprendizaje de Asignatura (RAA) para mi asignatura
Para: Detallar las competencias específicas que el estudiante obtendrá al finalizar la materia.
MRF 2.5: Mapeo de RAA a RA de Carrera
Como: Coordinador de Carrera
Quiero: Vincular un Resultado de Aprendizaje de Asignatura (RAA) a un Resultado de Aprendizaje (RA) de mi carrera
Para: Entender cómo cada asignatura contribuye a las competencias globales de la carrera.
MRF 2.6: Indicación de Nivel de Contribución de RAA a RA
Como: Coordinador de Carrera
Quiero: Especificar el nivel de contribución (Bajo, Medio, Alto) de un RAA a un RA de mi carrera
Para: Evaluar la intensidad de la aportación de cada asignatura al perfil de egreso.
MRF 2.7: Vinculación de RA de Carrera a Perfil Profesional (OPP)
Como: Coordinador de Carrera
Quiero: Vincular un Resultado de Aprendizaje (RA) de mi carrera a un Objetivo de Perfil Profesional (OPP)
Para: Demostrar la coherencia entre las competencias esperadas y el perfil final del egresado.
MRF Set 3: Verificación Preliminar de Acreditación EUR-ACE
(Permite a la EPN iniciar la autoevaluación frente a los estándares EUR-ACE.)

MRF 3.1: Carga de Estándares de Acreditación EUR-ACE
Como: Administrador del sistema
Quiero: Cargar los criterios y estándares de acreditación EUR-ACE en el sistema
Para: Disponer de la referencia oficial para la evaluación de la calidad.
MRF 3.2: Generación de Informe de Cumplimiento EUR-ACE
Como: Coordinador de Carrera
Quiero: Generar un informe que muestre cómo los Resultados de Aprendizaje (RA) de mi carrera se alinean con los estándares EUR-ACE


ten de ejemplo estos objetivos de story mapping para que te guies en como escribir :
print 1: (15 de mayo – 29 de mayo) 

Objetivo: Gestionar el registro de objetivos EUR-ACE, Resultados de Aprendizaje (RA) de la Carrera y Objetivos de la Carrera. 

Product Backlog Items (PBI): 

 Historia N°1: Registrar Resultados de Aprendizaje de la Carrera (RA)  

Como coordinador 

quiero registrar los resultados de aprendizaje de una carrera 

para describir el perfil de egreso de los estudiantes de la carrera 

Historia N°2: Registrar Objetivos EUR-ACE  
quiero registrar los objetivos EUR-ACE  
para describir los requisitos académicos exigidos a nivel europeo. 
 

Historia N°3: Registrar Objetivos de la Carrera  
Como coordinador 
quiero registrar los objetivos de la carrera 
para describir el perfil profesional de un ingeniero 

Forma 

Sprint 2: (30 de mayo – 12 de junio) 

Objetivo: 

Product Backlog Items (PBI): 

Historia N°4: Registro de asignaturas  


Historia N°5: Registro de resultados de aprendizaje del PEA  


Historia N°6: Notificaciones de retroalimentación 

Forma 

 

Sprint 3: (13 – 26 de junio) 

Objetivo: Gestionar la relación de los resultados de aprendizaje de cada asignatura (RAA) con los objetivos del perfil de egreso (RA) 

nuestro historico de sprint anteriores es :

Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint


ACCION

Crea el SPRINT MAPPING identificando dependencias , valor comercial , lor comercial en cada sprint y sigue este formato:
FORMATO DE SALIDA : Sprint Mapping Sprint 1: (1 de mayo – 15 de mayo) Objetivo: PBI:

para el objetivo ten en cuenta que debe ser un objetivo comercial claro y conciso , para los PBI usa el formato de una HU no uses “y ni o “ las hu deben ser claras

**Respuesta:**

¡Excelente feedback! Tienes toda la razón. Como tu Product Owner, mi deber es la claridad y el enfoque. He depurado los objetivos y los detalles para ser lo más conciso y directo posible, maximizando el valor en cada semana de sprint, y utilizando la potencia de la IA para un desarrollo ágil.

Aquí tienes el Sprint Mapping revisado, diseñado para entregar valor incremental en el proceso de acreditación EUR-ACE de la EPN:

---

### **Sprint Mapping (Revisado y Conciso)**

**Objetivo Comercial Global del Proyecto:** Acelerar y simplificar la acreditación EUR-ACE de las carreras de ingeniería de la EPN mediante la digitalización y autoevaluación continua.

---

**Sprint 1: Fundación Organizacional y Acceso Inicial**
**(Fecha Inicio – Fecha Fin: 06 de Mayo – 12 de Mayo)**

*   **Objetivo Comercial:** Establecer la estructura jerarquica academica y la gestion de roles .
*   **Valor Comercial:** Proporciona el esqueleto digital de la EPN y habilita la interacción inicial para el proceso de acreditación.
*   **Dependencias:** Ninguna.
*   **PBI:**
    *   Como Administrador del sistema, Quiero registrar una nueva Facultad, Para organizar la estructura académica de la EPN en el sistema. (8 SP)
    *   Como Administrador del sistema, Quiero registrar una nueva Carrera dentro de una Facultad existente, Para gestionar la información curricular específica de cada programa de estudio. (13 SP)
    *   Como Administrador del sistema, Quiero registrar un nuevo usuario en la plataforma, Para permitir el acceso a las personas de la EPN. (8 SP)
    *   Como Administrador del sistema, Quiero asignar el rol de “Coordinador de Carrera” a un usuario, Para otorgarle permisos para gestionar una carrera específica. (13 SP)
    *   Como Administrador del sistema, Quiero asignar el rol de “Profesor” a un usuario, Para otorgarle permisos para gestionar sus asignaturas. (13 SP)
*   **Total SP Sprint 1:** 55 SP

---

**Sprint 2: Definición Curricular Central y Estándares EUR-ACE**
**(Fecha Inicio – Fecha Fin: 13 de Mayo – 19 de Mayo)**

*   **Objetivo Comercial:** Gestion del perfil profesional  (OPP) , perfil de egreso (RA) de las carreras y  relacion del perfil de egreso con los estándares EUR-ACE y OPP.
*   **Valor Comercial:** Formaliza digitalmente la visión de egreso de la EPN y establece el marco de calidad EUR-ACE para la autoevaluación.
*   **Dependencias:** Sprint 1 (Necesita carreras y coordinadores asignados).
*   **PBI:**
    *   Como Coordinador de Carrera, Quiero registrar el Perfil de Egreso (OPP) de mi carrera, Para documentar las habilidades que distinguen al egresado. (13 SP)
    *   Como Coordinador de Carrera, Quiero registrar los Resultados de Aprendizaje (RA) esperados para mi carrera, Para especificar las competencias globales de los estudiantes. (21 SP)
    *   Como Coordinador de Carrera, Quiero vincular un Resultado de Aprendizaje (RA) de mi carrera a un Objetivo de Perfil Profesional (OPP), Para demostrar la coherencia entre competencias y perfil final del egresado. (13 SP)
    *   Como Administrador del sistema, Quiero cargar los criterios y estándares de acreditación EUR-ACE en el sistema, Para disponer de la referencia oficial de evaluación. (21 SP)
*   **Total SP Sprint 2:** 68 SP

---

**Sprint 3: Detalle de Asignaturas y Mapeo de Contribuciones**
**(Fecha Inicio – Fecha Fin: 20 de Mayo – 26 de Mayo)**

*   **Objetivo Comercial:** Gestion de programas de estudio de asignaturas (PEA) y relacion a los RA de carrera.
*   **Valor Comercial:** Digitaliza la contribución de cada asignatura a las competencias de la carrera, evidenciando la coherencia curricular interna.
*   **Dependencias:** Sprint 1 (Profesores asignados), Sprint 2 (RA de Carrera definidos).
*   **PBI:**
    *   Como Profesor, Quiero registrar el programa de estudio de una asignatura, Para digitalizar su descripción oficial y contenido. (21 SP)
    *   Como Profesor, Quiero registrar los Resultados de Aprendizaje de Asignatura (RAA) para mi asignatura, Para detallar las competencias específicas que el estudiante obtendrá. (13 SP)
    *   Como Coordinador de Carrera, Quiero vincular un Resultado de Aprendizaje de Asignatura (RAA) a un Resultado de Aprendizaje (RA) de mi carrera, Para entender cómo cada asignatura contribuye a las competencias globales. (13 SP)
    *   Como Coordinador de Carrera, Quiero especificar el nivel de contribución (Bajo, Medio, Alto) de un RAA a un RA de mi carrera, Para evaluar la intensidad de su aporte. (8 SP)
*   **Total SP Sprint 3:** 55 SP

---

**Sprint 4: Diagnóstico Preliminar EUR-ACE**
**(Fecha Inicio – Fecha Fin: 27 de Mayo – 02 de Junio)**

*   **Objetivo Comercial:** Generar reportes  de alineación entre los resultados de aprendizaje (RA) de la carrera con los estándares EUR-ACE y los objetivos de carrera OPP .
*   **Valor Comercial:** Permite una autoevaluación estratégica y temprana para la acreditación EUR-ACE, identificando brechas y optimizando recursos.
*   **Dependencias:** Sprint 2 (RA de Carrera definidos, estándares EUR-ACE cargados).
*   **PBI:**
    *   Como Coordinador de Carrera, Quiero generar un informe que muestre cómo los Resultados de Aprendizaje (RA) de mi carrera se alinean con los estándares EUR-ACE, Para evaluar el cumplimiento de los criterios de acreditación. (55 SP)
*   **Total SP Sprint 4:** 55 SP

---

<!-- --- -->
