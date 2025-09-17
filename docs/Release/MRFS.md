# PROMPT

Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

Te proporciono a continuación la planificación de mi producto.

Planificación del producto:

**Visión del producto**
Para la Escuela Politécnica Nacional, que necesita acreditar que sus programas de ingeniería cumplen con los objetivos del sello EUR-ACE, nuestro Sistema de Gestión de Acreditación EUR-ACE es una plataforma de gestión académica que verifica el cumplimiento de los criterios EUR-ACE.
A diferencia de procesos manuales y sistemas genéricos, nuestro producto automatiza la trazabilidad de los estándares de acreditación.

**Product backlog de alto nivel (Épicas):**

Gestión de organización académica
Como autoridad de la EPN
Quiero registrar facultades, carreras, materias y profesores
Para mantener actualizada la estructura académica para la acreditación.
Gestión de PEA
Como profesor
Quiero ingresar información del PEA (unidad académica, créditos, código, etc.)
Para disponer de datos estandarizados de cada asignatura.
Gestión de RAA
Como profesor
Quiero registrar resultados de aprendizaje de asignatura (conocimientos, destrezas, actitudes)
Para evidenciar la contribución de cada materia al perfil de egreso.
Gestión de RA
Como coordinador de carrera
Quiero definir resultados de aprendizaje de carrera
Para establecer el perfil de egreso de manera formalizada.
Gestión de OPP
Como coordinador de carrera
Quiero registrar objetivos de perfil profesional
Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.
Gestión de objetivos EUR-ACE
Como miembro del CEI
Quiero registrar objetivos EUR-ACE
Para evaluar la conformidad de la carrera con estándares internacionales.
Definición de relaciones
Como coordinador de carrera
Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE
Para garantizar trazabilidad académica hacia los criterios de acreditación.
Generación de reportes
Como DGIP
Quiero generar reportes de cumplimiento de criterios EUR-ACE
Para disponer de evidencias verificables en la acreditación.
Control de acceso
Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI)
Quiero acceder al sistema con permisos según rol
Para asegurar uso correcto de la información académica.

---

# RESPUESTA

Perfecto 🚀. Te presento un conjunto de MRFs (Minimum Releasable Features) expresados en formato de Historias de Usuario (HU), asegurando que sean directas, independientes, sin mezclar funcionalidades y alineadas al objetivo de tu producto: garantizar trazabilidad y evidencias de acreditación EUR-ACE.

## Gestión de organización académica

HU1: Como autoridad de la EPN, quiero registrar facultades, para mantener actualizada la estructura académica.

HU2: Como autoridad de la EPN, quiero registrar carreras, para disponer de información formalizada de cada programa.

HU3: Como autoridad de la EPN, quiero registrar materias, para tener un catálogo estructurado de asignaturas.

HU4: Como autoridad de la EPN, quiero registrar profesores, para vincularlos a las materias de manera organizada.

## Gestión de PEA (Programa de Estudio de Asignatura)

HU5: Como profesor, quiero ingresar información del PEA con sus datos básicos (unidad académica, créditos, código), para asegurar consistencia en la gestión de asignaturas.

## Gestión de RAA (Resultados de Aprendizaje de Asignatura)

HU6: Como profesor, quiero registrar conocimientos de una asignatura, para evidenciar la contribución a competencias cognitivas.

HU7: Como profesor, quiero registrar destrezas de una asignatura, para evidenciar la contribución a competencias prácticas.

HU8: Como profesor, quiero registrar actitudes de una asignatura, para evidenciar la contribución a competencias actitudinales.

## Gestión de RA (Resultados de Aprendizaje de Carrera)

HU9: Como coordinador de carrera, quiero definir resultados de aprendizaje de carrera, para formalizar el perfil de egreso.

## Gestión de OPP (Objetivos de Perfil Profesional)

HU10: Como coordinador de carrera, quiero registrar objetivos de perfil profesional, para alinear el perfil de egreso con competencias de la profesión de ingeniería.

## Gestión de objetivos EUR-ACE

HU11: Como miembro del CEI, quiero registrar objetivos EUR-ACE, para disponer de los criterios internacionales de acreditación.

## Definición de relaciones

HU12: Como coordinador de carrera, quiero relacionar RAA con RA, para asegurar trazabilidad de asignaturas hacia el perfil de egreso.

HU13: Como coordinador de carrera, quiero relacionar RA con OPP, para garantizar alineación del perfil de egreso con la profesión.

HU14: Como coordinador de carrera, quiero relacionar OPP con objetivos EUR-ACE, para evidenciar el cumplimiento de estándares internacionales.

## Generación de reportes

HU15: Como DGIP, quiero generar reportes de cumplimiento de criterios EUR-ACE, para contar con evidencias verificables en los procesos de acreditación.

## Control de acceso

HU16: Como usuario de la EPN, quiero acceder al sistema con autenticación, para garantizar seguridad en el ingreso.

HU17: Como usuario de la EPN, quiero contar con permisos diferenciados según rol, para asegurar el uso correcto de la información académica.

