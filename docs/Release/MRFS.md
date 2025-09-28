.
# PROMPT
### ROL 
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

Te proporciono a continuación la planificación de mi producto.

### Contexto 
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

### Accion 
crear el conjunto de mrfs 
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
### Rol
Actúa como experto de análisis de épicas para identificar los MRFs principales.

### Contexto 
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

### Accion 
Generame el conjunto de mrfs
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

# PROMPT FINAL
### Rol
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

### contexto 
*Visión del producto*: Para la Escuela Politécnica Nacional, que necesita acreditar que sus programas de ingeniería cumplen con los objetivos del sello EUR-ACE, nuestro Sistema de Gestión de Acreditación EUR-ACE es una plataforma de gestión académica que verifica el cumplimiento de los criterios EUR-ACE.

### Obejtivo 
Necesito que me ayudes a definir un conjunto de MRFs para mi producto de software a desarrollar. Un MRF es una funcionalidad suficientemente completa y útil como para ser entregada al usuario final de forma independiente. No es solo una parte del producto, sino algo que:

✅ Aporta valor real al cliente
✅ Está lista para ser desplegada o publicada
✅ Cumple con los criterios de calidad y definición de terminado (Definition of Done)


### Accion
Crea las MRFs únicamente necesarias que me aportan a cumplir con mi visión de producto. Dame en formato de HUs independientes, cada una debe tener un título.

---

# RESPUESTA FINAL

📌 **MRFs del Sistema de Gestión de Acreditación EUR-ACE**

**1. Gestión de organización académica**

Como autoridad de la EPN
Quiero registrar y administrar facultades, carreras, materias y profesores
Para estructurar la base organizativa que sustenta la acreditación EUR-ACE.

**2. Gestión de PEAs y resultados de aprendizaje de asignaturas (RAA)**

Como profesor
Quiero ingresar y actualizar los PEAs y los resultados de aprendizaje de las asignaturas (RAA)
Para evidenciar la contribución de cada materia al perfil de egreso de la carrera.

**3. Gestión de resultados de aprendizaje de carrera (RA)**

Como coordinador de carrera
Quiero definir y mantener los resultados de aprendizaje de la carrera
Para establecer de manera formalizada el perfil de egreso de los estudiantes.

**4. Gestión de objetivos de perfil profesional (OPP)**

Como coordinador de carrera
Quiero registrar los objetivos de perfil profesional
Para alinear el perfil de egreso con las competencias de la profesión de ingeniería.

**5. Gestión de objetivos EUR-ACE**

Como miembro del CEI
Quiero registrar y consultar los objetivos EUR-ACE
Para vincularlos con los resultados de aprendizaje de las carreras y evaluar el cumplimiento de estándares internacionales.

**6. Definición de relaciones académicas**

Como coordinador de carrera
Quiero establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE
Para garantizar trazabilidad académica desde la asignatura hasta los criterios de acreditación.

**7. Generación de reportes de cumplimiento EUR-ACE**

Como DGIP
Quiero generar reportes automáticos del grado de cumplimiento de los criterios EUR-ACE por facultad y carrera
Para presentar evidencias verificables a los evaluadores externos.

**8. Gestión de roles y accesos**

Como usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI)
Quiero acceder al sistema con permisos según mi rol
Para asegurar un uso controlado y seguro de la información de acreditación.

✅ Con estos 8 MRFs se cubre todo lo necesario para cumplir la visión del producto: desde estructurar la información académica hasta generar reportes verificables que demuestren el cumplimiento de los criterios EUR-ACE

## PROMPT 1

**Fecha:** 28 sept 2025, 03:09 a m. (UTC)

**Prompt:**

###ROL

Actua como un Product owner que es experto en gestión de productos de Software.

### objetivo 
Mi objetivo es definir las mrf principales para mi producto software a desarrollar .

## contexto 


MRF significa Características Mínimas Lanzables (Minimum Releasable Features). Este término se refiere al conjunto mínimo de características que deben estar presentes en un lanzamiento para que sea viable.

Propósito: Debe ser lo suficientemente útil para el cliente final como para que este lo quiera y esté dispuesto a pagar por él.

Enfoque: El MRF se compone de un conjunto de características que son consideradas de obligación (must-have features) para ese lanzamiento específico.




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


te proporciono las historias de usuario épicas y un ejemplo de como pasar de épicas a mrfs :


HU: EPIC: Gestión de la Estructura Académica Institucional
Como: Administrador del sistema Quiero: gestionar la estructura jerarquica academica de la EPN Para: representar fielmente la organización académica institucional Story Points: N/A Prioridad: N/A

