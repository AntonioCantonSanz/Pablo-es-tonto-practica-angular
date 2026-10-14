# Plan de desarrollo

- [ ] Definir la estructura base de la página y el orden de secciones.
  - Archivos afectados: `src/app/app.html`, `src/app/app.ts`, `src/app/app.css`
  - Hecho cuando: la aplicación muestra las secciones en el orden `header -> hero -> listado -> footer` y compila sin errores.

- [ ] Crear los componentes de la interfaz principal con Angular CLI.
  - Archivos afectados: `src/app/header/*`, `src/app/hero/*`, `src/app/listado/*`, `src/app/tarjeta/*`, `src/app/footer/*`, `src/app/app.ts`
  - Hecho cuando: existen los cinco componentes standalone con sus archivos `.ts`, `.html` y `.css`, y la app los usa correctamente.

- [ ] Preparar los datos de la cartelera con tipado explícito.
  - Archivos afectados: `src/app/listado/listado.ts`
  - Hecho cuando: existe la interfaz `Pelicula` y un array con al menos 6 películas, con todos los campos definidos y sin usar `any`.

- [ ] Montar la vista de tarjetas de películas con control de flujo moderno.
  - Archivos afectados: `src/app/listado/listado.html`, `src/app/tarjeta/tarjeta.ts`, `src/app/tarjeta/tarjeta.html`, `src/app/tarjeta/tarjeta.css`
  - Hecho cuando: `listado` repite las películas con `@for` y `track`, y `tarjeta` recibe los datos por `@Input()` y los presenta de forma clara.

- [ ] Aplicar la identidad visual de terror al layout global.
  - Archivos afectados: `src/styles.css`, `src/app/header/header.css`, `src/app/hero/hero.css`, `src/app/listado/listado.css`, `src/app/tarjeta/tarjeta.css`, `src/app/footer/footer.css`
  - Hecho cuando: se usa la paleta negro/naranja calabaza/morado/blanco hueso y la tipografía display + legible de Google Fonts de forma coherente.

- [ ] Ajustar el ambiente nocturno y el comportamiento responsive.
  - Archivos afectados: `src/app/hero/hero.css`, `src/app/listado/listado.css`, `src/app/tarjeta/tarjeta.css`, `src/app/header/header.css`, `src/app/footer/footer.css`
  - Hecho cuando: la interfaz se ve consistente en móvil y escritorio, sin desbordes, con tarjetas legibles y jerarquía visual clara.

- [ ] Verificar el resultado final con compilación y revisión visual.
  - Archivos afectados: `angular.json` no aplica, revisión sobre los archivos ya tocados
  - Hecho cuando: `ng build` termina sin errores y el diseño cumple la guía de la skill sin añadir funcionalidades fuera de alcance.