✅ Con este set de 17 HUs tienes un MVP completo y modular, donde cada HU es independiente y entrega valor directo al objetivo de trazabilidad y acreditación EUR-ACE.

---

# PROMPT

pero dame las mrf las minimas para cumplir con mi vision

---

# RESPUESTA

Muy buena precisión 👌. La clave está en distinguir entre todas las funcionalidades deseables y las mínimas indispensables (MRF) que permiten cumplir con la visión del producto:

“Un sistema que verifica el cumplimiento de los criterios EUR-ACE automatizando la trazabilidad de los estándares de acreditación”.

## MRF mínimas en formato HU

### 1. Estructura académica básica

HU1: Como autoridad de la EPN, quiero registrar carreras, para disponer de la unidad base sobre la cual se verificará la acreditación.

HU2: Como autoridad de la EPN, quiero registrar materias, para contar con la lista de asignaturas que componen una carrera.

### 2. Información de asignaturas

HU3: Como profesor, quiero ingresar información del PEA de cada materia (código, créditos, unidad académica), para estandarizar los datos de asignaturas que serán evaluadas.

### 3. Resultados de aprendizaje

HU4: Como profesor, quiero registrar resultados de aprendizaje de asignatura (RAA), para evidenciar la contribución de la materia al perfil de egreso.

HU5: Como coordinador de carrera, quiero definir resultados de aprendizaje de carrera (RA), para establecer formalmente el perfil de egreso.

### 4. Objetivos de acreditación

HU6: Como miembro del CEI, quiero registrar objetivos EUR-ACE, para disponer de los criterios internacionales de acreditación a verificar.

### 5. Trazabilidad académica

HU7: Como coordinador de carrera, quiero relacionar RAA con RA, para asegurar trazabilidad de asignaturas hacia el perfil de egreso.

HU8: Como coordinador de carrera, quiero relacionar RA con objetivos EUR-ACE, para evidenciar el cumplimiento de estándares internacionales.

### 6. Evidencias de cumplimiento

HU9: Como DGIP, quiero generar reportes de cumplimiento de criterios EUR-ACE, para contar con evidencias verificables en el proceso de acreditación.


# MRFs Principales

---

## Prompt

Actúa como experto de análisis de épicas para identificar los MRFs principales.

Te proporciono a continuación la planificación de mi producto.

Actúa como un experto analista en descubrir funcionalidades principales para cumplir con el objetivo de mi producto. Nada más. Evita usar "y" en las HUs ya que esto une dos funcionalidades.
Dame en formato de HUs: Como quiero y para.

**Planificación del producto:**

**Visión del producto**
Para la Escuela Politécnica Nacional, que necesita acreditar que sus programas de ingeniería cumplen con los objetivos del sello EUR-ACE, nuestro Sistema de Gestión de Acreditación EUR-ACE es una plataforma de gestión académica que verifica el cumplimiento de los criterios EUR-ACE.
A diferencia de procesos manuales y sistemas genéricos, nuestro producto automatiza la trazabilidad de los estándares de acreditación.

**Product Backlog de Alto Nivel (Épicas) revisado:**

- Gestión de organización académica
	- Como autoridad de la EPN
		- Quiero registrar facultades, carreras, materias y profesores
		- Para mantener actualizada la estructura académica para la acreditación.
- Gestión de PEA
	- Como profesor
		- Quiero ingresar información del PEA (unidad académica, créditos, código, etc.)
		- Para disponer de datos estandarizados de cada asignatura.
- Gestión de RAA
	- Como profesor
		- Quiero registrar resultados de aprendizaje de asignatura (conocimientos, destrezas, actitudes)
		- Para evidenciar la contribución de cada materia al perfil de egreso.
- Gestión de RA
	- Como coordinador de carrera
		- Quiero definir resultados de aprendizaje de carrera
		- Para establecer el perfil de egreso de manera formalizada.
- Gestión de OPP
	- Como coordinador de carrera
		- Quiero registrar objetivos de perfil profesional
		- Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.
- Gestión de objetivos EUR-ACE
	- Como miembro del CEI
		- Quiero registrar objetivos EUR-ACE
		- Para evaluar la conformidad de la carrera con estándares internacionales.
- Definición de relaciones
	- Como coordinador de carrera
		- Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE
		- Para garantizar trazabilidad académica hacia los criterios de acreditación.
- Generación de reportes
	- Como DGIP
		- Quiero generar reportes de cumplimiento de criterios EUR-ACE
		- Para disponer de evidencias verificables en la acreditación.
- Control de acceso
	- Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI)
		- Quiero acceder al sistema con permisos según rol
		- Para asegurar uso correcto de la información académica.

---

## Respuesta

Perfecto. He revisado tu planificación y voy a identificar los MRFs (Minimum Required Features) traducidos en historias de usuario (HU) bajo la estructura que pediste:
"Como quiero para", evitando conectores como "y" que mezclen funcionalidades.

### Conjunto de MRFs indispensables (en formato de HU)