HU: EPIC: Gestión de Usuarios, Roles y Permisos
Como: Administrador del sistema Quiero: asignar roles específicos a cada tipo de usuario Para: asegurar la correcta operación y acceso a la plataforma Story Points: N/A Prioridad: N/A

HU: EPIC: Definición del Perfil de Egreso (OPP) de Carrera
Como: Coordinador de Carrera Quiero: registrar el perfil de egreso (OPP) de mi carrera Para: establecer la identidad del futuro profesional de la EPN Story Points: N/A Prioridad: N/A

HU: EPIC: Gestión de los Resultados de Aprendizaje (RA) de Carrera
Como: Coordinador de Carrera Quiero: definir los resultados de aprendizaje (RA) para mi carrera Para: describir las competencias esperadas de los estudiantes al egresar Story Points: N/A Prioridad: N/A

HU: EPIC: Administración de Programas de Estudio por Asignatura (PEA)
Como: Profesor Quiero: ingresar el programa de estudio de mi asignatura Para: documentar sus resultados de aprendizaje (RAA) su contenido oficial Story Points: N/A Prioridad: N/A

HU: EPIC: Mapeo de Resultados de Asignatura (RAA) a Carrera (RA)
Como: Coordinador de Carrera Quiero: establecer la contribución de los RAA a los RA de mi carrera Para: evaluar el aporte de cada asignatura al perfil global del egresado Story Points: N/A Prioridad: N/A

HU: EPIC: Alineación de Resultados de Aprendizaje (RA) con el Perfil Profesional (OPP)
Como: Coordinador de Carrera Quiero: vincular los resultados de aprendizaje de carrera con los OPP Para: asegurar la coherencia del diseño curricular institucional Story Points: N/A Prioridad: N/A

HU: EPIC: Configuración de los Estándares de Acreditación EUR-ACE
Como: Administrador del sistema Quiero: cargar los criterios de calidad definidos por EUR-ACE Para: tener un marco de referencia oficial dentro del sistema Story Points: N/A Prioridad: N/A

HU: EPIC: Verificación del Cumplimiento con Estándares EUR-ACE
Como: Coordinador de Carrera Quiero: comparar los RA de carrera con los objetivos EUR-ACE Para: verificar el cumplimiento para la acreditación Story Points: N/A Prioridad: N/A

HU: EPIC: Generación de Reportes para la Acreditación
Como: Responsable de Acreditación Quiero: obtener informes automáticos de cumplimiento Para: facilitar la presentación de evidencias a la agencia acreditadora Story Points: N/A Prioridad: N/A


Ejemplo 1: E-commerce (Optimización del proceso de compra)
ÉPICA (Objetivo Estratégico General):

Épica	Descripción
Como usuario habitual, quiero una experiencia de compra sin fricciones, para reducir el tiempo de checkout y completar mis pedidos rápidamente.	Esta es una iniciativa grande que involucra guardar datos, optimizar la interfaz y mejorar la seguridad. Se entregará a lo largo de varios sprints y lanzamientos.

Exportar a Hojas de cálculo
MRF (Características Mínimas Lanzables):

Para el Primer Lanzamiento Comercializable de esta Épica, el equipo define el MRF como: "Permitir el pago recurrente con datos guardados de forma segura."

MRF (Conjunto Mínimo Lanzable)	Valor Clave Entregado
Gestión Básica de la Cuenta y Pago Rápido.	Permite a los clientes recurrentes realizar compras en menos pasos, abordando directamente el problema de la "fricción" en el checkout.



ACCION:

Crea el conjunto de mrfs indispensables para mi producto software a desarrollar

**Respuesta:**

¡Excelente! Como tu Product Owner experto, entiendo perfectamente la importancia de definir las Características Mínimas Lanzables (MRF) para garantizar que nuestro primer lanzamiento entregue valor real y esté enfocado en el objetivo primordial: facilitar la acreditación EUR-ACE de la EPN.

He revisado cuidadosamente las historias de usuario épicas y el contexto para identificar ese "conjunto de obligaciones" que conformará nuestro primer producto viable y valioso.

El **propósito principal** de este primer lanzamiento es: **Proveer a la EPN las capacidades esenciales para digitalizar su estructura curricular y realizar una autoevaluación inicial de la alineación de sus carreras con los estándares EUR-ACE.**

Aquí te presento el conjunto de MRFs indispensables para nuestro producto software:

---

**MRF (Características Mínimas Lanzables) - Lanzamiento "Base de Acreditación EUR-ACE"**

