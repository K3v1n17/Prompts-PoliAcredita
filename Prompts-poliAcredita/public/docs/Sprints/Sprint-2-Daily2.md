# Sprint 2 - Daily 2

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

La transcripción analizada pertenece al segundo Daily Scrum del Sprint 2, realizado durante la ejecución del sprint.

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
| Falta de presencia del Scrum Master en el Daily Scrum | Asegurar la asistencia del Scrum Master o designar explícitamente a un facilitador alterno para garantizar el enfoque en inspección y adaptación |
| Retrasos en la integración de código por falta de push oportuno | Establecer como práctica acordada realizar push diario al finalizar pruebas locales para evitar acumulación de trabajo |
| Complejidad técnica en pantallas y matrices que retrasa el avance | Revisar en conjunto soluciones previas reutilizables y promover sesiones de colaboración técnica (pair programming) |
| Riesgo de cuello de botella en pruebas por poco tiempo disponible | Priorizar la ejecución de pruebas críticas y coordinar apoyo temprano del equipo para reducir carga al final del sprint |
| Dependencia externa para validación de prototipos (respuesta del profesor) | Definir criterios de validación internos temporales para no bloquear el avance mientras llega la retroalimentación externa |
| Incertidumbre en el estado real de las Historias de Usuario | Reforzar el uso del Definition of Ready y Definition of Done antes de aceptar y dar por avanzadas las HU |
| Discusión recurrente sobre dividir o no las HU en diseño y desarrollo | Acordar en retrospectiva una política clara de descomposición de HU alineada a Scrum y al proceso de pruebas |
| Problemas con visibilidad de commits y notificaciones | Definir un estándar de mensajes de commit (incluyendo descripción) y validar la configuración de notificaciones del repositorio |
| Riesgo de presión por tiempo al cierre del sprint | Replanificar tareas diariamente según avance real y transparentar riesgos de cumplimiento lo antes posible |
| Falta de impedimentos claros declarados pese a señales de retraso | Fomentar un entorno seguro para declarar impedimentos reales y tratarlos como responsabilidad del equipo |
