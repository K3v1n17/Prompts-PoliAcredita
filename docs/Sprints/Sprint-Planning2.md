<!-- SPRINT:Sprint_Planning_2_Historias_de_Usuario:START -->

## Sprint Planning 2 — Historias de Usuario extraídas del prompt

Nota: Las siguientes HUs se generaron exclusivamente a partir del prompt proporcionado. He incluido sólo los campos solicitados (title, como, quiero, para, acceptanceCriteria, storyPoints, priority). No se añadieron tareas.


### HU: Iniciar Sesión con Credenciales
Como: Usuario de PoliAcredita
Quiero: ingresar mi correo institucional y contraseña
Para: autenticarme en el sistema

AcceptanceCriteria:
- El formulario de inicio de sesión muestra campos para correo institucional y contraseña.
- El sistema valida las credenciales y permite el acceso si son correctas.
- Si las credenciales son inválidas, se muestra un mensaje de error claro.
- El flujo de login respeta el rol seleccionado (si aplica) y redirige al dashboard correspondiente.

StoryPoints: 3
Priority: 1


### HU: Seleccionar Rol en el Login
Como: Usuario de PoliAcredita
Quiero: seleccionar mi rol durante el inicio de sesión
Para: acceder a las funcionalidades específicas de mi perfil

AcceptanceCriteria:
- El selector de rol es visible en la pantalla de login cuando corresponde.
- El rol seleccionado se envía junto con las credenciales al autenticar.
- Si el rol no corresponde al usuario autenticado, se muestra un error.

StoryPoints: 3
Priority: 1


### HU: Acceder a Recuperación de Contraseña
Como: Usuario de PoliAcredita
Quiero: ver y usar un enlace para recuperar mi contraseña
Para: poder restablecer mi contraseña si la olvido

AcceptanceCriteria:
- Un enlace "¿Olvidaste tu contraseña?" es visible en la pantalla de login.
- Al hacer clic, el usuario accede al flujo de recuperación (página o modal).
- Se muestra confirmación al enviar la solicitud de recuperación.

StoryPoints: 1
Priority: 2


### HU: Listar Facultades
Como: Administrador Académico
Quiero: ver un listado de facultades
Para: gestionar la estructura organizativa de la EPN

AcceptanceCriteria:
- Existe una vista/listado de facultades con columnas relevantes (Nombre, Código, Acciones).
- La lista muestra las facultades registradas en el sistema.
- Las acciones visibles permiten editar y eliminar (si corresponde).

StoryPoints: 3
Priority: 1


### HU: Registrar Facultad
Como: Administrador Académico
Quiero: registrar una nueva facultad
Para: establecer la estructura organizativa fundamental de la EPN

AcceptanceCriteria:
- El formulario de registro muestra campos obligatorios (Nombre, Código).
- La validación de campos funciona y muestra errores claros.
- Al guardar, la facultad se persiste y aparece en el listado.

StoryPoints: 3
Priority: 1


### HU: Listar Carreras
Como: Administrador Académico
Quiero: ver un listado de carreras
Para: gestionar las carreras dentro de la facultad

AcceptanceCriteria:
- Existe una tabla de carreras con columnas relevantes (Nombre, Código, Facultad, Acciones).
- La tabla muestra las carreras existentes.

StoryPoints: 3
Priority: 1


### HU: Buscar/Filtrar Carreras
Como: Administrador Académico
Quiero: introducir texto en un campo de búsqueda para carreras
Para: filtrar la lista y encontrar una carrera específica

AcceptanceCriteria:
- Hay un campo de búsqueda visible en la vista de carreras.
- Al introducir texto, la tabla actualiza los resultados según coincidencias en nombre o código.

StoryPoints: 1
Priority: 1


### HU: Paginar Carreras
Como: Administrador Académico
Quiero: navegar entre páginas del listado de carreras
Para: revisar todas las carreras sin sobrecargar la vista

AcceptanceCriteria:
- Componentes de paginación (Anterior/Siguiente, números) están visibles y funcionan.
- Al cambiar la página, la tabla muestra los resultados correctos.

StoryPoints: 1
Priority: 1


### HU: Listar Profesores (Selector/Busqueda de Decano)
Como: Administrador Académico
Quiero: buscar y seleccionar un profesor para asignarlo como Decano
Para: vincular un Decano a una facultad

AcceptanceCriteria:
- El selector de Decano permite buscar por nombre y filtrar por rol 'Profesor'.
- Al seleccionar un profesor, su información se asocia al formulario de facultad.

StoryPoints: 2
Priority: 2


### HU: Mostrar Dashboard con Contadores
Como: Usuario autenticado
Quiero: ver contadores de entidades (facultades, carreras, usuarios activos)
Para: tener una vista rápida del estado del sistema

AcceptanceCriteria:
- El dashboard muestra tarjetas con totales: Facultades, Carreras, Usuarios Activos.
- Los valores reflejan datos del usuario autenticado (filtro por contexto si aplica).

StoryPoints: 2
Priority: 2


<!-- SPRINT:Sprint_Planning_2_Historias_de_Usuario:END -->

## PROMPT 1

**Fecha:** 10 oct 2025, 03:36 a m. (UTC)

**Prompt:**

Devuelve SOLO un array JSON válido (sin texto extra ni code fences).
🎯 Objetivo
Analizar los prototipos (imágenes) con la finalidad de identificar las Historias de Usuario (HUs) representadas.
📌 Contexto
Cada HU debe cumplir con los criterios INVEST:
Independent: Puede completarse de forma autónoma.
Negotiable: Contiene detalles discutibles con stakeholders.
Valuable: Aporta valor al usuario y al producto.
Estimable: Se puede desglosar y estimar en esfuerzo.
Small: Lo suficientemente pequeña para estimarse con precisión.
Testable: Tiene criterios de aceptación claros y verificables.


📊 Velocidad Histórica del Equipo
Velocidad baja: 54 sp
Velocidad alta: 75 sp

📌 Ejemplos de HU (histórico del equipo)
HU: Agregar miembro de la CEI
Como administrador quiero registrar a los miembros de la CEI → 3 sp
HU: Listar miembros de la CEI
Como administrador quiero listar los miembros de la CEI → 3 sp
HU: Paginar autoridades
Como administrador quiero listar las autoridades por grupos → 1 sp
HU: Filtrar autoridades
Como administrador quiero filtrar las autoridades por una palabra → 1 sp
HU: Paginar miembros de la CEI
Como administrador quiero listar los miembros de la CEI por grupos → 1 sp
HU: Filtrar miembros de la CEI
Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp

