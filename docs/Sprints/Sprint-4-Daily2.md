# Sprint 4 – Daily 2

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

La transcripción analizada pertenece al segundo Daily Scrum del Sprint 4, realizado durante la ejecución del sprint.

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
| Retraso en la actualización y cierre de tareas en la herramienta de gestión (Azure) | Acordar como regla del equipo que las tareas se actualicen y cierren el mismo día para mantener transparencia y facilitar la inspección diaria. |
| Bloqueo de QA por falta de entregables del Frontend | Definir entregables parciales mínimos para QA (pantallas iniciales, endpoints mockeados) y sincronizar fechas claras de disponibilidad. |
| Riesgo de arrastre de errores del sprint anterior no finalizados | Priorizar explícitamente en el Sprint Backlog la corrección de errores heredados y limitar el trabajo nuevo hasta estabilizar lo pendiente. |
| Dependencia fuerte del Frontend respecto a la finalización del Backend | Establecer contratos de API estables y tempranos, y usar mocks para desacoplar el avance del Frontend. |
| Capacidad limitada por falta de tiempo de algunos miembros clave | Replanificar carga de trabajo diaria y redistribuir tareas para reducir cuellos de botella por disponibilidad individual. |
| Rol de apoyo (UX/Discovery) poco integrado al flujo diario | Definir tareas concretas de apoyo (revisiones rápidas, validaciones anticipadas) para aprovechar mejor la disponibilidad. |
| Riesgo de documentación incompleta de funcionalidades técnicas | Incluir la documentación como parte explícita del Definition of Done y revisarla en cada Daily. |
