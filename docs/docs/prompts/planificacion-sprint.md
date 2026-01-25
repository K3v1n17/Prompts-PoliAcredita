# Historial de Prompts — Sprint (formato del ejemplo)

_Generado_: 2025-09-11

---

## Índice

- [Prompt 1](#prompt-1)
- [Prompt 2](#prompt-2)
- [Prompt 3](#prompt-3)
- [Prompt 4](#prompt-4)
- [Prompt 5](#prompt-5)
- [Prompt 6](#prompt-6)
- [Prompt 7](#prompt-7)
- [Prompt 8](#prompt-8)
- [Prompt 9](#prompt-9)
- [Prompt 10](#prompt-10)
- [Prompt 11](#prompt-11)
- [Prompt 12](#prompt-12)
- [Prompt 13](#prompt-13)
- [Prompt 14](#prompt-14)
- [Prompt 15](#prompt-15)
- [Prompt 16](#prompt-16)
- [Prompt 17](#prompt-17)
- [Prompt 18](#prompt-18)
- [Prompt 19](#prompt-19)

---

### Prompt 1

```
bien ahora dame con tyoe wiki una planifacion del sprint que incluya lo siguiente Ñ
Planificación de un sprint de 2 semanas:

Registro de los EURACE , carrera , y perfil de egreso -- principalmente

Sprint Goal:
Gestionar el registro de objetivos EURACE , resultado de aprendizaje de la carrera y perfil de egreso.

Definir el rango de velocidades del equipo.
Velocidad baja estimada: 18 Story Points
Velocidad Alta estimada: 34 Story Points

Definir la capacidad del equipo.
Persona	Días disponibles	Días para otras actividades de scrum	Horas por día	Esfuerzo disponible - Horas
Kevin	8	1	3-4	21-28
Erik	8	1	3-4	21-28
Jose	8	1	4-5	28-35
Matias	8	1	3-4	21-28
Víctor	8	1	4-5	28-35
Denis	8	1	3-4	21-28
Total					140 - 182 horas



aqui quiero que tu definas la capacidad considerando que es de una semana , y coimo tal mi velocidad ya te la habia dado , dale hasme la planifaicion del sprint con las hu que se generaron recien a partir de las imagenes . type wiki 
```

### Prompt 2

```
recuerda que la estructura era asi :
"Wiki": { "type": "Wiki", "title": "Plan del Sprint 6", "path": "/Plan_del_Sprint_6/plan-del-sprint-6", "content": "# Plan del Sprint 6

## Objetivos...
" }
```

### Prompt 3

```
no , pues recuerda que mis sprint iban a ser de 1 semana , ademas las velocidades yo ya te las habia proporcionado antes las pusiste en la planificaion del producto con esto vuelve a darme la planificacion de mi sprint 
```

### Prompt 4

```
no , pues recuerda que mis sprint iban a ser de 1 semana , ademas las velocidades yo ya te las habia proporcionado antes las pusiste en la planificaion del producto con esto vuelve a darme la planificacion de mi sprint

recuerda que la estructura era asi : "Wiki": { "type": "Wiki", "title": "Plan del Sprint 6", "path": "/Plan_del_Sprint_6/plan-del-sprint-6", "content": "# Plan del Sprint 6

## Objetivos...
" }
```

### Prompt 5

```
ecuerda que la estructura era asi : "Wiki": { "type": "Wiki", "title": "Plan del Sprint 6", "path": "/Plan_del_Sprint_6/plan-del-sprint-6", "content": "# Plan del Sprint 6

## Objetivos...
" }
```

### Prompt 6

```
dame una wiki con la planifaicion del sprint en base a las hus que se hicieron de las imagenes 
```

### Prompt 7

```
lo de la capacidad no me lo des tal cual una tabla , dame de nuevo con esta consideracion 
```

### Prompt 8

```
Devuelve SOLO un array JSON (sin texto extra ni code fences). Cada elemento debe ser de type "HU" o "Wiki"

Ejemplo para caunto te pide type hu : Cada HU debe tener estas claves: 
hu
[ { "title": "HU: Registrar Nuevo Cliente", "como": "asesor de servicio", "quiero": "registrar un nuevo cliente", "para": "gestionar sus órdenes y comunicaciones", "acceptanceCriteria": [ "Se valida documento y datos de contacto", "Se evita duplicados por email o teléfono", "Queda un registro con fecha y usuario" ], "storyPoints": 3, "priority": 2 } ]


 ejemplo Para cuando te pida type "Wiki": { "type": "Wiki", "title": "Plan del Sprint 6", "path": "/Plan_del_Sprint_6/plan-del-sprint-6", "content": "# Plan del Sprint 6

## Objetivos...
" }

a continuación no vas a responder con nada mas solo devulve en este formato lo que se te pregute: 


Actúa como Product Owner y Scrum Master para un proyecto de acreditación académica.  

Contexto del proyecto:
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

Tu rol:
- Guiar la aplicación del marco Scrum en este proyecto.  
- Apoyar en: planificación de Sprints, construcción del Product Backlog, definición de Historias de Usuario (HU), Retrospectivas y Dailys.  
- Asegurar que el sistema cumpla con los requisitos académicos, organizativos y de acreditación.  

tu encargate de analizar las imagenes y devolver las historias de usuario reprensentadas en las imagenes guiate en base a todo el contexto ,   incluye las tareas con estos nombres : backendTasks , frontendTasks:
```

### Prompt 9

```
recuerdas mi planifaicion del producto :
EVIN ALEXANDER LEMA NARANJO
1h ago
Planificación de Producto - PoliAcredita
Visión del Producto
Para las Facultades de la Escuela Politécnica Nacional (EPN) que requieren demostrar el cumplimiento de los estándares para la acreditación EUR-ACE, PoliAcredita es un producto software que verifica que los objetivos EUR-ACE se cumplan para las diferentes carreras. A diferencia de los métodos manuales, PoliAcredita automatiza la verificación de alineamientos curriculares, facilitando la preparación y el proceso de acreditación de las carreras.

Áreas de Valor para los Stakeholders
Autoridades Universitarias:
Cumplimiento Asegurado (Entry Condition): Facilitar la demostración del cumplimiento de los requisitos de EUR-ACE para la acreditación.
Mejora de la Reputación Institucional (Enablement): Apoyar el fortalecimiento de la imagen de la EPN a nivel internacional.
Optimización de Recursos (Cost Reducer): Reducir tiempo y esfuerzo en la preparación de la acreditación.
Toma de Decisiones Estratégicas (Differentiator/Spoiler): Obtener una visión clara del estado de alineación curricular para la acreditación.
Coordinadores de Carrera:
Facilitación del Cumplimiento (Entry Condition): Simplificar la documentación y verificación de requisitos de acreditación.
Eficiencia en la Gestión Curricular (Cost Reducer/Delight the Customer): Reducir carga de trabajo manual en la organización y vinculación de datos académicos.
Garantía de Alineación Curricular (Differentiator): Confirmar la coherencia entre resultados de aprendizaje y objetivos.
Generación de Evidencia Confiable (Enablement): Producir reportes y evidencias auditables para la acreditación.
Profesores:
Documentación Simplificada (Cost Reducer): Facilitar registro de PEAs y definición de RAA.
Claridad en la Contribución Académica (Enablement): Entender la contribución de sus asignaturas a los objetivos de la carrera.
Miembros del Comité de Evaluación Interna (CEI):
Verificación Objetiva y Eficiente (Differentiator/Spoiler): Realizar la verificación de alineamientos curriculares y de cumplimiento con objetivos EUR-ACE con datos concretos.
Generación de Evidencia para Acreditación (Enablement): Obtener reportes consolidados para la evaluación externa.
Mejora Continua (Cost Reducer): Identificar brechas en la alineación curricular.
Product Roadmap (Versión Única)
Release único - Julio 2025
Mapa del Mercado: Verificar que la carrera cumpla con los objetivos EUR-ACE.
Mapa de Características: Gestión de PEAs, Verificación de cumplimiento RAA con RA, Verificación de cumplimiento RA con OPP, Verificación de cumplimiento RA con objetivos EUR-ACE, Gestión de Usuarios y Roles, Generación de Reportes de Trazabilidad, Gestión de Organización (Facultades y Carreras).
Mapa de Arquitectura: Arquitectura basada en MVC.
Calendario de Lanzamiento: Versión 1.0 - 10 Julio 2025
Product Backlog de Alto Nivel (Épicas y HUs de Alto Nivel)
N° 1 Épica: Registro de Programas de Estudios Académicos (PEA)
Historia de Usuario: Como coordinador, quiero registrar los PEAs para tener la base de datos académica completa y estructurada.
N° 2 Épica: Verificación de Alineación RAA-RA
Historia de Usuario: Como coordinador, quiero verificar la relación entre los Resultados de Aprendizaje de Asignatura (RAA) y los Objetivos de Perfil de Egreso (RA), para asegurar que las asignaturas aporten al perfil de egreso.
N° 3 Épica: Verificación de Alineación RA-OPP
Historia de Usuario: Como coordinador, quiero verificar la relación entre los Objetivos de Perfil de Egreso (RA) y los Objetivos de Perfil Profesional (OPP), para asegurar que los conocimientos adquiridos contribuyan a la formación del profesional.
N° 4 Épica: Verificación de Cumplimiento con Objetivos EUR-ACE
Historia de Usuario: Como miembro del CEI, quiero vincular los Objetivos de Perfil de Egreso (RA) con los Objetivos EUR-ACE, para demostrar el cumplimiento de los estándares de acreditación internacional.
N° 5 Épica: Generación de Reportes de Trazabilidad y Cumplimiento
Historia de Usuario: Como autoridad de facultad o miembro del CEI, quiero generar reportes de trazabilidad completa (RAA → RA → OPP → Objetivos EUR-ACE), para facilitar la preparación de la documentación para la acreditación.
N° 6 Épica: Administración de Usuarios y Control de Acceso
Historia de Usuario: Como administrador del sistema, quiero gestionar los perfiles de usuarios y sus permisos, para controlar quién puede interactuar con la información y funcionalidades del sistema.
N° 7 Épica: Gestión de Organización (Facultades y Carreras)
Historia de Usuario: Como DGIP o Administrador del sistema, quiero gestionar la estructura organizativa de Facultades, Carreras y sus coordinadores en la EPN, para mantener el sistema alineado con la realidad académica.
```

### Prompt 10

```
y mi planifaicion del release :
Planificación del Release Único - PoliAcredita
Release de Fecha Fija
Fecha de Inicio: Jueves, 11 de Septiembre de 2025
Fecha de Fin: Jueves, 16 de Octubre de 2025
Duración del Release: 5 semanas
Número de Sprints: 5 Sprints de 1 semana cada uno.
Minimum Releasable Features (MRF) como Historias de Usuario (HU) de Alto Nivel
Los MRF se centran en habilitar las funcionalidades clave para la verificación de alineaciones y la generación de reportes básicos, alineados con el roadmap del producto y el contexto de acreditación.

HU 1: Registro de PEA
Título: HU: Registrar PEA
Como: Coordinador
Quiero: Registrar los datos de un Programa de Estudios Académicos (PEA)
Para: Tener la información académica de la asignatura registrada.
HU 2: Definición y Registro de RAA
Título: HU: Definir y Registrar RAA
Como: Coordinador
Quiero: Definir y registrar los Resultados de Aprendizaje de Asignatura (RAA)
Para: Establecer los resultados esperados para cada asignatura.
HU 3: Definición y Registro de RA
Título: HU: Definir y Registrar RA
Como: Coordinador
Quiero: Definir y registrar los Objetivos de Perfil de Egreso (RA)
Para: Establecer los objetivos generales de la carrera.
HU 4: Definición y Registro de OPP
Título: HU: Definir y Registrar OPP
Como: Coordinador
Quiero: Definir y registrar los Objetivos de Perfil Profesional (OPP)
Para: Establecer los objetivos profesionales de los egresados.
HU 5: Definición y Registro de Objetivos EUR-ACE
Título: HU: Definir y Registrar Objetivos EUR-ACE
Como: Miembro del CEI
Quiero: Definir y registrar los Objetivos EUR-ACE
Para: Tener los estándares de acreditación definidos en el sistema.
HU 6: Relacionar RAA con RA
Título: HU: Relacionar RAA con RA
Como: Coordinador
Quiero: Relacionar cada RAA con los RA correspondientes, indicando nivel de aporte (alto, medio, bajo)
Para: Asegurar que las asignaturas contribuyan al perfil de egreso.
HU 7: Relacionar RA con OPP
Título: HU: Relacionar RA con OPP
Como: Coordinador
Quiero: Relacionar cada RA con los OPP correspondientes
Para: Asegurar que el perfil de egreso contribuya a la formación profesional.
HU 8: Relacionar RA con Objetivos EUR-ACE
Título: HU: Relacionar RA con Objetivos EUR-ACE
Como: Miembro del CEI
Quiero: Relacionar cada RA con los Objetivos EUR-ACE correspondientes
Para: Demostrar el cumplimiento de los estándares de acreditación.
HU 9: Generar Reporte de Trazabilidad (RAA → RA → OPP)
Título: HU: Generar Reporte de Trazabilidad
Como: Autoridad de facultad o miembro del CEI
Quiero: Generar un reporte que muestre las relaciones RAA → RA → OPP
Para: Facilitar la revisión de alineaciones curriculares.
HU 10: Generar Reporte de Cumplimiento EUR-ACE
Título: HU: Generar Reporte de Cumplimiento EUR-ACE
Como: Miembro del CEI
Quiero: Generar un reporte que muestre la vinculación de RA con Objetivos EUR-ACE
Para: Evaluar el cumplimiento de los estándares de acreditación.
HU 11: Gestionar Organización EPN (Facultades, Carreras, Coordinadores)
Título: HU: Gestionar Organización EPN (Facultades, Carreras, Coordinadores)
Como: DGIP o Administrador del sistema
Quiero: Gestionar la estructura de Facultades y Carreras de la EPN, incluyendo la asignación de sus respectivos coordinadores
Para: Mantener la información organizativa de la institución actualizada y facilitar la gestión académica de cada programa.
HU 12: Gestión Básica de Usuarios y Roles (Profesor, Coordinador)
Título: HU: Gestionar Usuarios y Roles Básicos
Como: Administrador del sistema
Quiero: Crear usuarios y asignarles los roles de Profesor y Coordinador
Para: Controlar el acceso a las funcionalidades básicas del sistema.
Sprint Mapping
Velocidad del Equipo:
Velocidad Baja: 54 Story Points (sp)
Velocidad Alta: 75 Story Points (sp)
Velocidad Promedio Estimada para Planificación: 65 sp
Objetivo General del Release: Habilitar la gestión de elementos curriculares (PEA, RAA, RA, OPP, EUR-ACE), establecer las principales relaciones de alineación (RAA-RA, RA-OPP, RA-EUR-ACE), gestionar la estructura organizativa de la EPN y generar reportes de trazabilidad y cumplimiento básicos.

Sprint Mapping (5 Sprints de 1 semana cada uno, asumiendo 65 sp/sprint):
Sprint 1: (11 de Septiembre – 17 de Septiembre)

Objetivo: Establecer la base para la documentación académica esencial: PEA, RAA, RA y OPP.
Funcionalidades:
HU 1: Registrar PEA
HU 2: Definir y Registrar RAA
HU 3: Definir y Registrar RA
HU 4: Definir y Registrar OPP
Sprint 2: (18 de Septiembre – 24 de Septiembre)

Objetivo: Definir los objetivos de acreditación EUR-ACE y establecer la estructura organizativa de Facultades y Carreras.
Funcionalidades:
HU 5: Definir y Registrar Objetivos EUR-ACE
HU 11: Gestionar Organización EPN (Facultades, Carreras, Coordinadores)
Sprint 3: (25 de Septiembre – 1 de Octubre)

Objetivo: Establecer las relaciones clave entre los resultados de aprendizaje (RAA con RA y RA con OPP).
Funcionalidades:
HU 6: Relacionar RAA con RA
HU 7: Relacionar RA con OPP
Sprint 4: (2 de Octubre – 8 de Octubre)

Objetivo: Completar las relaciones curriculares de acreditación y habilitar la generación de reportes de trazabilidad y cumplimiento.
Funcionalidades:
HU 8: Relacionar RA con Objetivos EUR-ACE
HU 9: Generar Reporte de Trazabilidad (RAA → RA → OPP)
HU 10: Generar Reporte de Cumplimiento EUR-ACE
Sprint 5: (9 de Octubre – 15 de Octubre)

Objetivo: Habilitar el control de acceso y la gestión básica de usuarios y roles en el sistema.
Funcionalidades:
HU 12: Gestión Básica de Usuarios y Roles (Profesor, Coordinador)
```

### Prompt 11

```
bien base a todo eso y a las hus que me acabaste de dar de las iamgenes aramamre la plnaificacion de mi sprint ahora si : type wiki , seria mi sprint 1 
```

### Prompt 12

```
dame la planificacion del sprin1 en base a mi planificacion del release pues
```

### Prompt 13

```
Devuelve SOLO un array JSON (sin texto extra ni code fences). Cada elemento debe ser de type "HU" o "Wiki"

Ejemplo para caunto te pide type hu : Cada HU debe tener estas claves: 
hu
[ { "title": "HU: Registrar Nuevo Cliente", "como": "asesor de servicio", "quiero": "registrar un nuevo cliente", "para": "gestionar sus órdenes y comunicaciones", "acceptanceCriteria": [ "Se valida documento y datos de contacto", "Se evita duplicados por email o teléfono", "Queda un registro con fecha y usuario" ], "storyPoints": 3, "priority": 2 } ]


 ejemplo Para cuando te pida type "Wiki": { "type": "Wiki", "title": "Plan del Sprint 6", "path": "/Plan_del_Sprint_6/plan-del-sprint-6", "content": "# Plan del Sprint 6

## Objetivos...
" }

a continuación no vas a responder con nada mas solo devulve en este formato lo que se te pregute: 


Actúa como Product Owner y Scrum Master para un proyecto de acreditación académica.  

Contexto del proyecto:
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

Tu rol:
- Guiar la aplicación del marco Scrum en este proyecto.  
- Apoyar en: planificación de Sprints, construcción del Product Backlog, definición de Historias de Usuario (HU), Retrospectivas y Dailys.  
- Asegurar que el sistema cumpla con los requisitos académicos, organizativos y de acreditación.  

tu encargate de analizar las imagenes y devolver las historias de usuario reprensentadas en las imagenes guiate en base a todo el contexto ,   incluye las tareas con estos nombres : backendTasks , frontendTasks:
```

### Prompt 14

```
veras ya armamos la planificacion del producto y del release :
Planificación de Producto - PoliAcredita
Visión del Producto
Para las Facultades de la Escuela Politécnica Nacional (EPN) que requieren demostrar el cumplimiento de los estándares para la acreditación EUR-ACE, PoliAcredita es un producto software que verifica que los objetivos EUR-ACE se cumplan para las diferentes carreras. A diferencia de los métodos manuales, PoliAcredita automatiza la verificación de alineamientos curriculares, facilitando la preparación y el proceso de acreditación de las carreras.

Áreas de Valor para los Stakeholders
Autoridades Universitarias:
Cumplimiento Asegurado (Entry Condition): Facilitar la demostración del cumplimiento de los requisitos de EUR-ACE para la acreditación.
Mejora de la Reputación Institucional (Enablement): Apoyar el fortalecimiento de la imagen de la EPN a nivel internacional.
Optimización de Recursos (Cost Reducer): Reducir tiempo y esfuerzo en la preparación de la acreditación.
Toma de Decisiones Estratégicas (Differentiator/Spoiler): Obtener una visión clara del estado de alineación curricular para la acreditación.
Coordinadores de Carrera:
Facilitación del Cumplimiento (Entry Condition): Simplificar la documentación y verificación de requisitos de acreditación.
Eficiencia en la Gestión Curricular (Cost Reducer/Delight the Customer): Reducir carga de trabajo manual en la organización y vinculación de datos académicos.
Garantía de Alineación Curricular (Differentiator): Confirmar la coherencia entre resultados de aprendizaje y objetivos.
Generación de Evidencia Confiable (Enablement): Producir reportes y evidencias auditables para la acreditación.
Profesores:
Documentación Simplificada (Cost Reducer): Facilitar registro de PEAs y definición de RAA.
Claridad en la Contribución Académica (Enablement): Entender la contribución de sus asignaturas a los objetivos de la carrera.
Miembros del Comité de Evaluación Interna (CEI):
Verificación Objetiva y Eficiente (Differentiator/Spoiler): Realizar la verificación de alineamientos curriculares y de cumplimiento con objetivos EUR-ACE con datos concretos.
Generación de Evidencia para Acreditación (Enablement): Obtener reportes consolidados para la evaluación externa.
Mejora Continua (Cost Reducer): Identificar brechas en la alineación curricular.
Product Roadmap (Versión Única)
Release único - Julio 2025
Mapa del Mercado: Verificar que la carrera cumpla con los objetivos EUR-ACE.
Mapa de Características: Gestión de PEAs, Verificación de cumplimiento RAA con RA, Verificación de cumplimiento RA con OPP, Verificación de cumplimiento RA con objetivos EUR-ACE, Gestión de Usuarios y Roles, Generación de Reportes de Trazabilidad, Gestión de Organización (Facultades y Carreras).
Mapa de Arquitectura: Arquitectura basada en MVC.
Calendario de Lanzamiento: Versión 1.0 - 10 Julio 2025
Product Backlog de Alto Nivel (Épicas y HUs de Alto Nivel)
N° 1 Épica: Registro de Programas de Estudios Académicos (PEA)
Historia de Usuario: Como coordinador, quiero registrar los PEAs para tener la base de datos académica completa y estructurada.
N° 2 Épica: Verificación de Alineación RAA-RA
Historia de Usuario: Como coordinador, quiero verificar la relación entre los Resultados de Aprendizaje de Asignatura (RAA) y los Objetivos de Perfil de Egreso (RA), para asegurar que las asignaturas aporten al perfil de egreso.
N° 3 Épica: Verificación de Alineación RA-OPP
Historia de Usuario: Como coordinador, quiero verificar la relación entre los Objetivos de Perfil de Egreso (RA) y los Objetivos de Perfil Profesional (OPP), para asegurar que los conocimientos adquiridos contribuyan a la formación del profesional.
N° 4 Épica: Verificación de Cumplimiento con Objetivos EUR-ACE
Historia de Usuario: Como miembro del CEI, quiero vincular los Objetivos de Perfil de Egreso (RA) con los Objetivos EUR-ACE, para demostrar el cumplimiento de los estándares de acreditación internacional.
N° 5 Épica: Generación de Reportes de Trazabilidad y Cumplimiento
Historia de Usuario: Como autoridad de facultad o miembro del CEI, quiero generar reportes de trazabilidad completa (RAA → RA → OPP → Objetivos EUR-ACE), para facilitar la preparación de la documentación para la acreditación.
N° 6 Épica: Administración de Usuarios y Control de Acceso
Historia de Usuario: Como administrador del sistema, quiero gestionar los perfiles de usuarios y sus permisos, para controlar quién puede interactuar con la información y funcionalidades del sistema.
N° 7 Épica: Gestión de Organización (Facultades y Carreras)
Historia de Usuario: Como DGIP o Administrador del sistema, quiero gestionar la estructura organizativa de Facultades, Carreras y sus coordinadores en la EPN, para mantener el sistema alineado con la realidad académica.

mi planificacion del release :
Planificación del Release Único - PoliAcredita
Release de Fecha Fija
Fecha de Inicio: Jueves, 11 de Septiembre de 2025
Fecha de Fin: Jueves, 16 de Octubre de 2025
Duración del Release: 5 semanas
Número de Sprints: 5 Sprints de 1 semana cada uno.
Minimum Releasable Features (MRF) como Historias de Usuario (HU) de Alto Nivel
Los MRF se centran en habilitar las funcionalidades clave para la verificación de alineaciones y la generación de reportes básicos, alineados con el roadmap del producto y el contexto de acreditación.

HU 1: Registro de PEA
Título: HU: Registrar PEA
Como: Coordinador
Quiero: Registrar los datos de un Programa de Estudios Académicos (PEA)
Para: Tener la información académica de la asignatura registrada.
HU 2: Definición y Registro de RAA
Título: HU: Definir y Registrar RAA
Como: Coordinador
Quiero: Definir y registrar los Resultados de Aprendizaje de Asignatura (RAA)
Para: Establecer los resultados esperados para cada asignatura.
HU 3: Definición y Registro de RA
Título: HU: Definir y Registrar RA
Como: Coordinador
Quiero: Definir y registrar los Objetivos de Perfil de Egreso (RA)
Para: Establecer los objetivos generales de la carrera.
HU 4: Definición y Registro de OPP
Título: HU: Definir y Registrar OPP
Como: Coordinador
Quiero: Definir y registrar los Objetivos de Perfil Profesional (OPP)
Para: Establecer los objetivos profesionales de los egresados.
HU 5: Definición y Registro de Objetivos EUR-ACE
Título: HU: Definir y Registrar Objetivos EUR-ACE
Como: Miembro del CEI
Quiero: Definir y registrar los Objetivos EUR-ACE
Para: Tener los estándares de acreditación definidos en el sistema.
HU 6: Relacionar RAA con RA
Título: HU: Relacionar RAA con RA
Como: Coordinador
Quiero: Relacionar cada RAA con los RA correspondientes, indicando nivel de aporte (alto, medio, bajo)
Para: Asegurar que las asignaturas contribuyan al perfil de egreso.
HU 7: Relacionar RA con OPP
Título: HU: Relacionar RA con OPP
Como: Coordinador
Quiero: Relacionar cada RA con los OPP correspondientes
Para: Asegurar que el perfil de egreso contribuya a la formación profesional.
HU 8: Relacionar RA con Objetivos EUR-ACE
Título: HU: Relacionar RA con Objetivos EUR-ACE
Como: Miembro del CEI
Quiero: Relacionar cada RA con los Objetivos EUR-ACE correspondientes
Para: Demostrar el cumplimiento de los estándares de acreditación.
HU 9: Generar Reporte de Trazabilidad (RAA → RA → OPP)
Título: HU: Generar Reporte de Trazabilidad
Como: Autoridad de facultad o miembro del CEI
Quiero: Generar un reporte que muestre las relaciones RAA → RA → OPP
Para: Facilitar la revisión de alineaciones curriculares.
HU 10: Generar Reporte de Cumplimiento EUR-ACE
Título: HU: Generar Reporte de Cumplimiento EUR-ACE
Como: Miembro del CEI
Quiero: Generar un reporte que muestre la vinculación de RA con Objetivos EUR-ACE
Para: Evaluar el cumplimiento de los estándares de acreditación.
HU 11: Gestionar Organización EPN (Facultades, Carreras, Coordinadores)
Título: HU: Gestionar Organización EPN (Facultades, Carreras, Coordinadores)
Como: DGIP o Administrador del sistema
Quiero: Gestionar la estructura de Facultades y Carreras de la EPN, incluyendo la asignación de sus respectivos coordinadores
Para: Mantener la información organizativa de la institución actualizada y facilitar la gestión académica de cada programa.
HU 12: Gestión Básica de Usuarios y Roles (Profesor, Coordinador)
Título: HU: Gestionar Usuarios y Roles Básicos
Como: Administrador del sistema
Quiero: Crear usuarios y asignarles los roles de Profesor y Coordinador
Para: Controlar el acceso a las funcionalidades básicas del sistema.
Sprint Mapping
Velocidad del Equipo:
Velocidad Baja: 54 Story Points (sp)
Velocidad Alta: 75 Story Points (sp)
Velocidad Promedio Estimada para Planificación: 65 sp
Objetivo General del Release: Habilitar la gestión de elementos curriculares (PEA, RAA, RA, OPP, EUR-ACE), establecer las principales relaciones de alineación (RAA-RA, RA-OPP, RA-EUR-ACE), gestionar la estructura organizativa de la EPN y generar reportes de trazabilidad y cumplimiento básicos.

Sprint Mapping (5 Sprints de 1 semana cada uno, asumiendo 65 sp/sprint):
Sprint 1: (11 de Septiembre – 17 de Septiembre)

Objetivo: Establecer la base para la documentación académica esencial: PEA, RAA, RA y OPP.
Funcionalidades:
HU 1: Registrar PEA
HU 2: Definir y Registrar RAA
HU 3: Definir y Registrar RA
HU 4: Definir y Registrar OPP
Sprint 2: (18 de Septiembre – 24 de Septiembre)

Objetivo: Definir los objetivos de acreditación EUR-ACE y establecer la estructura organizativa de Facultades y Carreras.
Funcionalidades:
HU 5: Definir y Registrar Objetivos EUR-ACE
HU 11: Gestionar Organización EPN (Facultades, Carreras, Coordinadores)
Sprint 3: (25 de Septiembre – 1 de Octubre)

Objetivo: Establecer las relaciones clave entre los resultados de aprendizaje (RAA con RA y RA con OPP).
Funcionalidades:
HU 6: Relacionar RAA con RA
HU 7: Relacionar RA con OPP
Sprint 4: (2 de Octubre – 8 de Octubre)

Objetivo: Completar las relaciones curriculares de acreditación y habilitar la generación de reportes de trazabilidad y cumplimiento.
Funcionalidades:
HU 8: Relacionar RA con Objetivos EUR-ACE
HU 9: Generar Reporte de Trazabilidad (RAA → RA → OPP)
HU 10: Generar Reporte de Cumplimiento EUR-ACE
Sprint 5: (9 de Octubre – 15 de Octubre)

Objetivo: Habilitar el control de acceso y la gestión básica de usuarios y roles en el sistema.
Funcionalidades:
HU 12: Gestión Básica de Usuarios y Roles (Profesor, Coordinador)
```

### Prompt 15

```
bien si te fijas ahora te pido la planificacion del sprint 1 , entonces debes fiajrte en el release mapping de la planificaicon del release , y las hus que se generaron recientemente de las imagenes que te pase , en base a esto ahora si dame la planificacion de mi sprint vuelve a hacer lno me des lo mismo de antes , redefine 
```

### Prompt 16

```
mm , veras fijate en la planifacion del release yo ahi ya tenia una velocidad y no estas tomando esa ademas tampoco estas poniendo las hus en base a lo que se genera a partir de las imagenes hace 2 pasos atras te pedi generar las hus esas deberias ponerlas , vuelve a darme la planificacion de mi sprint 
```

### Prompt 17

```
no , no estas haciendo bien , del relase mapping yo ya tengo establecido una velocidad . esa ponla aqui . y las hus que se generaron de las imagenes , te made una imagen llamada pantalla 1 y de esa me diste las hu :


haslo de nuevo redefine todo 
```

### Prompt 18

```
Devuelve SOLO un array JSON (sin texto extra ni code fences). Cada elemento debe ser de type "HU" o "Wiki"

Ejemplo para caunto te pide type hu : Cada HU debe tener estas claves: 
hu
[ { "title": "HU: Registrar Nuevo Cliente", "como": "asesor de servicio", "quiero": "registrar un nuevo cliente", "para": "gestionar sus órdenes y comunicaciones", "acceptanceCriteria": [ "Se valida documento y datos de contacto", "Se evita duplicados por email o teléfono", "Queda un registro con fecha y usuario" ], "storyPoints": 3, "priority": 2 } ]


 ejemplo Para cuando te pida type "Wiki": { "type": "Wiki", "title": "Plan del Sprint 6", "path": "/Plan_del_Sprint_6/plan-del-sprint-6", "content": "# Plan del Sprint 6

## Objetivos...
" }

a continuación no vas a responder con nada mas solo devulve en este formato lo que se te pregute: 


Actúa como Product Owner y Scrum Master para un proyecto de acreditación académica.  

Contexto del proyecto:
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

Tu rol:
- Guiar la aplicación del marco Scrum en este proyecto.  
- Apoyar en: planificación de Sprints, construcción del Product Backlog, definición de Historias de Usuario (HU), Retrospectivas y Dailys.  
- Asegurar que el sistema cumpla con los requisitos académicos, organizativos y de acreditación.  

tu encargate de analizar las imagenes y devolver las historias de usuario reprensentadas en las imagenes guiate en base a todo el contexto ,   incluye las tareas con estos nombres : backendTasks , frontendTasks:
```

### Prompt 19

```
no ese foramto pero para lo mio , no lo mismo del markdown Ñ
```
