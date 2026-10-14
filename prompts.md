# Registro de prompts

## Prompt 1 – Skill de diseño
**Prompt:** /create-skill Crea una skill de diseño para una web de ciclo de cine de terror en Angular: paleta (negro, naranja calabaza, morado, blanco hueso), tipografías de Google Fonts (una display y una legible), ambiente nocturno, estilo de tarjetas y reglas de responsive. No toques el código de la app.
**Resultado:** La skill se guardó en `skills/diseno-cine-terror/SKILL.md` e incluye las variables CSS, las fuentes de Google Fonts, las instrucciones de contraste y la adaptación a una columna en móviles.
**Corrección:** ninguna.

## Prompt 2 – Generar el plan
**Prompt:** Lee AGENTS.md y la skill de diseño. Crea un archivo plan.md con el plan de desarrollo de la web.
No modifiques ni crees ningún otro archivo ni código.
Divide el trabajo en tareas pequeñas y ordenadas. Cada tarea debe tener:
- una casilla - [ ]
- los archivos afectados
- un criterio "Hecho cuando"
**Resultado:** generó un plan de 7 tareas (guardado como plan-inicial.md). Tenía el orden roto (integraba los componentes antes de crearlos), tareas demasiado grandes, criterios vagos, sin contenido de header/hero/footer, sin imágenes ni documentación, y `ng build` solo al final.
**Corrección:** se pidió reordenarlo y dividirlo (Prompt 3).

## Prompt 3 – Corregir el plan (primera revisión)
**Prompt:** Modifica solo plan.md, sin tocar ningún otro archivo ni código. Aplica estas correcciones:
- Reordena y divide las tareas en este orden: 1) crear los 5 componentes con el CLI sin contenido, 2) integrarlos en app.html en orden header, hero, listado, footer, 3) interfaz Pelicula y array de 6 películas, 4) añadir imágenes en public/, 5) tarjeta con @Input() e interpolación {{ }}, 6) listado con @for y track pasando datos a la tarjeta, 7) contenido del header (nombre y menú con anclas), 8) contenido del hero, 9) contenido del footer, 10) estilos globales (variables de paleta y fuentes de Google Fonts en src/index.html o styles.css), 11) estilos de header y hero, 12) estilos de listado y tarjeta, 13) responsive, 14) comprobación final con ng serve y consola del navegador sin errores, 15) documentación final en Markdown.
- Añade "ng build termina sin errores" al "Hecho cuando" de cada tarea.
- Sustituye los criterios vagos por criterios comprobables (por ejemplo, "a 375 px de ancho no hay scroll horizontal").
- Elimina la frase "angular.json no aplica".
- Mantén casilla - [ ], archivos afectados y "Hecho cuando" en cada tarea.
**Resultado:** plan de 15 tareas bien ordenado y con `ng build` en todas. Seguían 6 fallos: archivos afectados incorrectos en la tarea del listado, imágenes sin definir, anclas sin `id`, criterios de estilos vagos, skill sin mencionar y README.md que se sobrescribiría.
**Corrección:** se pidió corregir esos 6 fallos (Prompt 4).

## Prompt 4 – Corregir el plan (segunda revisión)
**Prompt:** Modifica solo plan.md, sin tocar ningún otro archivo ni código. Aplica exactamente estas correcciones y no cambies nada más:
1. Tarea "Repetir las películas en listado con @for y track": los archivos afectados deben ser solo `src/app/listado/listado.html` y `src/app/listado/listado.ts`. Añade al criterio "Hecho cuando" que `listado.ts` importa el componente `tarjeta`.
2. Tarea "Añadir las imágenes de las películas en public/": las imágenes serán placeholders en SVG creados por el agente (sin pósters reales, por derechos de autor). Escríbelo en el criterio, que además debe exigir un archivo por película con nombre coincidente con el campo `imagen` del array.
3. Tarea "Redactar el contenido del header con nombre y menú con anclas": añade `src/app/hero/hero.html` y `src/app/listado/listado.html` a los archivos afectados. El criterio debe exigir que `hero` y `listado` tengan un `id` y que cada enlace del menú lleve a su sección.
4. Tareas "Aplicar estilos de header y hero" y "Aplicar estilos de listado y tarjeta": sustituye los criterios vagos por estos comprobables: "los CSS solo usan las variables de la paleta, sin colores escritos a mano" y "el texto cumple un contraste mínimo de 4,5:1".
5. Tareas de estilos (estilos globales, header y hero, listado y tarjeta, responsive): añade "siguiendo la skill de diseño" a cada una.
6. Tarea de documentación final: el archivo será `DOCUMENTACION.md`, no `README.md`. En la tarea "Redactar el contenido del footer": el footer debe mostrar los nombres de los dos miembros de la pareja.
Mantén casilla - [ ], archivos afectados y "Hecho cuando" (con "ng build termina sin errores") en todas las tareas.
**Resultado:** Plan actualizado correctamente con los 6 fallos arreglados.
**Corrección:** ninguna.

