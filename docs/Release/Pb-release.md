# PRODUCT BACKLOG – RELEASE FIJO 1 MES (5 SPRINTS, IA)

---

## PROMPT 4

Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

Necesito definir un product backlog, teniendo en cuenta que el release será un release de fecha fija de un mes - 5 semanas. Este product backlog necesito que contenga lo siguiente:
- Muestra tres tablas (en este orden), asignando cada ítem al bucket que corresponda según el acumulado de puntos:
	- Will have (≤ Will-have line)
	- Might have (> Will y ≤ Might-have line)
	- Won’t have (> Might-have line)
- Columnas de cada tabla:
	| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
- Items sin estimación: lista aparte con ID | Título | Motivo (sin estimación).
- Supuestos, riesgos y acciones
Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint
 te doy mi velocidad es en base a un histórico con la que ya contamos y es el siguiente: Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint Crea mi product backlog recuerda que para el desarrollo vamos apoyarnos de la IA
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

Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

Necesito definir un product backlog, teniendo en cuenta que el release será un release de fecha fija de un mes. Este product backlog necesito que contenga lo siguiente:
- Muestra tres tablas (en este orden), asignando cada ítem al bucket que corresponda según el acumulado de puntos:
	- Will have (≤ Will-have line)
	- Might have (> Will y ≤ Might-have line)
	- Won’t have (> Might-have line)
- Columnas de cada tabla:
	| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
- Items sin estimación: lista aparte con ID | Título | Motivo (sin estimación).
- Supuestos, riesgos y acciones
Velocidad del Equipo: Velocidad Baja: 54 Story Points (sp) Velocidad Alta: 75 Story Points (sp) por sprint

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

Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos. Necesito definir un product backlog, teniendo en cuenta que el release será un release de fecha fija de un mes. Este product backlog necesito que contenga lo siguiente:
- Muestra tres tablas (en este orden), asignando cada ítem al bucket que corresponda según el acumulado de puntos:
	- Will have (≤ Will-have line)
	- Might have (> Will y ≤ Might-have line)
	- Won’t have (> Might-have line)
- Columnas de cada tabla:
	| ID | Est (sp) | Must | Prioridad | Título | Acum (sp) |
- Items sin estimación: lista aparte con ID | Título | Motivo (sin estimación).
- Supuestos, riesgos y acciones
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

Actúa como un Product Owner experto con un profundo conocimiento de metodologías ágiles y gestión de productos.

Necesito definir un product backlog, teniendo en cuenta que el release será un release de fecha fija de un mes.
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
