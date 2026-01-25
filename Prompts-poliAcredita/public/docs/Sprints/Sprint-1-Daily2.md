# Sprint 1 - Daily 2

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

La transcripción analizada pertenece al segundo Daily Scrum del Sprint 1, realizado durante la ejecución del sprint. 

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
| Interrupciones por problemas de despliegue que desvían al equipo del trabajo planificado del sprint | Definir un responsable claro de despliegues y establecer una ventana fija fuera del horario del Daily para atender incidencias operativas. |
| Caída del entorno que impidió realizar pruebas el día anterior | Asegurar la estabilidad del entorno de pruebas antes del sprint y definir un plan de contingencia cuando el ambiente no esté disponible. |
| Dependencia fuerte del equipo frontend respecto a los prototipos aún no finalizados | Acordar entregables intermedios de prototipos (versiones base) para permitir avanzar al frontend sin esperar el diseño final. |
| Dificultad en la generación de prototipos debido a inconsistencias de la herramienta utilizada (IA) | Establecer criterios claros de referencia visual y validar tempranamente los prototipos para evitar retrabajo. |
| Falta de identificación explícita de impedimentos por parte de algunos miembros ("no hay problemas") | Reforzar el propósito del Daily Scrum enfocándolo en riesgos y bloqueos, no solo en el reporte de actividades. |
| Trabajo paralelo en temas no planificados del sprint (reuniones y exploración de modelos ML) | Revisar el Sprint Backlog y alinear cualquier actividad adicional con el objetivo del sprint o posponerla al siguiente. |
| Riesgo de falta de actualización del tablero por tareas no cerradas | Establecer como norma del equipo cerrar o actualizar tareas diariamente antes o después del Daily Scrum. |

---

### 📊 Resumen Ejecutivo - Daily 2 Sprint 1

**Riesgos Críticos Identificados:**
- 🔴 **Caída del entorno de pruebas** - impide avance de QA
- 🔴 **Dependencia de prototipos** - bloquea desarrollo frontend
- 🟡 **Interrupciones por despliegues** - desvían al equipo del sprint

**Áreas de Mejora Inmediata:**
- Estabilidad de entornos de desarrollo y pruebas
- Entregas parciales de prototipos
- Definición de ventanas operativas para despliegues

**Acciones Recomendadas:**
1. Asignar responsable de estabilidad de entornos
2. Acordar con Discovery entregables intermedios de diseño
3. Establecer ventanas fijas para despliegues (fuera del Daily)
4. Revisar trabajos no planificados contra objetivo del sprint
