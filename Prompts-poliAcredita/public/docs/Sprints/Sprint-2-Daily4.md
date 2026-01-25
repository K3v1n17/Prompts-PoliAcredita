# Sprint 2 - Daily 4

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

La transcripción analizada pertenece al cuarto Daily Scrum del Sprint 2, realizado durante la ejecución del sprint.

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
| Falta de tiempo crítico para cerrar funcionalidades clave antes de la Sprint Review | Repriorizar explícitamente con el equipo las historias mínimas indispensables para la review y descartar alcance no crítico |
| Gestión de roles sigue incompleta y se asume que no se podrá terminar en el sprint | Registrar la gestión de roles como deuda técnica visible en el backlog y definir una HU técnica prioritaria para el siguiente sprint |
| Confusión y desacuerdo entre frontend y backend sobre la responsabilidad de la paginación | Alinear en una sesión corta de definición técnica quién controla la paginación y documentarlo como acuerdo técnico del equipo |
| Bugs persistentes en paginación afectan visualización correcta de datos | Corregir la paginación como tarea prioritaria antes de la review y validar con datos reales (>2 registros) |
| Dependencia del prototipo aprobado bloquea avance de desarrollo | Establecer política clara: qué se puede desarrollar con prototipo preliminar y qué requiere aprobación formal |
| Cambios de alcance tardíos (campo foto) sin criterios de aceptación claros | Definir criterios mínimos de aceptación incluso para cambios pequeños y validarlos rápidamente con QA/PO |
| Falta de prototipo para nuevas funcionalidades genera dudas en pruebas y desarrollo | Crear wireframe ligero o definición visual mínima cuando se agreguen campos o flujos nuevos |
| Pruebas y correcciones se realizan bajo alta presión de tiempo | Establecer ventanas claras de freeze antes de la review para estabilización y retesting |
| Alcance del sprint percibido como mayor al estimado inicialmente | Reforzar la planificación del sprint con validación explícita del equipo de desarrollo sobre el alcance comprometido |
| Falta de criterios claros para decidir qué defectos se corrigen y cuáles se postergan | Definir reglas de decisión rápidas (impacto en demo, bloqueo funcional, impacto en usuario) para priorizar bugs |
| Coordinación reactiva y trabajo fuera de horarios genera desgaste del equipo | Ajustar expectativas del sprint y fomentar acuerdos de disponibilidad realistas durante la planificación |
| Riesgo de que la Sprint Review falle por inestabilidad funcional | Preparar escenario de demo controlado con datos y roles validados previamente |
