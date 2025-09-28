# Product Backlog de Alto Nivel
## Sistema de Verificación EUR-ACE para la Escuela Politécnica Nacional

---

## Índice


1. [PROMPT 1](#prompt-1)
	- [PROMPT 1.1 (Continuación de PROMPT 1)](#prompt-11-continuacion-de-prompt-1)
2. [PROMPT 2](#prompt-2)
3. [PROMPT 3](#prompt-3)
4. [PROMPT 4](#prompt-4)
5. [PROMPT 5](#prompt-5)
6. [PROMPT 6](#prompt-6)
7. [PROMPT 7](#prompt-7)
8. [PROMPT 8](#prompt-8)
9. [PROMPT 9](#prompt-9)

---

## PROMPT 1

```markdown

### objetivo 
bien , ahora necesito definir mi product backlog de alto nivel , este debe incluir historias de usario epicas. 


### contexto 
una historia de usuario de gran tamaño que no puede ser completada en un solo sprint o iteración.
La palabra "épica" se usa para denotar una historia que es demasiado grande y, por lo tanto, debe ser desglosada en varias historias de usuario más pequeñas, manejables y específicas.

Características principales:
Gran alcance: Una épica representa una funcionalidad o iniciativa de alto nivel que abarca un objetivo significativo del producto.
Contenedor: Funciona como un "contenedor" para un conjunto de historias de usuario relacionadas.
Flexibilidad: El alcance de una épica puede evolucionar a medida que el equipo aprende más sobre la funcionalidad durante el desarrollo y a través del feedback del cliente.
Propósito: Su principal propósito es ayudar a organizar y gestionar el trabajo en el backlog, conectando el trabajo diario del equipo con los objetivos estratégicos de la empresa.

La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE.  
La entidad EUR-ACE evaluará que las carreras de la EPN cumplan con determinados objetivos (objetivos EUR-ACE).  

Organización de la EPN:
- La EPN se organiza en Facultades.  
- Cada Facultad tiene: Profesores, Autoridades (Decano, Subdecano, Jefe de Departamento) y Carreras.  
- Cada Carrera tiene un Coordinador.  
- Existen Comités de Evaluación Interna (CEI), conformados por profesores.  
- Roles principales: Profesor, Coordinador de Carrera, Autoridad, DGIP, Miembro del CEI.  
	- Para ser Coordinador, Autoridad o miembro del CEI, primero se debe ser Profesor.  
	- El DGIP gestiona aspectos académicos de la Facultad.  
	- La Autoridad administra la Facultad.  
	- El Coordinador gestiona la Carrera.  
	- El CEI gestiona los objetivos EUR-ACE y puede consultar información de Facultades.  

Flujo de acreditación:
- Cada Materia de una Carrera cuenta con un **PEA (Programa de Estudios Académicos)**, que contiene:  
	- Unidad académica  
	- Carrera  
	- Unidad de organización curricular  
	- Nombre de la asignatura  
	- Código  
	- Créditos  

- El PEA define los **Resultados de Aprendizaje de la Asignatura (RAA)**, que pueden ser:  
	- Conocimiento  
	- Destrezas  
	- Valores y actitudes  

- La Carrera en su conjunto cuenta con:  
	- **Objetivos de Perfil de Egreso (RA)**, generales y específicos.  
	- **Objetivos de Perfil Profesional (OPP)**.  

- Relaciones fundamentales:  
	- Cada **RAA** de una materia contribuye a los **RA** de la carrera (con un nivel definido).  
	- Cada **RA** de la carrera se relaciona tanto con los **OPP** como con los **objetivos EUR-ACE**.  

Producto a desarrollar:
- Un sistema que permita:  
	- Ingresar toda la información del PEA.  
	- Registrar RAAs, RAs, OPP y objetivos EUR-ACE.  
	- Establecer las relaciones: RAA → RA, RA → OPP, RA → EUR-ACE.  
	- Generar reportes sobre el cumplimiento de los objetivos de acreditación EUR-ACE.  
	- Controlar el acceso según roles (Profesor, Coordinador, Autoridad, CEI, DGIP).  
	- Gestion de organización de las facultades , carreras 

### Accion 
crea el product backlog de alto nivel con las hus en este formato : 


### Formato de salida 
como quiero y para 
```

**SALIDA:**

**Product Backlog de Alto Nivel (Épicas):**

1. **Gestión de la organización académica**
   - **Como** autoridad de la EPN
   - **Quiero** registrar y administrar Facultades, Carreras, Materias y Profesores
   - **Para** mantener actualizada la estructura académica que servirá de base para la acreditación.

2. **Gestión del PEA (Programa de Estudios Académicos)**
   - **Como** profesor
   - **Quiero** ingresar y actualizar la información de las materias y sus PEAs (unidad académica, créditos, código, etc.)
   - **Para** garantizar que cada asignatura cuente con información formalizada y disponible para el proceso de acreditación.

3. **Gestión de Resultados de Aprendizaje de Asignaturas (RAA)**
   - **Como** profesor
   - **Quiero** definir los resultados de aprendizaje de las asignaturas (conocimientos, destrezas, valores y actitudes)
   - **Para** asegurar que cada materia contribuya al perfil de egreso de la carrera.

4. **Gestión de Resultados de Aprendizaje de Carrera (RA) y Objetivos de Perfil Profesional (OPP)**
   - **Como** coordinador de carrera
   - **Quiero** registrar y gestionar los RA y OPP de la carrera
   - **Para** alinear el perfil de egreso con los objetivos institucionales y profesionales.

5. **Gestión de objetivos EUR-ACE**
   - **Como** miembro del CEI
   - **Quiero** registrar y consultar los objetivos EUR-ACE
   - **Para** relacionarlos con los RA y evaluar el cumplimiento de los estándares de acreditación.

6. **Establecimiento de relaciones entre objetivos**
   - **Como** coordinador de carrera
   - **Quiero** relacionar los RAA con los RA, y los RA con los OPP y objetivos EUR-ACE
   - **Para** garantizar la trazabilidad de los aprendizajes hasta los criterios de acreditación.

7. **Generación de reportes de cumplimiento**
   - **Como** DGIP
   - **Quiero** generar reportes sobre el cumplimiento de los objetivos EUR-ACE por carrera y facultad
   - **Para** presentar evidencia clara y verificable en los procesos de acreditación.

8. **Control de acceso y gestión de roles**
   - **Como** usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI)
   - **Quiero** acceder al sistema según mi rol y permisos definidos
   - **Para** garantizar la seguridad y la correcta gestión de la información académica.

> Estas 8 épicas cubren todas las funcionalidades principales del sistema y luego podrán desglosarse en historias de usuario más pequeñas dentro de cada sprint.

---

### PROMPT 1.1 (Continuación de PROMPT 1)

```markdown
Vamos bien , Evitemos usar "y" en las historias de usario engloba con una palabra evitando asi usar "y" , te falto lo relacionado a los OPP
```

**SALIDA:**

**Perfecto 👍, lo ajustamos:**

- Evitamos el uso de “y” en las historias, englobando en una sola palabra.
- Incluimos de forma explícita lo relacionado con los OPP (Objetivos de Perfil Profesional).

**Product Backlog de Alto Nivel (Épicas) revisado:**

1. **Gestión de organización académica**
   - **Como** autoridad de la EPN
   - **Quiero** registrar facultades, carreras, materias y profesores
   - **Para** mantener actualizada la estructura académica para la acreditación.

2. **Gestión de PEA**
   - **Como** profesor
   - **Quiero** ingresar información del PEA (unidad académica, créditos, código, etc.)
   - **Para** disponer de datos estandarizados de cada asignatura.

3. **Gestión de RAA**
   - **Como** profesor
   - **Quiero** registrar resultados de aprendizaje de asignatura (conocimientos, destrezas, actitudes)
   - **Para** evidenciar la contribución de cada materia al perfil de egreso.

4. **Gestión de RA**
   - **Como** coordinador de carrera
   - **Quiero** definir resultados de aprendizaje de carrera
   - **Para** establecer el perfil de egreso de manera formalizada.

5. **Gestión de OPP**
   - **Como** coordinador de carrera
   - **Quiero** registrar objetivos de perfil profesional
   - **Para** alinear el perfil de egreso con las competencias de la profesión de ingeniería.

6. **Gestión de objetivos EUR-ACE**
   - **Como** miembro del CEI
   - **Quiero** registrar objetivos EUR-ACE
   - **Para** evaluar la conformidad de la carrera con estándares internacionales.

7. **Definición de relaciones**
   - **Como** coordinador de carrera
   - **Quiero** establecer relaciones entre RAA, RA, OPP y objetivos EUR-ACE
   - **Para** garantizar trazabilidad académica hacia los criterios de acreditación.

8. **Generación de reportes**
   - **Como** DGIP
   - **Quiero** generar reportes de cumplimiento de criterios EUR-ACE
   - **Para** disponer de evidencias verificables en la acreditación.

9. **Control de acceso**
   - **Como** usuario de la EPN (profesor, coordinador, autoridad, DGIP, CEI)
   - **Quiero** acceder al sistema con permisos según rol
   - **Para** asegurar uso correcto de la información académica.

> Ahora sí tienes un backlog de 9 épicas claras, sin uso de “y” en las historias, y con OPP incorporados ✅.




<!-- --- -->

## PROMPT 2

**Fecha:** 27 sept 2025, 07:23 p m. (UTC)

**Prompt:**

### objetivo 
bien , ahora necesito definir mi product backlog de alto nivel , este debe incluir historias de usario epicas. 


### contexto 
una historia de usuario de gran tamaño que no puede ser completada en un solo sprint o iteración.
La palabra "épica" se usa para denotar una historia que es demasiado grande y, por lo tanto, debe ser desglosada en varias historias de usuario más pequeñas, manejables y específicas.

Características principales:
Gran alcance: Una épica representa una funcionalidad o iniciativa de alto nivel que abarca un objetivo significativo del producto.
Contenedor: Funciona como un "contenedor" para un conjunto de historias de usuario relacionadas.
Flexibilidad: El alcance de una épica puede evolucionar a medida que el equipo aprende más sobre la funcionalidad durante el desarrollo y a través del feedback del cliente.
Propósito: Su principal propósito es ayudar a organizar y gestionar el trabajo en el backlog, conectando el trabajo diario del equipo con los objetivos estratégicos de la empresa.

La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE.  
La entidad EUR-ACE evaluará que las carreras de la EPN cumplan con determinados objetivos (objetivos EUR-ACE).  

Organización de la EPN:
- La EPN se organiza en Facultades.  
- Cada Facultad tiene: Profesores, Autoridades (Decano, Subdecano, Jefe de Departamento) y Carreras.  
- Cada Carrera tiene un Coordinador.  
- Existen Comités de Evaluación Interna (CEI), conformados por profesores.  
- Roles principales: Profesor, Coordinador de Carrera, Autoridad, DGIP, Miembro del CEI.  
	- Para ser Coordinador, Autoridad o miembro del CEI, primero se debe ser Profesor.  
	- El DGIP gestiona aspectos académicos de la Facultad.  
	- La Autoridad administra la Facultad.  
	- El Coordinador gestiona la Carrera.  
	- El CEI gestiona los objetivos EUR-ACE y puede consultar información de Facultades.  

Flujo de acreditación:
- Cada Materia de una Carrera cuenta con un **PEA (Programa de Estudios Académicos)**, que contiene:  
	- Unidad académica  
	- Carrera  
	- Unidad de organización curricular  
	- Nombre de la asignatura  
	- Código  
	- Créditos  

- El PEA define los **Resultados de Aprendizaje de la Asignatura (RAA)**, que pueden ser:  
	- Conocimiento  
	- Destrezas  
	- Valores y actitudes  

- La Carrera en su conjunto cuenta con:  
	- **Objetivos de Perfil de Egreso (RA)**, generales y específicos.  
	- **Objetivos de Perfil Profesional (OPP)**.  

- Relaciones fundamentales:  
	- Cada **RAA** de una materia contribuye a los **RA** de la carrera (con un nivel definido).  
	- Cada **RA** de la carrera se relaciona tanto con los **OPP** como con los **objetivos EUR-ACE**.  

Producto a desarrollar:
- Un sistema que permita:  
	- Ingresar toda la información del PEA.  
	- Registrar RAAs, RAs, OPP y objetivos EUR-ACE.  
	- Establecer las relaciones: RAA → RA, RA → OPP, RA → EUR-ACE.  
	- Generar reportes sobre el cumplimiento de los objetivos de acreditación EUR-ACE.  
	- Controlar el acceso según roles (Profesor, Coordinador, Autoridad, CEI, DGIP).  
	- Gestion de organización de las facultades , carreras 

### Accion 
crea el product backlog de alto nivel con las hus en este formato : 


### Formato de salida 
como quiero y para

**Respuesta:**

¡Excelente! Aquí tienes el Product Backlog de alto nivel, definido con Historias de Usuario Épicas, que abarca la funcionalidad principal para el sistema de acreditación EUR-ACE de la EPN. Estas épicas son amplias y serán el punto de partida para desglosar el trabajo en iteraciones más pequeñas.

---

**Product Backlog de Alto Nivel: Épicas para EPN-ACE Connect**

1.  **Gestión de la Estructura Organizacional y Acceso Institucional**
    *   **Como** DGIP o Autoridad de la EPN,
    *   **Quiero** poder configurar la estructura jerárquica de la EPN (Facultades, Carreras, Departamentos), gestionar el registro de usuarios (Profesores) y asignarles los roles institucionales adecuados (Coordinador de Carrera, Autoridad de Facultad, Miembro del CEI, DGIP),
    *   **Para** asegurar que la organización académica y administrativa se refleje fielmente en el sistema, controlar el acceso a la información según las responsabilidades de cada rol y permitir que cada actor gestione su ámbito de competencia.

2.  **Configuración del Marco Académico y Mapeo para Acreditación**
    *   **Como** Coordinador de Carrera o Profesor (para su materia),
    *   **Quiero** poder ingresar y gestionar la información completa de los Programas de Estudios Académicos (PEA) para cada materia, definir los Resultados de Aprendizaje de la Asignatura (RAA), los Resultados de Aprendizaje de la Carrera (RA), los Objetivos de Perfil Profesional (OPP) y los Objetivos EUR-ACE, y además, establecer las relaciones de contribución entre RAA y RA (con su nivel), entre RA y OPP, y entre RA y los objetivos EUR-ACE,
    *   **Para** construir una base de datos coherente y las matrices de trazabilidad necesarias que demuestren la alineación de la oferta académica con los estándares de calidad y acreditación EUR-ACE.

3.  **Generación de Evidencia y Reportes Estratégicos EUR-ACE**
    *   **Como** Miembro del CEI, Autoridad, DGIP o Coordinador de Carrera,
    *   **Quiero** poder consultar la información académica de facultades y carreras, visualizar la trazabilidad de los Resultados de Aprendizaje y generar reportes personalizables sobre el cumplimiento y la contribución a los objetivos EUR-ACE,
    *   **Para** facilitar la autoevaluación, proporcionar la evidencia requerida para el proceso de acreditación por parte de la entidad EUR-ACE y apoyar la toma de decisiones estratégicas para la mejora continua de las carreras.

---

Estas épicas servirán como la columna vertebral para la planificación de releases y sprints, permitiendo que el equipo de desarrollo descomponga cada una en historias de usuario más detalladas y tareas específicas.

<!-- --- -->

## PROMPT 3

**Fecha:** 27 sept 2025, 11:23 p m. (UTC)

**Prompt:**

### objetivo 
Mi objetivo es definir mi product backlog de alto nivel , este debe incluir historias de usuario epicas. 


### contexto 
una historia de usuario de gran tamaño que no puede ser completada en un solo sprint o iteración.
La palabra "épica" se usa para denotar una historia que es demasiado grande y, por lo tanto, debe ser desglosada en varias historias de usuario más pequeñas, manejables y específicas.

Características principales:
Gran alcance: Una épica representa una funcionalidad o iniciativa de alto nivel que abarca un objetivo significativo del producto.
Contenedor: Funciona como un "contenedor" para un conjunto de historias de usuario relacionadas.
Flexibilidad: El alcance de una épica puede evolucionar a medida que el equipo aprende más sobre la funcionalidad durante el desarrollo y a través del feedback del cliente.
Propósito: Su principal propósito es ayudar a organizar y gestionar el trabajo en el backlog, conectando el trabajo diario del equipo con los objetivos estratégicos de la empresa.

La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE.  
La entidad EUR-ACE evaluará que las carreras de la EPN cumplan con determinados objetivos (objetivos EUR-ACE).  

Organización de la EPN:
- La EPN se organiza en Facultades.  
- Cada Facultad tiene: Profesores, Autoridades (Decano, Subdecano, Jefe de Departamento) y Carreras.  
- Cada Carrera tiene un Coordinador.  
- Existen Comités de Evaluación Interna (CEI), conformados por profesores.  
- Roles principales: Profesor, Coordinador de Carrera, Autoridad, DGIP, Miembro del CEI.  
	- Para ser Coordinador, Autoridad o miembro del CEI, primero se debe ser Profesor.  
	- El DGIP gestiona aspectos académicos de la Facultad.  
	- La Autoridad administra la Facultad.  
	- El Coordinador gestiona la Carrera.  
	- El CEI gestiona los objetivos EUR-ACE y puede consultar información de Facultades.  

Flujo de acreditación:
- Cada Materia de una Carrera cuenta con un **PEA (Programa de Estudios Académicos)**, que contiene:  
	- Unidad académica  
	- Carrera  
	- Unidad de organización curricular  
	- Nombre de la asignatura  
	- Código  
	- Créditos  

- El PEA define los **Resultados de Aprendizaje de la Asignatura (RAA)**, que pueden ser:  
	- Conocimiento  
	- Destrezas  
	- Valores y actitudes  

- La Carrera en su conjunto cuenta con:  
	- **Objetivos de Perfil de Egreso (RA)**, generales y específicos.  
	- **Objetivos de Perfil Profesional (OPP)**.  

- Relaciones fundamentales:  
	- Cada **RAA** de una materia contribuye a los **RA** de la carrera (con un nivel definido).  
	- Cada **RA** de la carrera se relaciona tanto con los **OPP** como con los **objetivos EUR-ACE**.  

Producto a desarrollar:
- Un sistema que permita:  
	- Ingresar toda la información del PEA.  
	- Registrar RAAs, RAs, OPP y objetivos EUR-ACE.  
	- Establecer las relaciones: RAA → RA, RA → OPP, RA → EUR-ACE.  
	- Generar reportes sobre el cumplimiento de los objetivos de acreditación EUR-ACE.  
	- Controlar el acceso según roles (Profesor, Coordinador, Autoridad, CEI, DGIP).  
	- Gestion de organización de las facultades , carreras 

### Accion 
crea el product backlog de alto nivel con las hus, evitando  usar "y" con este formato : 


### Formato de salida 
como quiero y para

**Respuesta:**

### HU: EPIC: Gestión de la Estructura Académica
**Como:** Administrador del sistema
**Quiero:** organizar las facultades
**Para:** establecer la base organizacional de la EPN
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Administración de Usuarios y Permisos
**Como:** Administrador del sistema
**Quiero:** gestionar los roles de los usuarios
**Para:** asegurar el acceso controlado al sistema
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión de Programas de Estudio
**Como:** Profesor
**Quiero:** registrar los Programas de Estudios Académicos (PEA)
**Para:** definir el contenido curricular de cada materia
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión de Perfiles de Egreso
**Como:** Coordinador de Carrera
**Quiero:** definir los Resultados de Aprendizaje (RA)
**Para:** establecer el perfil profesional de los egresados
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión de Objetivos EUR-ACE
**Como:** Miembro del CEI
**Quiero:** registrar los objetivos del sello EUR-ACE
**Para:** documentar los estándares de acreditación
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Mapeo de Contribuciones Académicas
**Como:** Coordinador de Carrera
**Quiero:** relacionar los resultados de aprendizaje
**Para:** demostrar la contribución de las materias a los objetivos de la carrera y EUR-ACE
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Generación de Reportes de Acreditación
**Como:** Miembro del CEI
**Quiero:** generar informes de cumplimiento
**Para:** evaluar el progreso hacia la acreditación EUR-ACE
**Story Points:** N/A
**Prioridad:** N/A

<!-- --- -->

## PROMPT 4

**Fecha:** 27 sept 2025, 11:36 p m. (UTC)

**Prompt:**

###ROL

Actua como un Product owner que es experto en gestión de productos de Software.



### objetivo 
Mi objetivo es definir mi product backlog de alto nivel , para establecer las principales funcionalidades que tendrá mi producto software
 este debe incluir historias de usuario epicas. 

CONTEXTO

La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE.  


EUR-ACE es una etiqueta de calidad y un sistema de acreditación para programas de estudios de ingeniería a nivel de grado y máster. La etiqueta, que es reconocida a nivel europeo e internacional, es un certificado que garantiza que el programa de estudios cumple con altos estándares de calidad y con las exigencias de la profesión de ingeniería.

La Escuela Politécnica Nacional, o EPN, es una universidad pública, de grado y posgrado, ubicada en Quito (Ecuador). Reconocida por la investigación y la educación en ciencias básicas, ingenierías y tecnología, ofrece programas doctorales, de maestría y de grado.
La Escuela Politécnica Nacional (EPN) se organiza en facultades y departamentos, cada uno con funciones específicas para cumplir sus objetivos académicos y de investigación.

estructura Academica de la EPn

La EPN se estructura principalmente en las siguientes unidades:
Facultades: Son las unidades académicas superiores encargadas de planificar, ejecutar, controlar y evaluar los procesos de docencia, investigación y extensión en áreas específicas del conocimiento. Cada facultad está dirigida por un Consejo de Facultad, un Decano y un Subdecano. Tienen capacidad de gestión administrativa y financiera y están integradas por departamentos y carreras afines. 
 
Departamentos: Actúan como las células básicas de la EPN, dependientes de las facultades. Los departamentos son responsables de las actividades de investigación, docencia y extensión en campos específicos. Cada departamento puede diseñar y gestionar programas de maestría y doctorado, y participa en la planificación de los procesos docentes. 
 
Consejo Académico: Coordina todas las unidades académicas y se encarga de evaluar y controlar el cumplimiento de los planes y programas de la EPN. Este consejo es fundamental para la toma de decisiones y la supervisión de las actividades académica


La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

Cada carrera de la EPN cuenta con resultados de aprendizaje (RA): generales y específicos que son los resultados que se garantizan que el estudiante tenga cuando termina la carrera.

También cada carrera cuenta con Objetivos de perfil profesional que son los objetivos que se espera que un estudiante realice en su vida profesional.

Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : – Unidad Académica “ – Carrera – Unidad de organización curricular – Nombre de la asignatura – Código

– Créditos – Resultados de aprendizaje de la asignatura (RAA)

Bien para evaluar que los RA de la carrera se estén cumpliendo se verifica como los RAA de cada materia aportan con un nivel (Bajo , Medio , Alto) a los RA .

También para Evaluar los OPP se verifica como los RA aportan a los OPP.

Para lograr la acreditación es importante los RA ya que con estos se verifica los objetivos EUR-ACE Es decir se verifica que los RA cumplan con los objetivos EURACE.

ACCION

Crea el product backlog de alto nivel con las historitas de usuario épicas para desarrollar mi producto evitando usar "y" ya que esto uniria dos funcionalidades del producto

### Formato de salida 
como quiero y para

**Respuesta:**

### HU: EPIC: Gestión de la Estructura Organizacional Académica
**Como:** Administrador del sistema
**Quiero:** establecer la jerarquía de Facultades, Departamentos, Carreras
**Para:** reflejar la estructura institucional de la EPN
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Administración de Usuarios y Asignación de Roles
**Como:** Administrador del sistema
**Quiero:** registrar a los miembros del personal de la EPN
**Para:** otorgarles acceso adecuado a las funcionalidades del sistema
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Definición de Programas de Estudio por Asignatura (PEA)
**Como:** Profesor
**Quiero:** ingresar la información detallada de cada asignatura
**Para:** documentar el contenido curricular de cada materia
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Establecimiento de Resultados de Aprendizaje de Carrera (RA)
**Como:** Coordinador de Carrera
**Quiero:** definir los resultados de aprendizaje generales específicos para la carrera
**Para:** establecer las competencias que los estudiantes deben adquirir
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Declaración de Objetivos de Perfil Profesional (OPP)
**Como:** Coordinador de Carrera
**Quiero:** especificar los objetivos profesionales esperados del egresado
**Para:** guiar el desarrollo del perfil laboral de los estudiantes
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Registro de Estándares de Acreditación EUR-ACE
**Como:** Miembro del CEI
**Quiero:** capturar los objetivos de calidad definidos por EUR-ACE
**Para:** tener una referencia oficial de los requisitos de acreditación
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Mapeo de Contribuciones de Asignatura a Carrera
**Como:** Coordinador de Carrera
**Quiero:** vincular los Resultados de Aprendizaje de Asignatura (RAA) con los Resultados de Aprendizaje de Carrera (RA)
**Para:** demostrar cómo cada materia contribuye al perfil del egresado
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Alineación de Resultados de Aprendizaje con Perfil Profesional
**Como:** Coordinador de Carrera
**Quiero:** relacionar los Resultados de Aprendizaje de Carrera (RA) con los Objetivos de Perfil Profesional (OPP)
**Para:** asegurar la coherencia entre la formación académica el futuro desempeño laboral
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Verificación de Conformidad de la Carrera con EUR-ACE
**Como:** Miembro del CEI
**Quiero:** asociar los Resultados de Aprendizaje de Carrera (RA) con los objetivos EUR-ACE
**Para:** evaluar el cumplimiento de los estándares de acreditación internacional
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Generación de Informes de Acreditación EUR-ACE
**Como:** Miembro del CEI
**Quiero:** obtener reportes detallados sobre el estado de la acreditación
**Para:** facilitar la toma de decisiones la presentación de evidencias
**Story Points:** N/A
**Prioridad:** N/A

<!-- --- -->

## PROMPT 5

**Fecha:** 27 sept 2025, 11:49 p m. (UTC)

**Prompt:**

###ROL

Actua como un Product owner que es experto en gestión de productos de Software.



### objetivo 
Mi objetivo es definir mi product backlog de alto nivel , para establecer las principales funcionalidades que tendrá mi producto software
 este debe incluir historias de usuario epicas. 

CONTEXTO

La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE.  


EUR-ACE es una etiqueta de calidad y un sistema de acreditación para programas de estudios de ingeniería a nivel de grado y máster. La etiqueta, que es reconocida a nivel europeo e internacional, es un certificado que garantiza que el programa de estudios cumple con altos estándares de calidad y con las exigencias de la profesión de ingeniería.

La Escuela Politécnica Nacional, o EPN, es una universidad pública, de grado y posgrado, ubicada en Quito (Ecuador). Reconocida por la investigación y la educación en ciencias básicas, ingenierías y tecnología, ofrece programas doctorales, de maestría y de grado.
La Escuela Politécnica Nacional (EPN) se organiza en facultades y departamentos, cada uno con funciones específicas para cumplir sus objetivos académicos y de investigación.

estructura Academica de la EPn

La EPN se estructura principalmente en las siguientes unidades:
Facultades: Son las unidades académicas superiores encargadas de planificar, ejecutar, controlar y evaluar los procesos de docencia, investigación y extensión en áreas específicas del conocimiento. Cada facultad está dirigida por un Consejo de Facultad, un Decano y un Subdecano. Tienen capacidad de gestión administrativa y financiera y están integradas por departamentos y carreras afines. 
 
Departamentos: Actúan como las células básicas de la EPN, dependientes de las facultades. Los departamentos son responsables de las actividades de investigación, docencia y extensión en campos específicos. Cada departamento puede diseñar y gestionar programas de maestría y doctorado, y participa en la planificación de los procesos docentes. 
 
Consejo Académico: Coordina todas las unidades académicas y se encarga de evaluar y controlar el cumplimiento de los planes y programas de la EPN. Este consejo es fundamental para la toma de decisiones y la supervisión de las actividades académica

La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

Cada carrera de la EPN cuenta con resultados de aprendizaje (RA): generales y específicos. 

Los RA (Resultados de Aprendizaje) son las declaraciones operativas y mensurables que desagregan el OPP. Son la unidad fundamental del currículo por resultados.   

Los RA describen de manera precisa lo que se espera que un estudiante sepa, comprenda y sea capaz de hacer al concluir el programa de estudios. A diferencia de los objetivos tradicionales, los RA se centran en la    


También cada carrera cuenta con Objetivos de perfil profesional (OPP) 

El OPP (Objetivo/Perfil Profesional) es la declaración fundacional que define la identidad del futuro egresado de la EPN. Formalmente, en el diseño curricular moderno de la EPN, este se consolida como el Perfil de Egreso (PE).   

El OPP es la promesa institucional que la EPN suscribe ante la sociedad, detallando las capacidades, conocimientos y actitudes específicos que el profesional poseerá al graduarse.   



Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : – Unidad Académica “ – Carrera – Unidad de organización curricular – Nombre de la asignatura – Código

– Créditos – Resultados de aprendizaje de la asignatura (RAA)

Bien para evaluar que los RA de la carrera se estén cumpliendo se verifica como los RAA de cada materia aportan con un nivel (Bajo , Medio , Alto) a los RA .

También para Evaluar los OPP se verifica como los RA aportan a los OPP.

Para lograr la acreditación es importante los RA ya que con estos se verifica los objetivos EUR-ACE Es decir se verifica que los RA cumplan con los objetivos EURACE.

ACCION

Crea el product backlog de alto nivel con las historitas de usuario épicas para desarrollar mi producto evitando usar "y" ya que esto uniria dos funcionalidades del producto

### Formato de salida 
como quiero y para

**Respuesta:**

### HU: EPIC: Gestión de la Estructura Académica Institucional
**Como:** Administrador del sistema
**Quiero:** configurar las facultades departamentos carreras de la EPN
**Para:** reflejar la organización académica oficial
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Administración de Usuarios Asignación de Roles
**Como:** Administrador del sistema
**Quiero:** registrar a los profesores autoridades coordinadores
**Para:** otorgarles los permisos de acceso adecuados
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Definición de Perfiles de Egreso (OPP) de Carrera
**Como:** Coordinador de Carrera
**Quiero:** establecer los Objetivos de Perfil Profesional para mi carrera
**Para:** consolidar la identidad del futuro egresado
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión de Resultados de Aprendizaje (RA) de Carrera
**Como:** Coordinador de Carrera
**Quiero:** definir los resultados de aprendizaje generales específicos para mi carrera
**Para:** detallar las competencias que los estudiantes deben alcanzar
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Administración de Programas de Estudios de Asignatura (PEA)
**Como:** Profesor
**Quiero:** ingresar la información relevante de mi asignatura
**Para:** documentar los detalles curriculares de cada curso
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Vinculación de RAA con RA de Carrera
**Como:** Coordinador de Carrera
**Quiero:** asociar los Resultados de Aprendizaje de Asignatura (RAA) con los RA de la carrera
**Para:** evaluar el aporte de cada materia al perfil del egresado
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Alineación de RA de Carrera con OPP
**Como:** Coordinador de Carrera
**Quiero:** relacionar los Resultados de Aprendizaje de Carrera (RA) con los Objetivos de Perfil Profesional (OPP)
**Para:** demostrar la coherencia entre la formación académica el perfil profesional
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Configuración de los Objetivos EUR-ACE
**Como:** Responsable de Acreditación
**Quiero:** registrar los estándares de calidad definidos por EUR-ACE
**Para:** establecer los criterios de acreditación internacional
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Mapeo de RA de Carrera a Objetivos EUR-ACE
**Como:** Responsable de Acreditación
**Quiero:** comparar los Resultados de Aprendizaje de Carrera (RA) con los objetivos EUR-ACE
**Para:** verificar el cumplimiento de los requisitos de acreditación
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Generación de Informes de Acreditación EUR-ACE
**Como:** Responsable de Acreditación
**Quiero:** obtener reportes completos sobre el estado de la acreditación
**Para:** facilitar la presentación de evidencias el seguimiento del proceso
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Supervisión General del Consejo Académico
**Como:** Miembro del Consejo Académico
**Quiero:** tener una visión consolidada del avance de la acreditación de las carreras
**Para:** coordinar evaluar los planes estratégicos de la EPN
**Story Points:** N/A
**Prioridad:** N/A

<!-- --- -->

## PROMPT 6

**Fecha:** 27 sept 2025, 11:58 p m. (UTC)

**Prompt:**

###ROL

Actua como un Product owner que es experto en gestión de productos de Software.



### objetivo 
Mi objetivo es definir mi product backlog de alto nivel , para establecer las principales funcionalidades que tendrá mi producto software
 este debe incluir historias de usuario epicas. 

CONTEXTO

La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE.  


EUR-ACE es una etiqueta de calidad y un sistema de acreditación para programas de estudios de ingeniería a nivel de grado y máster. La etiqueta, que es reconocida a nivel europeo e internacional, es un certificado que garantiza que el programa de estudios cumple con altos estándares de calidad y con las exigencias de la profesión de ingeniería.

La Escuela Politécnica Nacional, o EPN, es una universidad pública, de grado y posgrado, ubicada en Quito (Ecuador). Reconocida por la investigación y la educación en ciencias básicas, ingenierías y tecnología, ofrece programas doctorales, de maestría y de grado.
La Escuela Politécnica Nacional (EPN) se organiza en facultades y departamentos, cada uno con funciones específicas para cumplir sus objetivos académicos y de investigación.

estructura Academica de la EPn

La EPN se estructura principalmente en las siguientes unidades:
Facultades: Son las unidades académicas superiores encargadas de planificar, ejecutar, controlar y evaluar los procesos de docencia, investigación y extensión en áreas específicas del conocimiento. Cada facultad está dirigida por un Consejo de Facultad, un Decano y un Subdecano. Tienen capacidad de gestión administrativa y financiera y están integradas por departamentos y carreras afines. 
 
Departamentos: Actúan como las células básicas de la EPN, dependientes de las facultades. Los departamentos son responsables de las actividades de investigación, docencia y extensión en campos específicos. Cada departamento puede diseñar y gestionar programas de maestría y doctorado, y participa en la planificación de los procesos docentes. 
 
La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

Cada carrera de la EPN cuenta con resultados de aprendizaje (RA):
Los RA (Resultados de Aprendizaje) son las declaraciones operativas y mensurables que desagregan el OPP. Son la unidad fundamental del currículo por resultados.   

Los RA describen de manera precisa lo que se espera que un estudiante sepa, comprenda y sea capaz de hacer al concluir el programa de estudios. A diferencia de los objetivos tradicionales, los RA se centran en la    


También cada carrera cuenta con Objetivos de perfil profesional (OPP) 

El OPP (Objetivo/Perfil Profesional) es la declaración fundacional que define la identidad del futuro egresado de la EPN. Formalmente, en el diseño curricular moderno de la EPN, este se consolida como el Perfil de Egreso (PE).   

El OPP es la promesa institucional que la EPN suscribe ante la sociedad, detallando las capacidades, conocimientos y actitudes específicos que el profesional poseerá al graduarse.   



Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : – Unidad Académica “ – Carrera – Unidad de organización curricular – Nombre de la asignatura – Código

– Créditos – Resultados de aprendizaje de la asignatura (RAA)

Bien para evaluar que los RA de la carrera se estén cumpliendo se verifica como los RAA de cada materia aportan con un nivel (Bajo , Medio , Alto) a los RA .

También para Evaluar los OPP se verifica como los RA aportan a los OPP.

Para lograr la acreditación es importante los RA ya que con estos se verifica los objetivos EUR-ACE Es decir se verifica que los RA cumplan con los objetivos EURACE.

ACCION

Crea el product backlog de alto nivel con las historitas de usuario épicas para desarrollar mi producto evitando usar "y" ya que esto uniria dos funcionalidades del producto

### Formato de salida 
como quiero y para

**Respuesta:**

### HU: EPIC: Gestión de la Estructura Académica Institucional
**Como:** Administrador del sistema
**Quiero:** configurar las facultades departamentos carreras de la EPN
**Para:** reflejar la organización académica oficial
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Administración de Usuarios Asignación de Roles
**Como:** Administrador del sistema
**Quiero:** registrar a los profesores autoridades coordinadores
**Para:** otorgarles los permisos de acceso adecuados
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Definición de Perfiles de Egreso (OPP) de Carrera
**Como:** Coordinador de Carrera
**Quiero:** establecer los Objetivos de Perfil Profesional para mi carrera
**Para:** consolidar la identidad del futuro egresado
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión de Resultados de Aprendizaje (RA) de Carrera
**Como:** Coordinador de Carrera
**Quiero:** definir los resultados de aprendizaje generales específicos para mi carrera
**Para:** detallar las competencias que los estudiantes deben alcanzar
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Administración de Programas de Estudios de Asignatura (PEA)
**Como:** Profesor
**Quiero:** ingresar la información relevante de mi asignatura
**Para:** documentar los detalles curriculares de cada curso
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Vinculación de RAA con RA de Carrera
**Como:** Coordinador de Carrera
**Quiero:** asociar los Resultados de Aprendizaje de Asignatura (RAA) con los RA de la carrera
**Para:** evaluar el aporte de cada materia al perfil del egresado
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Alineación de RA de Carrera con OPP
**Como:** Coordinador de Carrera
**Quiero:** relacionar los Resultados de Aprendizaje de Carrera (RA) con los Objetivos de Perfil Profesional (OPP)
**Para:** demostrar la coherencia entre la formación académica el perfil profesional
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Configuración de los Objetivos EUR-ACE
**Como:** Responsable de Acreditación
**Quiero:** registrar los estándares de calidad definidos por EUR-ACE
**Para:** establecer los criterios de acreditación internacional
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Mapeo de RA de Carrera a Objetivos EUR-ACE
**Como:** Responsable de Acreditación
**Quiero:** comparar los Resultados de Aprendizaje de Carrera (RA) con los objetivos EUR-ACE
**Para:** verificar el cumplimiento de los requisitos de acreditación
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Generación de Informes de Acreditación EUR-ACE
**Como:** Responsable de Acreditación
**Quiero:** obtener reportes completos sobre el estado de la acreditación
**Para:** facilitar la presentación de evidencias el seguimiento del proceso
**Story Points:** N/A
**Prioridad:** N/A

---
<!-- --- -->

## PROMPT 7

**Fecha:** 28 sept 2025, 01:59 a m. (UTC)

**Prompt:**

###ROL

Actua como un Product owner que es experto en gestión de productos de Software.



### objetivo 
Mi objetivo es definir mi product backlog de alto nivel , para establecer las principales funcionalidades que tendrá mi producto software
 este debe incluir historias de usuario epicas. 

CONTEXTO
EL SELLO EUR-ACE: DEFINICIÓN, OBJETIVO Y ENFOQUE
La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE, lo cual implica una alineación total con los estándares internacionales de educación en ingeniería.

¿Qué es EUR-ACE y por qué es importante para la EPN?

EUR-ACE (European Accreditation of Engineering Education) es una etiqueta de calidad y un sistema de acreditación que tiene como objetivo identificar y certificar programas de estudios de ingeniería de alta calidad a nivel de grado y máster .

Reconocimiento y Calidad: El sello, que es reconocido a nivel europeo e internacional, es un certificado que garantiza que el programa de estudios cumple con altos estándares de calidad y con las exigencias de la profesión de ingeniería, superando a menudo los mínimos genéricos establecidos por las leyes nacionales .

Movilidad: La obtención del sello facilita la movilidad académica (acceso a programas de posgrado) y profesional (empleabilidad en el extranjero) para los graduados, asegurando que están preparados para el mercado laboral global .

Gestión del Sello: El sistema es mantenido por la European Network for Accreditation of Engineering Education (ENAEE) . ENAEE autoriza a agencias nacionales o regionales para otorgar el sello. La EPN ha seleccionado a la Asociación de la Educación para la Ingeniería de Rusia (AEER), que es un miembro de ENAEE, para llevar a cabo su proceso de acreditación .

La Acreditación Basada en Resultados (Outcome-Based)

El funcionamiento de EUR-ACE se basa en el principio de acreditación por resultados (Outcome-based accreditation) . Esto requiere que la EPN demuestre que sus egresados han adquirido un conjunto mínimo de conocimientos, habilidades y actitudes definidos en los Programme Outcomes (POs) .

ESTRUCTURA DE GESTIÓN Y ALINEACIÓN CURRICULAR DE LA EPN
La Escuela Politécnica Nacional (EPN), una universidad pública ubicada en Quito (Ecuador) [M_U], ha movilizado su estructura académica para gestionar el riguroso proceso de autoevaluación .

Estructura Académica de la EPN (Gobernanza y Roles Clave)

La EPN se organiza en facultades y departamentos, con roles específicos para asegurar la calidad [M_U, 41]:

Facultades: Son las unidades académicas superiores (ej. Facultad de Ingeniería Mecánica, Facultad de Ingeniería Civil y Ambiental ) encargadas de planificar, ejecutar y evaluar la docencia, investigación y extensión en áreas específicas [M_U]. Cada facultad está dirigida por un Consejo de Facultad, un Decano y un Subdecano [M_U].

Departamentos: Actúan como las células básicas, dependientes de las facultades. Son responsables de la investigación, docencia y extensión en campos específicos, y pueden diseñar y gestionar programas de posgrado. Cada departamento es dirigido por un Jefe de Departamento [M_U, 13].

Autoridades de la Facultad: Para llegar a ser coordinador, Decano o Jefe de Departamento, primero se debe ser profesor [M_U]. El Decano administra la facultad, y tanto él como el Jefe de Departamento tienen autoridad para conceder licencias al personal académico.   

Coordinador de Carrera: Cada carrera tiene un solo coordinador [M_U]. Este rol es el eslabón crítico para la ejecución, responsable de garantizar la alineación curricular a nivel microcurricular y la estandarización del Programa de Estudio por Asignatura (PEA). Un coordinador puede dedicar hasta 20 horas semanales a la gestión educativa .   

Vicerrectorado de Docencia (VD): Es la entidad superior que da directrices a Decanos y Jefes de Departamento, encargada de dirigir, coordinar, gestionar y evaluar la docencia. Se convierte en el motor estratégico para implementar los cambios exigidos por EUR-ACE.   

DGIP (Dirección de Gestión de la Información y Procesos): Su misión es administrar los recursos informáticos y tecnológicos para fortalecer los ejes estratégicos (docencia, investigación y proyección social). En el contexto EUR-ACE, la DGIP es crucial para el soporte de TI en la gestión académica y para la trazabilidad y sistematización de la información de resultados.   


Cada carrera de la EPN cuenta con resultados de aprendizaje (RA):
Los RA (Resultados de Aprendizaje) son las declaraciones operativas y mensurables que desagregan el OPP. Son la unidad fundamental del currículo por resultados.   

Los RA describen de manera precisa lo que se espera que un estudiante sepa, comprenda y sea capaz de hacer al concluir el programa de estudios. A diferencia de los objetivos tradicionales, los RA se centran en la    


También cada carrera cuenta con Objetivos de perfil profesional (OPP) 

El OPP (Objetivo/Perfil Profesional) es la declaración fundacional que define la identidad del futuro egresado de la EPN. Formalmente, en el diseño curricular moderno de la EPN, este se consolida como el Perfil de Egreso (PE).   

El OPP es la promesa institucional que la EPN suscribe ante la sociedad, detallando las capacidades, conocimientos y actitudes específicos que el profesional poseerá al graduarse.   



Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : – Unidad Académica “ – Carrera – Unidad de organización curricular – Nombre de la asignatura – Código

– Créditos – Resultados de aprendizaje de la asignatura (RAA)

Bien para evaluar que los RA de la carrera se estén cumpliendo se verifica como los RAA de cada materia aportan con un nivel (Bajo , Medio , Alto) a los RA .

También para Evaluar los OPP se verifica como los RA aportan a los OPP.

Para lograr la acreditación es importante los RA ya que con estos se verifica los objetivos EUR-ACE Es decir se verifica que los RA cumplan con los objetivos EURACE.

ACCION

Crea el product backlog de alto nivel con las historitas de usuario épicas para desarrollar mi producto evitando usar "y" ya que esto uniria dos funcionalidades del producto

### Formato de salida 
como quiero y para

**Respuesta:**

### HU: EPIC: Gestión de la Estructura Académica Institucional
**Como:** Administrador del sistema
**Quiero:** configurar las facultades departamentos carreras de la EPN
**Para:** reflejar la organización académica oficial de la institución
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Administración de Usuarios Asignación de Roles
**Como:** Administrador del sistema
**Quiero:** registrar a los profesores autoridades coordinadores
**Para:** otorgarles los permisos de acceso adecuados según su rol
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Definición de Perfiles de Egreso (OPP) de Carrera
**Como:** Coordinador de Carrera
**Quiero:** establecer los Objetivos de Perfil Profesional para mi carrera
**Para:** consolidar la identidad el perfil del futuro egresado
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión de Resultados de Aprendizaje (RA) de Carrera
**Como:** Coordinador de Carrera
**Quiero:** definir los resultados de aprendizaje específicos para mi carrera
**Para:** detallar las competencias que los estudiantes deben alcanzar al egresar
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Administración de Programas de Estudios de Asignatura (PEA)
**Como:** Profesor
**Quiero:** ingresar la información relevante de mi asignatura
**Para:** documentar los detalles curriculares de cada curso impartido
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Vinculación de RAA con RA de Carrera
**Como:** Coordinador de Carrera
**Quiero:** asociar los Resultados de Aprendizaje de Asignatura (RAA) con los RA de la carrera
**Para:** evaluar el aporte de cada materia al perfil del egresado
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Alineación de RA de Carrera con OPP
**Como:** Coordinador de Carrera
**Quiero:** relacionar los Resultados de Aprendizaje de Carrera (RA) con los Objetivos de Perfil Profesional (OPP)
**Para:** demostrar la coherencia entre la formación académica el perfil profesional
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Configuración de los Objetivos EUR-ACE
**Como:** Responsable de Acreditación o DGIP
**Quiero:** registrar los objetivos de calidad definidos por EUR-ACE
**Para:** establecer los criterios de acreditación internacional
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Mapeo de RA de Carrera a Objetivos EUR-ACE
**Como:** Responsable de Acreditación
**Quiero:** comparar los Resultados de Aprendizaje de Carrera (RA) con los objetivos EUR-ACE
**Para:** verificar el cumplimiento de los requisitos de acreditación
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Generación de Informes de Acreditación
**Como:** Responsable de Acreditación o DGIP
**Quiero:** obtener reportes completos sobre el estado de la acreditación
**Para:** facilitar la presentación de evidencias el seguimiento del proceso
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión Administrativa de Facultad Departamento
**Como:** Decano Subdecano Jefe de Departamento
**Quiero:** supervisar el progreso académico administrativo de mi unidad
**Para:** asegurar la correcta operación el cumplimiento de los objetivos
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Monitoreo Institucional de Procesos de Acreditación
**Como:** Vicerrectorado de Docencia o DGIP
**Quiero:** visualizar el estado de acreditación de todas las carreras facultades
**Para:** asegurar el cumplimiento de los estándares a nivel institucional
**Story Points:** N/A
**Prioridad:** N/A

<!-- --- -->

## PROMPT 8

**Fecha:** 28 sept 2025, 02:03 a m. (UTC)

**Prompt:**

###ROL

Actua como un Product owner que es experto en gestión de productos de Software.



### objetivo 
Mi objetivo es definir mi product backlog de alto nivel , para establecer las principales funcionalidades que tendrá mi producto software
 este debe incluir historias de usuario epicas. 

CONTEXTO
EL SELLO EUR-ACE: DEFINICIÓN, OBJETIVO Y ENFOQUE
La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE, lo cual implica una alineación total con los estándares internacionales de educación en ingeniería.

¿Qué es EUR-ACE y por qué es importante para la EPN?

EUR-ACE (European Accreditation of Engineering Education) es una etiqueta de calidad y un sistema de acreditación que tiene como objetivo identificar y certificar programas de estudios de ingeniería de alta calidad a nivel de grado y máster .

Reconocimiento y Calidad: El sello, que es reconocido a nivel europeo e internacional, es un certificado que garantiza que el programa de estudios cumple con altos estándares de calidad y con las exigencias de la profesión de ingeniería, superando a menudo los mínimos genéricos establecidos por las leyes nacionales .

Movilidad: La obtención del sello facilita la movilidad académica (acceso a programas de posgrado) y profesional (empleabilidad en el extranjero) para los graduados, asegurando que están preparados para el mercado laboral global .

Gestión del Sello: El sistema es mantenido por la European Network for Accreditation of Engineering Education (ENAEE) . ENAEE autoriza a agencias nacionales o regionales para otorgar el sello. La EPN ha seleccionado a la Asociación de la Educación para la Ingeniería de Rusia (AEER), que es un miembro de ENAEE, para llevar a cabo su proceso de acreditación .

La Acreditación Basada en Resultados (Outcome-Based)

El funcionamiento de EUR-ACE se basa en el principio de acreditación por resultados (Outcome-based accreditation) . Esto requiere que la EPN demuestre que sus egresados han adquirido un conjunto mínimo de conocimientos, habilidades y actitudes definidos en los Programme Outcomes (POs) .

ESTRUCTURA DE GESTIÓN Y ALINEACIÓN CURRICULAR DE LA EPN
La Escuela Politécnica Nacional (EPN), una universidad pública ubicada en Quito (Ecuador) [M_U], ha movilizado su estructura académica para gestionar el riguroso proceso de autoevaluación .

Estructura Académica de la EPN (Gobernanza y Roles Clave)

La EPN se organiza en facultades y departamentos, con roles específicos para asegurar la calidad [M_U, 41]:

Facultades: Son las unidades académicas superiores (ej. Facultad de Ingeniería Mecánica, Facultad de Ingeniería Civil y Ambiental ) encargadas de planificar, ejecutar y evaluar la docencia, investigación y extensión en áreas específicas [M_U]. Cada facultad está dirigida por un Consejo de Facultad, un Decano y un Subdecano [M_U].

Departamentos: Actúan como las células básicas, dependientes de las facultades. Son responsables de la investigación, docencia y extensión en campos específicos, y pueden diseñar y gestionar programas de posgrado. Cada departamento es dirigido por un Jefe de Departamento [M_U, 13].

Autoridades de la Facultad: Para llegar a ser coordinador, Decano o Jefe de Departamento, primero se debe ser profesor [M_U]. El Decano administra la facultad, y tanto él como el Jefe de Departamento tienen autoridad para conceder licencias al personal académico.   

Coordinador de Carrera: Cada carrera tiene un solo coordinador [M_U]. Este rol es el eslabón crítico para la ejecución, responsable de garantizar la alineación curricular a nivel microcurricular y la estandarización del Programa de Estudio por Asignatura (PEA). Un coordinador puede dedicar hasta 20 horas semanales a la gestión educativa .   

Vicerrectorado de Docencia (VD): Es la entidad superior que da directrices a Decanos y Jefes de Departamento, encargada de dirigir, coordinar, gestionar y evaluar la docencia. Se convierte en el motor estratégico para implementar los cambios exigidos por EUR-ACE.   

DGIP (Dirección de Gestión de la Información y Procesos): Su misión es administrar los recursos informáticos y tecnológicos para fortalecer los ejes estratégicos (docencia, investigación y proyección social). En el contexto EUR-ACE, la DGIP es crucial para el soporte de TI en la gestión académica y para la trazabilidad y sistematización de la información de resultados.   


Cada carrera de la EPN cuenta con resultados de aprendizaje (RA):
Los RA (Resultados de Aprendizaje) son las declaraciones operativas y mensurables que desagregan el OPP. Son la unidad fundamental del currículo por resultados.   

Los RA describen de manera precisa lo que se espera que un estudiante sepa, comprenda y sea capaz de hacer al concluir el programa de estudios. A diferencia de los objetivos tradicionales, los RA se centran en la    


También cada carrera cuenta con Objetivos de perfil profesional (OPP) 

El OPP (Objetivo/Perfil Profesional) es la declaración fundacional que define la identidad del futuro egresado de la EPN. Formalmente, en el diseño curricular moderno de la EPN, este se consolida como el Perfil de Egreso (PE).   

El OPP es la promesa institucional que la EPN suscribe ante la sociedad, detallando las capacidades, conocimientos y actitudes específicos que el profesional poseerá al graduarse.   



Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : – Unidad Académica “ – Carrera – Unidad de organización curricular – Nombre de la asignatura – Código

– Créditos – Resultados de aprendizaje de la asignatura (RAA)

Bien para evaluar que los RA de la carrera se estén cumpliendo se verifica como los RAA de cada materia aportan con un nivel (Bajo , Medio , Alto) a los RA .

También para Evaluar los OPP se verifica como los RA aportan a los OPP.

Para lograr la acreditación es importante los RA ya que con estos se verifica los objetivos EUR-ACE Es decir se verifica que los RA cumplan con los objetivos EURACE.


la vision del producto software a desarrollar es la siguiente :

Para las Facultades y Coordinadores de Carrera de la EPN que buscan optimizar la gestión y garantizar la acreditación de sus programas de ingeniería bajo el sello EUR-ACE,

PoliAcredita es una plataforma de acreditación académica

que centraliza la información curricular y automatiza la evaluación del cumplimiento de los objetivos EUR-ACE.

A diferencia de los métodos manuales y las herramientas de gestión de datos fragmentadas,

PoliAcredita proporciona una trazabilidad completa del currículo y agiliza la generación de reportes esenciales, asegurando la preparación exitosa para la auditoría de acreditación.




ACCION

Crea el product backlog de alto nivel con las historitas de usuario épicas para desarrollar mi producto evitando usar "y" ya que esto uniria dos funcionalidades del producto

### Formato de salida 
como quiero y para

**Respuesta:**

### HU: EPIC: Configuración de la Estructura Organizativa Institucional
**Como:** Administrador del sistema
**Quiero:** registrar las facultades departamentos carreras
**Para:** reflejar con precisión la jerarquía académica de la EPN
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión de Usuarios Autoridades y Roles
**Como:** Administrador del sistema
**Quiero:** asignar roles de acceso a cada usuario registrado
**Para:** controlar la seguridad la operatividad de la plataforma
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Definición de Objetivos de Perfil Profesional (OPP) de Carrera
**Como:** Coordinador de Carrera
**Quiero:** establecer los objetivos de perfil profesional de mi carrera
**Para:** formalizar la promesa del egresado ante la sociedad
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Administración de Resultados de Aprendizaje (RA) de Carrera
**Como:** Coordinador de Carrera
**Quiero:** definir los resultados de aprendizaje para mi carrera
**Para:** especificar las competencias esperadas de los estudiantes
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión de Programas de Estudio por Asignatura (PEA)
**Como:** Profesor
**Quiero:** ingresar el contenido programático de mi asignatura
**Para:** documentar sus resultados de aprendizaje (RAA) su estructura
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Mapeo de RAA a Resultados de Aprendizaje de Carrera (RA)
**Como:** Coordinador de Carrera
**Quiero:** establecer la contribución de los RAA a los RA de mi carrera
**Para:** evaluar el aporte individual de cada asignatura al perfil global
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Alineación de Resultados de Aprendizaje (RA) con OPP
**Como:** Coordinador de Carrera
**Quiero:** relacionar los resultados de aprendizaje de carrera con los OPP
**Para:** asegurar la coherencia entre el currículo el perfil del egresado
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Configuración de los Estándares EUR-ACE
**Como:** Responsable de Acreditación
**Quiero:** cargar los criterios de calidad definidos por EUR-ACE
**Para:** tener una base oficial de evaluación del currículo
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Verificación del Cumplimiento con EUR-ACE
**Como:** Responsable de Acreditación
**Quiero:** comparar los RA de carrera con los objetivos EUR-ACE
**Para:** identificar el grado de alineación la preparación para la acreditación
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Generación de Reportes para Acreditación
**Como:** Responsable de Acreditación
**Quiero:** obtener informes automáticos de cumplimiento
**Para:** facilitar la presentación de evidencias a la agencia acreditadora
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Paneles de Control de Progreso de Acreditación
**Como:** Vicerrector de Docencia
**Quiero:** visualizar el estado general de acreditación de las carreras
**Para:** monitorear el avance institucional la toma de decisiones estratégicas
**Story Points:** N/A
**Prioridad:** N/A

<!-- --- -->

## PROMPT 9

**Fecha:** 28 sept 2025, 02:11 a m. (UTC)

**Prompt:**

###ROL

Actua como un Product owner que es experto en gestión de productos de Software.



### objetivo 
Mi objetivo es definir mi product backlog de alto nivel , para establecer las principales funcionalidades que tendrá mi producto software
 este debe incluir historias de usuario epicas. 

CONTEXTO

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

Los RA describen de manera precisa lo que se espera que un estudiante sepa, comprenda y sea capaz de hacer al concluir el programa de estudios. A diferencia de los objetivos tradicionales, los RA se centran en la    


También cada carrera cuenta con Objetivos de perfil profesional (OPP) 

El OPP (Objetivo/Perfil Profesional) es la declaración fundacional que define la identidad del futuro egresado de la EPN. Formalmente, en el diseño curricular moderno de la EPN, este se consolida como el Perfil de Egreso (PE).   

El OPP es la promesa institucional que la EPN suscribe ante la sociedad, detallando las capacidades, conocimientos y actitudes específicos que el profesional poseerá al graduarse.   


Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : – Unidad Académica “ – Carrera – Unidad de organización curricular – Nombre de la asignatura – Código

– Créditos – Resultados de aprendizaje de la asignatura (RAA)

Bien para evaluar que los RA de la carrera se estén cumpliendo se verifica como los RAA de cada materia aportan con un nivel (Bajo , Medio , Alto) a los RA .

También para Evaluar los OPP se verifica como los RA aportan a los OPP.

Para lograr la acreditación es importante los RA ya que con estos se verifica los objetivos EUR-ACE Es decir se verifica que los RA cumplan con los objetivos EURACE.

ACCION

Crea el product backlog de alto nivel con las historitas de usuario épicas para desarrollar mi producto evitando usar "y" ya que esto uniría dos funcionalidades del producto además las épicas deben agregar valor al usuario.

### Formato de salida 
como quiero y para

**Respuesta:**

### HU: EPIC: Configuración de la Estructura Organizativa de la EPN
**Como:** Administrador del sistema
**Quiero:** definir las facultades departamentos carreras
**Para:** reflejar la organización académica institucional de la EPN
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión de Usuarios, Roles y Permisos
**Como:** Administrador del sistema
**Quiero:** asignar roles de acceso a cada tipo de usuario
**Para:** controlar la seguridad operativa la integridad de la plataforma
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Definición del Perfil de Egreso (OPP) de Carrera
**Como:** Coordinador de Carrera
**Quiero:** establecer los objetivos de perfil profesional de mi carrera
**Para:** formalizar la promesa del egresado ante la sociedad
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Gestión de los Resultados de Aprendizaje (RA) de Carrera
**Como:** Coordinador de Carrera
**Quiero:** crear los resultados de aprendizaje para mi carrera
**Para:** especificar las competencias esperadas de los estudiantes al egresar
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Administración de Programas de Estudio por Asignatura (PEA)
**Como:** Profesor
**Quiero:** registrar el programa de mi asignatura
**Para:** documentar sus resultados de aprendizaje (RAA) su contenido
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Mapeo de Resultados de Asignatura (RAA) a Carrera (RA)
**Como:** Coordinador de Carrera
**Quiero:** establecer la contribución de los RAA a los RA de mi carrera
**Para:** visualizar el aporte de cada asignatura al perfil global del egresado
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Alineación de Resultados de Aprendizaje (RA) con el Perfil Profesional (OPP)
**Como:** Coordinador de Carrera
**Quiero:** relacionar los resultados de aprendizaje de carrera con los OPP
**Para:** asegurar la coherencia entre el currículo el perfil profesional deseado
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Configuración de los Estándares de Acreditación EUR-ACE
**Como:** Administrador del sistema
**Quiero:** cargar los criterios de calidad definidos por EUR-ACE
**Para:** tener una base oficial de evaluación del currículo
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Verificación del Cumplimiento con Estándares EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** comparar los RA de carrera con los objetivos EUR-ACE
**Para:** identificar el grado de alineación la preparación para la acreditación
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Generación de Reportes para la Acreditación
**Como:** Responsable de Acreditación
**Quiero:** obtener informes automáticos de cumplimiento
**Para:** facilitar la presentación de evidencias a la agencia acreditadora
**Story Points:** N/A
**Prioridad:** N/A

---

### HU: EPIC: Paneles de Control de Progreso de Acreditación
**Como:** Vicerrector de Docencia
**Quiero:** visualizar el estado general de acreditación de las carreras
**Para:** monitorear el avance institucional la toma de decisiones estratégicas
**Story Points:** N/A
**Prioridad:** N/A

<!-- --- -->
