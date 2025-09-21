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

dame de nuevo el sprint mapping

**Respuesta:**

# Sprint Mapping - Release 1 (5 Semanas)

## Objetivo del Release (5 Semanas):
Establecer la estructura de datos fundamental y las funcionalidades de mapeo clave para la acreditación EUR-ACE, permitiendo a los Coordinadores gestionar entidades curriculares y definir todas las relaciones críticas (RAA→RA, RA→OPP, RA→EUR-ACE), y ofrecer una primera visión de estos mapeos con un control de acceso adecuado.

---

## Sprint 1: (Día 1 – Día 5)
**Objetivo:** Establecer la infraestructura organizacional (Facultades, Carreras), los objetivos de acreditación EUR-ACE y el acceso seguro al sistema.
**Valor Comercial:** Define la base operativa del sistema (estructura de la EPN y sus metas de acreditación) y asegura que solo usuarios autorizados puedan empezar a trabajar.
**PBI:**
*   **HU: Gestionar Facultades (CRUD)**
    *   Como: DGIP
    *   Quiero: crear, leer, actualizar y eliminar facultades
    *   Para: organizar la estructura de la EPN en el sistema.
    *   acceptanceCriteria: ["Se puede crear una nueva facultad con nombre y código único.", "Se puede ver una lista de todas las facultades.", "Se puede modificar la información de una facultad existente.", "Se puede eliminar una facultad si no tiene carreras asociadas."]
    *   storyPoints: 5
    *   priority: 1
    *   backendTasks: ["Desarrollo del API REST para CRUD de Facultades.", "Validación de unicidad de código/nombre de facultad.", "Implementación de lógica para verificar dependencias antes de eliminar."]
    *   frontendTasks: ["Diseño e implementación de la interfaz para listar facultades.", "Diseño e implementación de formularios para crear/editar facultades.", "Integración con el API de Facultades."]
*   **HU: Gestionar Carreras (CRUD)**
    *   Como: DGIP
    *   Quiero: crear, leer, actualizar y eliminar carreras asociándolas a una facultad
    *   Para: estructurar las ofertas académicas de la EPN.
    *   acceptanceCriteria: ["Se puede crear una nueva carrera, seleccionando la facultad a la que pertenece.", "Se puede ver una lista de todas las carreras, mostrando su facultad asociada.", "Se puede modificar la información de una carrera existente.", "Se puede eliminar una carrera si no tiene coordinadores o datos curriculares asociados."]
    *   storyPoints: 5
    *   priority: 1
    *   backendTasks: ["Desarrollo del API REST para CRUD de Carreras.", "Asociación de carrera con facultad en la base de datos.", "Validación de unicidad de código/nombre de carrera por facultad."]
    *   frontendTasks: ["Diseño e implementación de la interfaz para listar carreras.", "Formularios para crear/editar carreras con selector de facultad.", "Integración con el API de Carreras."]
*   **HU: Gestionar Criterios EUR-ACE (CRUD)**
    *   Como: Miembro del CEI
    *   Quiero: crear, leer, actualizar y eliminar los criterios de acreditación EUR-ACE
    *   Para: definir los estándares de calidad del sistema.
    *   acceptanceCriteria: ["Se puede crear un nuevo criterio EUR-ACE con código y descripción.", "Se puede ver una lista de todos los criterios EUR-ACE.", "Se puede modificar un criterio EUR-ACE existente.", "Se puede eliminar un criterio EUR-ACE si no tiene relaciones activas con RA."]
    *   storyPoints: 5
    *   priority: 1
    *   backendTasks: ["Desarrollo del API REST para CRUD de Criterios EUR-ACE.", "Validación de unicidad de código EUR-ACE.", "Implementación de lógica para verificar dependencias antes de eliminar."]
    *   frontendTasks: ["Interfaz para listar criterios EUR-ACE.", "Formularios para crear/editar criterios EUR-ACE.", "Integración con el API de Criterios EUR-ACE."]
*   **HU: Login y Gestión de Sesión**
    *   Como: Usuario del sistema
    *   Quiero: acceder al sistema de forma segura con mi usuario y contraseña
    *   Para: realizar las acciones correspondientes a mi rol.
    *   acceptanceCriteria: ["El usuario puede iniciar sesión con credenciales válidas.", "El sistema redirige al usuario a la vista inicial de su rol.", "La sesión permanece activa por un tiempo definido.", "El usuario puede cerrar sesión de forma segura."]
    *   storyPoints: 3
    *   priority: 1
    *   backendTasks: ["Implementación de autenticación JWT/OAuth.", "Gestión de sesiones de usuario.", "Protección de rutas por roles."]
    *   frontendTasks: ["Diseño e implementación de la pantalla de login.", "Integración de la lógica de autenticación en la aplicación.", "Manejo de estados de sesión de usuario."]
