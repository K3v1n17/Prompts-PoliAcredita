# Roadmap del Producto
## Sistema de Verificación EUR-ACE para la Escuela Politécnica Nacional

---

## Índice


1. [PROMPT 1](#prompt-1)
  - [PROMPT 1.1 (Continuación de PROMPT 1)](#prompt-11-continuacion-de-prompt-1)

---

## PROMPT 1

```markdown
Bien, ahora necesito definir mi roadmap. Actúa como experto PO con un profundo conocimiento de metodologías ágiles y gestión de productos. Deseo definir mi product roadmap, necesito que sea únicamente un reléase en el que se incluyan todas las funcionalidades.
La Escuela Politécnica Nacional (EPN) busca acreditar sus carreras bajo el sello EUR-ACE.  
La entidad EUR-ACE evaluará que las carreras de la EPN cumplan con determinados objetivos (objetivos EUR-ACE).  

Organización de la EPN:
- La EPN se organiza en Facultades.  
- Cada Facultad tiene: Profesores, Autoridades (Decano, Subdecano, Jefe de Departamento) y Carreras.  
- Cada Carrera tiene un Coordinador.  
- Existen Comités de Evaluación Interna (CEI), conformados por profesores.  
- Roles principales: Profesor, Coordinador de Carrera, Autoridad, DGIP, Miembro del CEI.  
  - Para ser Coordinador, Autoridad o miembro del CEI, primero se debe ser Profesor.  
  - El DGIP gestiona aspectos académicos de la Facultad.  
  - La Autoridad administra la Facultad.  
  - El Coordinador gestiona la Carrera.  
  - El CEI gestiona los objetivos EUR-ACE y puede consultar información de Facultades.  

Flujo de acreditación:
- Cada Materia de una Carrera cuenta con un **PEA (Programa de Estudios Académicos)**, que contiene:  
  - Unidad académica  
  - Carrera  
  - Unidad de organización curricular  
  - Nombre de la asignatura  
  - Código  
  - Créditos  

- El PEA define los **Resultados de Aprendizaje de la Asignatura (RAA)**, que pueden ser:  
  - Conocimiento  
  - Destrezas  
  - Valores y actitudes  

- La Carrera en su conjunto cuenta con:  
  - **Objetivos de Perfil de Egreso (RA)**, generales y específicos.  
  - **Objetivos de Perfil Profesional (OPP)**.  

- Relaciones fundamentales:  
  - Cada **RAA** de una materia contribuye a los **RA** de la carrera (con un nivel definido).  
  - Cada **RA** de la carrera se relaciona tanto con los **OPP** como con los **objetivos EUR-ACE**.  

Producto a desarrollar:
- Un sistema que permita:  
  - Ingresar toda la información del PEA.  
  - Registrar RAAs, RAs, OPP y objetivos EUR-ACE.  
  - Establecer las relaciones: RAA → RA, RA → OPP, RA → EUR-ACE.  
  - Generar reportes sobre el cumplimiento de los objetivos de acreditación EUR-ACE.  
  - Controlar el acceso según roles (Profesor, Coordinador, Autoridad, CEI, DGIP).  
  - Gestión de organización de las facultades, carreras.  

Crea un roadmap que cumpla con el siguiente formato:

|                              | **Release único - [Fecha]** |
|------------------------------|------------------------------|
| **Mapa del mercado**         |                              |
| **Mapa de características**  |                              |
| **Mapa de arquitectura**     |                              |
| **Calendario de lanzamiento**|                              |
```

---

**SALIDA:**

|                               | **Release único – Junio 2026**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Mapa del mercado**          | La EPN necesita acreditar sus programas de ingeniería bajo el sello EUR-ACE. Actualmente los procesos se gestionan manualmente, dispersos en documentos y sistemas genéricos, lo que dificulta la trazabilidad y genera riesgos de incumplimiento. El sistema busca centralizar la gestión académica y de acreditación, garantizando transparencia, reducción de errores y cumplimiento de los criterios EUR-ACE.                                                                                                                                                                                                                                                                                                                          |
| **Mapa de características**   | - Gestión de Facultades, Carreras y Materias.<br> - Registro de PEA (Programa de Estudios Académicos) con datos clave (unidad académica, código, créditos, etc.).<br> - Registro y gestión de Resultados de Aprendizaje de Asignatura (RAA).<br> - Registro y gestión de Resultados de Aprendizaje de Carrera (RA).<br> - Registro y gestión de Objetivos de Perfil Profesional (OPP).<br> - Registro y gestión de Objetivos EUR-ACE.<br> - Definición de relaciones: RAA → RA, RA → OPP, RA → EUR-ACE.<br> - Control de acceso y permisos según rol (Profesor, Coordinador, Autoridad, DGIP, CEI).<br> - Consulta de información transversal entre facultades por CEI.<br> - Generación de reportes de cumplimiento de criterios EUR-ACE. |
| **Mapa de arquitectura**      | - Arquitectura web modular, basada en microservicios.<br> - Backend: API REST centralizada para gestión de datos académicos y acreditación.<br> - Frontend: interfaz web responsiva para cada rol, con dashboards y formularios dinámicos.<br> - Base de datos relacional para trazabilidad de relaciones RAA–RA–OPP–EUR-ACE.<br> - Módulo de autenticación y autorización basado en roles.<br> - Servicios de generación de reportes en PDF/Excel.<br> - Infraestructura en la nube con escalabilidad y respaldo de datos.                                                                                                                                                                                                                |
| **Calendario de lanzamiento** | - Marzo 2025: Inicio de desarrollo.<br> - Septiembre 2025: Prueba piloto con 1 Facultad y 2 Carreras.<br> - Enero 2026: Ajustes finales e integración institucional.<br> - Junio 2026: Lanzamiento oficial del sistema en toda la EPN.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

---

### PROMPT 1.1 (Continuación de PROMPT 1)

```markdown
Observa esta imagen y vuelve a darme el roadmap. Para el calendario de lanzamiento, al ser un solo release, terminaría en un mes a partir de hoy.

![Product Roadmap](product-roadmap.png)
```

**SALIDA:**

|                         | **Release único – Octubre 2025**                                                                                                                                                                                                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Market map**          | Acreditación de carreras de ingeniería bajo sello EUR-ACE en la EPN.                                                                                                                                                             |
| **Feature/benefit map** | - Gestión de Facultades, Carreras y Materias.<br> - Registro de PEA, RAA, RA, OPP y EUR-ACE.<br> - Definición de relaciones RAA → RA → OPP → EUR-ACE.<br> - Reportes de cumplimiento EUR-ACE.<br> - Control de acceso por roles. |
| **Architecture map**    | Plataforma web modular con API REST, frontend responsivo, base de datos relacional y autenticación por roles.                                                                                                                    |
| **Market events**       | Lanzamiento institucional en la EPN.                                                                                                                                                                                             |
| **Release schedule**    | 1.0                                                                                                                                                                                                                              |

---
