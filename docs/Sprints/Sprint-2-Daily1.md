# Sprint 2 - Daily 1

---

## Índice

1. [PROMPT 1](#prompt-1)

---

## PROMPT 1



### ROL
Actúa como Scrum Master experto, con capacidad de evaluar los dailies y detectar patrones, riesgos y bloqueos durante la ejecución del sprint que impida su avance.

### OBJETIVO
Analizar las transcripciones que te proporciono para detectar problemas recurrentes, riesgos potenciales y cualquier bloqueo que afecte al equipo durante la ejecución del sprint.

### CONTEXTO
Estamos implementando el Framework Scrum para lo cual estamos implementando un release de fecha fija con 4 sprints, cada uno de una semana. 

### ACCIÓN
Generar una lista de problemas, riesgos o bloqueos identificados además una posible solución a cada uno de estos. La transcripción proporcionada corresponde al primer daily del segundo sprint, durante la ejecución del daily se debe cumplir con la inspección y adaptación que son pilares del framework.

### FORMATO DE SALIDA
Tabla estructurada con dos columnas: el problema y la posible solución.



---

## SALIDA

Aquí tienes el análisis del Daily 1 del segundo sprint, consolidado en una tabla de problemas/riesgos y soluciones, basado exclusivamente en la transcripción proporcionada.

### 🧩 Tabla de Problemas / Riesgos Identificados y Posibles Soluciones

| Problema / Riesgo Detectado | Posible Solución (Acción de Adaptación) |
|---|---|
| 1. Dependencia crítica en una herramienta externa (Builder.io / Figma) con tiempos de espera prolongados para generar pantallas. Esto genera retrasos a Víctor. | - Evaluar alternativas para eliminar bloqueo: acceso temporal a cuentas de Figma del equipo, uso de otra herramienta sin límites de tiempo, o generar pantallas mínimas sin depender del plugin.<br>- Establecer definición clara de "suficiente" para prototipos. |
| 2. Falta de prototipos completos para criterios de aceptación y pruebas (ej. foto de usuario). Denis menciona que no puede avanzar sin prototipo. | - Priorizar la creación del prototipo faltante en el sprint backlog.<br>- Alinear entre Front y QA qué prototipos son indispensables para comenzar pruebas.<br>- Establecer mini-reunión entre Víctor y Denis solo para aclarar lo pendiente. |
| 3. Riesgo de retraso por falta de revisión y aprobación de prototipos por parte de los profesores (dependencia externa no controlable). Matías aún espera aprobación y puede tardar hasta miércoles. | - Gestionar activamente con el PO la obtención de aprobaciones.<br>- Definir un límite de tiempo para feedback; si no llega, avanzar con versión actual bajo criterio del equipo.<br>- Mantener siempre una versión incremental presentable. |
| 4. Falta de claridad sobre qué HU están listas para pruebas y cuál es la prioridad (dependencia QA → Dev). | - Aplicar el modelo de "flujo pull": QA toma HU solo cuando Dev declara "listo para probar".<br>- Añadir estados claros en tablero (por ejemplo: "Ready for QA", "In QA"). |
| 5. Comunicación no estructurada sobre push/pull entre Front y QA genera riesgos de confusión. Ej.: "si puedes en un ratito haz pull". | - Definir protocolo: Pull Request → Revisión → Aprobación → Merge. Nada manual vía chat.<br>- Alinear horarios para integraciones (ej.: ventanas diarias de merges). |
| 6. Riesgo de generar ruido y confusión por notificaciones automáticas del pipeline/reportes (correos raros). | - Documentar las notificaciones esperadas del sistema.<br>- Crear canal exclusivo para comunicar cambios técnicos (DevOps/CI). |
| 7. Falta de alineación entre Front y Back sobre integración final. Aunque el back está listo, no se menciona un plan explícito de integración. | - Programar un "Integration Touchpoint" de 30 min diario hasta que la integración funcione.<br>- Crear un checklist de integración: endpoints, variables, rutas, entorno. |
| 8. Riesgo de sobrecarga de Víctor (Front) por múltiples tareas simultáneas: diseño, extracción de código, integración con back. | - Rebalancear el sprint backlog.<br>- Redistribuir parte del diseño o extracción a otro miembro si es posible.<br>- Limitar WIP (trabajo en progreso). |
| 9. Dependencia del avance del Sprint 1 (cobertura pendiente) puede consumir tiempo del Sprint 2. José menciona que aún debe completar pruebas del sprint anterior. | - Declarar explícitamente qué pendientes del sprint anterior son obligatorios.<br>- Acordar un timebox máximo para completar deuda técnica (ej.: 4 horas). |
| 10. Falta de claridad sobre quién presenta al PO el incremento y cuál es el plan si Matías no puede. | - Definir fallback oficial para demos.<br>- Documentar un checklist de presentación para evitar improvisación. |
| 11. Riesgo de retraso porque varios mencionan "no he tenido problemas", aunque sí existen dependencias y bloqueos indirectos. Señal de falta de inspección real del sprint. | - Implementar guía estructurada de daily: ¿Qué hice? ¿Qué haré? ¿Qué bloqueos tengo? ¿Qué riesgos veo?<br>- Capacitar al equipo en identificar riesgos, no solo bloqueos. |

---

### 📊 Resumen Ejecutivo - Daily 1 Sprint 2

**Riesgos Críticos Identificados:**
- 🔴 **Dependencias externas** (Figma, aprobación de profesores)
- 🔴 **Falta de claridad en estados de HU** (cuándo pasan a QA)
- 🔴 **Sobrecarga en miembro del equipo** (Víctor)

**Áreas de Mejora Inmediata:**
- Protocolo claro para cambios de estado
- Integración diaria planificada Front-Back
- Límites de espera para aprobaciones externas
- Mejor inspección en próximos dailies

**Acciones para Hoy/Mañana:**
1. Mini-reunión Víctor & Denis (30 min)
2. Meeting Front-Back sobre integración (30 min)
3. Comunicar límite de espera para aprobación de profesores

