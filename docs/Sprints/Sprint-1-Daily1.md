# Sprint 1 - Daily 1

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

La transcripción analizada pertenece al primer Daily Scrum del Sprint 1, realizado durante la ejecución del sprint.

### ACCIÓN
Analiza la transcripción e identifica una lista de problemas, riesgos o impedimentos detectados durante el Daily Scrum.
Para cada elemento identificado, propone una posible solución o acción correctiva que ayude a mitigar el impacto y mejorar el avance del sprint.

### FORMATO DE SALIDA
Devuelve exclusivamente una tabla, sin explicaciones adicionales, con las siguientes columnas:

| Problema / Riesgo / Bloqueo | Posible solución |

Cada fila debe representar un hallazgo único, redactado de forma clara, concreta y accionable.



---

## SALIDA

### 📋 Tabla de Problemas / Riesgos Identificados y Posibles Soluciones

| Problema / Riesgo / Bloqueo | Posible solución |
|---|---|
| Daily Scrum no sigue claramente la estructura de las tres preguntas (qué hice, qué haré, impedimentos) | Reforzar la guía del Daily Scrum y que el Scrum Master recuerde explícitamente las tres preguntas al inicio para asegurar foco en inspección y adaptación. |
| Falta de identificación clara de impedimentos por parte de algunos miembros (se declara "no he tenido ningún problema" sin mayor análisis) | Fomentar una cultura de transparencia, incentivando al equipo a reflexionar sobre riesgos, dependencias y posibles bloqueos, no solo problemas actuales. |
| Dependencia explícita entre roles (QA solicita apoyo a Kevin para creación de tareas) que puede generar cuello de botella | Visualizar y distribuir las tareas en el Sprint Backlog para que el equipo se autoorganice y reducir dependencias en una sola persona. |
| Riesgo de sobrecarga de trabajo en QA ("no voy a alcanzar a hacer todos estos…") | Replanificar el sprint ajustando alcance, priorizando historias críticas y validando la capacidad real del equipo durante el sprint. |
| Dependencia de entregables de diseño (prototipos) para avanzar en definición de historias de usuario | Alinear acuerdos de "Definition of Ready" y coordinar entregas parciales de prototipos para no bloquear la creación de historias. |
| Ausencia recurrente de miembros clave del equipo (Front y DevOps) en el Daily Scrum | Reforzar la obligatoriedad del Daily Scrum para todo el equipo de desarrollo y escalar el riesgo al Product Owner si persiste la ausencia. |
| El Daily se utiliza parcialmente como reporte de estado y no como planificación diaria conjunta | Redirigir el Daily hacia la sincronización del equipo y la planificación de las próximas 24 horas, limitando explicaciones extensas. |
| Riesgo de desalineación con la visión del producto por retroalimentación tardía | Incorporar revisiones frecuentes de la visión del producto y validar ajustes tempranos con el Product Owner durante el sprint. |

---

### 📊 Resumen Ejecutivo - Daily 1 Sprint 1

**Riesgos Críticos Identificados:**
- 🔴 **Ausencias recurrentes** de miembros clave (Front, DevOps)
- 🔴 **Sobrecarga en QA** - riesgo de no completar todas las tareas
- 🔴 **Dependencias bloqueantes** en prototipos de diseño

**Áreas de Mejora Inmediata:**
- Reforzar estructura del Daily (3 preguntas)
- Cultura de transparencia en identificación de impedimentos
- Distribución de carga de trabajo y autoorganización

**Acciones Recomendadas:**
1. Scrum Master debe facilitar las 3 preguntas explícitamente
2. Validar capacidad real del equipo vs alcance del sprint
3. Escalar ausencias recurrentes al Product Owner
4. Revisar Definition of Ready para prototipos
