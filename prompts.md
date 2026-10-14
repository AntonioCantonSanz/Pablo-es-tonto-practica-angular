# Registro de prompts

## Prompt 1 – Skill de diseño
Prompt: /create-skill Crea una skill de diseño para una web de ciclo de cine de terror en Angular: paleta (negro, naranja calabaza, morado, blanco hueso), tipografías de Google Fonts (una display y una legible), ambiente nocturno, estilo de tarjetas y reglas de responsive. No toques el código de la app.
Resultado: (rellenar: dónde creó la skill y qué contiene el SKILL.md)
Corrección: (rellenar, o "ninguna")

## Prompt 2 – Generar el plan
Prompt: Lee AGENTS.md y la skill de diseño. Crea un archivo plan.md con el plan de desarrollo de la web.
No modifiques ni crees ningún otro archivo ni código.
Divide el trabajo en tareas pequeñas y ordenadas. Cada tarea debe tener:
- una casilla - [ ]
- los archivos afectados
- un criterio "Hecho cuando"
Resultado: generó un plan de 7 tareas (guardado como plan-inicial.md). Tenía el orden roto (integraba los componentes antes de crearlos), tareas demasiado grandes, criterios vagos, sin contenido de header/hero/footer, sin imágenes ni documentación, y `ng build` solo al final.
Corrección: se pidió reordenarlo y dividirlo (Prompt 3).

## Prompt 3 – Corregir el plan (primera revisión)
Prompt: Modifica solo plan.md, sin tocar ningún otro archivo ni código. Aplica estas correcciones:
- Reordena y divide las tareas en este orden: 1) crear los 5 componentes con el CLI sin contenido, 2) integrarlos en app.html en orden header, hero, listado, footer, 3) interfaz Pelicula y array de 6 películas, 4) añadir imágenes en public/, 5) tarjeta con @Input() e interpolación {{ }}, 6) listado con @for y track pasando datos a la tarjeta, 7) contenido del header (nombre y menú con anclas), 8) contenido del hero, 9) contenido del footer, 10) estilos globales (variables de paleta y fuentes de Google Fonts en src/index.html o styles.css), 11) estilos de header y hero, 12) estilos de listado y tarjeta, 13) responsive, 14) comprobación final con ng serve y consola del navegador sin errores, 15) documentación final en Markdown.
- Añade "ng build termina sin errores" al "Hecho cuando" de cada tarea.
- Sustituye los criterios vagos por criterios comprobables (por ejemplo, "a 375 px de ancho no hay scroll horizontal").
- Elimina la frase "angular.json no aplica".
- Mantén casilla - [ ], archivos afectados y "Hecho cuando" en cada tarea.
Resultado: plan de 15 tareas bien ordenado y con `ng build` en todas. Seguían 6 fallos: archivos afectados incorrectos en la tarea del listado, imágenes sin definir, anclas sin `id`, criterios de estilos vagos, skill sin mencionar y README.md que se sobrescribiría.
Corrección: se pidió corregir esos 6 fallos (Prompt 4).

## Prompt 4 – Corregir el plan (segunda revisión)
Prompt: Modifica solo plan.md, sin tocar ningún otro archivo ni código. Aplica exactamente estas correcciones y no cambies nada más:
1. Tarea "Repetir las películas en listado con @for y track": los archivos afectados deben ser solo `src/app/listado/listado.html` y `src/app/listado/listado.ts`. Añade al criterio "Hecho cuando" que `listado.ts` importa el componente `tarjeta`.
2. Tarea "Añadir las imágenes de las películas en public/": las imágenes serán placeholders en SVG creados por el agente (sin pósters reales, por derechos de autor). Escríbelo en el criterio, que además debe exigir un archivo por película con nombre coincidente con el campo `imagen` del array.
3. Tarea "Redactar el contenido del header con nombre y menú con anclas": añade `src/app/hero/hero.html` y `src/app/listado/listado.html` a los archivos afectados. El criterio debe exigir que `hero` y `listado` tengan un `id` y que cada enlace del menú lleve a su sección.
4. Tareas "Aplicar estilos de header y hero" y "Aplicar estilos de listado y tarjeta": sustituye los criterios vagos por estos comprobables: "los CSS solo usan las variables de la paleta, sin colores escritos a mano" y "el texto cumple un contraste mínimo de 4,5:1".
5. Tareas de estilos (estilos globales, header y hero, listado y tarjeta, responsive): añade "siguiendo la skill de diseño" a cada una.
6. Tarea de documentación final: el archivo será `DOCUMENTACION.md`, no `README.md`. En la tarea "Redactar el contenido del footer": el footer debe mostrar los nombres de los dos miembros de la pareja.
Mantén casilla - [ ], archivos afectados y "Hecho cuando" (con "ng build termina sin errores") en todas las tareas.
Resultado: (rellenar cuando lo ejecutéis)
Corrección: (rellenar, incluidos los cambios que hagáis a mano)

## Prompt 5 – Ejecución de la tarea 1
Prompt: Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.
Resultado: creó los 5 componentes standalone con el CLI (sin tests), ng build sin errores, marcó la tarea 1 y no avanzó.
Corrección: ninguna en el código. El CLI pidió confirmar las estadísticas de uso en una terminal oculta y hubo que responder a mano.

## Prompt 6 - 
Prompt: Lee AGENTS.md y plan.md. Ejecuta únicamente la primera tarea pendiente. Al terminar, ejecuta ng build, marca la casilla y resume qué archivos has creado o modificado. No avances a la siguiente tarea.