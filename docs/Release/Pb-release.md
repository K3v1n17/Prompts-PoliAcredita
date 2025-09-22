# PRODUCT BACKLOG – RELEASE FIJO 1 MES (5 SPRINTS, IA)

---

## PROMPT 4
### Rol 
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

### objetivo 
Necesito definir un product backlog, teniendo en cuenta que el release será un release de fecha fija de un mes - 5 semanas. 

### Formato de salida 
Este product backlog necesito que contenga lo siguiente:
- Muestra tres tablas (en este orden), asignando cada ítem al bucket que corresponda según el acumulado de puntos:
	- Will have (≤ Will-have line)
	- Might have (> Will y ≤ Might-have line)
	- Won’t have (> Might-have line)
- Columnas de cada tabla:
	| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
- Items sin estimación: lista aparte con ID | Título | Motivo (sin estimación).
- Supuestos, riesgos y acciones 

### Contexto 
te doy mi velocidad es en base a un histórico con la que ya contamos y es el siguiente: Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint 

### Accion 
Crea mi product backlog recuerda que para el desarrollo vamos apoyarnos de la IA

---

## RESPUESTA

Capacidad planificada para el release: 5 sprints
Velocidad baja: 54 sp × 5 = 270 sp
Velocidad alta: 75 sp × 5 = 375 sp
Will-have line: 325 sp (punto medio realista)
Might-have line: 375 sp (capacidad máxima)

### Will have (≤ 325 sp)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 1  | 40       | ✅    | 1         | Gestión de organización académica                        | 40         |
| 2  | 50       | ✅    | 2         | Gestión de PEAs y RAA                                    | 90         |
| 3  | 45       | ✅    | 3         | Gestión de RA de carrera                                 | 135        |
| 4  | 40       | ✅    | 4         | Gestión de OPP                                           | 175        |
| 5  | 35       | ✅    | 5         | Gestión de objetivos EUR-ACE                             | 210        |
| 6  | 55       | ✅    | 6         | Definición de relaciones académicas                      | 265        |
| 7  | 45       | ✅    | 7         | Reportes de cumplimiento EUR-ACE                         | 310        |

Total Will-have: 310 sp

### Might have (> 325 y ≤ 375 sp)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 8  | 40       | —    | 8         | Dashboards avanzados para DGIP/CEI/Autoridades           | 350        |

Total Might-have: 40 sp (acum: 350 sp)

### Won’t have (> 375 sp)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 9  | 35       | —    | 9         | Analítica predictiva asistida por IA para acreditación futura | 385   |

### Ítems sin estimación

| ID | Título | Motivo (sin estimación) |
|----|--------|------------------------|
| 10 | Integración con sistemas externos de gestión académica | Falta definición técnica con TI de la EPN |

---

## Supuestos, riesgos y acciones

- Supuesto: Todo el release debe completarse en 5 semanas fijas.
- Supuesto: Se cuenta con IA como soporte en desarrollo → mejora productividad pero mantiene estimaciones conservadoras.
- Supuesto: Must-have = funcionalidades mínimas que permiten verificar cumplimiento EUR-ACE.

- Riesgo 1: Capacidad vs. alcance: Must-have acumula 310 sp (≈95% de la capacidad mínima de 325 sp). Riesgo alto de sobrecarga.
	- Acción: Mantener foco en los 7 must-have (línea ≤ 310 sp).
- Riesgo 2: Might-have dentro del rango alto (40 sp): solo podría entrar si el equipo mantiene velocidad alta.
	- Acción: Solo considerar dashboards (Might have) si la velocidad real ≥ 70 sp por sprint.
- Riesgo 3: Ítems sin estimación: 1 pendiente (integración externa) puede impactar alcance si es requerido por acreditadores.
	- Acción: Aclarar pronto con TI la necesidad real de integración externa.
- Riesgo 4: Release fijo: no hay margen para mover fechas, solo alcance.
	- Acción: Revisar cada sprint con stakeholders para validar valor entregado y evitar sorpresas en la fecha final.
# PRODUCT BACKLOG – RELEASE FIJO 1 MES (VELOCIDAD HISTÓRICA POR SPRINT)

---

## PROMPT 3

### Rol 
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

### Objetivo
Necesito definir un product backlog, teniendo en cuenta que el release será un release de fecha fija de un mes. 

### Formato de salida
Este product backlog necesito que contenga lo siguiente:
- Muestra tres tablas (en este orden), asignando cada ítem al bucket que corresponda según el acumulado de puntos:
	- Will have (≤ Will-have line)
	- Might have (> Will y ≤ Might-have line)
	- Won’t have (> Might-have line)
