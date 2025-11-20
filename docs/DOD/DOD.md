# PROMPT 2

**ROL:**
Actúa como un Product Management / Product Owner experto en Scrum.

**Objetivo:**
Definir un DOD para verificar que se cumple con un incremento

**Contexto:**
Se está desarrollando un producto software para la Escuela Politécnica Nacional que ayudará a verificar las carreras de ingeniería que se acreditan bajo el sello EUR-ACE.

El Definition of Done (DoD) es un acuerdo dentro del equipo Scrum que establece los criterios que un incremento debe cumplir para considerarse completamente terminado. Garantiza que cada elemento entregado esté funcional, probado, documentado y cumpla con los estándares de calidad definidos, de modo que pueda ser potencialmente liberado al usuario o cliente sin trabajo adicional pendiente.

El DoD es un compromiso formal del equipo de desarrollo (Developers), quienes son responsables de definirlo, mantenerlo y aplicarlo en cada Sprint. Este acuerdo promueve la transparencia y la calidad del producto, asegurando que todos los miembros del equipo tengan una comprensión común de qué significa “hecho” dentro del proyecto.

**Accion :**
Crea mi dod para mi equipo

---

# RESPUESTA 2

Perfecto ✅
A continuación te presento un Definition of Done (DoD) adaptado al contexto del desarrollo del producto software para la Escuela Politécnica Nacional (EPN) orientado a la verificación y acreditación de carreras bajo el sello EUR-ACE.

🧩 Definition of Done (DoD) – Producto: Sistema de Acreditación EUR-ACE – EPN
1. Código y desarrollo

 El código cumple con los estándares de desarrollo definidos por el equipo (nomenclatura, estructura, buenas prácticas).

 El código ha sido revisado mediante peer review o pull request y aprobado por al menos otro desarrollador.

 No existen errores críticos o advertencias pendientes en el entorno de desarrollo.

 El código está versionado y documentado en el repositorio correspondiente (Git).

 Se han implementado pruebas unitarias con un nivel de cobertura mínimo acordado (por ejemplo, ≥80%).

 Todas las dependencias externas están declaradas y gestionadas correctamente.

2. Integración y pruebas

 El incremento ha sido integrado correctamente en la rama principal (main/master) sin conflictos.

 Se han ejecutado pruebas de integración y regresión, con resultados satisfactorios.

 Se han realizado pruebas funcionales que validan los criterios de aceptación de la historia de usuario o épica.

 El incremento ha sido probado en el entorno de staging o preproducción.

 No se han identificado errores bloqueantes o de alta severidad.

3. Calidad y documentación

 La documentación técnica (manuales, diagramas, API docs) ha sido actualizada conforme a los cambios realizados.

 La documentación funcional y de usuario refleja las nuevas funcionalidades o ajustes del incremento.

 Se ha actualizado el registro de pruebas con los resultados obtenidos.

 Se han aplicado los criterios de accesibilidad, seguridad y rendimiento definidos por el equipo.

4. Validación funcional y del negocio

 El incremento cumple con todos los criterios de aceptación definidos en la historia o épica.

 Ha sido validado por el Product Owner y considerado alineado con el objetivo del Sprint.

 Contribuye a un incremento potencialmente liberable que aporta valor al proceso de acreditación EUR-ACE.

5. Despliegue y trazabilidad

 El incremento puede ser desplegado sin errores en el entorno de producción siguiendo las políticas del equipo DevOps.

 Se ha generado un registro o ticket de entrega (release note) que describe los cambios incluidos.

 El incremento está trazado a la historia de usuario o épica correspondiente en el backlog.

 El sistema mantiene coherencia e integridad de datos tras el despliegue.

6. Cumplimiento institucional y de calidad

 Se garantiza la protección de datos y cumplimiento normativo aplicable (LOPD, política de la EPN, etc.).

 El incremento respeta los estándares de calidad académica y de procesos definidos para la acreditación EUR-ACE.

 Se ha revisado el cumplimiento de los indicadores de calidad definidos por la EPN (usabilidad, trazabilidad, precisión de la información).
# PROMPT 1

**ROL:**
Actúa como un Product Management / Product Owner experto en Scrum.

**Objetivo:**
Definir un DOD para verificar que se cumple con un incremento

**Contexto:**
Se está desarrollando un producto software para la Escuela Politécnica Nacional que ayudará a verificar las carreras de ingeniería que se acreditan bajo el sello EUR-ACE.

El Definition of Done (DoD) es un acuerdo dentro del equipo Scrum que establece los criterios que un incremento debe cumplir para considerarse completamente terminado. Garantiza que cada elemento entregado esté funcional, probado, documentado y cumpla con los estándares de calidad definidos, de modo que pueda ser potencialmente liberado al usuario o cliente sin trabajo adicional pendiente.

El DoD es un compromiso formal del equipo de desarrollo (Developers), quienes son responsables de definirlo, mantenerlo y aplicarlo en cada Sprint. Este acuerdo promueve la transparencia y la calidad del producto, asegurando que todos los miembros del equipo tengan una comprensión común de qué significa “hecho” dentro del proyecto.

Para esto ten en cuenta que existen diferentes roles dentro del equipo como lo son , El front , backend , Devos , Tester

El Tester esta encargado por ejemplo de realizar y verificar que los casos de prueba se cumplan
EL devops encargado de la integración y despliegue continuo , y aplicando la infraestructura como codigo , tambien genera reportes.
El back tambien se encuentra realizando TDD

