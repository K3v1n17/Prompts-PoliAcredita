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