- Columnas de cada tabla:
	| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
- Items sin estimación: lista aparte con ID | Título | Motivo (sin estimación).
- Supuestos, riesgos y acciones
Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint

### Accion
Crea el Product Backlog

---

## RESPUESTA

Capacidad planificada para el release: 4 sprints
Velocidad baja: 54 sp × 4 = 216 sp
Velocidad alta: 75 sp × 4 = 300 sp
Will-have line: 250 sp (capacidad esperada)
Might-have line: 300 sp (capacidad máxima)

### Will have (≤ 250 sp)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 1  | 20       | ✅    | 1         | Gestión de organización académica (Facultades, Carreras, Profesores) | 20         |
| 2  | 25       | ✅    | 2         | Control de roles y accesos                                             | 45         |
| 3  | 30       | ✅    | 3         | Gestión de PEAs (materias y datos académicos)                         | 75         |
| 4  | 30       | ✅    | 4         | Gestión de RAA (Resultados de aprendizaje de asignatura)              | 105        |
| 5  | 35       | ✅    | 5         | Gestión de RA (Resultados de aprendizaje de carrera)                  | 140        |
| 6  | 35       | ✅    | 6         | Gestión de OPP (Objetivos de perfil profesional)                      | 175        |
| 7  | 40       | ✅    | 7         | Gestión de objetivos EUR-ACE                                          | 215        |
| 8  | 35       | ✅    | 8         | Definición de relaciones RAA → RA → OPP → EUR-ACE                     | 250        |

Total Will-have: 250 sp

### Might have (> 250 y ≤ 300 sp)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 9  | 30       | —    | 9         | Generación de reportes de cumplimiento EUR-ACE                        | 280        |
| 10 | 20       | —    | 10        | Dashboards de seguimiento para DGIP y CEI                             | 300        |

Total Might-have: 50 sp (acum: 300 sp)

### Won’t have (> 300 sp)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 11 | 25       | —    | 11        | Integración con otros sistemas académicos                             | 325        |
| 12 | 30       | —    | 12        | Exportación avanzada de reportes (formatos múltiples, API externa)    | 355        |
| 13 | 25       | —    | 13        | Módulo de analítica predictiva con IA                                 | 380        |

### Ítems sin estimación

| ID | Título | Motivo (sin estimación) |
|----|--------|------------------------|
| 14 | Capacitación de usuarios finales | No es software entregable, esfuerzo de otra área |
| 15 | Migración de datos históricos    | Alcance no definido, depende de calidad de datos existentes |

---

## Supuestos, riesgos y acciones

- Riesgo 1: Must-have = 250 sp (≈83% de capacidad máxima 300 sp, >70% recomendado).
	- Acción: Asegurar priorización estricta, considerar dividir o simplificar funcionalidades grandes (ej. RA y OPP).
- Riesgo 2: Reportes EUR-ACE (ID 9) son críticos para la visión, pero están en Might-have.
	- Acción: Evaluar si deben moverse a Will-have reduciendo alcance en otras épicas (ej. simplificar gestión de OPP).
- Riesgo 3: Dependencias fuertes entre ítems (ej. RAAs deben existir antes de RA).
	- Acción: Planificar los sprints con base en dependencias y revisar backlog en cada refinamiento.
- Riesgo 4: Ítems sin estimación (ID 14 y 15) pueden impactar la planificación futura.
	- Acción: Resolver dependencias y aclarar alcance en refinamientos iniciales.
# PRODUCT BACKLOG – RELEASE FIJO 1 MES (VELOCIDAD HISTÓRICA)

---

## PROMPT 2

### ROL
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

### Objetivo
 Necesito definir un product backlog, 
 
### Formato de salida
 teniendo en cuenta que el release será un release de fecha fija de un mes. Este product backlog necesito que contenga lo siguiente:
- Muestra tres tablas (en este orden), asignando cada ítem al bucket que corresponda según el acumulado de puntos:
	- Will have (≤ Will-have line)
	- Might have (> Will y ≤ Might-have line)
	- Won’t have (> Might-have line)
- Columnas de cada tabla:
	| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
- Items sin estimación: lista aparte con ID | Título | Motivo (sin estimación).
- Supuestos, riesgos y acciones

### Contexto 
Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp)

---

## RESPUESTA

