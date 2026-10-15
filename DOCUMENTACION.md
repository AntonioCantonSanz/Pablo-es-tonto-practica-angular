# Documentación del proyecto

## Resumen del proyecto
**Noches de Pesadilla** es una aplicación web de una sola página dedicada a un ciclo de cine de terror. Presenta la programación de seis películas mediante una cartelera temática. Está desarrollada con Angular y componentes standalone, sin backend ni navegación por rutas.

## Estructura de componentes
La plantilla principal, `src/app/app.html`, organiza los componentes en este orden:

1. `app-header` (`src/app/header/`): muestra el nombre del ciclo y enlaces de navegación a las secciones.
2. `app-hero` (`src/app/hero/`): presenta el título y la introducción del ciclo.
3. `app-listado` (`src/app/listado/`): contiene los datos de las películas y los recorre con `@for`.
4. `app-tarjeta` (`src/app/tarjeta/`): muestra la información de una película. Recibe cada objeto desde el listado mediante `@Input()` y presenta sus campos con interpolación.
5. `app-footer` (`src/app/footer/`): cierra la página con la autoría y el nombre del ciclo.

## Datos de la cartelera
La interfaz `Pelicula` y el array de películas están definidos en `src/app/listado/listado.ts`. La cartelera incluye seis clásicos de terror: *Nosferatu*, *Psicosis*, *El Exorcista*, *Halloween*, *Pesadilla en Elm Street* y *El Resplandor*.

Cada película contiene un identificador, título, año, director, subgénero, sinopsis, nombre de imagen y horario de sesión. Las imágenes son placeholders SVG locales guardados en `public/`, con nombres que coinciden con el campo `imagen`.

## Estilo visual
La identidad visual busca una atmósfera nocturna y cinematográfica. La paleta global, definida en `src/styles.css`, combina negro (`#0b0b0f`), naranja calabaza (`#ff6a00`), morado (`#6b21a8`) y blanco hueso (`#f5f1e8`). Se utilizan las fuentes de Google Fonts Creepster para los títulos e Inter para el texto general.

Los fondos oscuros, los acentos de color y las tarjetas diferenciadas dan protagonismo a la cartelera y mantienen la lectura clara.

## Diseño responsive
La página adapta su distribución a móviles y escritorio. En pantallas pequeñas, las películas se presentan en una sola columna y los componentes ajustan su disposición y tipografía para evitar solapamientos y scroll horizontal. El diseño se comprobó tomando como referencia un ancho de 375 px.

## Comprobaciones
Al finalizar el desarrollo se comprobó que:

- `ng build` termina sin errores.
- `ng serve` arranca correctamente.
- La consola del navegador no muestra errores de ejecución.

## Autoría
Proyecto realizado por **Antonio Cantón y Pablo Enrique**.