*   **HU: Asignar Roles a Usuarios**
    *   Como: DGIP
    *   Quiero: asignar roles (Coordinador, Autoridad, CEI) a los profesores registrados en el sistema
    *   Para: controlar los permisos de acceso y las funcionalidades que cada usuario puede realizar.
    *   acceptanceCriteria: ["El DGIP puede ver una lista de profesores existentes.", "El DGIP puede seleccionar un profesor y asignarle uno o varios roles (ej. 'Coordinador', 'Autoridad', 'CEI').", "Los roles asignados se reflejan en los permisos del usuario al iniciar sesión.", "Se puede modificar o revocar un rol a un profesor."]
    *   storyPoints: 5
    *   priority: 1
    *   backendTasks: ["Desarrollo de API para gestionar usuarios y sus roles.", "Lógica para asociar roles a un usuario.", "Validación de permisos del DGIP para esta acción."]
    *   frontendTasks: ["Interfaz para listar usuarios/profesores con sus roles actuales.", "Componente para asignar/modificar roles a usuarios.", "Integración con el API de gestión de roles."]
**Dependencias:** Ninguna interna en este sprint. PBIs de sprints posteriores dependen de esta base.

---

## Sprint 2: (Día 6 – Día 10)
**Objetivo:** Habilitar a los Coordinadores para gestionar los Resultados de Aprendizaje de Asignatura (RAA), Resultados de Aprendizaje de Carrera (RA) y Objetivos de Perfil Profesional (OPP) para sus carreras.
**Valor Comercial:** Los coordinadores pueden empezar a poblar los datos curriculares centrales de sus carreras, información directamente evaluada en la acreditación EUR-ACE.
**PBI:**
*   **HU: Gestionar RAA de una Asignatura (CRUD)**
    *   Como: Coordinador
    *   Quiero: crear, leer, actualizar y eliminar los resultados de aprendizaje de las asignaturas de mi carrera
    *   Para: registrar los objetivos específicos de cada curso.
    *   acceptanceCriteria: ["Se puede crear un RAA para una asignatura específica, seleccionando su tipo (conocimiento, destrezas, valores).", "Se puede ver una lista de RAA para una asignatura.", "Se puede modificar un RAA existente.", "Se puede eliminar un RAA si no tiene relaciones de aporte con RA."]
    *   storyPoints: 5
    *   priority: 1
    *   backendTasks: ["API CRUD para RAA, asociando a Asignatura.", "Validación de unicidad de RAA por asignatura.", "Control de acceso para Coordinador de carrera."]
    *   frontendTasks: ["Interfaz para listar RAA por asignatura.", "Formularios para crear/editar RAA.", "Integración con API de RAA."]
*   **HU: Gestionar RA de una Carrera (CRUD)**
    *   Como: Coordinador
    *   Quiero: crear, leer, actualizar y eliminar los resultados de aprendizaje de mi carrera
    *   Para: definir los perfiles de egreso generales y específicos.
    *   acceptanceCriteria: ["Se puede crear un RA (general o específico) para mi carrera.", "Se puede ver una lista de RA de mi carrera.", "Se puede modificar un RA existente.", "Se puede eliminar un RA si no tiene relaciones de aporte con RAA, OPP o EUR-ACE."]
    *   storyPoints: 5
    *   priority: 1
    *   backendTasks: ["API CRUD para RA, asociando a Carrera.", "Validación de unicidad de RA por carrera.", "Control de acceso para Coordinador de carrera."]
    *   frontendTasks: ["Interfaz para listar RA por carrera.", "Formularios para crear/editar RA.", "Integración con API de RA."]
*   **HU: Gestionar OPP de una Carrera (CRUD)**
    *   Como: Coordinador
    *   Quiero: crear, leer, actualizar y eliminar los objetivos de perfil profesional de mi carrera
    *   Para: establecer las expectativas del desempeño profesional de los egresados.
    *   acceptanceCriteria: ["Se puede crear un OPP para mi carrera con código y descripción.", "Se puede ver una lista de OPP de mi carrera.", "Se puede modificar un OPP existente.", "Se puede eliminar un OPP si no tiene relaciones de aporte con RA."]
    *   storyPoints: 5
    *   priority: 1
    *   backendTasks: ["API CRUD para OPP, asociando a Carrera.", "Validación de unicidad de código OPP por carrera.", "Control de acceso para Coordinador de carrera."]
    *   frontendTasks: ["Interfaz para listar OPP por carrera.", "Formularios para crear/editar OPP.", "Integración con API de OPP."]