Capacidad planificada para el release: entre 54 y 75 sp
Will-have line: 70 sp (capacidad esperada)
Might-have line: 85 sp (capacidad máxima + margen IA)

### Will have (≤ 70 sp)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 1  | 8        | ✅    | 1         | Gestión de organización académica (Facultades, Carreras, Profesores, Roles) | 8         |
| 2  | 10       | ✅    | 2         | Gestión de PEA y RAA                                                    | 18        |
| 3  | 9        | ✅    | 3         | Gestión de RA de carrera                                                 | 27        |
| 4  | 7        | ✅    | 4         | Gestión de OPP                                                          | 34        |
| 5  | 8        | ✅    | 5         | Gestión de objetivos EUR-ACE                                             | 42        |
| 6  | 12       | ✅    | 6         | Definición de relaciones académicas (RAA → RA → OPP → EUR-ACE)          | 54        |
| 7  | 14       | ✅    | 7         | Reportes de cumplimiento EUR-ACE                                         | 68        |

Total Will-have: 68 sp

### Might have (> 70 y ≤ 85 sp)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 8  | 12       | —    | 8         | Dashboards de seguimiento para DGIP y CEI                                | 80        |
| 9  | 5        | —    | 9         | Exportación de reportes en formatos adicionales (Excel/CSV)              | 85        |

Total Might-have: 17 sp (acumulado 85 sp)

### Won’t have (> 85 sp)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 10 | 8        | —    | 10        | Integración con sistemas externos de gestión académica                   | 93        |
| 11 | 6        | —    | 11        | Módulo de analítica avanzada con IA para predicción de acreditación      | 99        |

Total Won’t-have: 14 sp (acumulado 99 sp)

### Ítems sin estimación

| ID | Título | Motivo (sin estimación) |
|----|--------|------------------------|
| 12 | Interfaz multilingüe (ES/EN) | No es prioridad inmediata, falta detalle de requerimientos |
| 13 | Notificaciones automáticas a profesores/coordinadores | Depende de reglas de negocio aún no definidas |

---

## Supuestos, riesgos y acciones

- Riesgo 1: Must-have ocupa 68 sp (~97% de la capacidad mínima 70 sp) → equipo puede quedar ajustado si la velocidad real se acerca al mínimo.
	- Acción: Monitorear en Sprint 1; si la velocidad real es <14 sp/semana, mover parte de Reportes a “Might have”.
- Riesgo 2: Dos ítems sin estimación → podrían agregar carga no contemplada.
	- Acción: No incluir en el release fijo; reestimar en caso de ser necesarios para releases futuros.
- Riesgo 3: Dependencias entre épicas (ej. relaciones académicas requiere RA, OPP y RAA).
	- Acción: Mantener orden de prioridad actual para minimizar bloqueos.
- Riesgo 4: Must-have >70% del total → poca flexibilidad para incluir extras.
	- Acción: Mantener línea dura de alcance mínimo viable y solo mover “Might-have” si el equipo supera capacidad.
# PRODUCT BACKLOG – RELEASE FIJO 1 MES

---

## PROMPT 1


### Rol 
Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

### Objetivo
Necesito definir un product backlog, 

### Contexzro
teniendo en cuenta que el release será un release de fecha fija de un mes.


### Formato de salida
Este product backlog necesito que contenga lo siguiente:
- Muestra tres tablas (en este orden), asignando cada ítem al bucket que corresponda según el acumulado de puntos:
	- Will have (≤ Will-have line)
	- Might have (> Will y ≤ Might-have line)
	- Won’t have (> Might-have line)
- Columnas de cada tabla:
	| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
- Items sin estimación: lista aparte con ID | Título | Motivo (sin estimación).
- Supuestos, riesgos y acciones

---

## RESPUESTA

Capacidad estimada: 40 sp en total (10 sp por sprint, 4 sprints).
Must-have ≤ 70% de la capacidad total (≈28 sp).

### Will have (≤ Will-have line)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 1  | 5        | ✅    | 1         | Gestión de Facultades, Carreras y Profesores | 5         |
| 2  | 5        | ✅    | 2         | Registro de Materias y PEAs                  | 10        |
| 3  | 4        | ✅    | 3         | Registro de RAA (Resultados de Aprendizaje de Asignatura) | 14 |
| 4  | 4        | ✅    | 4         | Registro de RA (Resultados de Aprendizaje de Carrera)    | 18 |
| 5  | 3        | ✅    | 5         | Registro de OPP (Objetivos de Perfil Profesional)        | 21 |
| 6  | 4        | ✅    | 6         | Registro de Objetivos EUR-ACE                            | 25 |
| 7  | 3        | ✅    | 7         | Definición de relaciones RAA → RA → OPP → EUR-ACE        | 28 |