ejemplo de tareas con la estimación  :
Crear endpoint GET /dashboard/counts	0.5
6975	Implementar lógica para obtener total de Facultades	0.3
6976	Implementar lógica para obtener total de Carreras	0.3
6978	Implementar lógica para obtener total de Usuarios Activos	0.3
7147	Asegurar que el endpoint solo devuelva datos del usuario autenticado	0.3
7161	Crear endpoint GET /me/profile para datos del usuario logueado	0.5
7153	Crear endpoint GET /me/roles-permissions para roles y permisos	0.5
7159	Implementar lógica para obtener roles y permisos del usuario autenticado	0.5

Implementar campo de búsqueda en interfaz de Carreras	0.2
7102	Implementar lógica de filtrado en cliente o API para carreras	0.5
7104	Actualizar tabla de carreras con resultados de búsqueda	0.3
7073	Actualizar tabla de facultades con resultados de filtro	0.2
7063	Implementar validación de campos del formulario de facultad	0.5
7064	Integrar selector de Decano con API de búsqueda de usuarios filtrando por rol de profesor	0.4

Desglosemos esta estructura:

“Como [perfil]”: ¿para quién desarrollamos esto? No solo buscamos un puesto, buscamos el perfil de la persona. Max. Nuestro equipo debería comprender quién es Max. Con suerte hemos entrevistado a muchos Max. Comprendemos cómo trabaja esa persona, cómo piensa y cómo se siente. Sentimos empatía por Max. “Quiere”: aquí describimos su intención, no las funciones que usan. ¿Qué es lo que están intentando lograr realmente? Esta descripción debería realizarse con independencia de las implementaciones; si describes algún elemento de la IU y no el objetivo del usuario, estás cometiendo un error. “Para”: ¿cómo encaja su deseo inmediato de hacer algo en la perspectiva general? ¿Cuál es el beneficio general que intentan lograr? ¿Cuál es el gran problema que debe resolverse? Por ejemplo, las historias de usuario pueden tener este aspecto:

Como Max, quiero invitar a mis amigos, para que podamos disfrutar de este servicio juntos. Como Sascha, quiero organizar mi trabajo, para poder sentir que tengo un mayor control. Como gestor, quiero poder comprender el progreso de mis compañeros, para poder informar sobre nuestros éxitos y fallos. Esta estructura no es obligatoria, pero resulta de ayuda para establecer una definición de “hecho”. Cuando ese perfil puede alcanzar su valor deseado, la historia está completa. Recomendamos a nuestros equipos definir su propia estructura, y que no se desvíen de ella.

Accion :
sprint planning 2
Crea mi  hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada , fíjate en todas las imágenes , para la historias de usuario deben ser directas no concatenedas con "y" ni con "o"
📌 Formato de salida requerido por HU
{
  "title": "HU: ...",
  "como": "...",
  "quiero": "...",
  "para": "...",
  "acceptanceCriteria": [
    "Criterio 1",
    "Criterio 2"
  ],
  "storyPoints": number,
  "priority": number (1 = alta, 2 = media, 3 = baja),
  "frontendTasks": [
    { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number }
  ],
  "backendTasks": [
    { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number }
  ]
}

**Respuesta:**

### HU: Iniciar Sesión con Credenciales
**Como:** Usuario de PoliAcredita
**Quiero:** ingresar mi correo institucional y contraseña
**Para:** autenticarme en el sistema.

Criterios de aceptación:

- El usuario puede ingresar su correo institucional.
- El usuario puede ingresar su contraseña.
- Si las credenciales son válidas, el sistema permite proceder a la selección de rol o redirige a la página principal.
- Si las credenciales son inválidas, se muestra un mensaje de error.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Seleccionar Rol en el Login
**Como:** Usuario de PoliAcredita
**Quiero:** seleccionar mi rol de una lista desplegable durante el inicio de sesión
**Para:** acceder a las funcionalidades específicas de mi perfil.

Criterios de aceptación:

- El usuario puede seleccionar un rol de la lista (Administrador, Coordinador de Carrera, CEI, Autoridad Académica, Profesor).
- Al hacer clic en 'Iniciar Sesión', el sistema valida el rol seleccionado junto con las credenciales.
- Si el rol y las credenciales son válidos, el usuario es redirigido a su dashboard correspondiente.
- Si el rol seleccionado no es válido para el usuario, se muestra un mensaje de error.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Acceder a Recuperación de Contraseña
**Como:** Usuario de PoliAcredita
**Quiero:** ver un enlace para recuperar mi contraseña
**Para:** poder restablecerla en caso de olvidarla.

Criterios de aceptación:

- Un enlace con el texto '¿Olvidaste tu contraseña?' es visible en la página de inicio de sesión.
- Al hacer clic en el enlace, el usuario es redirigido a la funcionalidad de recuperación de contraseña (página o modal externa).
- El enlace es funcional y accesible.

**Story Points:** 1
**Prioridad:** Media (2)

---

### HU: Listar Criterios EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** ver una tabla con los códigos y descripciones de los Criterios EUR-ACE
**Para:** consultar los estándares de acreditación.

Criterios de aceptación:

- La página 'Criterios EUR-ACE' muestra una tabla con las columnas 'Código' y 'Descripción'.
- La tabla muestra los datos de los criterios EUR-ACE disponibles.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Buscar Criterios EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** introducir texto en un campo de búsqueda
**Para:** filtrar los Criterios EUR-ACE por código o descripción.

Criterios de aceptación:

- Existe un campo de búsqueda visible en la página 'Criterios EUR-ACE'.
- Al introducir texto, la tabla actualiza los resultados mostrando solo los criterios que coinciden con el texto en código o descripción.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Paginar Criterios EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** navegar entre diferentes páginas del listado de Criterios EUR-ACE
**Para:** revisar todos los criterios sin sobrecargar la pantalla.

Criterios de aceptación:

- Componentes de paginación (Previous, Next, números de página) están visibles debajo de la tabla.
- Al hacer clic en los controles de paginación, la tabla muestra la página correspondiente de resultados.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Listar Objetivos de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** ver una tabla con los códigos, descripciones y acciones para los Objetivos de Programa
**Para:** revisar los objetivos de mi carrera.

Criterios de aceptación:

