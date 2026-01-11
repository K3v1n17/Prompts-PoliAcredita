# Sprint Retrospectiva 4

## Índice
1. [PROMPT 1](#prompt-1)

## PROMPT 1

### ROL
Actúa como un Analista de Retrospectivas experto en identificar malestares del equipo y proponer soluciones prácticas y accionables.

### OBJETIVO
Identificar los malestares, problemas o fricciones expresados por los miembros del equipo durante el sprint y proponer acciones de mejora.

### CONTEXTO
A continuación recibirás una transcripción correspondiente a una reunión de Sprint Retrospective. 
El equipo está conformado por 6 componentes principales: Tester, Front, Back, Discovery, DevOps y Scrum Master.
En esta reunión se encuentran los malestares experimentados durante la ejecución del 4 sprint de un total de 4 sprints.

### ACCIÓN
Crea una lista con los malestares así como sus posibles soluciones para que el equipo se comprometa a implementar en el próximo sprint.

### FORMATO DE SALIDA
Usa un formato de tabla con dos columnas: el problema y la posible solución.

## SALIDA

### 🔍 Malestares del Sprint 4 y Acciones de Mejora

| Problema identificado | Posible solución / Acción de mejora |
|---|---|
| Velocidad de entrega tardía | Asegurar que los artefactos críticos (prototipo, permisos, accesos) estén validados antes de iniciar el sprint.<br>No comenzar desarrollo si existen bloqueos operativos conocidos. |
| Problemas de permisos en herramientas (Figma) que bloquearon al Front | Verificar y validar permisos de edición en herramientas clave antes de iniciar el sprint.<br>Incluir un checklist técnico previo al Sprint Planning (responsable: Discovery / DevOps). |
| Retraso en el Front impactó directamente al Testing | Establecer una fecha interna de "feature freeze" que garantice tiempo mínimo para testing.<br>No entregar funcionalidades críticas después de mitad de sprint. |
| Poco tiempo disponible para testing | Definir explícitamente una ventana mínima de testing dentro del sprint.<br>Priorizar pruebas críticas cuando el tiempo sea limitado. |
| Sprints de una semana resultaron demasiado cortos | Para futuros releases, planificar sprints de 2 semanas como mínimo.<br>Usar sprints de 1 semana solo para pruebas de concepto muy acotadas. |
| Dependencia fuerte entre Discovery y Front | Formalizar el handoff de artefactos (prototipo + permisos + reglas) antes del sprint.<br>Confirmación explícita de que el Front puede trabajar sin bloqueos. |
| Correcciones de errores se realizaron muy al límite del sprint | Acordar que las correcciones mayores no se realicen el último día.<br>Reservar el último día solo para estabilización y validación final. |
| Buena comunicación, pero tardía en momentos críticos | Mantener la buena comunicación lograda, pero reforzarla con alertas tempranas cuando aparezcan bloqueos técnicos o de permisos. |
| Carga operativa alta por ajustes de último momento | Anticipar riesgos operativos (permisos, cuentas, plugins) como parte del Discovery técnico.<br>Incluirlos en el análisis previo al sprint. |

### ✅ Aprendizajes Clave del Sprint 4

- La aprobación temprana y completa del prototipo sí mejoró el flujo de trabajo.
- Los problemas operativos (permisos) pueden ser tan críticos como los funcionales.
- El mayor cuello de botella fue el tiempo insuficiente del sprint, no la falta de capacidad técnica.
- La mejora en comunicación fue real, pero no compensa un sprint excesivamente corto.

### 📌 Conclusión para Futuros Releases

Sprints de 1 semana no son sostenibles para equipos con Discovery, Front, Back y Testing integrados, incluso usando IA.

La recomendación clara es sprints de 2 a 3 semanas, con validaciones operativas previas.