**Accion :**
Crea mi dod para mi equipo

---

# RESPUESTA 1

Perfecto ✅
A continuación te presento un Definition of Done (DoD) adaptado para tu equipo Scrum, que desarrolla el producto de acreditación EUR-ACE para la Escuela Politécnica Nacional.
Está estructurado por categorías de cumplimiento, con responsabilidades claras para cada rol (Frontend, Backend, DevOps, Tester) y criterios generales de calidad.

🧩 Definition of Done (DoD) — Proyecto Acreditación EUR-ACE (EPN)
1. Código y desarrollo

✅ El código ha sido implementado según los criterios de aceptación definidos en la historia de usuario.

✅ Se cumple con los estándares de codificación establecidos por el equipo (nomenclatura, estructura de carpetas, patrones de diseño).

✅ Se ha aplicado TDD (Test Driven Development) en el backend, con un mínimo de cobertura del 80% de pruebas unitarias.

✅ El código ha sido revisado por pares (Code Review) y aprobado en la rama principal (merge/pull request aprobado).

✅ No existen errores ni advertencias críticas en el análisis estático del código (SonarQube u otra herramienta).

✅ Las dependencias se encuentran actualizadas y sin vulnerabilidades conocidas (según escáner de seguridad).

Responsables: Backend / Frontend

2. Frontend

✅ La interfaz cumple con el diseño de UI/UX aprobado.

✅ Es completamente responsiva y accesible (cumple WCAG nivel AA).

✅ Se han implementado validaciones de datos en el cliente.

✅ Se han ejecutado y pasado las pruebas unitarias y de integración de componentes (por ejemplo, Jest o Cypress).

✅ El comportamiento del flujo de usuario fue validado en entorno de staging.

Responsables: Frontend / Tester

3. Backend

✅ Las APIs funcionan correctamente, devuelven los códigos de estado esperados y cumplen con los contratos definidos (OpenAPI / Swagger).

✅ Se han ejecutado pruebas unitarias, de integración y de regresión.

✅ Se han implementado los mecanismos de autenticación, autorización y manejo de errores.

✅ Se garantiza la consistencia de datos en la base de datos.

✅ Los endpoints están documentados y versionados.

Responsables: Backend / Tester

4. DevOps e Infraestructura

✅ El código está integrado en la canalización CI/CD.

✅ Se han ejecutado con éxito los pipelines automáticos de build, test y deploy.

✅ La infraestructura está gestionada mediante Infraestructura como Código (IaC) (por ejemplo, Terraform, Ansible, etc.).

✅ Los entornos (dev, test, staging, producción) están documentados y configurados correctamente.

✅ Se generan reportes automáticos de despliegue y ejecución de pruebas.

✅ Se han aplicado políticas de seguridad y control de acceso en el entorno cloud o servidor.

Responsables: DevOps / Backend / Tester

5. Testing y aseguramiento de calidad

✅ Se han ejecutado todos los casos de prueba definidos en la historia de usuario.

✅ Las pruebas unitarias, de integración, funcionales y de aceptación han sido aprobadas.

✅ Se han realizado pruebas manuales exploratorias por parte del Tester.

✅ Todos los defectos críticos o mayores están corregidos y verificados.

✅ Se han actualizado los casos de prueba automáticos en el repositorio de QA.

✅ Se ha verificado la trazabilidad de requerimientos → pruebas → resultados.

Responsables: Tester / Developers

6. Documentación

✅ Se ha actualizado la documentación técnica y funcional del incremento.

✅ El README, manuales de despliegue y guías de configuración están actualizados.

✅ Se documentan los cambios relevantes en el repositorio (CHANGELOG / release notes).

✅ Se actualiza el registro de historias entregadas y la documentación de APIs.

Responsables: Todos los roles

7. Revisión y Entrega

✅ El incremento ha sido demostrado exitosamente en la Reunión de Revisión del Sprint.

✅ El Product Owner valida que los criterios de aceptación están completamente cumplidos.

✅ El incremento está listo para desplegarse en producción sin trabajo adicional pendiente.

Responsables: Todo el equipo Scrum

8. Criterios de Calidad Transversales

Cumple con las normas institucionales de la EPN y lineamientos del sello EUR-ACE en cuanto a trazabilidad, transparencia y documentación.

Cumple con requisitos de seguridad, privacidad y rendimiento definidos para el sistema.

No hay deuda técnica no justificada pendiente al finalizar el Sprint.


| Ítem                                            | Estado |
|-------------------------------------------------|:------:|
| El incremento cumple los criterios de aceptación | ☐ |
| Code Review aprobado en la rama principal        | ☐ |
| Código implementado según la historia            | ☐ |
| Dependencias sin vulnerabilidades                | ☐ |
| Endpoints documentados y versionados             | ☐ |
| Pruebas unitarias ejecutadas (≥80% cobertura)    | ☐ |
| Pruebas de integración aprobadas                 | ☐ |
| Pruebas funcionales / aceptación aprobadas       | ☐ |
| Código integrado en CI/CD                        | ☐ |
| Pipelines ejecutados sin errores                 | ☐ |
| Despliegue en entorno correspondiente            | ☐ |
| Reportes automáticos generados                   | ☐ |
| Infraestructura actualizada mediante IaC          | ☐ |

