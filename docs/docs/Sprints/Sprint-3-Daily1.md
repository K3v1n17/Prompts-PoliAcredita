# Sprint 3 - Daily 1

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

La transcripción analizada pertenece al priemr Daily Scrum del Sprint 1, realizado durante la ejecución del sprint.

### ACCIÓN
Analiza la transcripción e identifica una lista de problemas, riesgos o impedimentos detectados durante el Daily Scrum.
Para cada elemento identificado, propone una posible solución o acción correctiva que ayude a mitigar el impacto y mejorar el avance del sprint.

### FORMATO DE SALIDA
Devuelve exclusivamente una tabla, sin explicaciones adicionales, con las siguientes columnas:

| Problema / Riesgo / Bloqueo | Posible solución |

Cada fila debe representar un hallazgo único, redactado de forma clara, concreta y accionable.

---

## SALIDA

### 🧩 Tabla de Problemas / Riesgos Identificados y Posibles Soluciones

| Problema / Riesgo / Bloqueo | Posible solución |
|---|---|
| Falta de criterios de aceptación completos al inicio del sprint | Asegurar que todas las historias de usuario ingresen al Sprint Planning con criterios de aceptación claros y validados por el equipo antes de comprometerlas en el sprint |
| Dependencia del frontend respecto a endpoints aún no documentados | Publicar con prioridad el Swagger de los endpoints necesarios para que frontend pueda avanzar sin bloqueos ni supuestos técnicos |
| Avance del backend sin validación temprana de integración | Definir puntos de integración tempranos y pruebas de integración continuas durante el sprint para reducir riesgos de retrabajo |
| Prototipos aún en construcción durante el sprint | Establecer como criterio de "Definition of Ready" que los prototipos estén finalizados antes de iniciar el sprint |
| Actividades investigativas y cursos no alineados explícitamente al Sprint Goal | Alinear las actividades de investigación con historias de usuario claras o tareas técnicas visibles en el Sprint Backlog |
| Falta de visibilidad sobre impedimentos reales (se reporta "ninguno" de forma recurrente) | Fomentar un entorno de seguridad psicológica y preguntas guía en el Daily para identificar impedimentos ocultos o riesgos tempranos |
| Retrasos potenciales en planes de prueba por alta carga de criterios | Dividir planes de prueba en tareas más pequeñas y priorizar pruebas críticas alineadas al Sprint Goal |
| Dependencia de revisiones externas (prototipos, artefactos) para avanzar | Definir acuerdos claros de tiempos de entrega y revisiones intermedias para reducir tiempos de espera |
| Problemas técnicos por convenciones de nombres de archivos en el repositorio | Definir y documentar una convención estándar de nombres de archivos dentro del repositorio para evitar errores al clonar o desplegar |
| Enfoque del Daily en reportes de estado más que en inspección del Sprint Goal | Reorientar el Daily Scrum a evaluar progreso hacia el Sprint Goal y ajustar el plan diario de trabajo en función de riesgos detectados |
