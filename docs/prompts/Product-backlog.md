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

---

## PROMPT 2

**Prompt:**

ROL Actua como un Product owner que es experto en gestión de productos de Software.

objetivo:

Definir el product backlog para establecer los pbis para mi producto software a desarrollar , teniendo en cuenta que el release será un release de fecha fija de un mes.

CONTEXTO

EUR-ACE es una etiqueta de calidad y un sistema de acreditación para programas de estudios de ingeniería a nivel de grado y máster. La etiqueta, que es reconocida a nivel europeo e internacional, es un certificado que garantiza que el programa de estudios cumple con altos estándares de calidad y con las exigencias de la profesión de ingeniería.

La Escuela Politécnica Nacional, o EPN, es una universidad pública, de grado y posgrado, ubicada en Quito (Ecuador). Reconocida por la investigación y la educación en ciencias básicas, ingenierías y tecnología, ofrece programas doctorales, de maestría y de grado.

La EPN está dividida de la siguiente manera, existen Facultades y por cada facultad pueden existir diferentes carreras cada Facultad tiene profesores, Autoridades (Decano , Subdecano , jefe de Departamento) , Para llegar a ser coordinador, Autoridad primero tiene que ser un profesor, Para las carreras cada carrera tiene un solo coordinador y existe una entidad superior que sería la DGIP que es la encargada de gestionar los aspectos académicos de las facultades , Para la autoridad administra la facultad, el coordinador gestiona la carrera .

Cada carrera de la EPN cuenta con resultados de aprendizaje (RA): generales y específicos que son los resultados que se garantizan que el estudiante tenga cuando termina la carrera.

También cada carrera cuenta con Objetivos de perfil profesional que son los objetivos que se espera que un estudiante realice en su vida profesional.

Para Cada carrera existen diferentes Asignaturas , cada una de estas asignaturas cuenta con un programa de estudios académicos (PEA) . Este PEA contiene información relevante de cada asignatura . Por ejemplo : – Unidad Académica “ – Carrera – Unidad de organización curricular – Nombre de la asignatura – Código

– Créditos – Resultados de aprendizaje de la asignatura (RAA)

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

nuestro historico de sprint anteriores es :

Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint

ACCION : Crea mi product backlog recuerda que para el desarrollo vamos apoyarnos de la IA

Formato de salida Este product backlog necesito que contenga lo siguiente:

Muestra tres tablas (en este orden), asignando cada ítem al bucket que corresponda según el acumulado de puntos: Will have (≤ Will-have line) Might have (> Will y ≤ Might-have line) Won’t have (> Might-have line) Columnas de cada tabla: | ID | Est (sp) | Must | Prioridad | Título | Acum (sp) | Items sin estimación: lista aparte con ID Título Motivo (sin estimación)

**Respuesta:**

¡Excelente! Asumo nuevamente mi rol de Product Owner, experto en gestión de productos de software. El objetivo es claro: definir un Product Backlog que establezca los Product Backlog Items (PBIs) para nuestro producto software, con un release de fecha fija de un mes.

Comprendo el contexto de la EPN y la crítica importancia de la acreditación EUR-ACE. Nuestro enfoque para este primer release (un mes) será entregar un **Producto Mínimo Viable (MVP)** que establezca las bases funcionales y los enlaces de trazabilidad más críticos para la acreditación.

Considerando la velocidad del equipo (Velocidad Baja: 54 Story Points, Velocidad Alta: 75 Story Points por sprint), y dado que es un release de un mes (equivalente a un sprint en este contexto), estableceré las líneas de capacidad de la siguiente manera:

*   **Will-have line:** **74 Story Points (sp)**. Este es un objetivo ambicioso pero alcanzable, rozando la velocidad alta del equipo para maximizar el valor entregado en este primer mes.
*   **Might-have line:** **103 Story Points (sp)**. Esto representa una capacidad adicional si el equipo supera las expectativas, entregando valor extra.

---

### SPRINT MAPPING (para el Release de 1 Mes: EUR-ACE MVP)

**Objetivo del Release (MVP):**
Proveer la infraestructura fundamental del sistema de gestión de acreditación EUR-ACE, permitiendo la administración de la estructura organizacional académica (Facultades, Carreras, Asignaturas, Profesores), el registro de los Objetivos EUR-ACE y los Resultados de Aprendizaje de Carrera (RA), y **establecer la relación directa y crítica entre los RA de la carrera y los Objetivos EUR-ACE**. Esto sienta las bases para evidenciar el cumplimiento de los estándares internacionales.

