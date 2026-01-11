# Sprint 4 – Daily 4

## Índice
1. [PROMPT 1](#prompt-1)

## PROMPT 1

### ROL
Actúa como un Scrum Master experto, con la capacidad de analizar Daily Scrums, detectar patrones recurrentes, riesgos, impedimentos y bloqueos que afecten el avance del equipo durante la ejecución del sprint, y proponer acciones de mejora alineadas al marco de trabajo Scrum.

### OBJETIVO
Analizar las transcripciones proporcionadas para identificar problemas recurrentes, riesgos potenciales y bloqueos que impacten negativamente al equipo durante la ejecución del sprint.

### CONTEXTO
La organización se encuentra implementando el framework Scrum, trabajando bajo un release de fecha fija compuesto por 4 sprints, cada uno con una duración de una semana.

La transcripción corresponde a un Daily Scrum, cuyo objetivo es promover la inspección y adaptación, pilares fundamentales del framework Scrum, permitiendo al equipo identificar desviaciones, riesgos e impedimentos de manera temprana.

La transcripción analizada pertenece al cuarto Daily Scrum del Sprint 4, realizado durante la ejecución del sprint.

### ACCIÓN
Analiza la transcripción e identifica una lista de problemas, riesgos o impedimentos detectados durante el Daily Scrum.
Para cada elemento identificado, propone una posible solución o acción correctiva que ayude a mitigar el impacto y mejorar el avance del sprint.

### FORMATO DE SALIDA
Devuelve exclusivamente una tabla, sin explicaciones adicionales, con las siguientes columnas:

| Problema / Riesgo / Bloqueo | Posible solución |

Cada fila debe representar un hallazgo único, redactado de forma clara, concreta y accionable.

## SALIDA

### 🧩 Tabla de Problemas / Riesgos / Bloqueos

| Problema / Riesgo / Bloqueo | Posible solución |
|---|---|
| Capacidad limitada de desarrollo por disponibilidad reducida de un integrante clave | Reasignar temporalmente tareas pendientes o dividirlas en subtareas pequeñas para mitigar el impacto en el cumplimiento del sprint. |
| QA bloqueado por falta de funcionalidades listas para probar | Acordar entregables parciales diarios y notificar explícitamente cuándo una funcionalidad está disponible para pruebas. |
| Alto riesgo de no completar todas las pruebas por poco tiempo restante del sprint | Priorizar historias críticas y coordinar apoyo inmediato del equipo para acelerar las actividades de testing. |
| Descubrimiento tardío sobre la viabilidad de implementar monitoreo | Tomar una decisión inmediata (implementar o mover a backlog) basada en valor y esfuerzo para evitar dispersión del equipo. |
| Falta de claridad en los commits respecto a historias de usuario incluidas | Definir como norma que cada commit indique claramente las HU abordadas y su estado para facilitar pruebas y seguimiento. |
| Ambigüedad en criterios de diseño aprobados (colores y versiones) | Centralizar y documentar la versión de diseño validada como única fuente de verdad para el equipo. |
| Riesgo de retrabajo por validaciones de usabilidad tardías | Incorporar revisiones de diseño antes de cerrar desarrollos frontend y previo a iniciar pruebas. |
| Rol de apoyo (UX/Discovery) reactivo y sin tareas planificadas | Integrar tareas específicas de validación y soporte dentro del Sprint Backlog para aprovechar su disponibilidad. |
| Dependencia del inicio de pruebas a un único commit completo | Promover integración continua y commits incrementales que permitan iniciar pruebas lo antes posible. |
