# Visualizador multi tarjetas para equipos / streamers

Página que permite tener visualización de múltiples perfiels con avatar y redes sociales

```
Este proyecto es bastante probable que jamás se vuelva a actualizar, pero no debería tener problemas importantes en el tiempo
```

## Descripción

Sitio web básico, de facil impementación y super compatible con Github Pages, que permite tener visualización básica de multiples perfiles al mismo tiempo, con una leve separación de categorías entre ellas.

El proyecto se construyó para una serie de streamers (Academia Arcana 3, de TK Studios) la cual está ambientada en un mundo mágico (Hogwarts/Harry Potter), por lo que el proyecto entero está tematizado, pero no debería ser muy complicado adaptar a otras realidades según su necesidad.

El proyecto está construido en base a mis conocimientos y ChatGPT para todo lo que no supiera o me diese errores y no supiera que los ocasionara. El proyecto está *MUY MAL CONSTUIDO*, todo está hecho para que funcione en la estructura actual y es bastante probable que cualquier modificación rompa todo. El proyecto también está lleno de parámetros no usados, comentarios tontos y secciones enteras desechadas.

## Funciones destacables 

* Contador de perfiles por casa automático (.JS) con diseño de 4 columnas máximo, adaptable a 1 en teléfonos (el contador cuenta las categorizaciones del 'social-box')
* Seguimiento de cursor con pasos 
* Diseño responsivo en formato de 3 columnas (para la sección de tarjetas) como máximo, adaptable a 1 en teléfonos
* Diseño responsivo: Distinto fondo de pantalla según el tamaño de pantalla del dispositivo
* Tipo de letra personalizado para títulos de categorías con efecto "oro"
* Las tarjetas poseen un pequeño recuadro con redes sociales, el cual es personalizable a través de la categorización del 'social-box', categorías disponibles, con colores personalizados y fondo de tarjeta: Gry, Sly, Rav, Huf, Hog, Adm, Dmv, Sor  
* Las tarjetas contienen: avatar, nombre, descripción corta y redes sociales. Se pueden contener en el bloque hasta 3 redes sociales simultaneamente (no probé con más), y se adapta el tamaño automáticamente cuando hay por ejemplo 1.


## Categorización con colores y fondos personalizados creados

Si bien ya hay categorías definidas es posibel crear más simplemente copiando el codigo en el *style.css* y creandole su propia categorización, color y fondo

Gry - Gryffindor - #a01f23
Sly - Slytherin - #265920
Rav - Ravenclaw - #018cb8
Huf - Hufflepuff - #e2bf21
Sor - Sorting Hat - #363029
Hog - Hogwarts - #474787
Adm - Administradores - #778ca3
Dmv - Mortífagos - #badc58

## Empezar

### Conocimientos necesarios

* Conocimientos super básicos de Github, HTML y CSS.
* Editor de código, no importa si es super básico (Bloc de notas), simple (Notepad++) o más completo (Visual Code) 

### ¿Cómo instalo esto?

* Crea un 'fork' del proyecto
* Comienza a editar y publica con Github pages

## FAQ y ayudas

- Tengo XXXX problema, me ayudas?
Lo más probable es que no, este proeycto se hizo con un fin y eso ya se ha cumplido, solo lo dejo dispoible porque en su momento a mi me hizo falta y como no existía, lo cree.

- Cuando trato de desplegar el proyecto Github me da error
Hay un error en tus personalizaciones, vuelve una versión atrás o intenta re hacer la publicación

- Se rompió el diseñode columnas cuando elimine una categoría
Fijate que no hayas dejado un <Main> sin cerrar o abrir

- Cuando quiero hacer mi propia categorización que debo hacer?
Revisa en el *style.css* y copiar basándote en las otras categorizaciones como ejemplo, también puedes usar los mismos nombres de categorización pero cambiar los colores de las casas y los fondos simplemente. No olvides modificar en el *index.html* en caso de que haga falta

- No voy a usar el contador de casas ni quiero usar el trazo de pasos con el mouse
Simplemente elimina el "<script src="./main.js"></script>" al final del *index.html*

- Y si solo quiero usar una de esas dos funciones?
entra en el *main.js* y elimina la que ya no quieras usar (están nombradas)

- Cambié los nombres de las categorizaciones y ahora no se cuentan las casas
Simplemente tienes que añadir los términos en el *main.js*

- Quiero cambiar los emblemas de los contadores, como lo hago?
Modifica en el *style.css*

## Autor

[Billy Billete](https://billy.kuumedia.com.es/)

## Créditos

* ChatGPT
* Logo de Academia Arcana 3 - TK Studios
* Emblemas y escudos de casas: Assets de Hogwarts Legacy (El Sorting Hat es del Artbook también)
* Pasos con el cursor (modificado, el github viene con problemas): poc_marauders_footsteps_cursor de [Rorothejedi](https://github.com/Rorothejedi/poc_marauders_footsteps_cursor)
* Fondo de pantalla (color modificado y leves modificaciones a nivel visual): Escaneos del 'Mapa de merodeadores' de [LittleFallingStar](https://www.deviantart.com/littlefallingstar/art/The-Marauders-Map-389921556)