- La página 'Gestión de Objetivos de Programa (OPP)' muestra una tabla con las columnas 'Código', 'Descripción' y 'Acciones'.
- La columna 'Acciones' incluye íconos para editar y eliminar cada OPP.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Buscar Objetivos de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** introducir texto en un campo de búsqueda
**Para:** filtrar los Objetivos de Programa por código o descripción.

Criterios de aceptación:

- Existe un campo de búsqueda visible en la página 'Gestión de Objetivos de Programa (OPP)'.
- Al introducir texto, la tabla actualiza los resultados mostrando solo los OPPs que coinciden con el texto en código o descripción.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Paginar Objetivos de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** navegar entre diferentes páginas del listado de Objetivos de Programa
**Para:** revisar todos los OPPs sin sobrecargar la pantalla.

Criterios de aceptación:

- Componentes de paginación están visibles y funcionales debajo de la tabla de OPPs.
- Al hacer clic en los controles de paginación, la tabla muestra la página correspondiente de resultados.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Acceder a Formulario de Creación de OPP
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el botón para añadir un nuevo Objetivo de Programa
**Para:** abrir el formulario de creación de OPP.

Criterios de aceptación:

- Un botón '+ Nuevo OPP' es visible en la página de gestión de OPPs.
- Al hacer clic en el botón, se abre el modal 'Crear Objetivo de Programa'.
- El modal contiene los campos 'Código' y 'Descripción' vacíos.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Guardar Nuevo Objetivo de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** ingresar un código y una descripción y guardarlos
**Para:** registrar un nuevo Objetivo de Programa en el sistema.

Criterios de aceptación:

- El usuario puede introducir texto en los campos 'Código' y 'Descripción' del modal 'Crear Objetivo de Programa'.
- Al hacer clic en 'Guardar', el sistema valida la unicidad del código y los campos.
- Si los datos son válidos, el OPP se guarda, el modal se cierra y la tabla de OPPs se actualiza.
- Si los datos son inválidos o el código no es único, se muestra un mensaje de error.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Acceder a Formulario de Edición de OPP
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el ícono de edición de un Objetivo de Programa
**Para:** abrir el formulario con sus datos precargados y poder modificarlos.

Criterios de aceptación:

- Al hacer clic en el ícono de 'Editar' en la fila de un OPP, se abre el modal 'Crear Objetivo de Programa' (o 'Modificar Objetivo de Programa').
- Los campos 'Código' y 'Descripción' del modal están pre-llenados con los datos del OPP seleccionado.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Guardar Edición de Objetivo de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** modificar los datos de un Objetivo de Programa en el formulario de edición y guardarlos
**Para:** actualizar su información en el sistema.

Criterios de aceptación:

- El usuario puede modificar el 'Código' y 'Descripción' en el modal de edición de OPP.
- Al hacer clic en 'Guardar', el sistema valida los cambios.
- Si los datos son válidos, el OPP se actualiza, el modal se cierra y la tabla de OPPs se refresca.
- Si los datos son inválidos o el código modificado no es único, se muestra un mensaje de error.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Eliminar Objetivo de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el ícono de eliminación de un Objetivo de Programa
**Para:** removerlo del sistema.

Criterios de aceptación:

- Al hacer clic en el ícono de 'Eliminar' en la fila de un OPP, se muestra una ventana de confirmación.
- Si el usuario confirma, el OPP es eliminado de la base de datos y de la tabla visible.
- Si el usuario cancela, el OPP no es eliminado.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Listar Resultados de Aprendizaje Generales (RA)
**Como:** Coordinador de Carrera
**Quiero:** ver una tabla con los códigos, descripciones y acciones de los Resultados de Aprendizaje Generales
**Para:** revisar los RG de mi carrera.

Criterios de aceptación:

- Al seleccionar la pestaña 'Resultados Generales (RG)', se muestra una tabla con columnas 'Código', 'Descripción' y 'Acciones'.
- La columna 'Acciones' incluye íconos para editar y eliminar cada RG.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Listar Resultados de Aprendizaje Específicos (RA)
**Como:** Coordinador de Carrera
**Quiero:** ver una tabla con los códigos, descripciones y acciones de los Resultados de Aprendizaje Específicos
**Para:** revisar los RE de mi carrera.

Criterios de aceptación:

- Al seleccionar la pestaña 'Resultados Específicos (RE)', se muestra una tabla con columnas 'Código', 'Descripción' y 'Acciones'.
- La columna 'Acciones' incluye íconos para editar y eliminar cada RE.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Buscar Resultados de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** introducir texto en un campo de búsqueda
**Para:** filtrar los Resultados de Aprendizaje (RG o RE) por código o descripción en la pestaña actual.

Criterios de aceptación:

- Existe un campo de búsqueda visible en la página 'Gestión de Resultados de Aprendizaje (RA)'.
- Al introducir texto, la tabla de la pestaña activa (RG o RE) actualiza los resultados mostrando solo los RAs que coinciden.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Paginar Resultados de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** navegar entre diferentes páginas de los listados de Resultados de Aprendizaje (RG o RE)
**Para:** revisar todos los RAs sin sobrecargar la pantalla.

Criterios de aceptación:

- Componentes de paginación están visibles y funcionales debajo de ambas tablas de RAs.
- Al hacer clic en los controles de paginación, la tabla activa muestra la página correspondiente de resultados.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Acceder a Formulario de Creación de RA
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el botón para añadir un nuevo Resultado de Aprendizaje
**Para:** abrir el formulario de creación de RA.

Criterios de aceptación:

- Un botón '+ Nuevo RA' es visible en la página de gestión de RAs.
- Al hacer clic en el botón, se abre el modal 'Agregar Resultado de Aprendizaje'.
- El modal contiene los campos 'Código', 'Tipo' (dropdown) y 'Descripción' vacíos.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Guardar Nuevo Resultado de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** ingresar un código, tipo y descripción, y guardarlos
**Para:** registrar un nuevo Resultado de Aprendizaje en el sistema.

Criterios de aceptación:

- El usuario puede introducir texto en 'Código' y 'Descripción' y seleccionar un 'Tipo' (General/Específico).
- Al hacer clic en 'Guardar', el sistema valida la unicidad del código para el tipo seleccionado y los campos.
- Si los datos son válidos, el RA se guarda, el modal se cierra y la tabla de RAs se actualiza.
- Si los datos son inválidos o el código no es único, se muestra un mensaje de error.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Acceder a Formulario de Edición de RA
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el ícono de edición de un Resultado de Aprendizaje
**Para:** abrir el formulario con sus datos precargados y poder modificarlos.

