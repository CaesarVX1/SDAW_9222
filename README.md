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