Este primer lanzamiento se enfoca en habilitar la estructuración fundamental de la EPN dentro del sistema, la definición de su marco curricular principal, la incorporación de los estándares EUR-ACE, y la funcionalidad crítica de mapeo y verificación de la alineación, lo que permitirá a las carreras comenzar su proceso de autoevaluación para la acreditación.

**1. MRF: Configuración Esencial de la Estructura Académica y Acceso de Usuarios Clave**

*   **Descripción:** Este MRF permite al administrador del sistema establecer la jerarquía académica de la EPN (Facultades, Departamentos, Carreras) y gestionar las cuentas de usuario básicas con roles específicos (Administrador, Coordinador de Carrera, Profesor).
*   **Valor Clave Entregado:** Crea el esqueleto digital de la EPN dentro de la plataforma y asegura que los usuarios clave puedan acceder de manera segura a sus respectivas áreas de trabajo, sentando las bases para toda la gestión curricular.
*   **Historias de Usuario Épicas Cubiertas:**
    *   *HU: EPIC: Gestión de la Estructura Académica Institucional*
    *   *HU: EPIC: Gestión de Usuarios, Roles y Permisos (en su alcance mínimo para los roles mencionados)*

**2. MRF: Definición y Mapeo del Currículo de Carrera Fundamental (OPP, RA, RAA)**

*   **Descripción:** Este MRF habilita a los Coordinadores de Carrera para ingresar y gestionar los Objetivos del Perfil Profesional (OPP) y los Resultados de Aprendizaje (RA) de sus respectivas carreras. Además, permite a los Profesores introducir los Resultados de Aprendizaje de Asignatura (RAA) y a los Coordinadores establecer y visualizar cómo estos RAA contribuyen a los RA de la carrera (niveles Bajo, Medio, Alto).
*   **Valor Clave Entregado:** Digitaliza los componentes esenciales del currículo de cada carrera y establece las interconexiones internas (RAA a RA, RA a OPP), que son fundamentales para demostrar la coherencia y el desglose de la formación.
*   **Historias de Usuario Épicas Cubiertas:**
    *   *HU: EPIC: Definición del Perfil de Egreso (OPP) de Carrera*
    *   *HU: EPIC: Gestión de los Resultados de Aprendizaje (RA) de Carrera*
    *   *HU: EPIC: Administración de Programas de Estudio por Asignatura (PEA) (solo la entrada y gestión de RAA)*
    *   *HU: EPIC: Mapeo de Resultados de Asignatura (RAA) a Carrera (RA)*
    *   *HU: EPIC: Alineación de Resultados de Aprendizaje (RA) con el Perfil Profesional (OPP) (la vinculación básica para mostrar coherencia)*

**3. MRF: Verificación de la Alineación con Estándares EUR-ACE y Visibilidad de Cumplimiento**

*   **Descripción:** Este MRF permite al administrador del sistema cargar y mantener los objetivos y criterios de calidad definidos por EUR-ACE. Posteriormente, habilita a los Coordinadores de Carrera para vincular sus Resultados de Aprendizaje (RA) directamente con estos objetivos EUR-ACE. Incluye una visualización o un reporte básico que muestra el grado de alineación para una carrera específica.
*   **Valor Clave Entregado:** Proporciona la funcionalidad central para que la EPN compare activamente su currículo con los requisitos de EUR-ACE. Ofrece una primera "instantánea" del cumplimiento, lo que es crucial para la autoevaluación, la identificación de brechas y la preparación inicial del proceso de acreditación.
*   **Historias de Usuario Épicas Cubiertas:**
    *   *HU: EPIC: Configuración de los Estándares de Acreditación EUR-ACE*
    *   *HU: EPIC: Verificación del Cumplimiento con Estándares EUR-ACE*
    *   *HU: EPIC: Generación de Reportes para la Acreditación (en su alcance mínimo, como una visualización interactiva del mapeo)*

---

Este conjunto de MRFs representa el producto mínimo más valioso que podemos lanzar para abordar la necesidad crítica de la EPN de iniciar y gestionar el proceso de acreditación EUR-ACE digitalmente. Cada MRF es interdependiente y contribuye directamente al objetivo general, asegurando que el esfuerzo de desarrollo inicial genere un impacto significativo.

<!-- --- -->

## PROMPT 2

**Fecha:** 28 sept 2025, 03:11 a m. (UTC)

**Prompt:**

###ROL

Actua como un Product owner que es experto en gestión de productos de Software.

### objetivo 
Mi objetivo es definir las mrf principales para mi producto software a desarrollar .

## contexto 


