# Sprint 1 - Daily 3

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

La transcripción analizada pertenece al tercer Daily Scrum del Sprint 1, realizado durante la ejecución del sprint.  

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
| Dependencia del frontend respecto a endpoints aún no disponibles para completar integraciones | Priorizar y coordinar la entrega de endpoints críticos o definir mocks temporales para permitir pruebas e integración continua. |
| Sobrecarga y lentitud en la ejecución de planes de prueba, generando cuello de botella | Reducir el alcance de pruebas para el sprint, priorizando escenarios críticos, y distribuir parte de las pruebas dentro del equipo. |
| Riesgo de no finalizar las pruebas dentro del sprint debido a su extensión | Replanificar el Sprint Backlog ajustando expectativas y moviendo pruebas no críticas al siguiente sprint. |
| Falta de claridad y aprendizaje en el uso del tablero (remaining, tareas completadas) | Realizar una breve sesión de alineación sobre el uso del tablero y definir una guía simple para actualizar tareas diariamente. |
| Trabajo extendido fuera de horario (hasta la madrugada) para completar actividades | Revisar la carga de trabajo del sprint y ajustar la planificación para mantener un ritmo sostenible. |
| Uso intensivo de reuniones externas (feedback con profesores) que impactan el foco del sprint | Consolidar feedback en una sola instancia diaria o definir ventanas específicas para evitar interrupciones constantes. |
| Riesgo de acumulación de trabajo para el siguiente sprint debido a pruebas incompletas | Identificar explícitamente este riesgo en la planificación y reservar capacidad del próximo sprint para absorber el remanente. |
| Falta de identificación temprana de impedimentos hasta avanzada la conversación del Daily | Reforzar la dinámica del Daily Scrum enfocando las tres preguntas en bloqueos y riesgos desde el inicio. |

---

### 📊 Resumen Ejecutivo - Daily 3 Sprint 1

**Riesgos Críticos Identificados:**
- 🔴 **Sobrecarga en QA** - riesgo de no completar pruebas en el sprint
- 🔴 **Trabajo extendido fuera de horario** - ritmo no sostenible
- 🔴 **Dependencias de endpoints** - bloquea integración frontend

**Áreas de Mejora Inmediata:**
- Ajustar alcance de pruebas a capacidad real
- Revisar carga de trabajo para ritmo sostenible
- Coordinar entrega de endpoints críticos o usar mocks

**Acciones Recomendadas:**
1. Replanificar Sprint Backlog - priorizar historias críticas
2. Sesión breve sobre uso del tablero (15 min)
3. Definir ventanas específicas para feedback externo
4. Evaluar mocks para desbloquear frontend
5. Reservar capacidad en Sprint 2 para pruebas remanentes
