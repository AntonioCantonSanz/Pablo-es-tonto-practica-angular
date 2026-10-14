# AGENTS.md — Ciclo de Cine de Terror (practica3)

## Descripción del proyecto
Web temática de Halloween: un **ciclo de cine de terror** con su cartelera de películas.
Aplicación Angular de una sola página, solo frontend, sin backend ni routing.
Objetivo: práctica de aula para trabajar con un agente de IA (Contexto → Planificación → Ejecución → Comprobación).

## Tecnologías
- Angular (última versión estable) con Angular CLI
- Componentes **standalone** (sin NgModules)
- TypeScript, HTML y CSS (sin librerías de UI externas)
- Fuentes de Google Fonts permitidas

## Estructura de componentes
Todos en `src/app/`, generados con Angular CLI:

| Componente | Selector | Función |
|---|---|---|
| header | `app-header` | Nombre del ciclo + menú de navegación (anclas a secciones) |
| hero | `app-hero` | Portada: título, texto de presentación y fondo ambiental |
| listado | `app-listado` | Contiene el array `peliculas` y las repite con `@for` |
| tarjeta | `app-tarjeta` | Muestra una película; recibe datos con `@Input()` |
| footer | `app-footer` | Autoría y datos de contacto |

Orden en `app.html`: header → hero → listado (con tarjetas) → footer.

## Datos
Array de objetos en `listado.ts`, tipado con una interfaz `Pelicula`:
`id`, `titulo`, `anio`, `director`, `subgenero`, `sinopsis`, `imagen`, `sesion` (día y hora del ciclo).
Mínimo 6 películas. Imágenes en `public/` o `src/assets/` (propias o libres de derechos, nunca enlaces rotos).

## Estilo visual
- Paleta: negro (#0b0b0f), naranja calabaza (#ff6a00), morado (#6b21a8) y blanco hueso para texto.
- Tipografía: una fuente display de terror para títulos y una legible para el texto.
- Ambiente nocturno: fondos oscuros, sombras, brillos suaves; responsive (móvil y escritorio).
- Seguir la skill de diseño incluida en la carpeta de skills del proyecto.

## Convenciones de Angular
- Un componente = carpeta con su `.ts`, `.html` y `.css` propios (no estilos inline ni plantillas inline).
- Sintaxis moderna de control de flujo: `@for` (con `track`) y `@if`; no usar `*ngFor` ni `*ngIf`.
- Interpolación `{{ }}` para mostrar datos; `@Input()` para pasar datos del listado a la tarjeta.
- Nombres de archivos y selectores en español y minúsculas; prefijo `app-`.
- Estilos del componente en su propio CSS; solo estilos globales (variables CSS, fuentes) en `styles.css`.
- Sin `any`; tipos explícitos.

## Comandos
- `ng serve` — arrancar en desarrollo
- `ng build` — compilar (debe terminar sin errores tras cada tarea)
- `ng test` — ejecutar tests
- `ng generate component <nombre>` — crear componentes (siempre con el CLI)

## Forma de trabajar del agente
1. Leer `AGENTS.md` y `plan.md` antes de actuar.
2. Ejecutar **solo la primera tarea pendiente** del plan.
3. Al terminar: ejecutar `ng build`, comprobar el criterio «Hecho cuando» y marcar la casilla `- [x]`.
4. Resumir qué archivos ha creado o modificado y detenerse a esperar revisión.
5. Si algo no está claro, preguntar en lugar de suponer.

## Reglas
- No modificar código cuando se pide solo planificar.
- No añadir funcionalidades, botones, componentes ni dependencias que no estén en `plan.md`.
- No instalar paquetes sin permiso.
- No tocar archivos fuera del alcance de la tarea.
- No avanzar a la siguiente tarea sin que se haya revisado la anterior.
- Código claro y comentado lo justo: debe poder explicarlo un estudiante.