## Prompt 5 – Ejecución de la tarea 1 (Componentes standalone)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** creó los 5 componentes standalone con el CLI (`ng generate component...`). ng build sin errores, marcó la tarea 1 y no avanzó.
**Corrección:** ninguna en el código. El CLI pidió confirmar las estadísticas de uso en una terminal oculta y hubo que responder a mano.

## Prompt 6 – Ejecución de la tarea 2 (Integrar en app.html)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Borró el contenido por defecto de `app.component.html` y añadió las etiquetas `<app-header>`, `<app-hero>`, `<app-listado>` y `<app-footer>`. Importó los componentes en el array `imports` de `app.component.ts`. ng build sin errores.
**Corrección:** ninguna.

## Prompt 7 – Ejecución de la tarea 3 (Interfaz y datos)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Creó el archivo `src/app/models/pelicula.ts` con la interfaz y un array exportado con 6 películas de terror (título, director, año, sinopsis, imagen).
**Corrección:** ninguna.

## Prompt 8 – Ejecución de la tarea 4 (Imágenes SVG)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Generó 6 archivos `.svg` en la carpeta `public/` con diseños básicos simulando pósters de cine y textos de las películas. Los nombres de los archivos coincidían perfectamente con el array. ng build sin errores.
**Corrección:** ninguna.

## Prompt 9 – Ejecución de la tarea 5 (Tarjeta con @Input)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Añadió `@Input({required: true}) pelicula!: Pelicula;` en `tarjeta.component.ts`. Preparó el HTML con interpolaciones `{{ pelicula.titulo }}`, `{{ pelicula.sinopsis }}`, etc.
**Corrección:** El agente olvidó importar la interfaz `Pelicula` en `tarjeta.component.ts`. Se añadió la importación manualmente: `import { Pelicula } from '../models/pelicula';`.

## Prompt 10 – Ejecución de la tarea 6 (Listado con @for)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Importó los datos ficticios y `TarjetaComponent` en `listado.component.ts`. Modificó el HTML usando la nueva sintaxis `@for (pelicula of peliculas; track pelicula.titulo) { <app-tarjeta [pelicula]="pelicula"></app-tarjeta> }`.
**Corrección:** ninguna.

## Prompt 11 – Ejecución de la tarea 7 (Contenido del header)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Añadió un menú de navegación en `header.component.html` y los respectivos `id="hero"` y `id="listado"` en los HTML del hero y listado para que funcionen los enlaces ancla.
**Corrección:** ninguna.

## Prompt 12 – Ejecución de la tarea 8 (Contenido del hero)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Añadió un H1 atractivo sobre el ciclo de cine de terror y un pequeño texto descriptivo en el HTML del hero.
**Corrección:** ninguna.

## Prompt 13 – Ejecución de la tarea 9 (Contenido del footer)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Añadió el contenido al footer asegurándose de incluir el texto "Desarrollado por Antonio y Liam".
**Corrección:** ninguna.

## Prompt 14 – Ejecución de la tarea 10 (Estilos globales)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Importó tipografías desde Google Fonts en `index.html` y creó las variables CSS en `styles.css` (negro, naranja calabaza, morado, blanco hueso) siguiendo la skill de diseño.
**Corrección:** ninguna.

## Prompt 15 – Ejecución de la tarea 11 (Estilos de header y hero)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Estilizó la cabecera y la sección principal usando exclusivamente las variables `var(--nombre-color)` de `styles.css`. No se usaron colores fijos.
**Corrección:** ninguna.

## Prompt 16 – Ejecución de la tarea 12 (Estilos de listado y tarjeta)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Usó CSS Grid en el listado. A las tarjetas les dio un aspecto oscuro de cartelera de cine con un contraste adecuado para la lectura. Todo usando variables.
**Corrección:** Se ajustó manualmente el `gap` del grid en `listado.component.css` porque las tarjetas quedaban demasiado juntas.

## Prompt 17 – Ejecución de la tarea 13 (Responsive)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Añadió `@media (max-width: 768px)` adaptando el grid de películas a 1 sola columna y ajustando tamaños de fuente.
**Corrección:** ninguna.

## Prompt 18 – Ejecución de la tarea 14 (Comprobación final)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** El agente validó que no hubiera tareas pendientes de código y confirmó que todo estaba listo para hacer un `ng serve` manual sin errores.
**Corrección:** Ejecutamos `ng serve` en nuestra terminal y comprobamos que en el navegador no había errores de consola.

## Prompt 19 – Ejecución de la tarea 15 (Documentación final)
**Prompt:** Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
**Resultado:** Generó el archivo `DOCUMENTACION.md` resumiendo la temática elegida, las tecnologías (Angular 18 standalone), la estructura de componentes, y cómo se hizo el pase de datos con inputs e interpolación.
**Corrección:** Se añadió manualmente un pequeño párrafo al final del archivo valorando la experiencia de trabajar en pareja junto al agente.