# Sprint 1 - Daily 4

---

## Índice

1. [PROMPT 1](#prompt-1)

---

## PROMPT 1

### ROL
Actúa como un Scrum Master experto, con la capacidad de analizar Daily Scrums, detectar patrones recurrentes, riesgos, impedimentos y bloqueos que afecten el avance del equipo durante la ejecución del sprint, y proponer acciones de mejora alineadas al marco de trabajo Scrum.

### OBJETIVO
Analizar las transcripciones proporcionadas para identificar problemas recurrentes, riesgos potenciales y bloqueos que impacten negativamente al equipo durante la ejecución del sprint.

### CONTEXTO
La organización se encuentra implementando el framework Scrum, trabajando bajo un release de fecha fija compuesto por 4 sprints, cada uno con una duración de una semana.

La transcripción corresponde a un Daily Scrum, cuyo objetivo es promover la inspección y adaptación, pilares fundamentales del framework Scrum, permitiendo al equipo identificar desviaciones, riesgos e impedimentos de manera temprana.

La transcripción analizada pertenece al cuarto Daily Scrum del Sprint 1, realizado durante la ejecución del sprint.   

### ACCIÓN
Analiza la transcripción e identifica una lista de problemas, riesgos o impedimentos detectados durante el Daily Scrum.
Para cada elemento identificado, propone una posible solución o acción correctiva que ayude a mitigar el impacto y mejorar el avance del sprint.

### FORMATO DE SALIDA
Devuelve exclusivamente una tabla, sin explicaciones adicionales, con las siguientes columnas:

| Problema / Riesgo / Bloqueo | Posible solución |

Cada fila debe representar un hallazgo único, redactado de forma clara, concreta y accionable.

---

**RESPUESTA:**

### 📋 Tabla de Problemas / Riesgos Identificados y Posibles Soluciones

| Problema / Riesgo / Bloqueo | Posible solución |
|---|---|
| Plan de pruebas aún inconcluso y con alto volumen pendiente, generando riesgo de no cerrar el sprint | Repriorizar casos de prueba críticos para el sprint y mover pruebas secundarias al siguiente sprint. |
| Funcionalidades presentes en el prototipo pero no implementadas en el producto, bloqueando pruebas | Alinear prototipo, historias de usuario y alcance del sprint; excluir del plan de pruebas lo que no esté en la Definition of Done. |
| Inconsistencias entre criterios de aceptación y comportamiento real (filtros, selección de carreras/facultades) | Revisar y clarificar criterios de aceptación con el Product Owner antes de continuar pruebas o ajustes. |
| Falta de definición clara sobre reglas de negocio (ej. correos institucionales vs. correos libres) | Definir explícitamente reglas de negocio y documentarlas en las historias de usuario y criterios de aceptación. |
| Dependencia de validaciones externas (profesores/cliente) sin confirmación de disponibilidad | Acordar agendas con anticipación o definir un representante sustituto para evitar bloqueos por ausencia del cliente. |
| Riesgo de acumulación de bugs sin clasificar debido a pruebas incompletas | Registrar defectos encontrados de inmediato, clasificarlos por severidad y decidir cuáles entran al sprint actual. |
| Confusión en la gestión de releases y sprints dentro de la herramienta de seguimiento | Definir una estructura clara de releases y sprints y capacitar al equipo en su correcta configuración. |
| Actividades fuera del objetivo del sprint (exploración de modelos, nuevos proyectos) | Revisar el Sprint Goal y limitar el trabajo en curso únicamente a lo comprometido en el Sprint Backlog. |
| Riesgo de retraso del Review por falta de confirmación del cliente | Definir un plan alterno (demo grabada o reprogramación) previamente acordado con el cliente. |
| Actualización tardía o inconsistente del tablero de tareas | Establecer como norma cerrar y actualizar tareas antes de finalizar cada Daily Scrum. |

---

### 📊 Resumen Ejecutivo - Daily 4 Sprint 1

**Riesgos Críticos Identificados:**
- 🔴 **Plan de pruebas inconcluso** - alto riesgo de no cerrar el sprint
- 🔴 **Desalineación prototipo-producto** - bloquea ejecución de pruebas
- 🔴 **Falta de confirmación del cliente** - riesgo para Sprint Review

**Áreas de Mejora Inmediata:**
- Alinear prototipo con alcance real del sprint
- Clarificar criterios de aceptación y reglas de negocio
- Confirmar disponibilidad del cliente para Review

**Acciones Recomendadas:**
1. Repriorizar casos de prueba - ejecutar solo los críticos
2. Reunión urgente PO-Equipo para alinear prototipo vs. alcance
3. Confirmar asistencia del cliente a Sprint Review (plan B: demo grabada)
4. Documentar reglas de negocio pendientes
5. Clasificar bugs por severidad y decidir cuáles cerrar en este sprint
6. Reforzar actualización del tablero al cierre de cada Daily