Will-have line: 28 sp (70% de capacidad).

### Might have (> Will y ≤ Might-have line)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 8  | 5        | —    | 8         | Generación de reportes de cumplimiento EUR-ACE           | 33 |
| 9  | 3        | —    | 9         | Dashboards de seguimiento por rol (DGIP, CEI, Autoridad) | 36 |
| 10 | 4        | —    | 10        | Gestión avanzada de roles y permisos                     | 40 |

Might-have line: 40 sp (capacidad máxima).

### Won’t have (> Might-have line)

| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
|----|----------|------|-----------|--------|-----------|
| 11 | 5        | —    | 11        | Exportación de reportes a formatos externos (Excel/PDF avanzado) | 45 |
| 12 | 4        | —    | 12        | Integración con sistemas externos de la EPN              | 49 |

### Ítems sin estimación

| ID | Título | Motivo (sin estimación) |
|----|--------|------------------------|

(No hay ítems sin estimación en este backlog)

---

## Supuestos, riesgos y acciones

- Supuesto: El equipo puede entregar 10 sp por semana (capacidad total 40 sp en 1 mes).
- Riesgo: Must-have ocupa el 70% de la capacidad (28/40 sp). Si surgen imprevistos, podría no completarse todo el must-have.
- Riesgo: Los might-have dependen de que no haya desvíos en los must-have.
- Acción: Si el avance es menor al esperado, priorizar los must-have y mover los might-have a un release posterior.
- Acción: Si se libera capacidad extra, considerar adelantar algún won’t-have.

## PROMPT 5

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

ACCION : Crea mi product backlog release recuerda que para el desarrollo vamos apoyarnos de la IA

Formato de salida Este product backlog necesito que contenga lo siguiente:

Muestra tres tablas (en este orden), asignando cada ítem al bucket que corresponda según el acumulado de puntos: Will have (≤ Will-have line) Might have (> Will y ≤ Might-have line) Won’t have (> Might-have line) Columnas de cada tabla: | ID | Est (sp) | Must | Prioridad | Título | Acum (sp) | Items sin estimación: lista aparte con ID Título Motivo (sin estimación)

**Respuesta:**

¡Excelente! Asumo nuevamente mi rol de Product Owner, experto en gestión de productos de software. Dada nuestra experiencia previa, este es el siguiente paso crucial para la implementación del Sistema de Gestión de Acreditación EUR-ACE en la EPN.

**Comprensión del Contexto y Objetivo del Release (Iteración 2):**
Asumo que los ítems del Product Backlog del release anterior (la infraestructura fundamental y la vinculación RA-EUR-ACE) han sido completados. El objetivo de este *nuevo* release de un mes es **completar la trazabilidad académica descendente**, permitiendo la **conexión entre los Resultados de Aprendizaje de Asignatura (RAA) y los Resultados de Aprendizaje de Carrera (RA)**, así como la definición y vinculación de los **Objetivos de Perfil Profesional (OPP)**. Adicionalmente, buscaremos habilitar la **gestión integral de los Programas de Estudios Académicos (PEA)** e introducir una **capacidad básica de reporte** para que la DGIP pueda comenzar a visualizar el cumplimiento.

**Velocidad del Equipo y Definición de Líneas:**
Con una velocidad histórica del equipo entre 54 SP (baja) y 75 SP (alta) por sprint, y considerando que este es un release de un mes (equivalente a un sprint), estableceré nuestras líneas de capacidad de la siguiente manera:

*   **Will-have line:** **70 Story Points (sp)**. Este es un objetivo ambicioso pero realista, buscando optimizar la entrega de valor sin sobrecargar al equipo y manteniendo un pequeño colchón.
*   **Might-have line:** **95 Story Points (sp)**. Esta línea nos permite incluir funcionalidades adicionales si el equipo supera las expectativas, entregando valor extra más allá del mínimo viable para esta fase.

---

### SPRINT MAPPING (para el Release de 1 Mes: Expansión de Trazabilidad EUR-ACE)

**Objetivo del Release:**
Expandir la trazabilidad académica para el sistema de acreditación EUR-ACE, permitiendo:
1.  La gestión completa de los Programas de Estudios Académicos (PEA).
2.  La definición y vinculación de los Objetivos de Perfil Profesional (OPP) a los Resultados de Aprendizaje de Carrera (RA).
3.  Establecer la relación de contribución entre los RAA de cada asignatura y los RA de la carrera (con niveles Bajo, Medio, Alto).
4.  Generar un reporte básico de cumplimiento RA-EUR-ACE para la DGIP.