MRF significa Características Mínimas Lanzables (Minimum Releasable Features). Este término se refiere al conjunto mínimo de características que deben estar presentes en un lanzamiento para que sea viable.

Propósito: Debe ser lo suficientemente útil para el cliente final como para que este lo quiera y esté dispuesto a pagar por él.

Enfoque: El MRF se compone de un conjunto de características que son consideradas de obligación (must-have features) para ese lanzamiento específico.




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


te proporciono las historias de usuario épicas y un ejemplo de como pasar de épicas a mrfs :


HU: EPIC: Gestión de la Estructura Académica Institucional
Como: Administrador del sistema Quiero: gestionar la estructura jerarquica academica de la EPN Para: representar fielmente la organización académica institucional Story Points: N/A Prioridad: N/A

HU: EPIC: Gestión de Usuarios, Roles y Permisos
Como: Administrador del sistema Quiero: asignar roles específicos a cada tipo de usuario Para: asegurar la correcta operación y acceso a la plataforma Story Points: N/A Prioridad: N/A

HU: EPIC: Definición del Perfil de Egreso (OPP) de Carrera
Como: Coordinador de Carrera Quiero: registrar el perfil de egreso (OPP) de mi carrera Para: establecer la identidad del futuro profesional de la EPN Story Points: N/A Prioridad: N/A

HU: EPIC: Gestión de los Resultados de Aprendizaje (RA) de Carrera
Como: Coordinador de Carrera Quiero: definir los resultados de aprendizaje (RA) para mi carrera Para: describir las competencias esperadas de los estudiantes al egresar Story Points: N/A Prioridad: N/A

HU: EPIC: Administración de Programas de Estudio por Asignatura (PEA)
Como: Profesor Quiero: ingresar el programa de estudio de mi asignatura Para: documentar sus resultados de aprendizaje (RAA) su contenido oficial Story Points: N/A Prioridad: N/A

HU: EPIC: Mapeo de Resultados de Asignatura (RAA) a Carrera (RA)
Como: Coordinador de Carrera Quiero: establecer la contribución de los RAA a los RA de mi carrera Para: evaluar el aporte de cada asignatura al perfil global del egresado Story Points: N/A Prioridad: N/A

HU: EPIC: Alineación de Resultados de Aprendizaje (RA) con el Perfil Profesional (OPP)
Como: Coordinador de Carrera Quiero: vincular los resultados de aprendizaje de carrera con los OPP Para: asegurar la coherencia del diseño curricular institucional Story Points: N/A Prioridad: N/A

HU: EPIC: Configuración de los Estándares de Acreditación EUR-ACE
Como: Administrador del sistema Quiero: cargar los criterios de calidad definidos por EUR-ACE Para: tener un marco de referencia oficial dentro del sistema Story Points: N/A Prioridad: N/A

HU: EPIC: Verificación del Cumplimiento con Estándares EUR-ACE
Como: Coordinador de Carrera Quiero: comparar los RA de carrera con los objetivos EUR-ACE Para: verificar el cumplimiento para la acreditación Story Points: N/A Prioridad: N/A

HU: EPIC: Generación de Reportes para la Acreditación
Como: Responsable de Acreditación Quiero: obtener informes automáticos de cumplimiento Para: facilitar la presentación de evidencias a la agencia acreditadora Story Points: N/A Prioridad: N/A


Ejemplo 1: E-commerce (Optimización del proceso de compra)
ÉPICA (Objetivo Estratégico General):

Épica	Descripción
Como usuario habitual, quiero una experiencia de compra sin fricciones, para reducir el tiempo de checkout y completar mis pedidos rápidamente.	Esta es una iniciativa grande que involucra guardar datos, optimizar la interfaz y mejorar la seguridad. Se entregará a lo largo de varios sprints y lanzamientos.

Exportar a Hojas de cálculo
MRF (Características Mínimas Lanzables):

Para el Primer Lanzamiento Comercializable de esta Épica, el equipo define el MRF como: "Permitir el pago recurrente con datos guardados de forma segura."

MRF (Conjunto Mínimo Lanzable)	Valor Clave Entregado
Gestión Básica de la Cuenta y Pago Rápido.	Permite a los clientes recurrentes realizar compras en menos pasos, abordando directamente el problema de la "fricción" en el checkout.



ACCION:

Crea el conjunto de mrfs indispensables para mi producto software a desarrollar 

Formato de salida :

como quiero y para .

**Respuesta:**

¡Excelente! Como tu Product Owner, mi objetivo es asegurar que cada lanzamiento de nuestro software entregue valor tangible y nos acerque al objetivo de la acreditación EUR-ACE para la EPN.