**Estrategia de Priorización para el MVP:**
La estrategia se centra en construir el esqueleto del sistema, priorizando:
1.  **Fundamentos del Sistema:** Gestión de usuarios, roles y la estructura organizativa básica de la EPN. Sin esto, el sistema no puede funcionar ni ser seguro.
2.  **Definición de Elementos Clave EUR-ACE:** Capacidad para registrar los Objetivos EUR-ACE y los Resultados de Aprendizaje de Carrera (RA). Estas son las métricas centrales de la acreditación.
3.  **Trazabilidad Central del MVP:** La conexión directa entre los RA de Carrera y los Objetivos EUR-ACE. **Este es el "corazón" del MVP**, ya que permite a la EPN empezar a mostrar explícitamente cómo sus programas cumplen con los requisitos de la acreditación.
4.  **Primer Paso de Trazabilidad Inferior:** El registro de los Resultados de Aprendizaje de Asignatura (RAA) para empezar a recopilar datos a nivel de materia, aunque la lógica de contribución se posponga.

**Dependencias y Valor Comercial de los PBIs para el Release "Will Have":**

| ID    | Título                                                              | Dependencias                                                                                                                                                                                             | Valor de Negocio/Comercial                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :---- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PBI 1 | Gestión de Usuarios (CRUD, autenticación)                           | N/A                                                                                                                                                                                                      | **CRÍTICO:** **Es la puerta de entrada al sistema, permitiendo a cualquier actor interactuar con él.** Fundacional para la operación, seguridad y adopción del sistema. Sin autenticación y gestión de usuarios, el sistema es inaccesible e inseguro.                                                                                                                                                                                                                                                                                                         |
| PBI 2 | Gestión de Roles y Permisos (Asignación de roles predefinidos)      | PBI 1                                                                                                                                                                                                    | **CRÍTICO:** **Asegura la seguridad y la integridad de los datos, asignando funcionalidades según el perfil del usuario.** Crucial para cumplir con normativas de auditoría y garantizar que cada actor (profesor, coordinador, autoridad, DGIP, CEI) vea y modifique solo lo que le corresponde, evitando errores y fraudes.                                                                                                                                                                                                                                                         |
| PBI 3 | Gestión de Facultades (CRUD)                                        | PBI 1, PBI 2                                                                                                                                                                                             | **ALTO:** **Establece la jerarquía principal de la EPN en el sistema.** Permite organizar la información académica y de acreditación a nivel institucional, siendo el primer escalón para la administración de la estructura EUR-ACE.                                                                                                                                                                                                                                                                                                                                    |
| PBI 4 | Gestión de Carreras (CRUD, asociación con Facultad)                 | PBI 3                                                                                                                                                                                                    | **ALTO:** **Define el núcleo de la acreditación.** Las carreras son los programas que se someten a la acreditación EUR-ACE. Es esencial registrar y organizar la información a este nivel.                                                                                                                                                                                                                                                                                                                                                                      |
| PBI 5 | Gestión de Asignaturas (CRUD, asociación con Carrera)               | PBI 4                                                                                                                                                                                                    | **ALTO:** **Permite el registro de las unidades más granulares del currículo.** Aunque la funcionalidad completa de PEAs y RAA sea más compleja, tener las asignaturas registradas es un paso fundamental para la futura trazabilidad y para que los profesores puedan empezar a cargar información.                                                                                                                                                                                                                                                                 |
| PBI 6 | Gestión de Profesores (CRUD, asociación con Facultad/Carrera)       | PBI 3, PBI 4                                                                                                                                                                                             | **ALTO:** **Habilita la participación del personal docente clave para la entrada de datos.** Los profesores son responsables de los PEAs y RAAs. Su registro es necesario para que puedan interactuar con el sistema y aportar la información que eventualmente servirá para la acreditación.                                                                                                                                                                                                                                                                       |
| PBI 7 | Gestión de Objetivos EUR-ACE (CRUD)                                 | PBI 1, PBI 2                                                                                                                                                                                             | **CRÍTICO:** **Introduce los estándares de calidad y acreditación internacional en el sistema.** Los objetivos EUR-ACE son el marco de referencia contra el cual se evalúa la calidad de los programas de ingeniería. Es indispensable tenerlos registrados para cualquier proceso de acreditación.                                                                                                                                                                                                                                                                      |
| PBI 8 | Gestión de RA de Carrera (CRUD)                                     | PBI 4                                                                                                                                                                                                    | **CRÍTICO:** **Formaliza el perfil de egreso de los estudiantes, pieza central para la acreditación.** Los RA de Carrera son la representación formal de lo que se espera que un estudiante logre. Son el punto de anclaje para la verificación del cumplimiento de los estándares EUR-ACE.                                                                                                                                                                                                                                                                              |
| PBI 9 | **Definición de la relación RA-EUR-ACE**                            | PBI 7, PBI 8                                                                                                                                                                                             | **🌟 CRÍTICO - CORE DEL MVP:** **Establece la trazabilidad directa y esencial entre los resultados internos de la EPN y los estándares internacionales.** Esta funcionalidad es la que permite a la EPN **empezar a evidenciar cómo sus programas cumplen con los objetivos EUR-ACE**. Sin esta conexión, el sistema carecería de su propósito central para la acreditación. **Es el valor más inmediato para la acreditación.**                                                                                                                               |
| PBI 10 | Gestión de RAA (CRUD, asociación directa con Asignatura y Profesor) | PBI 5, PBI 6, PBI 8 (aunque la contribución se definirá después, es bueno que los RA de carrera existan como contexto) | **ALTO:** **Primer paso para construir la trazabilidad granular desde la asignatura.** Permite a los profesores empezar a registrar los resultados de aprendizaje específicos de sus materias. Es el origen de la cadena de evidencia que eventualmente se vinculará a los RA de carrera y, por ende, a EUR-ACE. Comienza la recopilación de datos relevantes. |