*   **HU: Filtrar RAA**
    *   Como: Coordinador
    *   Quiero: buscar un RAA de una lista mediante una palabra clave
    *   Para: encontrar rápidamente un resultado de aprendizaje específico.
    *   acceptanceCriteria: ["Existe un campo de búsqueda en la lista de RAA.", "Al introducir texto, la lista se filtra dinámicamente o al presionar Enter.", "Los resultados incluyen coincidencias parciales en nombre o descripción del RAA."]
    *   storyPoints: 1
    *   priority: 2
    *   backendTasks: ["Modificar API de RAA para aceptar parámetros de búsqueda.", "Optimizar consultas para filtrado por palabra clave."]
    *   frontendTasks: ["Implementar campo de búsqueda en la interfaz de RAA.", "Lógica para enviar la consulta al backend y actualizar la lista."]
*   **HU: Listar los RA**
    *   Como: Coordinador
    *   Quiero: listar los RA de cada asignatura
    *   Para: tener una visión global de los resultados de aprendizaje por materia.
    *   acceptanceCriteria: ["Se muestra una lista de los RA, agrupados por asignatura.", "Cada RA muestra su código y descripción.", "La lista puede ser filtrada por asignatura."]
    *   storyPoints: 1
    *   priority: 2
    *   backendTasks: ["Asegurar que la API de RA puede filtrar por asignatura (o carrera)."]
    *   frontendTasks: ["Componente de tabla para mostrar RA.", "Integración de filtro por asignatura (si aplica).", "Asegurar que la vista se carga con los RA de la carrera del coordinador."]
**Dependencias:** Depende de la configuración de Facultades, Carreras y Asignación de Roles (Sprint 1).

---

## Sprint 3: (Día 11 – Día 15)
**Objetivo:** Habilitar la definición y visualización de la relación de contribución entre RAA y RA.
**Valor Comercial:** Inicia el mapeo crucial de cómo el contenido de las asignaturas (RAA) contribuye a los resultados esperados de la carrera (RA), una parte fundamental de la auditoría EUR-ACE.
**PBI:**
*   **HU: Registrar nivel de aporte RAA a RA (CRUD)**
    *   Como: Coordinador
    *   Quiero: registrar el nivel de aporte de cada RAA de una asignatura a los RA de la carrera
    *   Para: comprender la contribución de los resultados de las asignaturas a los resultados de la carrera.
    *   acceptanceCriteria: ["Se puede seleccionar un RAA y un RA y asignar un nivel de aporte (Bajo, Medio, Alto).", "Se puede modificar el nivel de aporte de una relación existente.", "Se puede eliminar una relación de aporte RAA-RA.", "El sistema valida que no existan duplicados para la misma relación RAA-RA."]
    *   storyPoints: 5
    *   priority: 1
    *   backendTasks: ["API CRUD para gestionar la tabla de relaciones RAA-RA (incluyendo nivel de aporte)."]
    *   frontendTasks: ["Interfaz para crear/editar relaciones RAA-RA con selector de nivel de aporte.", "Integración con el API de relaciones RAA-RA."]
*   **HU: Visualizar relaciones RAA - RA**
    *   Como: Coordinador
    *   Quiero: ver una lista de todas las relaciones entre RAA y RA con sus niveles de aporte
    *   Para: revisar cómo las asignaturas contribuyen a los resultados de la carrera.
    *   acceptanceCriteria: ["Se muestra una tabla con RAA, RA y su nivel de aporte.", "La tabla puede ser filtrada por RAA, RA o asignatura."]
    *   storyPoints: 3
    *   priority: 1
    *   backendTasks: ["Modificar API para listar relaciones RAA-RA con filtros."]
    *   frontendTasks: ["Diseño e implementación de la tabla de visualización de relaciones RAA-RA.", "Implementación de filtros en la interfaz."]
*   **HU: Filtrar relaciones RAA - RA**
    *   Como: Coordinador
    *   Quiero: buscar una relación RAA-RA de una lista mediante una palabra clave
    *   Para: encontrar rápidamente una relación específica.
    *   acceptanceCriteria: ["Existe un campo de búsqueda en la lista de relaciones RAA-RA.", "La búsqueda filtra por RAA o RA."]
    *   storyPoints: 1
    *   priority: 2
    *   backendTasks: ["Mejorar API de listado de relaciones para soportar búsqueda textual."]
    *   frontendTasks: ["Implementar campo de búsqueda en la interfaz de relaciones RAA-RA.", "Lógica de actualización de la lista."]