Criterios de aceptación:

- Al hacer clic en el ícono de 'Editar' en la fila de un RA, se abre el modal 'Modificar Resultado de Aprendizaje'.
- Los campos 'Código', 'Tipo' y 'Descripción' del modal están pre-llenados con los datos del RA seleccionado.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Guardar Edición de Resultado de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** modificar los datos de un Resultado de Aprendizaje en el formulario de edición y guardarlos
**Para:** actualizar su información en el sistema.

Criterios de aceptación:

- El usuario puede modificar 'Código', 'Tipo' y 'Descripción' en el modal de edición de RA.
- Al hacer clic en 'Guardar', el sistema valida los cambios.
- Si los datos son válidos, el RA se actualiza, el modal se cierra y la tabla de RAs se refresca.
- Si los datos son inválidos o el código modificado no es único para su tipo, se muestra un mensaje de error.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Eliminar Resultado de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el ícono de eliminación de un Resultado de Aprendizaje
**Para:** poder removerlo del sistema.

Criterios de aceptación:

- Al hacer clic en el ícono de 'Eliminar' en la fila de un RA, se muestra una ventana de confirmación.
- Si el usuario confirma, el RA es eliminado de la base de datos y de la tabla visible.
- Si el usuario cancela, el RA no es eliminado.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Visualizar Matriz de Mapeo OPP vs RA
**Como:** Coordinador de Carrera
**Quiero:** ver la matriz de relaciones entre Objetivos de Programa y Resultados de Aprendizaje
**Para:** comprender visualmente la cobertura de los objetivos por los resultados.

Criterios de aceptación:

- La pestaña 'OPP vs RA' en 'Editor Mapeos' muestra una tabla matriz.
- La matriz tiene los OPPs como filas y los RAs como columnas.
- Las celdas muestran un indicador visual si existe una relación entre un OPP y un RA.
- La matriz incluye una leyenda clara para 'Objetivos de Carrera' y 'Resultados de Aprendizaje Carrera'.

**Story Points:** 5
**Prioridad:** Alta (1)

---

### HU: Ver Descripción de OPP en Matriz
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en un ícono de información junto a un OPP en la matriz
**Para:** ver la descripción completa de ese Objetivo de Programa.

Criterios de aceptación:

- Cada OPP en la matriz tiene un ícono de información (i) visible.
- Al hacer clic en el ícono, se muestra la descripción detallada del OPP correspondiente (ej., en un tooltip o modal pequeño).

**Story Points:** 1
**Prioridad:** Media (2)

---

### HU: Iniciar Asistente de Creación de Mapeo OPP vs RA
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el botón para crear una nueva relación de mapeo
**Para:** iniciar el asistente de 3 pasos para establecer conexiones entre OPPs y RAs.

Criterios de aceptación:

- Un botón '+ Nueva Relación' es visible en la página de la matriz OPP vs RA.
- Al hacer clic en el botón, se abre el asistente de 3 pasos, mostrando inicialmente el 'Paso 1: Seleccionar Objetivos de carrera (OPP)'.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Seleccionar Objetivos de Programa en Asistente de Mapeo (Paso 1)
**Como:** Coordinador de Carrera
**Quiero:** seleccionar uno o varios Objetivos de Programa de una lista con búsqueda y paginación dentro del asistente
**Para:** definir los OPPs que se relacionarán con los Resultados de Aprendizaje.

Criterios de aceptación:

- El 'Paso 1: Seleccionar Objetivos de carrera (OPP)' muestra una lista de OPPs en una tabla.
- La tabla de OPPs tiene un campo de búsqueda y controles de paginación.
- El usuario puede seleccionar uno o varios OPPs de la lista.
- El botón 'Siguiente' se habilita al seleccionar al menos un OPP.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Seleccionar Resultados de Aprendizaje en Asistente de Mapeo (Paso 2)
**Como:** Coordinador de Carrera
**Quiero:** seleccionar uno o varios Resultados de Aprendizaje de una lista con búsqueda, paginación y filtro por tipo dentro del asistente
**Para:** definir los RAs que se relacionarán con los OPPs previamente seleccionados.

Criterios de aceptación:

- El 'Paso 2: Seleccionar Resultados de Aprendizaje (RA)' muestra una lista de RAs en una tabla.
- La tabla de RAs tiene un campo de búsqueda, controles de paginación y un filtro por 'Tipo de Aprendizaje' (General/Específico).
- El usuario puede seleccionar uno o varios RAs de la lista.
- El botón 'Siguiente' se habilita al seleccionar al menos un RA.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Justificar Relación de Mapeo en Asistente (Paso 3)
**Como:** Coordinador de Carrera
**Quiero:** ingresar una justificación detallada para la relación de mapeo en el último paso del asistente
**Para:** documentar el porqué de la conexión entre los OPPs y RAs seleccionados.

Criterios de aceptación:

- El 'Paso 3: Justificar Relación' muestra un resumen de los OPPs y RAs seleccionados en los pasos anteriores.
- Existe un campo de texto etiquetado 'Justificación' donde el usuario puede escribir su explicación.
- Los botones 'Cancelar' y 'Guardar' son visibles.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Guardar Nueva Relación de Mapeo OPP vs RA
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en 'Guardar' en el último paso del asistente
**Para:** registrar las nuevas relaciones de mapeo con su justificación en el sistema.

Criterios de aceptación:

- Al hacer clic en 'Guardar' en el Paso 3, el sistema envía los OPPs, RAs y la justificación.
- Las relaciones de mapeo se registran en la base de datos.
- El asistente se cierra, y la matriz de mapeos se actualiza para reflejar las nuevas relaciones.
- Se muestra una confirmación de éxito o un mensaje de error si falla el guardado.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Crear Mapeo Directo con Justificación
**Como:** Coordinador de Carrera
**Quiero:** ingresar directamente una justificación para un mapeo
**Para:** documentar la razón específica de una relación entre un OPP y un RA de forma simplificada.

Criterios de aceptación:

- El modal 'Crear Mapeo' se abre, mostrando solo un campo de texto para la 'Justificación'.
- El usuario puede introducir texto en el campo de justificación.
- Al hacer clic en 'Guardar', la justificación se asocia a la relación (suponiendo que el OPP y RA ya están definidos por el contexto que abrió el modal).
- El modal se cierra y la matriz se actualiza.

