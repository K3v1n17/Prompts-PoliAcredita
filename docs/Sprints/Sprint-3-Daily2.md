# Sprint 3 - Daily 2

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

La transcripción analizada pertenece al segundo  Daily Scrum del Sprint 3, realizado durante la ejecución del sprint.        

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
| Inconsistencia en nombres de campos entre front y back (“aptitudes” vs “actitudes”) que bloquea la creación de registros | Acordar y documentar un contrato de API (Swagger actualizado) y validar con pruebas de integración automáticas antes de desplegar |
| Dependencia del equipo de Frontend de correcciones pendientes en el Backend para continuar | Definir prioridades claras y aplicar swarming temporal para resolver bloqueos críticos del back antes de avanzar nuevas funcionalidades |
| Falta de claridad sobre la configuración de ramas (no existe rama dev) y despliegues directos a producción | Establecer una estrategia de branching mínima (dev/main) y reglas de despliegue para reducir riesgos en producción |
| Notificaciones de correo no llegan al crear cambios en el back, generando confusión en el equipo | Revisar y estandarizar el flujo de Pull Requests y notificaciones, definiendo cuándo y cómo se envían los correos |
| Alto volumen de historias de usuario respecto a sprints anteriores, afectando pruebas y tiempos | Re-evaluar la capacidad del sprint y dividir historias grandes en tareas más pequeñas y testeables |
| Planes de prueba incompletos mientras el desarrollo continúa avanzando | Alinear al equipo para que los criterios de aceptación y planes de prueba se definan antes de cerrar cada historia |
| Dependencia del prototipo validado por el profesor para avanzar en otras tareas | Establecer una fecha límite de validación y definir supuestos claros para no detener el trabajo del equipo |
| Falta de visibilidad temprana de riesgos (varios “no tengo problemas” pese a dependencias claras) | Reforzar en el Daily la identificación explícita de riesgos y bloqueos, aunque aún no se hayan materializado |
