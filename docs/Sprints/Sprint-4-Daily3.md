# Sprint 4 – Daily 3

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

La transcripción analizada pertenece al tercer Daily Scrum del Sprint 4, realizado durante la ejecución del sprint.

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
| Capacidad reducida de un miembro clave por encontrarse fuera del país | Reasignar temporalmente tareas críticas o dividirlas en subtareas pequeñas para reducir el impacto en el avance del sprint. |
| QA bloqueado por falta de funcionalidades listas para probar | Definir entregables parciales diarios y habilitar pruebas incrementales apenas haya commits funcionales. |
| Riesgo de no completar pruebas por poco tiempo restante del sprint | Priorizar historias críticas y coordinar apoyo explícito del equipo para acelerar actividades de testing. |
| Descubrimiento tardío sobre implementación de monitoreo | Validar anticipadamente la viabilidad técnica y decidir rápidamente si se descarta o se mueve a backlog futuro. |
| Dependencia de commits no claramente especificados para iniciar pruebas | Establecer como regla que cada commit indique claramente las historias de usuario incluidas y su estado de completitud. |
| Ambigüedad en criterios de diseño (colores, versiones aprobadas) | Centralizar la versión de diseño aprobada y documentar decisiones de usabilidad para evitar retrabajo. |
| Rol de apoyo (UX/Discovery) reactivo y no planificado | Integrar tareas concretas de validación de diseño dentro del Sprint Backlog y del Daily Scrum. |
| Riesgo de retrabajo por validaciones tardías de usabilidad | Incorporar revisiones de diseño tempranas antes de cerrar desarrollos frontend. |