**Story Points:** 3
**Prioridad:** Media (2)

---

### HU: Visualizar Matriz de Mapeo RA vs EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** ver la matriz de relaciones entre Resultados de Aprendizaje y Criterios EUR-ACE
**Para:** evaluar la alineación de los RA con los estándares internacionales.

Criterios de aceptación:

- Al seleccionar la pestaña 'RA vs EUR-ACE' en 'Editor Mapeos', se muestra una tabla matriz.
- La matriz tiene los RAs como filas y los Criterios EUR-ACE como columnas.
- Las celdas muestran un indicador visual si existe una relación entre un RA y un Criterio EUR-ACE.
- La matriz incluye una leyenda clara para sus elementos.

**Story Points:** 5
**Prioridad:** Alta (1)

---

### HU: Ver Descripción de RA en Matriz
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en un ícono de información junto a un RA en la matriz
**Para:** ver la descripción completa de ese Resultado de Aprendizaje.

Criterios de aceptación:

- Cada RA en la matriz tiene un ícono de información (i) visible.
- Al hacer clic en el ícono, se muestra la descripción detallada del RA correspondiente (ej., en un tooltip o modal pequeño).

**Story Points:** 1
**Prioridad:** Media (2)

<!-- --- -->

## PROMPT 2

**Fecha:** 10 oct 2025, 03:44 a m. (UTC)

**Prompt:**

Devuelve SOLO un array JSON válido (sin texto extra ni code fences).
🎯 Objetivo
Analizar los prototipos (imágenes) con la finalidad de identificar las Historias de Usuario (HUs) representadas.
📌 Contexto
Cada HU debe cumplir con los criterios INVEST:
Independent: Puede completarse de forma autónoma.
Negotiable: Contiene detalles discutibles con stakeholders.
Valuable: Aporta valor al usuario y al producto.
Estimable: Se puede desglosar y estimar en esfuerzo.
Small: Lo suficientemente pequeña para estimarse con precisión.
Testable: Tiene criterios de aceptación claros y verificables.


📊 Velocidad Histórica del Equipo
Velocidad baja: 54 sp
Velocidad alta: 75 sp

📌 Ejemplos de HU (histórico del equipo)
HU: Agregar miembro de la CEI
Como administrador quiero registrar a los miembros de la CEI → 3 sp
HU: Listar miembros de la CEI
Como administrador quiero listar los miembros de la CEI → 3 sp
HU: Paginar autoridades
Como administrador quiero listar las autoridades por grupos → 1 sp
HU: Filtrar autoridades
Como administrador quiero filtrar las autoridades por una palabra → 1 sp
HU: Paginar miembros de la CEI
Como administrador quiero listar los miembros de la CEI por grupos → 1 sp
HU: Filtrar miembros de la CEI
Como administrador quiero filtrar los miembros de la CEI por una palabra → 1 sp

ejemplo de tareas con la estimación  :
Crear endpoint GET /dashboard/counts	0.5
6975	Implementar lógica para obtener total de Facultades	0.3
6976	Implementar lógica para obtener total de Carreras	0.3
6978	Implementar lógica para obtener total de Usuarios Activos	0.3
7147	Asegurar que el endpoint solo devuelva datos del usuario autenticado	0.3
7161	Crear endpoint GET /me/profile para datos del usuario logueado	0.5
7153	Crear endpoint GET /me/roles-permissions para roles y permisos	0.5
7159	Implementar lógica para obtener roles y permisos del usuario autenticado	0.5

Implementar campo de búsqueda en interfaz de Carreras	0.2
7102	Implementar lógica de filtrado en cliente o API para carreras	0.5
7104	Actualizar tabla de carreras con resultados de búsqueda	0.3
7073	Actualizar tabla de facultades con resultados de filtro	0.2
7063	Implementar validación de campos del formulario de facultad	0.5
7064	Integrar selector de Decano con API de búsqueda de usuarios filtrando por rol de profesor	0.4

Desglosemos esta estructura:

“Como [perfil]”: ¿para quién desarrollamos esto? No solo buscamos un puesto, buscamos el perfil de la persona. Max. Nuestro equipo debería comprender quién es Max. Con suerte hemos entrevistado a muchos Max. Comprendemos cómo trabaja esa persona, cómo piensa y cómo se siente. Sentimos empatía por Max. “Quiere”: aquí describimos su intención, no las funciones que usan. ¿Qué es lo que están intentando lograr realmente? Esta descripción debería realizarse con independencia de las implementaciones; si describes algún elemento de la IU y no el objetivo del usuario, estás cometiendo un error. “Para”: ¿cómo encaja su deseo inmediato de hacer algo en la perspectiva general? ¿Cuál es el beneficio general que intentan lograr? ¿Cuál es el gran problema que debe resolverse? Por ejemplo, las historias de usuario pueden tener este aspecto:

Como Max, quiero invitar a mis amigos, para que podamos disfrutar de este servicio juntos. Como Sascha, quiero organizar mi trabajo, para poder sentir que tengo un mayor control. Como gestor, quiero poder comprender el progreso de mis compañeros, para poder informar sobre nuestros éxitos y fallos. Esta estructura no es obligatoria, pero resulta de ayuda para establecer una definición de “hecho”. Cuando ese perfil puede alcanzar su valor deseado, la historia está completa. Recomendamos a nuestros equipos definir su propia estructura, y que no se desvíen de ella.

Accion :
sprint planning 2
Crea mi  hus basándote únicamente en los prototipos (imagenes) que te proporciono no inventes nada , fíjate en todas las imágenes , para la historias de usuario deben ser directas no concatenedas con "y" ni con "o"
📌 Formato de salida requerido por HU
{
  "title": "HU: ...",
  "como": "...",
  "quiero": "...",
  "para": "...",
  "acceptanceCriteria": [
    "Criterio 1",
    "Criterio 2"
  ],
  "storyPoints": number,
  "priority": number (1 = alta, 2 = media, 3 = baja),
  "frontendTasks": [
    { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number }
  ],
  "backendTasks": [
    { "title": "...", "originalEstimate": number, "remainingWork": number, "completedWork": number }
  ]
}

**Respuesta:**

### HU: Iniciar Sesión con Credenciales
**Como:** Usuario de PoliAcredita
**Quiero:** ingresar mi correo institucional y contraseña
**Para:** autenticarme en el sistema.

