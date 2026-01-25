# Sprint 4 - Daily 1

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

La transcripción analizada pertenece al primer Daily Scrum del Sprint 4, realizado durante la ejecución del sprint.    

### ACCIÓN
Analiza la transcripción e identifica una lista de problemas, riesgos o impedimentos detectados durante el Daily Scrum.
Para cada elemento identificado, propone una posible solución o acción correctiva que ayude a mitigar el impacto y mejorar el avance del sprint.

### FORMATO DE SALIDA
Devuelve exclusivamente una tabla, sin explicaciones adicionales, con las siguientes columnas:

| Problema / Riesgo / Bloqueo | Posible solución |

Cada fila debe representar un hallazgo único, redactado de forma clara, concreta y accionable.

---

**RESPUESTA:**

### 🧩 Tabla de Problemas / Riesgos Identificados y Posibles Soluciones

| Problema / Riesgo / Bloqueo | Posible solución |
|---|---|
| Dependencia temprana entre backend y frontend para consumo de endpoints | Acordar contratos de API claros (mock o Swagger) y definir endpoints mínimos priorizados para evitar bloqueos por dependencia técnica. |
| Problemas de compatibilidad de diseños móviles con el proyecto existente | Realizar una revisión técnica temprana de compatibilidad y definir lineamientos de diseño comunes antes de avanzar con nuevas pantallas. |
| Avance en QA condicionado a que existan pantallas o funcionalidades listas | Planificar pruebas anticipadas (revisión de criterios de aceptación, pruebas de API o pruebas estáticas) para no detener el trabajo de QA. |
| Falta de claridad en asignación de tareas para apoyo en pruebas | Definir explícitamente tareas de apoyo en el Daily o durante la planificación diaria para evitar tiempos muertos. |
| Riesgo de trabajo en paralelo sin sincronización (scripts, reports, endpoints) | Establecer puntos diarios de sincronización técnica (pull requests revisados, integración continua) para reducir retrabajo. |
| Participación limitada de algunos miembros sin tareas concretas asignadas | Revisar la capacidad diaria del equipo y redistribuir tareas pequeñas o de apoyo para maximizar el aporte de todos. |
