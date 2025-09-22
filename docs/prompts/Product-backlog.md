# Product Backlog de Alto Nivel
## Sistema de Verificación EUR-ACE para la Escuela Politécnica Nacional

---

## Índice


1. [PROMPT 1](#prompt-1)
	- [PROMPT 1.1 (Continuación de PROMPT 1)](#prompt-11-continuacion-de-prompt-1)
2. [PROMPT 2](#prompt-2)

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