Criterios de aceptación:

- Los campos de correo institucional y contraseña son visibles y editables.
- El botón 'Iniciar Sesión' está disponible.
- Si las credenciales son correctas, el sistema procede a la selección de rol o al dashboard.
- Si las credenciales son incorrectas, se muestra un mensaje de error.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Seleccionar Rol al Iniciar Sesión
**Como:** Usuario de PoliAcredita
**Quiero:** elegir mi rol de una lista desplegable
**Para:** acceder a las funcionalidades específicas de mi perfil en la aplicación.

Criterios de aceptación:

- El selector de rol con las opciones (Administrador, Coordinador de Carrera, CEI, Autoridad Académica, Profesor) es visible.
- El usuario puede seleccionar un rol de la lista.
- Al hacer clic en 'Iniciar Sesión', el sistema valida el rol seleccionado junto con las credenciales.
- Si el rol seleccionado no corresponde al usuario, se muestra un mensaje de error.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Acceder a Recuperación de Contraseña
**Como:** Usuario de PoliAcredita
**Quiero:** hacer clic en el enlace '¿Olvidaste tu contraseña?'
**Para:** iniciar el proceso de restablecimiento de mi contraseña.

Criterios de aceptación:

- El enlace '¿Olvidaste tu contraseña?' es visible en la página de inicio de sesión.
- Al hacer clic en el enlace, el usuario es redirigido a la página/funcionalidad de recuperación de contraseña.

**Story Points:** 1
**Prioridad:** Media (2)

---

### HU: Listar Criterios EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** ver una tabla con los códigos y descripciones de los Criterios EUR-ACE
**Para:** consultar los estándares de acreditación.

Criterios de aceptación:

- La página 'Criterios EUR-ACE' muestra una tabla con las columnas 'Código' y 'Descripción'.
- La tabla carga y muestra los datos de los criterios EUR-ACE disponibles.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Buscar Criterios EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** introducir texto en un campo de búsqueda
**Para:** filtrar los Criterios EUR-ACE por código o descripción.

Criterios de aceptación:

- Existe un campo de búsqueda visible en la página 'Criterios EUR-ACE' con placeholder 'Buscar por código o descripción...'.
- Al introducir texto, la tabla actualiza los resultados mostrando solo los criterios que coinciden con el texto en código o descripción.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Paginar Criterios EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** navegar entre diferentes páginas del listado de Criterios EUR-ACE
**Para:** revisar todos los criterios sin sobrecargar la pantalla.

Criterios de aceptación:

- Los controles de paginación (Previous, Next, números de página) son visibles debajo de la tabla.
- Al hacer clic en los controles de paginación, la tabla muestra la página correspondiente de resultados.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Listar Objetivos de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** ver una tabla con los códigos, descripciones y acciones de los Objetivos de Programa
**Para:** revisar los objetivos de mi carrera.

Criterios de aceptación:

- La página 'Gestión de Objetivos de Programa (OPP)' muestra una tabla con las columnas 'Código', 'Descripción' y 'Acciones'.
- La columna 'Acciones' incluye íconos para editar y eliminar cada OPP.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Buscar Objetivos de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** introducir texto en un campo de búsqueda
**Para:** filtrar los Objetivos de Programa por código o descripción.

Criterios de aceptación:

- Existe un campo de búsqueda visible en la página 'Gestión de Objetivos de Programa (OPP)'.
- Al introducir texto, la tabla actualiza los resultados mostrando solo los OPPs que coinciden con el texto en código o descripción.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Paginar Objetivos de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** navegar entre diferentes páginas del listado de Objetivos de Programa
**Para:** revisar todos los OPPs sin sobrecargar la pantalla.

Criterios de aceptación:

- Los controles de paginación son visibles y funcionales debajo de la tabla de OPPs.
- Al hacer clic en los controles de paginación, la tabla muestra la página correspondiente de resultados.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Abrir Formulario de Creación de OPP
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el botón '+ Nuevo OPP'
**Para:** ver un formulario vacío para crear un nuevo Objetivo de Programa.

Criterios de aceptación:

- Un botón '+ Nuevo OPP' es visible en la página de gestión de OPPs.
- Al hacer clic en el botón, se abre el modal 'Crear Objetivo de Programa'.
- El modal contiene los campos 'Código' y 'Descripción' vacíos y listos para introducir datos.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Guardar Nuevo Objetivo de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** ingresar un código y una descripción y hacer clic en 'Guardar'
**Para:** registrar un nuevo Objetivo de Programa en el sistema.

Criterios de aceptación:

- El usuario puede introducir texto en los campos 'Código' y 'Descripción' del modal.
- Al hacer clic en 'Guardar', el sistema valida la unicidad del código y los campos no vacíos.
- Si los datos son válidos, el OPP se guarda, el modal se cierra y la tabla de OPPs se actualiza.
- Si los datos son inválidos o el código no es único, se muestra un mensaje de error claro.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Abrir Formulario de Edición de OPP
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el ícono de edición de un Objetivo de Programa
**Para:** ver sus datos precargados en un formulario y poder modificarlos.

Criterios de aceptación:

- Al hacer clic en el ícono de 'Editar' en la fila de un OPP, se abre el modal 'Crear Objetivo de Programa' (o similar).
- Los campos 'Código' y 'Descripción' del modal están pre-llenados con los datos del OPP seleccionado.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Guardar Edición de Objetivo de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** modificar los datos de un Objetivo de Programa en el formulario de edición y hacer clic en 'Guardar'
**Para:** actualizar su información en el sistema.

Criterios de aceptación:

- El usuario puede modificar el 'Código' y 'Descripción' en el modal de edición de OPP.
- Al hacer clic en 'Guardar', el sistema valida los cambios, incluyendo la unicidad del código.
- Si los datos son válidos, el OPP se actualiza, el modal se cierra y la tabla de OPPs se refresca.
- Si los datos son inválidos o el código modificado no es único, se muestra un mensaje de error.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Eliminar Objetivo de Programa (OPP)
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el ícono de eliminación de un Objetivo de Programa
**Para:** removerlo del sistema.

Criterios de aceptación:

