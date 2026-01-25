# Retrospectiva Sprint 1

---

## Índice

1. [PROMPT 1](#prompt-1)

---

## PROMPT 1

### ROL
Actúa como un Analista de Retrospectivas experto en identificar malestares del equipo y proponer soluciones prácticas y accionables.

### OBJETIVO
Identificar los malestares, problemas o fricciones expresados por los miembros del equipo durante el sprint y proponer acciones de mejora.

### TRANSCRIPCIÓN
A continuación recibirás una transcripción correspondiente a una reunión de Sprint Retrospective. El equipo está conformado por 6 componentes principales: Tester, Front, Back, Discovery, DevOps y Scrum Master. En esta reunión se encuentran los malestares experimentados durante la ejecución del 1 sprint de un total de 4 sprints.

### ACCIÓN
Crea una lista con los malestares así como sus posibles soluciones para que el equipo se comprometa a implementar en el próximo sprint.

### FORMATO DE SALIDA
Usa un formato de tabla con dos columnas: el problema y la posible solución.

---

**RESPUESTA:**

A continuación se presenta la síntesis de malestares del Sprint 1 junto con acciones de mejora concretas y accionables, elaboradas a partir del análisis completo de la retrospectiva.

El enfoque está en que el equipo se comprometa explícitamente a implementar estas acciones en el Sprint 2, considerando que es el primer sprint y que el uso de IA introduce fricciones propias de adopción temprana.

### 📊 Malestares del Sprint 1 y Acciones de Mejora

| Problema identificado | Posible solución / Acción para el próximo sprint |
|---|---|
| Exceso de confianza en la IA sin validación humana suficiente | - Incorporar una revisión humana obligatoria entre cada fase (Prototipo → HU → Desarrollo → Pruebas).<br>- Definir el rol compartido de "auditor de IA", donde todo el equipo valida que lo generado sea coherente antes de avanzar. |
| Poca revisión del prototipo antes de generar HU y código | - Establecer un checkpoint obligatorio de revisión del prototipo antes de generar HU.<br>- Usar checklist: roles, flujos alternos, excepciones, paginación, colores, estados y validaciones. |
| Prototipos poco expresivos para que la IA entienda casos complejos (ej. multirol) | - Enriquecer los prototipos con mayor expresividad visual (ej. múltiples roles seleccionados, colores activos, estados explícitos).<br>- Complementar con anotaciones visuales o texto cuando el comportamiento no sea evidente. |
| Desalineación entre prototipo y HU generadas por IA | - Generar HU exclusivamente a partir del prototipo validado.<br>- Validar que las HU reflejen fielmente lo que el prototipo muestra (ej. multirol, reglas de negocio). |
| Sobrecarga del Tester por gran volumen de HU y criterios de aceptación | - Definir un porcentaje de pruebas automatizadas vs. manuales (ej. 70% automatizadas / 30% manuales).<br>- Priorizar pruebas críticas manuales y reducir detalle innecesario en casos de prueba repetitivos. |
| Falsos positivos y negativos en pruebas automatizadas | - Complementar automatización con revisión manual focalizada.<br>- Documentar limitaciones conocidas de las herramientas de testing usadas (ej. Selenium). |
| Retrasos en la ejecución de pruebas | - Acordar ventanas claras para testing dentro del sprint.<br>- Reducir HU activas simultáneamente para no saturar al componente de testing. |
| Retrasos e inasistencias en los Dailys | - Definir y respetar un horario fijo para el Daily.<br>- Acordar una penalización ligera y simbólica (ej. desayuno para el equipo) para reforzar el hábito. |
| Problemas técnicos resueltos tarde por dependencia de una sola persona | - Definir un backup técnico por componente para casos de indisponibilidad.<br>- Documentar brevemente soluciones técnicas clave para facilitar reemplazos. |
| Falta de notificación oportuna de cambios técnicos | - Automatizar notificaciones por correo o canal común cada vez que haya un commit o cambio relevante en Front o Back.<br>- Asegurar que todo el equipo esté en copia. |
| Cierre tardío de tareas en la herramienta de gestión | - Establecer el cierre de tareas como parte del DoD.<br>- Recordatorio diario para cerrar tareas terminadas el mismo día. |
| Pocos artefactos de Discovery más allá del prototipo | - Complementar el prototipo con lineamientos escritos, flujos o notas clave cuando sea necesario.<br>- Recoger feedback de Front y Testing para enriquecer Discovery. |
| Falta de guías claras para mejorar el uso de IA en el proceso | - Crear un documento compartido de aprendizajes y recomendaciones sobre cómo alimentar mejor a la IA (inputs, imágenes, secuencia). |

---

### ✅ Resultado esperado para el Sprint 2

Si el equipo implementa estas acciones:

- Se reduce el retrabajo causado por suposiciones de la IA.
- Mejora la alineación entre Discovery, Desarrollo y Testing.
- Se evita el cuello de botella en QA.
- Se gana madurez en el uso de IA como acelerador, no como sustituto del criterio humano.

