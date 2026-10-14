# Documentación final

## Proyecto
Esta aplicación es una web de una sola página sobre un ciclo de cine de terror. El objetivo es presentar una cartelera temática con una identidad visual oscura, clara y coherente en móvil y escritorio.

## Estructura
La aplicación se organiza en cinco componentes standalone:

- `app-header`: nombre del ciclo y menú de navegación.
- `app-hero`: presentación principal de la propuesta.
- `app-listado`: recoge los datos de las películas y genera la lista.
- `app-tarjeta`: muestra cada película como una ficha individual.
- `app-footer`: autoría y datos de contacto.

La página principal monta estos bloques en este orden: header, hero, listado y footer.

## Datos de la cartelera
La cartelera se define en `src/app/listado/listado.ts` mediante una interfaz `Pelicula` y un array con 6 títulos clásicos del cine de terror. Cada elemento incluye:

- identificador
- título
- año
- director
- subgénero
- sinopsis
- imagen
- sesión

Las imágenes se guardan en `public/` como placeholders SVG con el mismo nombre que el campo `imagen`.

## Estilo visual
El diseño usa una paleta fija basada en:

- negro profundo
- naranja calabaza
- morado
- blanco hueso

También utiliza dos tipografías de Google Fonts:

- una display para títulos
- una legible para el contenido general

La interfaz busca un ambiente nocturno con fondos oscuros, contrastes altos, tarjetas con presencia cinematográfica y composición pensada para lectura rápida.

## Responsive
El layout está preparado para funcionar en escritorio y móvil. En pantallas pequeñas, los bloques se apilan y las tarjetas ocupan una sola columna para evitar scroll horizontal.

## Comprobaciones
Durante el desarrollo se verificó que:

- `ng build` termina sin errores.
- `ng serve` arranca correctamente.
- La consola del navegador no muestra errores de ejecución.

## Autoría
Antonio Cantón y Pablo Enrique
