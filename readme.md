# Visualizador multi tarjetas para equipos / streamers

Página que permite tener visualización de múltiples perfiels con avatar y redes sociales

***Este proyecto es bastante probable que jamás se vuelva a actualizar, pero no debería tener problemas importantes en el tiempo***

## Descripción

Sitio web básico, de facil impementación y super compatible con Github Pages, que permite tener visualización básica de multiples perfiles al mismo tiempo, con una leve separación de categorías entre ellas.

El proyecto se construyó para una serie de streamers (Academia Arcana 3, de TK Studios) la cual está ambientada en un mundo mágico (Hogwarts/Harry Potter), por lo que el proyecto entero está tematizado, pero no debería ser muy complicado adaptar a otras realidades según su necesidad.

El proyecto está construido en base a mis conocimientos y ChatGPT para todo lo que no supiera o me diese errores y no supiera que los ocasionara. El proyecto está *MUY MAL CONSTUIDO*, todo está hecho para que funcione en la estructura actual y es bastante probable que cualquier modificación rompa todo. El proyecto también está lleno de parámetros no usados, comentarios tontos y secciones enteras desechadas.

## Funciones destacables 

* ***Contador de perfiles por casa automático*** (.JS) con diseño de 4 columnas máximo, adaptable a 1 en teléfonos (el contador cuenta las categorizaciones del ***'social-box'***)
* ***Seguimiento de cursor con pasos***, estilo como Mapa del Merodeador
* ***Diseño responsivo*** en formato de 3 columnas (para la sección de tarjetas) como máximo, adaptable a 1 en teléfonos
* Diseño responsivo: Distinto fondo de pantalla según el tamaño de pantalla del dispositivo
* Tipo de letra personalizado para títulos de categorías con efecto "oro"
* Las tarjetas poseen un pequeño recuadro con ***redes sociales***, el cual es personalizable a través de la categorización del 'social-box', categorías disponibles, con colores personalizados y fondo de tarjeta: Gry, Sly, Rav, Huf, Hog, Adm, Dmv, Sor  
* Las tarjetas contienen: avatar, nombre, descripción corta y redes sociales. Se pueden contener en el bloque hasta 3 redes sociales simultaneamente (no probé con más), y se adapta el tamaño automáticamente cuando hay por ejemplo 1.


## Categorización con colores y fondos personalizados creados

Si bien ya hay categorías definidas es posible crear más simplemente copiando el codigo en el ***style.css*** y creandole su propia categorización, color y fondo

1. Gry - Gryffindor - ![#a01f23](https://placehold.co/15x15/a01f23/a01f23.png) `#a01f23`
2. Sly - Slytherin - ![#265920](https://placehold.co/15x15/265920/265920.png) `#265920`
3. Rav - Ravenclaw - ![#018cb8](https://placehold.co/15x15/018cb8/018cb8.png) `#018cb8`
4. Huf - Hufflepuff - ![#e2bf21](https://placehold.co/15x15/e2bf21/e2bf21.png) `#e2bf21`
5. Sor - Sorting Hat - ![#363029](https://placehold.co/15x15/363029/363029.png) `#363029`
6. Hog - Hogwarts - ![#474787](https://placehold.co/15x15/474787/474787.png) `#474787`
7. Adm - Administradores - ![#778ca3](https://placehold.co/15x15/778ca3/778ca3.png) `#778ca3`
8. Dmv - Mortífagos - ![#badc58](https://placehold.co/15x15/badc58/badc58.png) `#badc58`

## Empezar

### Conocimientos necesarios

* Conocimientos ***super básicos*** de Github, HTML y CSS.
* Editor de código, no importa si es super básico *(Bloc de notas)*, simple *(Notepad++)* o más completo *(Visual Code)*

### ¿Cómo instalo esto?

* Crea un 'fork' del proyecto
* Comienza a editar y publica con Github pages

## FAQ y ayudas

1. **Tengo XXXX problema, me ayudas?**
Lo más probable es que no, este proeycto se hizo con un fin y eso ya se ha cumplido, solo lo dejo dispoible porque en su momento a mi me hizo falta y como no existía, lo cree.

2. **Cuando trato de desplegar el proyecto Github me da error**
Hay un error en tus personalizaciones, vuelve una versión atrás o intenta re hacer la publicación

3. **Se rompió el diseñode columnas cuando elimine una categoría**
Fijate que no hayas dejado un ***<Main>*** sin cerrar o abrir

4. **Cuando quiero hacer mi propia categorización que debo hacer?**
Revisa en el ***style.css*** y copiar basándote en las otras categorizaciones como ejemplo, también puedes usar los mismos nombres de categorización pero cambiar los colores de las casas y los fondos simplemente. No olvides modificar en el ***index.html*** en caso de que haga falta

5. **No voy a usar el contador de casas ni quiero usar el trazo de pasos con el mouse**
Simplemente elimina el ***"<script src="./main.js"></script>"*** al final del ***index.html***

6. **Y si solo quiero usar una de esas dos funciones?**
Entra en el ***main.js*** y elimina la que ya no quieras usar (están nombradas)

7. **Cambié los nombres de las categorizaciones y ahora no se cuentan las casas**
Simplemente tienes que añadir los términos en el ***main.js***

8. **Quiero cambiar los emblemas de los contadores, como lo hago?**
Modifica en el ***style.css***

## Autor

[Billy Billete](https://billy.kuumedia.com.es/)

## Créditos

* ChatGPT
* Logo de Academia Arcana 3 - [TK Studios](https://x.com/StudiosTK_)
* Emblemas y escudos de casas: [Assets de Hogwarts Legacy](https://support.curseforge.com/en/support/solutions/articles/9000259715-hogwarts-legacy-creators-customizations-assets) (El Sorting Hat es del [Artbook del juego](https://www.harrypotter.com/es/news/exploring-the-art-and-making-of-hogwarts-legacy))
* Pasos con el cursor ***(modificado, el original está abandonado y viene con problemas)***: poc_marauders_footsteps_cursor de [Rorothejedi](https://github.com/Rorothejedi/poc_marauders_footsteps_cursor)
* Fondo de pantalla ***(color modificado y leves modificaciones a nivel visual)***: Escaneos del 'Mapa de merodeadores' de [LittleFallingStar](https://www.deviantart.com/littlefallingstar/art/The-Marauders-Map-389921556)

## Descargo de responsabilidad

Este es un proyecto solo por diversión, no lucrativo y sin ninguna intención de tomar créditos por nada, todos los créditos pertenecen a los dueños del copyright y sus patentes. Todas las variantes usan el template bajo su propia responsabilidad.