*   **HU: Patrón wizard para creación de relación RAA a RA**
    *   Como: Coordinador
    *   Quiero: seguir un proceso guiado paso a paso para crear una relación entre RAA y RA
    *   Para: asegurar la correcta definición del aporte de los RAA a los RA.
    *   acceptanceCriteria: ["El usuario es guiado a través de pasos claros: seleccionar RAA, seleccionar RA, asignar nivel de aporte.", "Se muestran mensajes de validación en cada paso.", "Se permite retroceder o avanzar en los pasos.", "La relación se guarda exitosamente al finalizar el wizard."]
    *   storyPoints: 3
    *   priority: 2
    *   backendTasks: ["Reutilizar lógica de creación de relación RAA-RA del PBI anterior."]
    *   frontendTasks: ["Diseño e implementación del componente wizard para la creación de relaciones RAA-RA.", "Integración del wizard con el API."]
**Dependencias:** Depende de la gestión de RAA y RA (Sprint 2).

---

## Sprint 4: (Día 16 – Día 20)
**Objetivo:** Habilitar la definición y visualización de las relaciones de contribución de RA a OPP y de RA a los Criterios EUR-ACE.
**Valor Comercial:** Completa el ciclo de mapeo de resultados de aprendizaje, vinculando directamente los resultados de la carrera con los objetivos profesionales y los estándares EUR-ACE, habilitando la evaluación de cumplimiento.
**PBI:**
*   **HU: Establecer relación RA con OPP (CRUD, nivel de aporte)**
    *   Como: Coordinador
    *   Quiero: registrar el nivel de aporte de cada RA de la carrera a los OPP
    *   Para: evaluar cómo los resultados de aprendizaje contribuyen al perfil profesional.
    *   acceptanceCriteria: ["Se puede seleccionar un RA y un OPP y asignar un nivel de aporte (Bajo, Medio, Alto).", "Se puede modificar el nivel de aporte de una relación RA-OPP existente.", "Se puede eliminar una relación RA-OPP.", "El sistema valida que no existan duplicados para la misma relación RA-OPP."]
    *   storyPoints: 5
    *   priority: 1
    *   backendTasks: ["API CRUD para gestionar la tabla de relaciones RA-OPP (incluyendo nivel de aporte)."]
    *   frontendTasks: ["Interfaz para crear/editar relaciones RA-OPP con selector de nivel de aporte.", "Integración con el API de relaciones RA-OPP."]
*   **HU: Establecer relación RA con criterios EUR-ACE (CRUD, nivel de aporte)**
    *   Como: Coordinador
    *   Quiero: registrar el nivel de aporte de cada RA de la carrera a los criterios EUR-ACE
    *   Para: verificar el cumplimiento de los estándares de acreditación.
    *   acceptanceCriteria: ["Se puede seleccionar un RA y un criterio EUR-ACE y asignar un nivel de aporte (Bajo, Medio, Alto).", "Se puede modificar el nivel de aporte de una relación RA-EUR-ACE existente.", "Se puede eliminar una relación RA-EUR-ACE.", "El sistema valida que no existan duplicados para la misma relación RA-EUR-ACE."]
    *   storyPoints: 5
    *   priority: 1
    *   backendTasks: ["API CRUD para gestionar la tabla de relaciones RA-EUR-ACE (incluyendo nivel de aporte)."]
    *   frontendTasks: ["Interfaz para crear/editar relaciones RA-EUR-ACE con selector de nivel de aporte.", "Integración con el API de relaciones RA-EUR-ACE."]
*   **HU: Visualizar relaciones RA - EURACE**
    *   Como: Coordinador
    *   Quiero: ver todas las relaciones entre RA y criterios EUR-ACE con sus niveles de aporte
    *   Para: entender la alineación de la carrera con los estándares de acreditación.
    *   acceptanceCriteria: ["Se muestra una tabla con RA, criterios EUR-ACE y su nivel de aporte.", "La tabla puede ser filtrada por RA o criterio EUR-ACE."]
    *   storyPoints: 3
    *   priority: 1
    *   backendTasks: ["Modificar API para listar relaciones RA-EUR-ACE con filtros."]
    *   frontendTasks: ["Diseño e implementación de la tabla de visualización de relaciones RA-EUR-ACE.", "Implementación de filtros en la interfaz."]
