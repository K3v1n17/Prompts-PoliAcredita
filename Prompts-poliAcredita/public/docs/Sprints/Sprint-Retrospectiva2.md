# Retrospectiva Sprint 2

---

## Índice

1. [PROMPT 1](#prompt-1)

---

## PROMPT 1



### ROL
Actúa como un Analista de Retrospectivas experto en identificar malestares del equipo y proponer soluciones prácticas y accionables.

### Objetivo
Identificar los malestares, problemas o fricciones expresados por los miembros del equipo durante el sprint y proponer acciones de mejora.

### Transcripción
A continuación recibirás una transcripción correspondiente a una reunión de Sprint Retrospective. El equipo esta conformado por 6 componentes principales: Tester, Front, Back, Discovery, DevOps y Scrum Master. En esta reunión se encuentran los malestares experimentados durante la ejecución del 2 sprint de un total de 4 sprints.

### Acción
Crea una lista con los malestares así como sus posibles soluciones para que el equipo se comprometa a implementar en el próximo sprint.

### Formato de salida
Usa un formato de tabla con dos columnas: el problema y la posible solución.



---

## SALIDA

Aquí tienes la lista de malestares del equipo identificados en la transcripción y sus acciones de mejora propuestas, en un formato claro y listo para usar en la planificación del próximo sprint.

### 📝 Tabla de Problemas vs. Soluciones Propuestas

| Problema identificado | Posible solución / Acción concreta para el próximo sprint |
|---|---|
| 1. No existe una revisión adecuada del Definition of Ready (DoR) | - Establecer una revisión formal del DoR antes de iniciar cada sprint.<br>- Agendar una reunión corta de verificación de HU donde todo el equipo valide completitud y claridad.<br>- Crear una checklist DoR visible para todos. |
| 2. Sprint demasiado cortos causan aceleración y solapamiento de actividades | - Ajustar planificación para que las tareas se adapten al sprint actual.<br>- Asegurar que prototipos, refinamientos y aprobaciones estén listos antes del día 1 del sprint.<br>- Reducir alcance por sprint según la capacidad real del equipo. |
| 3. Prototipos incompletos y sin suficiente información para guiar al equipo | - Añadir más detalle al prototipo: flujos alternos, excepciones, errores esperados.<br>- Incorporar diagramas UML, BPMN, SysML, según sea necesario.<br>- Acordar un estándar mínimo de documentación. |
| 4. Falta de comunicación entre Front y Back sobre endpoints necesarios | - Generar una documentación común de endpoints usando Swagger o UML generada por IA.<br>- Revisión conjunta (Front + Back) de endpoints antes de iniciar desarrollo.<br>- Enviar al Front los diagramas o documentación generada automáticamente. |
| 5. Creación de tareas innecesarias o duplicadas por falta de revisión | - Revisar a profundidad las tareas generadas por IA antes de aceptarlas.<br>- Validar flujos de trabajo con BPMN o UML para evitar duplicidad.<br>- Establecer una mini-revisión entre pares antes del Sprint Planning. |
| 6. Notificación tardía de errores funcionales al Front | - Crear un canal de notificación directa y rápida de errores funcionales (ej. alertas automáticas).<br>- Compromiso del equipo de corrección ágil al recibir notificación. |
| 7. Calidad de código afectada por falta de configuración adecuada en IA generativa | - Ajustar prompts y configuraciones para evitar code smells.<br>- Definir reglas de calidad (linting, convenciones) que la IA debe respetar.<br>- Revisar la entrada que se da a la IA para asegurar contextos correctos. |
| 8. HU demasiado grandes (épicas disfrazadas) | - Aplicar estrictamente el criterio SMALL del DoR.<br>- Definir HU que no superen 1/3 de la capacidad del equipo por sprint.<br>- Dividir épicas antes del Sprint Planning. |
| 9. No preparar adecuadamente las sprint reviews | - Asignar un responsable semanal de la preparación de la demo.<br>- Preparar data cargada y escenarios antes del día de la review.<br>- Mantener checklist para la review. |
| 10. Falta de data cargada para las demostraciones | - Utilizar herramientas para carga de datos automatizada.<br>- Crear archivos o scripts predefinidos de datos de prueba.<br>- Integrar la carga de datos como parte del DoR. |
| 11. Falta de claridad en la navegación y flujos del Front debido a prototipos insuficientes | - El Discovery debe entregar: flujo básico, flujos alternos, excepciones, y navegación clara.<br>- Definir si se entregará como diagrama de actividades o prototipo interactivo. |
| 12. HU aprobadas parcialmente generan re-trabajo | - No permitir el inicio de desarrollo sin aprobación 100% del prototipo.<br>- Si se corrige algo después, debe ser revisado nuevamente por el equipo antes de avanzar. |
| 13. Falta de concientización general sobre las HU y sus componentes | - Realizar reuniones grupales para analizar si las HU cumplen DoR antes del Sprint.<br>- Capacitar en creación adecuada de HU y criterios de aceptación. |

---

### 📊 Resumen Ejecutivo

**Áreas críticas a mejorar:**
- **Calidad de entrada (DoR):** Revisar y validar completitud antes de cada sprint
- **Comunicación entre equipos:** Mejorar sincronización Front-Back y documentación de interfaces
- **Tamaño de HU:** Evitar épicas disfrazadas y dividir correctamente
- **Preparación de demos:** Asignar responsables y preparar datos de prueba
- **Monitoreo de calidad:** Ajustar configuración de IA y revisar outputs antes de usar

