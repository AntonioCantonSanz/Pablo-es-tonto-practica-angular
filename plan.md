# Plan de desarrollo

- [x] Crear los 5 componentes con el CLI sin contenido.
  - Archivos afectados: `src/app/header/*`, `src/app/hero/*`, `src/app/listado/*`, `src/app/tarjeta/*`, `src/app/footer/*`
  - Hecho cuando: existen los cinco componentes standalone con sus archivos `.ts`, `.html` y `.css`, no contienen lógica de presentación todavía y `ng build termina sin errores`.

- [x] Integrarlos en `app.html` en el orden `header`, `hero`, `listado`, `footer`.
  - Archivos afectados: `src/app/app.html`, `src/app/app.ts`
  - Hecho cuando: la página renderiza los cuatro bloques en ese orden, cada selector está colocado en la plantilla principal y `ng build termina sin errores`.

- [x] Definir la interfaz `Pelicula` y el array de 6 películas.
  - Archivos afectados: `src/app/listado/listado.ts`
  - Hecho cuando: existe la interfaz `Pelicula`, el array incluye 6 películas con todos sus campos completos y `ng build termina sin errores`.

- [x] Añadir las imágenes de las películas en `public/`.
  - Archivos afectados: `public/`
  - Hecho cuando: las 6 imágenes son placeholders SVG creados por el agente, existe un archivo por cada película con nombre coincidente con el campo `imagen` del array, no hay enlaces rotos y `ng build termina sin errores`.

- [x] Crear la tarjeta con `@Input()` e interpolación `{{ }}`.
  - Archivos afectados: `src/app/tarjeta/tarjeta.ts`, `src/app/tarjeta/tarjeta.html`
  - Hecho cuando: la tarjeta recibe una película por `@Input()`, muestra sus datos con interpolación y `ng build termina sin errores`.

- [x] Repetir las películas en `listado` con `@for` y `track`.
  - Archivos afectados: `src/app/listado/listado.html`, `src/app/listado/listado.ts`
  - Hecho cuando: `listado` recorre el array con `@for` y `track`, `listado.ts` importa el componente `tarjeta`, pasa los datos correctos a la tarjeta y `ng build termina sin errores`.

- [x] Redactar el contenido del header con nombre y menú con anclas.
  - Archivos afectados: `src/app/header/header.html`, `src/app/header/header.ts`, `src/app/hero/hero.html`, `src/app/listado/listado.html`
  - Hecho cuando: `hero` y `listado` tienen un `id`, cada enlace del menú lleva a su sección, el encabezado muestra el nombre del ciclo y `ng build termina sin errores`.

- [x] Redactar el contenido del hero.
  - Archivos afectados: `src/app/hero/hero.html`, `src/app/hero/hero.ts`
  - Hecho cuando: el hero presenta el título principal y el texto de presentación del ciclo, y `ng build termina sin errores`.

- [x] Redactar el contenido del footer.
  - Archivos afectados: `src/app/footer/footer.html`, `src/app/footer/footer.ts`
  - Hecho cuando: el footer muestra los nombres de los dos miembros de la pareja y el nombre del ciclo, y `ng build termina sin errores`.

- [x] Definir estilos globales con variables de paleta y fuentes de Google Fonts.
  - Archivos afectados: `src/styles.css`, `src/index.html`
  - Hecho cuando: existen variables CSS para negro, naranja calabaza, morado y blanco hueso, las fuentes de Google Fonts están cargadas, siguiendo la skill de diseño y `ng build termina sin errores`.

- [x] Aplicar estilos de header y hero.
  - Archivos afectados: `src/app/header/header.css`, `src/app/hero/hero.css`
  - Hecho cuando: los CSS solo usan las variables de la paleta, sin colores escritos a mano, el texto cumple un contraste mínimo de 4,5:1, siguiendo la skill de diseño y `ng build termina sin errores`.

- [ ] Aplicar estilos de listado, tarjeta y footer.
  - Archivos afectados: `src/app/listado/listado.css`, `src/app/tarjeta/tarjeta.css`, `src/app/footer/footer.css`
  - Hecho cuando: los CSS solo usan las variables de la paleta, sin colores escritos a mano, el texto cumple un contraste mínimo de 4,5:1, siguiendo la skill de diseño y `ng build termina sin errores`.

- [ ] Ajustar el responsive.
  - Archivos afectados: `src/app/hero/hero.css`, `src/app/listado/listado.css`, `src/app/tarjeta/tarjeta.css`, `src/app/header/header.css`, `src/app/footer/footer.css`
  - Hecho cuando: a 375 px de ancho no hay scroll horizontal, las tarjetas se apilan o reordenan sin solaparse, siguiendo la skill de diseño y `ng build termina sin errores`.

- [ ] Comprobar el resultado final con `ng serve` y la consola del navegador.
  - Archivos afectados: revisión sobre los archivos ya tocados
  - Hecho cuando: `ng build termina sin errores`, `ng serve` arranca correctamente y la consola del navegador no muestra errores.

- [ ] Redactar la documentación final en Markdown.
  - Archivos afectados: `DOCUMENTACION.md`
  - Hecho cuando: la documentación resume la estructura, el estilo visual y las decisiones clave, y `ng build termina sin errores`.
