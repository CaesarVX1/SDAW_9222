# Proyecto SDAW_9222

Este es el proyecto de práctica para la asignatura de SDAW, creado por César Valverde Pardo. El objetivo es crear un repositorio Git/GitHub completo, gestionando versiones y ramas.

---

## :tools: Estructura del Proyecto

El proyecto contiene los siguientes archivos:

* `package.json`: Define el proyecto Node.js y sus dependencias.
* `server.js`: El servidor web basado en Express que sirve la aplicación.
* `index.html`: La página web principal (frontend).
* `script.js`: El código JavaScript del lado del cliente que gestiona la interactividad (el botón).
* `.gitignore`: Especifica los archivos que Git debe ignorar.
* `README.md`: Este mismo archivo de documentación.

---

## :man_running: Instrucciones para Ejecutar

Para levantar el servidor localmente, sigue estos pasos:

1.  **Clonar el repositorio** (o tener los archivos):
    ```bash
    # (Este comando sería para otro usuario, tú ya tienes la carpeta)
    # git clone [https://github.com/TU_USUARIO/SDAW_9222.git](https://github.com/TU_USUARIO/SDAW_9222.git)
    # cd SDAW_9222
    ```

2.  **Instalar dependencias**:
    Este comando lee el `package.json` e instala todo lo necesario (como Express).
    ```bash
    npm install
    ```

3.  **Iniciar el servidor**:
    ```bash
    npm start
    ```

4.  Abrir el navegador y visitar `http://localhost:3000`.

---

## :keyboard: Comandos Utilizados

Lista de comandos básicos utilizados en esta etapa:

**Node.js (npm):**
* `npm init -y`
* `npm install express`
* `npm start`

**Git (se verán en la Etapa 4):**
* `git init`
* `git config`
* `git add`
* `git commit`

---

## :brain: Conclusiones Personales

Esta práctica me sirvió para entender cómo trabaja un desarrollador. Conectar un proyecto local de Node.js con repositorios de Git, gestionar dependencias, entender cómo funciona el `.gitignore` y más pienso que son cosas útiles que me servirán en proyectos futuros


## Información técnica añadida desde rama 2

A continuación, se muestra el historial de commits de la rama main en este punto:
d0014b9 (HEAD -> rama2-CesarValverde, origin/main, main) Comentario arriba del todo
ae56c3e Nueva línea H2
e8547ef Setup del proyecto inicial


## Información técnica añadida desde rama 1

En esta sección se describen los principales comandos de Git utilizados durante la práctica:
- **git init**: Inicializa un nuevo repositorio de Git en la carpeta actual.
- **git add**: Añade archivos modificados al "staging area", preparándolos para el commit.
- **git commit**: Guarda una instantánea de los archivos del "staging area" en el historial local.
- **git branch**: Permite crear, listar o eliminar ramas.
- **git merge**: Fusiona los cambios de una rama en otra.
- **git push**: Sube los commits locales a un repositorio remoto (como GitHub).

## Información técnica añadida desde rama 4

En esta etapa se ha conectado el repositorio local existente con un segundo repositorio remoto alojado en GitLab. El procedimiento seguido ha sido:

1.  **Creación del proyecto en GitLab:** Se ha creado un nuevo proyecto vacío y público en GitLab con el mismo nombre que el repositorio de GitHub (`SDAW_9222`).
2.  **Añadir el remoto:** Se ha vinculado el repositorio local con el nuevo remoto de GitLab con:
    `git remote add gitlab https://gitlab.com/CesarVPX01/sdaw_9222.git`
3.  **Verificación:** Se comprueba que ambos remotos (`origin` y `gitlab`) están configurados con el comando:
    `git remote -v`
4.  **Sincronización inicial:** Se han subido los ficheros y el historial de commits al nuevo remoto manteniendo la estructura original con:
    `git push gitlab main`