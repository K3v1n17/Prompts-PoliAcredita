

<!-- SPRINT:Sprint_Planning_1_Historias_de_Usuario:START -->

# 📌 Sprint Planning 1 – Historias de Usuario

## HU: Registrar Facultad
**Como:** Administrador Académico
**Quiero:** registrar una nueva facultad
**Para:** establecer la estructura organizativa fundamental de la EPN

**Criterios de aceptación**
- El formulario de registro de facultad es visible con campos para 'Nombre' y 'Código'.
- La validación de campos obligatorios (ej. 'Nombre' no vacío) funciona correctamente.
- Al enviar el formulario, la facultad se guarda exitosamente en el sistema.
- Se muestra un mensaje de confirmación de registro de facultad exitoso.
- La nueva facultad aparece en el listado de facultades.

**Story Points:** 3 · **Prioridad:** Alta (1)

---

## HU: Listar Facultades
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las facultades registradas
**Para:** consultar y verificar la estructura organizativa de la EPN

**Criterios de aceptación**
- Se muestra una tabla o listado con todas las facultades registradas.
- Cada facultad muestra al menos su 'Nombre' y 'Código'.
- Los datos de las facultades se cargan correctamente desde el backend.

**Story Points:** 3 · **Prioridad:** Alta (1)

---

## HU: Registrar Carrera
**Como:** Administrador Académico
**Quiero:** registrar una nueva carrera asociada a una facultad existente
**Para:** expandir la oferta académica dentro de la estructura de la EPN

**Criterios de aceptación**
- El formulario de registro de carrera es visible con campos para 'Nombre', 'Código' y un selector de 'Facultad'.
- El selector de 'Facultad' muestra una lista de las facultades existentes.
- La validación de campos obligatorios funciona correctamente.
- Al enviar el formulario, la carrera se guarda con su facultad asociada.
- Se muestra un mensaje de confirmación de registro de carrera exitoso.
- La nueva carrera aparece en el listado de carreras.

**Story Points:** 4 · **Prioridad:** Alta (1)

---

## HU: Listar Carreras
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las carreras registradas, incluyendo su facultad
**Para:** consultar la oferta académica y su organización dentro de la EPN

**Criterios de aceptación**
- Se muestra una tabla o listado con todas las carreras registradas.
- Cada carrera muestra al menos su 'Nombre', 'Código' y la 'Facultad Asociada'.
- Los datos de las carreras se cargan correctamente desde el backend.

**Story Points:** 3 · **Prioridad:** Alta (1)

---

## HU: Registrar Materia
**Como:** Administrador Académico
**Quiero:** registrar una nueva materia asociada a una carrera existente
**Para:** establecer el plan de estudios de las carreras de la EPN

**Criterios de aceptación**
- El formulario de registro de materia es visible con campos para 'Nombre', 'Código', 'Créditos' y un selector de 'Carrera'.
- El selector de 'Carrera' muestra una lista de las carreras existentes.
- La validación de campos obligatorios funciona correctamente.
- Al enviar el formulario, la materia se guarda con su carrera asociada.
- Se muestra un mensaje de confirmación de registro de materia exitoso.
- La nueva materia aparece en el listado de materias.

**Story Points:** 4 · **Prioridad:** Alta (1)

---

## HU: Listar Materias
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todas las materias registradas, incluyendo su carrera y facultad
**Para:** consultar el plan de estudios y su organización

**Criterios de aceptación**
- Se muestra una tabla o listado con todas las materias registradas.
- Cada materia muestra al menos su 'Nombre', 'Código', 'Créditos', 'Carrera Asociada' y 'Facultad Asociada'.
- Los datos de las materias se cargan correctamente desde el backend.

**Story Points:** 3 · **Prioridad:** Alta (1)

---

## HU: Registrar Profesor
**Como:** Administrador Académico
**Quiero:** registrar un nuevo profesor en el sistema con su información básica
**Para:** incorporar al personal docente a la plataforma y gestionarlo

**Criterios de aceptación**
- El formulario de registro de profesor es visible con campos para 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- La validación de campos obligatorios y de formato (ej. Email válido) funciona correctamente.
- Al enviar el formulario, el profesor se guarda exitosamente en el sistema.
- Se muestra un mensaje de confirmación de registro de profesor exitoso.
- El nuevo profesor aparece en el listado de profesores.

**Story Points:** 3 · **Prioridad:** Alta (1)

---

## HU: Listar Profesores
**Como:** Administrador Académico
**Quiero:** visualizar un listado de todos los profesores registrados
**Para:** consultar y gestionar el personal docente de la EPN

**Criterios de aceptación**
- Se muestra una tabla o listado con todos los profesores registrados.
- Cada profesor muestra al menos su 'Nombre', 'Apellido', 'Cédula' y 'Email Institucional'.
- Los datos de los profesores se cargan correctamente desde el backend.

**Story Points:** 3 · **Prioridad:** Alta (1)

> _Actualizado: 2025-09-27T18:59:26.781Z_

<!-- SPRINT:Sprint_Planning_1_Historias_de_Usuario:END -->
