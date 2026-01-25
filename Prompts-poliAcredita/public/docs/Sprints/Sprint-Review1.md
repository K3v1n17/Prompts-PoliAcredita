# Sprint Review 1

---

## Índice

1. [PROMPT 1](#prompt-1)

---

## PROMPT 1

### ROL
Actúa como un Product Owner experto en análisis de productos de software, con amplia experiencia en la recopilación y análisis de feedback de usuarios y stakeholders, y en la identificación de nuevas funcionalidades, mejoras y oportunidades de valor durante la Sprint Review.

### OBJETIVO
Identificar nuevas necesidades, mejoras y oportunidades del producto a partir de los comentarios y observaciones surgidos durante la demostración del incremento correspondiente al Sprint 1.

### CONTEXTO
La información proporcionada corresponde a la transcripción de una reunión de Sprint Review, realizada dentro del marco de trabajo Scrum, en la cual se presentó el incremento 1 del producto. 

Durante la demostración, el Product Owner y otros participantes entregaron feedback relevante, el cual debe analizarse y transformarse en oportunidades de mejora o nuevas funcionalidades.

Las historias de usuario que se generen deben cumplir con los criterios INVEST, asegurando que cada historia sea de alta calidad y adecuada para su gestión dentro del Product Backlog:

I – Independiente: la historia debe poder desarrollarse sin depender de otras historias.

N – Negociable: la historia debe permitir discusión y refinamiento con el equipo.

V – Valiosa: debe aportar valor claro al usuario o al negocio.

E – Estimable: el equipo debe poder estimar el esfuerzo necesario para implementarla.

S – Small (Pequeña): debe ser lo suficientemente pequeña para completarse dentro de un sprint.

T – Testeable: debe poder validarse mediante criterios claros de aceptación.

### ACCIÓN
Analiza la transcripción y crea historias de usuario basadas en los comentarios, necesidades detectadas y oportunidades de mejora identificadas, asegurando el cumplimiento de los criterios INVEST.

### FORMATO DE SALIDA
Devuelve exclusivamente una tabla, sin explicaciones adicionales, con las siguientes columnas:

| ID | Descripción de la Historia de Usuario |

La descripción de la Historia de Usuario debe estar redactada únicamente con la siguiente estructura:

Como [tipo de usuario]

Quiero [necesidad funcional]

Para [beneficio o valor esperado]

Asigna un ID único a cada historia de usuario (por ejemplo: HU-01, HU-02, HU-03, etc.)

---

## SALIDA

### 📝 Historias de Usuario (Sprint Review 1)

| ID | Descripción de la Historia de Usuario |
|---|---|
| HU-01 | Como administrador<br>Quiero asignar correctamente el rol al iniciar sesión<br>Para asegurar que el usuario acceda solo a las funcionalidades correspondientes a su perfil |
| HU-02 | Como administrador<br>Quiero crear, editar y eliminar facultades desde el sistema<br>Para mantener actualizada la estructura académica institucional |
| HU-03 | Como administrador<br>Quiero crear, editar y eliminar carreras asignándolas a una facultad y a un coordinador<br>Para gestionar de forma organizada la oferta académica |
| HU-04 | Como administrador<br>Quiero gestionar usuarios asignándoles rol, facultad y estado<br>Para controlar el acceso y la administración del sistema |
| HU-05 | Como usuario administrador<br>Quiero filtrar usuarios por rol, estado y texto de búsqueda<br>Para localizar rápidamente usuarios específicos |
| HU-06 | Como administrador<br>Quiero filtrar carreras por nombre o palabras clave<br>Para encontrar fácilmente una carrera dentro del sistema |
| HU-07 | Como usuario del sistema<br>Quiero visualizar mi fotografía de perfil al iniciar sesión<br>Para identificar claramente mi cuenta y mejorar la experiencia de uso |
| HU-08 | Como usuario del sistema<br>Quiero visualizar a qué facultad pertenezco una vez autenticado<br>Para tener claridad del contexto académico en el que estoy operando |
| HU-09 | Como administrador<br>Quiero asociar obligatoriamente una fotografía al crear un usuario<br>Para garantizar consistencia y correcta identificación visual de los perfiles |
| HU-10 | Como Product Owner<br>Quiero definir y soportar usuarios con múltiples roles<br>Para reflejar correctamente la realidad organizacional de la institución |