- Al hacer clic en el ícono de 'Eliminar' en la fila de un OPP, se muestra una ventana de confirmación.
- Si el usuario confirma, el OPP es eliminado de la base de datos y de la tabla visible.
- Si el usuario cancela, el OPP no es eliminado.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Visualizar Resultados de Aprendizaje Generales
**Como:** Coordinador de Carrera
**Quiero:** seleccionar la pestaña 'Resultados Generales (RG)' y ver una tabla con los códigos, descripciones y acciones de los RG
**Para:** revisar los resultados de aprendizaje generales de mi carrera.

Criterios de aceptación:

- La pestaña 'Resultados Generales (RG)' es visible y seleccionable.
- Al seleccionarla, se muestra una tabla con columnas 'Código', 'Descripción' y 'Acciones'.
- La columna 'Acciones' incluye íconos para editar y eliminar cada RG.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Visualizar Resultados de Aprendizaje Específicos
**Como:** Coordinador de Carrera
**Quiero:** seleccionar la pestaña 'Resultados Específicos (RE)' y ver una tabla con los códigos, descripciones y acciones de los RE
**Para:** revisar los resultados de aprendizaje específicos de mi carrera.

Criterios de aceptación:

- La pestaña 'Resultados Específicos (RE)' es visible y seleccionable.
- Al seleccionarla, se muestra una tabla con columnas 'Código', 'Descripción' y 'Acciones'.
- La columna 'Acciones' incluye íconos para editar y eliminar cada RE.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Buscar Resultados de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** introducir texto en un campo de búsqueda en la pestaña activa
**Para:** filtrar los Resultados de Aprendizaje por código o descripción.

Criterios de aceptación:

- Existe un campo de búsqueda visible en la página 'Gestión de Resultados de Aprendizaje (RA)'.
- Al introducir texto, la tabla de la pestaña activa (RG o RE) actualiza los resultados mostrando solo los RAs que coinciden.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Paginar Resultados de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** navegar entre diferentes páginas de los listados de Resultados de Aprendizaje (RG o RE)
**Para:** revisar todos los RAs sin sobrecargar la pantalla.

Criterios de aceptación:

- Los controles de paginación son visibles y funcionales debajo de ambas tablas de RAs.
- Al hacer clic en los controles de paginación, la tabla activa muestra la página correspondiente de resultados.

**Story Points:** 1
**Prioridad:** Alta (1)

---

### HU: Abrir Formulario de Creación de RA
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el botón '+ Nuevo RA'
**Para:** ver un formulario vacío para crear un nuevo Resultado de Aprendizaje.

Criterios de aceptación:

- Un botón '+ Nuevo RA' es visible en la página de gestión de RAs.
- Al hacer clic en el botón, se abre el modal 'Agregar Resultado de Aprendizaje'.
- El modal contiene los campos 'Código', 'Tipo' (selector con opciones General/Específico) y 'Descripción' vacíos.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Guardar Nuevo Resultado de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** ingresar un código, seleccionar un tipo y una descripción y hacer clic en 'Guardar'
**Para:** registrar un nuevo Resultado de Aprendizaje en el sistema.

Criterios de aceptación:

- El usuario puede introducir texto en 'Código' y 'Descripción' y seleccionar un 'Tipo' (General/Específico).
- Al hacer clic en 'Guardar', el sistema valida la unicidad del código para el tipo seleccionado y que los campos no estén vacíos.
- Si los datos son válidos, el RA se guarda, el modal se cierra y la tabla de RAs se actualiza.
- Si los datos son inválidos o el código no es único, se muestra un mensaje de error.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Abrir Formulario de Edición de RA
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el ícono de edición de un Resultado de Aprendizaje
**Para:** ver sus datos precargados en un formulario y poder modificarlos.

Criterios de aceptación:

- Al hacer clic en el ícono de 'Editar' en la fila de un RA, se abre el modal 'Modificar Resultado de Aprendizaje'.
- Los campos 'Código', 'Tipo' y 'Descripción' del modal están pre-llenados con los datos del RA seleccionado.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Guardar Edición de Resultado de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** modificar los datos de un Resultado de Aprendizaje en el formulario de edición y hacer clic en 'Guardar'
**Para:** actualizar su información en el sistema.

Criterios de aceptación:

- El usuario puede modificar 'Código', 'Tipo' y 'Descripción' en el modal de edición de RA.
- Al hacer clic en 'Guardar', el sistema valida los cambios, incluyendo la unicidad del código para su tipo.
- Si los datos son válidos, el RA se actualiza, el modal se cierra y la tabla de RAs se refresca.
- Si los datos son inválidos o el código modificado no es único para su tipo, se muestra un mensaje de error.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Eliminar Resultado de Aprendizaje (RA)
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el ícono de eliminación de un Resultado de Aprendizaje
**Para:** removerlo del sistema.

Criterios de aceptación:

- Al hacer clic en el ícono de 'Eliminar' en la fila de un RA, se muestra una ventana de confirmación.
- Si el usuario confirma, el RA es eliminado de la base de datos y de la tabla visible.
- Si el usuario cancela, el RA no es eliminado.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Visualizar Matriz de Mapeo OPP vs RA
**Como:** Coordinador de Carrera
**Quiero:** seleccionar la pestaña 'OPP vs RA' y ver una matriz que relaciona Objetivos de Programa con Resultados de Aprendizaje
**Para:** comprender visualmente la alineación curricular.

Criterios de aceptación:

- La pestaña 'OPP vs RA' es visible y seleccionable en 'Editor Mapeos'.
- Al seleccionarla, se muestra una tabla matriz con los OPPs como filas y los RAs como columnas.
- Las celdas muestran un indicador visual (ej. checkmark) si existe una relación entre un OPP y un RA.
- La matriz incluye una leyenda clara para 'Objetivos de Carrera' y 'Resultados de Aprendizaje Carrera'.

**Story Points:** 5
**Prioridad:** Alta (1)

---

### HU: Ver Descripción de OPP en Matriz de Mapeo
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en un ícono de información junto a un OPP en la matriz
**Para:** ver la descripción completa de ese Objetivo de Programa.

Criterios de aceptación:

- Cada OPP en la matriz tiene un ícono de información (i) visible.
- Al hacer clic en el ícono, se muestra la descripción detallada del OPP correspondiente (ej., en un tooltip o modal pequeño).

**Story Points:** 1
**Prioridad:** Media (2)

---

### HU: Iniciar Asistente de Creación de Mapeo OPP vs RA
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en el botón '+ Nueva Relación'
**Para:** abrir el asistente de creación de mapeos entre Objetivos de Programa y Resultados de Aprendizaje.

