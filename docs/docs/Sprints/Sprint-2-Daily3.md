# Sprint 2 - Daily 3

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

La transcripción analizada pertenece al tercer Daily Scrum del Sprint 2, realizado durante la ejecución del sprint.     

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
| Dependencia fuerte entre roles y lógica de negocio (coordinador, CI, profesor) genera confusión y errores recurrentes | Refinar y documentar claramente las reglas de roles y jerarquías; actualizar las HU para reflejar explícitamente dependencias y restricciones de roles |
| Gestión de roles incompleta en backend (no existe endpoint o funcionalidad clara para asignar permisos dinámicamente) | Priorizar una HU técnica para implementar gestión de permisos/roles desde backend y exponer endpoints claros para frontend |
| Existen usuarios coordinadores sin carrera asignada, lo que rompe flujos funcionales | Definir validación obligatoria: un coordinador no puede iniciar sesión ni operar sin carrera asignada; mostrar mensaje de error claro en login |
| Posibilidad de crear usuarios directamente como coordinador sin pasar por rol de profesor | Corregir lógica de creación de usuarios para que coordinador sea un rol derivado y no un rol inicial |
| Historias de Usuario incompletas o ambiguas respecto a alcance por carrera (qué ve y crea cada rol) | Revisar y mejorar criterios de aceptación de las HU, especificando claramente filtros por carrera y responsabilidades por rol |
| Falta de validaciones en formularios (permite guardar sin completar campos obligatorios) | Incorporar validaciones frontend y backend alineadas al plan de pruebas definido |
| Bugs frecuentes en ambientes (confusión entre producción, develop y enlaces activos) | Definir y comunicar claramente URLs por ambiente; agregar indicadores visuales del entorno en la aplicación |
| Dependencia de endpoints backend que llegan tarde retrasa pruebas y avance | Acordar contratos de API tempranos (mock o swagger) para permitir pruebas paralelas mientras backend finaliza |
| Deuda técnica conocida en gestión de roles se está postergando reiteradamente | Registrar explícitamente la deuda técnica en el backlog y priorizarla en el siguiente sprint para evitar arrastre |
| Aprobaciones de prototipos externas (PO/profesor) generan incertidumbre en planificación | Definir fechas límite claras para feedback y usar prototipos versionados para no bloquear avance del sprint |
| Integración tardía de componentes (POC que se integrará recién en próximo sprint) | Evaluar impacto en el objetivo del sprint y, de ser necesario, renegociar alcance con el PO |
| Comunicación reactiva ante bloqueos técnicos (se detectan tarde y de forma informal) | Establecer como regla del Daily explicitar impedimentos técnicos reales y responsables de seguimiento inmediato |