**Estrategia de Priorización para el Release:**
La estrategia se enfoca en completar las cadenas de trazabilidad y habilitar la entrada de datos clave, así como la primera visualización de los resultados.
1.  **Datos Fundamentales (PBI 1):** Gestión completa de PEA, ya que contienen los RAA y son el cuerpo de la asignatura.
2.  **Trazabilidad Descendente (PBI 2, 3, 4):** Establecer la contribución RAA-RA y definir los OPP junto con su vinculación a los RA.
3.  **Visualización Inicial (PBI 5):** Un reporte básico que permita a la DGIP empezar a evaluar el cumplimiento EUR-ACE.

---

### Product Backlog (Release de 1 Mes: Expansión de Trazabilidad EUR-ACE)

**Capacidad estimada para el Release (1 mes):**
*   **Will-have line:** 70 Story Points (sp) - Objetivo de entrega para el release.
*   **Might-have line:** 95 Story Points (sp) - Capacidad de estiramiento si el equipo sobrepasa el objetivo principal.

---

### 1. Will Have (≤ 70 sp)

| ID     | Est (sp) | Must | Prioridad | Título                                                                       | Acum (sp) |
| :----- | :------- | :--- | :-------- | :--------------------------------------------------------------------------- | :-------- |
| PBI 1  | 13       | Sí   | 1 (Crítica) | Gestión de PEAs (CRUD completo con campos detallados: Unidad Académica, Carrera, Unidad de organización curricular, Nombre Asignatura, Código, Créditos) | 13        |
| PBI 2  | 21       | Sí   | 2 (Crítica) | Definición de la relación RAA-RA (con nivel de aporte: Bajo, Medio, Alto)    | 34        |
| PBI 3  | 8        | Sí   | 3 (Alta)    | Gestión de Objetivos de Perfil Profesional (OPP) (CRUD)                      | 42        |
| PBI 4  | 8        | Sí   | 4 (Alta)    | Definición de la relación RA-OPP                                             | 50        |
| PBI 5  | 13       | Sí   | 5 (Alta)    | Generación de reporte de cumplimiento RA-EUR-ACE (Básico por Carrera y Facultad) | 63        |

---

### 2. Might Have (> 70 sp y ≤ 95 sp)

| ID     | Est (sp) | Must | Prioridad | Título                                                              | Acum (sp) |
| :----- | :------- | :--- | :-------- | :------------------------------------------------------------------ | :-------- |
| PBI 6  | 8        | No   | 6 (Media)   | Optimización de interfaz para vinculación RA-EUR-ACE              | 71        |
| PBI 7  | 8        | No   | 7 (Media)   | Funcionalidad de búsqueda y filtrado avanzada de Asignaturas, RA y RAA | 79        |
| PBI 8  | 8        | No   | 8 (Media)   | Mejora en la visualización de la estructura académica (árbol de Facultades/Carreras/Asignaturas) | 87        |

---

### 3. Won’t Have (> 95 sp)

| ID     | Est (sp) | Must | Prioridad | Título                                                               | Acum (sp) |
| :----- | :------- | :--- | :-------- | :------------------------------------------------------------------- | :-------- |
| PBI 9  | 13       | No   | 9 (Baja)    | Gestión de versiones de PEAs                                         | 100       |
| PBI 10 | 8        | No   | 10 (Baja)   | Notificaciones automáticas para coordinadores sobre PEAs incompletos | 108       |
| PBI 11 | 21       | No   | 11 (Baja)   | Generación de reporte de cumplimiento completo (incluyendo RAA-RA y RA-OPP) | 129       |

---

### Items sin Estimación

Actualmente, no hay ítems sin estimación. Todos los PBIs identificados han recibido una estimación de Story Points y se han ubicado dentro de los buckets de capacidad, lo que facilita la planificación y el seguimiento para nuestro release de un mes.

---

Este Product Backlog está diseñado para maximizar el valor entregado en el próximo mes, completando elementos clave de trazabilidad y proporcionando una capacidad de reporte inicial, lo cual es fundamental para el proceso de acreditación EUR-ACE en la EPN. Contaremos con el apoyo de la IA para optimizar la eficiencia del desarrollo y asegurar la calidad de la entrega.

<!-- --- -->