Criterios de aceptación:

- Un botón '+ Nueva Relación' es visible en la página de la matriz OPP vs RA.
- Al hacer clic en el botón, se abre el asistente de 3 pasos, mostrando inicialmente el 'Paso 1: Seleccionar Objetivos de carrera (OPP)'.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Seleccionar Objetivos de Programa en Asistente de Mapeo (Paso 1)
**Como:** Coordinador de Carrera
**Quiero:** elegir uno o varios Objetivos de Programa de una lista con búsqueda y paginación dentro del asistente
**Para:** definir los OPPs que se relacionarán con los Resultados de Aprendizaje.

Criterios de aceptación:

- El 'Paso 1: Seleccionar Objetivos de carrera (OPP)' muestra una lista de OPPs en una tabla.
- La tabla de OPPs tiene un campo de búsqueda y controles de paginación.
- El usuario puede seleccionar uno o varios OPPs mediante casillas de verificación.
- El botón 'Siguiente' se habilita al seleccionar al menos un OPP.

**Story Points:** 3
**Prioridad:** Alta (1)

---

### HU: Seleccionar Resultados de Aprendizaje en Asistente de Mapeo (Paso 2)
**Como:** Coordinador de Carrera
**Quiero:** elegir uno o varios Resultados de Aprendizaje de una lista con búsqueda, paginación y filtro por tipo dentro del asistente
**Para:** definir los RAs que se relacionarán con los OPPs previamente seleccionados.

Criterios de aceptación:

- El 'Paso 2: Seleccionar Resultados de Aprendizaje (RA)' muestra una lista de RAs en una tabla.
- La tabla de RAs tiene un campo de búsqueda, controles de paginación y un selector de 'Tipo de Aprendizaje' (General/Específico).
- El usuario puede seleccionar uno o varios RAs mediante casillas de verificación.
- El botón 'Siguiente' se habilita al seleccionar al menos un RA.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Justificar Nueva Relación de Mapeo en Asistente (Paso 3)
**Como:** Coordinador de Carrera
**Quiero:** ver un resumen de los elementos seleccionados y un campo de texto para justificar la relación
**Para:** documentar la razón del mapeo entre los OPPs y RAs seleccionados.

Criterios de aceptación:

- El 'Paso 3: Justificar Relación' muestra un resumen de los OPPs y RAs seleccionados en los pasos anteriores.
- Existe un campo de texto etiquetado 'Justificación' donde el usuario puede escribir su explicación.
- Los botones 'Cancelar' y 'Guardar' son visibles.

**Story Points:** 2
**Prioridad:** Alta (1)

---

### HU: Guardar Nueva Relación de Mapeo OPP vs RA con Justificación
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en 'Guardar' en el último paso del asistente
**Para:** registrar las nuevas relaciones de mapeo con su justificación en el sistema.

Criterios de aceptación:

- Al hacer clic en 'Guardar' en el Paso 3, el sistema envía los OPPs, RAs y la justificación.
- Las relaciones de mapeo se registran exitosamente en la base de datos.
- El asistente se cierra, y la matriz de mapeos se actualiza para reflejar las nuevas relaciones.
- Se muestra un mensaje de éxito o de error al usuario.

**Story Points:** 4
**Prioridad:** Alta (1)

---

### HU: Cancelar Creación de Mapeo OPP vs RA
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en 'Cancelar' en cualquier paso del asistente
**Para:** descartar la creación del mapeo y volver a la matriz.

Criterios de aceptación:

- El botón 'Cancelar' es visible en todos los pasos del asistente.
- Al hacer clic en 'Cancelar', el asistente se cierra sin guardar cambios.

**Story Points:** 1
**Prioridad:** Media (2)

---

### HU: Visualizar Matriz de Mapeo RA vs EUR-ACE
**Como:** Coordinador de Carrera
**Quiero:** seleccionar la pestaña 'RA vs EUR-ACE' y ver una matriz que relaciona Resultados de Aprendizaje con Criterios EUR-ACE
**Para:** evaluar la alineación de los RA con los estándares internacionales.

Criterios de aceptación:

- La pestaña 'RA vs EUR-ACE' es visible y seleccionable en 'Editor Mapeos'.
- Al seleccionarla, se muestra una tabla matriz con los RAs como filas y los Criterios EUR-ACE como columnas.
- Las celdas muestran un indicador visual si existe una relación entre un RA y un Criterio EUR-ACE.
- La matriz incluye una leyenda clara para sus elementos.

**Story Points:** 5
**Prioridad:** Alta (1)

---

### HU: Ver Descripción de RA en Matriz de Mapeo
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en un ícono de información junto a un RA en la matriz 'RA vs EUR-ACE'
**Para:** ver la descripción completa de ese Resultado de Aprendizaje.

Criterios de aceptación:

- Cada RA en la matriz tiene un ícono de información (i) visible.
- Al hacer clic en el ícono, se muestra la descripción detallada del RA correspondiente (ej., en un tooltip o modal pequeño).

**Story Points:** 1
**Prioridad:** Media (2)

---

### HU: Ingresar Justificación de Mapeo Directo
**Como:** Coordinador de Carrera
**Quiero:** abrir el modal 'Crear Mapeo' e ingresar una justificación en el campo de texto
**Para:** documentar la razón de una relación de mapeo existente o nueva de forma directa.

Criterios de aceptación:

- El modal 'Crear Mapeo' es visible, mostrando solo un campo de texto etiquetado 'Justificación'.
- El usuario puede introducir texto en el campo de justificación.
- Los botones 'Cancelar' y 'Guardar' son visibles y funcionales.

**Story Points:** 2
**Prioridad:** Media (2)

---

### HU: Guardar Justificación de Mapeo Directo
**Como:** Coordinador de Carrera
**Quiero:** hacer clic en 'Guardar' después de ingresar una justificación en el modal 'Crear Mapeo'
**Para:** asociar la justificación a un mapeo y cerrarlo.

Criterios de aceptación:

- Al hacer clic en 'Guardar', el sistema envía la justificación.
- La justificación se guarda exitosamente para el mapeo correspondiente.
- El modal se cierra y la matriz (OPP vs RA o RA vs EUR-ACE, dependiendo del contexto) se actualiza si aplica.
- Se muestra un mensaje de éxito o error al usuario.

**Story Points:** 3
**Prioridad:** Media (2)

<!-- --- -->