*   **HU: Patrón wizard para creación de relación RA a EUR-ACE**
    *   Como: Coordinador
    *   Quiero: seguir un proceso guiado paso a paso para crear una relación entre RA y criterios EUR-ACE
    *   Para: validar el aporte de los RA a los criterios EUR-ACE de manera estructurada.
    *   acceptanceCriteria: ["El usuario es guiado a través de pasos claros: seleccionar RA, seleccionar criterio EUR-ACE, asignar nivel de aporte.", "Se muestran mensajes de validación en cada paso.", "Se permite retroceder o avanzar en los pasos.", "La relación se guarda exitosamente al finalizar el wizard."]
    *   storyPoints: 3
    *   priority: 2
    *   backendTasks: ["Reutilizar lógica de creación de relación RA-EUR-ACE del PBI anterior."]
    *   frontendTasks: ["Diseño e implementación del componente wizard para la creación de relaciones RA-EUR-ACE.", "Integración del wizard con el API."]
**Dependencias:** Depende de la gestión de RA, OPP y Criterios EUR-ACE (Sprints 1 y 2).

---

## Sprint 5: (Día 21 – Día 25)
**Objetivo:** Proporcionar una vista consolidada de los mapeos EUR-ACE y habilitar la visualización del PEA por parte de los profesores.
**Valor Comercial:** Ofrece una primera visión de alto nivel del cumplimiento EUR-ACE para los evaluadores y permite a los profesores consultar la información relevante de sus asignaturas, mejorando la colaboración y transparencia.
**PBI:**
*   **HU: Visualizar reporte consolidado de cumplimiento RA-EUR-ACE (simple)**
    *   Como: Miembro del CEI o DGIP
    *   Quiero: ver un reporte simple que muestre la alineación de los RA de una carrera con los criterios EUR-ACE
    *   Para: evaluar el estado inicial de cumplimiento de la acreditación.
    *   acceptanceCriteria: ["Se puede seleccionar una carrera y ver los criterios EUR-ACE y los RA que aportan a ellos.", "El reporte muestra el nivel de aporte de cada RA a cada criterio EUR-ACE.", "La información se presenta de forma tabular o en un dashboard básico.", "El reporte solo muestra la información configurada previamente."]
    *   storyPoints: 8
    *   priority: 1
    *   backendTasks: ["Desarrollo de API para obtener datos consolidados de relaciones RA-EUR-ACE.", "Optimización de consultas para reportes."]
    *   frontendTasks: ["Diseño e implementación de la interfaz del reporte (tabla/dashboard simple)."]
*   **HU: Visualizar PEA de una Asignatura (solo lectura)**
    *   Como: Profesor
    *   Quiero: ver el programa de estudios académicos (PEA) de mis asignaturas
    *   Para: consultar la información relevante de mis cursos.
    *   acceptanceCriteria: ["El profesor puede acceder a la vista de los PEA de las asignaturas que tiene asignadas.", "Se muestra la Unidad Académica, Carrera, Unidad de organización curricular, Nombre, Código y Créditos de la asignatura.", "Se muestran los RAA asociados a la asignatura.", "La información es de solo lectura."]
    *   storyPoints: 3
    *   priority: 2
    *   backendTasks: ["API para obtener los detalles de un PEA por asignatura.", "Control de acceso para Profesores."]
    *   frontendTasks: ["Interfaz para visualizar el PEA de una asignatura.", "Componente para listar los RAA dentro de la vista del PEA."]
*   **HU: Paginar criterios EUR-ACE por grupos**
    *   Como: Coordinador o Miembro del CEI
    *   Quiero: listar los criterios EUR-ACE agrupados por categorías o dominios
    *   Para: facilitar su revisión y comprensión.
    *   acceptanceCriteria: ["La lista de criterios EUR-ACE se puede visualizar por grupos (ej. A, B, C).", "Cada grupo muestra los criterios correspondientes.", "La paginación funciona correctamente dentro de cada grupo o para la lista completa."]
    *   storyPoints: 3
    *   priority: 2
    *   backendTasks: ["Modificar API de Criterios EUR-ACE para incluir agrupamiento/paginación."]
    *   frontendTasks: ["Implementar interfaz de usuario para mostrar criterios agrupados y paginados."]
**Dependencias:** Depende de todas las relaciones establecidas en Sprints 3 y 4. La visualización del PEA depende de la gestión de RAA (Sprint 2).

<!-- --- -->