He analizado a fondo el contexto y las historias de usuario épicas para destilar las Características Mínimas Lanzables (MRF) que considero indispensables para nuestro producto software en su primera iteración. El enfoque es proporcionar las herramientas esenciales para que la EPN pueda iniciar el proceso de digitalización curricular y la autoevaluación frente a los estándares EUR-ACE.

El **propósito** de este primer conjunto de MRFs es: **"Habilitar la gestión fundamental de la estructura académica y curricular de la EPN, permitiendo una verificación inicial de la alineación de sus Resultados de Aprendizaje con los criterios EUR-ACE."**

Aquí está el conjunto de MRFs indispensables, formulado en el formato solicitado:

---

**MRF 1: Configuración Básica de la EPN y Gestión de Accesos Clave**

*   **Como:** Administrador del sistema
*   **Quiero:** Gestionar la estructura jerárquica académica de la EPN (Facultades, Departamentos, Carreras) y asignar roles básicos (Administrador, Coordinador de Carrera, Profesor) a los usuarios
*   **Para:** Representar fielmente la organización institucional y asegurar que los usuarios clave puedan acceder y operar en la plataforma de manera segura.
*   **Valor Clave Entregado:** Establece la infraestructura organizacional digital de la EPN y los cimientos para la gestión de usuarios, permitiendo que los actores principales empiecen a utilizar el sistema.
*   **Historias de Usuario Épicas Cubiertas:**
    *   HU: EPIC: Gestión de la Estructura Académica Institucional
    *   HU: EPIC: Gestión de Usuarios, Roles y Permisos (en su alcance mínimo para los roles críticos del lanzamiento)

**MRF 2: Definición y Mapeo Interno del Currículo de Carrera**

*   **Como:** Coordinador de Carrera y Profesor
*   **Quiero:** Registrar el Perfil de Egreso (OPP) y los Resultados de Aprendizaje (RA) de mi carrera, así como los Resultados de Aprendizaje de Asignatura (RAA) y establecer cómo estos últimos contribuyen a los RA de la carrera (Nivel Bajo, Medio, Alto)
*   **Para:** Documentar el currículo fundamental de la carrera y visualizar la coherencia interna y la contribución de las asignaturas al perfil del egresado.
*   **Valor Clave Entregado:** Digitaliza el núcleo del diseño curricular, haciendo explícitas las relaciones entre los diferentes niveles de aprendizaje y proporcionando la base para la evaluación externa.
*   **Historias de Usuario Épicas Cubiertas:**
    *   HU: EPIC: Definición del Perfil de Egreso (OPP) de Carrera
    *   HU: EPIC: Gestión de los Resultados de Aprendizaje (RA) de Carrera
    *   HU: EPIC: Administración de Programas de Estudio por Asignatura (específicamente la entrada de RAA)
    *   HU: EPIC: Mapeo de Resultados de Asignatura (RAA) a Carrera (RA)
    *   HU: EPIC: Alineación de Resultados de Aprendizaje (RA) con el Perfil Profesional (OPP) (vinculación básica)

**MRF 3: Alineación de RA con EUR-ACE y Verificación Inicial de Cumplimiento**

*   **Como:** Administrador del sistema y Coordinador de Carrera
*   **Quiero:** Cargar los criterios de calidad definidos por EUR-ACE en el sistema y comparar los Resultados de Aprendizaje (RA) de mi carrera con estos objetivos
*   **Para:** Tener un marco de referencia oficial y verificar el cumplimiento inicial de la carrera con los requisitos para la acreditación EUR-ACE.
*   **Valor Clave Entregado:** Ofrece la funcionalidad central que permite a la EPN iniciar su autoevaluación formal contra los estándares EUR-ACE, identificando fortalezas y posibles brechas.
*   **Historias de Usuario Épicas Cubiertas:**
    *   HU: EPIC: Configuración de los Estándares de Acreditación EUR-ACE
    *   HU: EPIC: Verificación del Cumplimiento con Estándares EUR-ACE
    *   HU: EPIC: Generación de Reportes para la Acreditación (en su forma más simple, como una visualización directa de la alineación).

---

Este conjunto de MRFs conforma un primer producto que, si bien es mínimo, es potente y enfocado. Permitirá a la EPN comenzar a trabajar activamente en su proceso de acreditación, recopilando y organizando la información crítica que se requiere. Cada una de estas características es un "must-have" para que el producto sea viable y entregue el valor fundamental prometido para la acreditación EUR-ACE.

<!-- --- -->