#### Gestión de organización académica

Como autoridad de la EPN
Quiero registrar facultades
Para mantener la estructura académica actualizada.

Como autoridad de la EPN
Quiero registrar carreras
Para reflejar correctamente la oferta académica.

Como autoridad de la EPN
Quiero registrar materias
Para disponer de la malla curricular organizada.

Como autoridad de la EPN
Quiero registrar profesores
Para asociarlos a las asignaturas en los procesos de acreditación.

#### Gestión de PEA (Plan de Estudios de Asignatura)

Como profesor
Quiero registrar la información del PEA con sus atributos académicos
Para disponer de datos estandarizados por asignatura.

#### Gestión de RAA (Resultados de Aprendizaje de Asignatura)

Como profesor
Quiero registrar resultados de aprendizaje de cada asignatura
Para evidenciar su contribución al perfil de egreso.

#### Gestión de RA (Resultados de Aprendizaje de Carrera)

Como coordinador de carrera
Quiero definir resultados de aprendizaje de carrera
Para establecer el perfil de egreso de manera formalizada.

#### Gestión de OPP (Objetivos del Perfil Profesional)

Como coordinador de carrera
Quiero registrar objetivos de perfil profesional
Para alinear el perfil de egreso con las competencias de ingeniería.

#### Gestión de objetivos EUR-ACE

Como miembro del CEI
Quiero registrar objetivos EUR-ACE
Para evaluar la conformidad de la carrera con estándares internacionales.

#### Definición de relaciones académicas

Como coordinador de carrera
Quiero relacionar RAA con RA
Para garantizar trazabilidad en el diseño académico.

Como coordinador de carrera
Quiero relacionar RA con OPP
Para evidenciar consistencia con la formación profesional.

Como coordinador de carrera
Quiero relacionar OPP con objetivos EUR-ACE
Para demostrar cumplimiento de criterios internacionales.

#### Generación de reportes

Como DGIP
Quiero generar reportes de cumplimiento de criterios EUR-ACE
Para disponer de evidencias verificables en la acreditación.

#### Control de acceso

Como usuario de la EPN
Quiero autenticarme con mi rol específico
Para acceder únicamente a las funcionalidades permitidas.

# Prompt: Identificación de MRFs principales

Actúa como experto de análisis de épicas para identificar los MRFs principales.

Planificación del producto:
**Visión del producto**
Para la Escuela Politécnica Nacional, que necesita acreditar que sus programas de ingeniería cumplen con los objetivos del sello EUR-ACE, nuestro Sistema de Gestión de Acreditación EUR-ACE es una plataforma de gestión académica que verifica el cumplimiento de los criterios EUR-ACE.
A diferencia de procesos manuales y sistemas genéricos, nuestro producto automatiza la trazabilidad de los estándares de acreditación.

**MRFs indispensables (en formato de HU)**

## Gestión de organización académica

Como autoridad de la EPN
Quiero registrar facultades
Para mantener la estructura académica actualizada.

Como autoridad de la EPN
Quiero registrar carreras
Para reflejar correctamente la oferta académica.

Como autoridad de la EPN
Quiero registrar materias
Para disponer de la malla curricular organizada.

Como autoridad de la EPN
Quiero registrar profesores
Para asociarlos a las asignaturas en los procesos de acreditación.

## Gestión de PEA (Plan de Estudios de Asignatura)

Como profesor
Quiero registrar la información del PEA con sus atributos académicos
Para disponer de datos estandarizados por asignatura.

## Gestión de RAA (Resultados de Aprendizaje de Asignatura)

Como profesor
Quiero registrar resultados de aprendizaje de cada asignatura
Para evidenciar su contribución al perfil de egreso.

## Gestión de RA (Resultados de Aprendizaje de Carrera)

Como coordinador de carrera
Quiero definir resultados de aprendizaje de carrera
Para establecer el perfil de egreso de manera formalizada.

## Gestión de OPP (Objetivos del Perfil Profesional)

Como coordinador de carrera
Quiero registrar objetivos de perfil profesional
Para alinear el perfil de egreso con las competencias de ingeniería.

## Gestión de objetivos EUR-ACE

Como miembro del CEI
Quiero registrar objetivos EUR-ACE
Para evaluar la conformidad de la carrera con estándares internacionales.

## Definición de relaciones académicas

Como coordinador de carrera
Quiero relacionar RAA con RA
Para garantizar trazabilidad en el diseño académico.

Como coordinador de carrera
Quiero relacionar RA con OPP
Para evidenciar consistencia con la formación profesional.

Como coordinador de carrera
Quiero relacionar OPP con objetivos EUR-ACE
Para demostrar cumplimiento de criterios internacionales.

## Generación de reportes

Como DGIP
Quiero generar reportes de cumplimiento de criterios EUR-ACE
Para disponer de evidencias verificables en la acreditación.

## Control de acceso

Como usuario de la EPN
Quiero autenticarme con mi rol específico
Para acceder únicamente a las funcionalidades permitidas.