---

### Product Backlog (Release de 1 Mes: EUR-ACE MVP)

**Capacidad estimada para el Release (1 mes):**
*   **Will-have line:** 74 Story Points (sp) - Objetivo de entrega.
*   **Might-have line:** 103 Story Points (sp) - Capacidad de estiramiento.

---

### 1. Will Have (≤ 74 sp)

| ID    | Est (sp) | Must | Prioridad | Título                                                              | Acum (sp) |
| :---- | :------- | :--- | :-------- | :------------------------------------------------------------------ | :-------- |
| PBI 1 | 8        | Sí   | 1 (Crítica) | Gestión de Usuarios (CRUD, autenticación)                           | 8         |
| PBI 2 | 5        | Sí   | 2 (Crítica) | Gestión de Roles y Permisos (Asignación de roles predefinidos)      | 13        |
| PBI 3 | 5        | Sí   | 3 (Alta)    | Gestión de Facultades (CRUD)                                        | 18        |
| PBI 4 | 8        | Sí   | 4 (Alta)    | Gestión de Carreras (CRUD, asociación con Facultad)                 | 26        |
| PBI 5 | 8        | Sí   | 5 (Alta)    | Gestión de Asignaturas (CRUD, asociación con Carrera)               | 34        |
| PBI 6 | 8        | Sí   | 6 (Alta)    | Gestión de Profesores (CRUD, asociación con Facultad/Carrera)       | 42        |
| PBI 7 | 8        | Sí   | 7 (Crítica) | Gestión de Objetivos EUR-ACE (CRUD)                                 | 50        |
| PBI 8 | 8        | Sí   | 8 (Crítica) | Gestión de RA de Carrera (CRUD)                                     | 58        |
| PBI 9 | 8        | Sí   | 9 (CRÍTICA) | **Definición de la relación RA-EUR-ACE**                            | 66        |
| PBI 10 | 8        | Sí   | 10 (Alta)   | Gestión de RAA (CRUD, asociación directa con Asignatura y Profesor) | 74        |

---

### 2. Might Have (> 74 sp y ≤ 103 sp)

| ID    | Est (sp) | Must | Prioridad | Título                                                          | Acum (sp) |
| :---- | :------- | :--- | :-------- | :-------------------------------------------------------------- | :-------- |
| PBI 11 | 8        | No   | 11 (Media)  | Gestión de Objetivos de Perfil Profesional (OPP)                | 82        |
| PBI 12 | 13       | No   | 12 (Media)  | Gestión de PEA (Ingreso/Edición de campos clave del PEA)        | 95        |
| PBI 13 | 8        | No   | 13 (Media)  | Definición de la relación RA-OPP                                | 103       |

---

### 3. Won’t Have (> 103 sp)

| ID    | Est (sp) | Must | Prioridad | Título                                                                | Acum (sp) |
| :---- | :------- | :--- | :-------- | :-------------------------------------------------------------------- | :-------- |
| PBI 14 | 13       | No   | 14 (Baja)   | Definición de la relación RAA-RA (con nivel de aporte: Bajo, Medio, Alto) | 116       |
| PBI 15 | 21       | No   | 15 (Baja)   | Generación de reportes automáticos de cumplimiento EUR-ACE (Básico)   | 137       |

---

### Items sin Estimación

Actualmente, no hay ítems sin estimación. Todos los PBIs identificados han recibido una estimación de Story Points y se han ubicado dentro de los buckets de capacidad. Esto facilita la planificación y el seguimiento para nuestro release de un mes.

---

Este Product Backlog proporciona una hoja de ruta clara para el equipo de desarrollo, priorizando las funcionalidades más críticas para establecer la base del sistema de acreditación EUR-ACE en un mes. Con el apoyo de la IA, podremos optimizar la ejecución y alcanzar estos ambiciosos objetivos.

<!-- --- -->
