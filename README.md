# Drop-zone

https://drop-zone-amber.vercel.app/

Proyecto hecho integramente con React y Tailwind,se trata de un portal para cargar archivos en la nube.

![Captura desde 2022-06-15 22-54-14](https://user-images.githubusercontent.com/99020950/173940605-575b8fd3-e2c6-446e-8f09-bfdd520b31d2.png)

![Captura desde 2022-06-15 22-54-25](https://user-images.githubusercontent.com/99020950/173946476-049b7a8c-4569-4ce8-b978-d3fe25bfce4d.png)


## Descripción y guía de usuari@

Se trata de un portal para cargar archivos en la nube,al iniciar el portal saldrá una vista de login,no es necesario poner ninguna credencial,solamente con darle al botónde "Entrar",estaríamos en la vista del porta.

Consta de dos partes, la primera es ficticia donde al darle al Botón de "Subir Archivos" saldrán dos mennsajes correlativos que aparecerán haciendo Clic sobre el botón Aceptar y la segunda parte (botón Google-drive) es conectada a la Api de Google-drive.

No es responsive, es decir solamente está pensado para poder trabajar desde escritorio, el motivo es porque desde este proyecto, no se pueden adaptar las vistas y ventanas de Google Drive al móvil o tablet.



### `Instalación`

Entrar en el repositorio e ir a la parte "Code" en verder copiar el link de su interior, ir al editor de texto que estamos usando ,abrimos el terminal y escribimos git clone + link copiado, una vez clonado el repositorio, abrir la carpeta desde el editor de texto y ubicarse dentro de esta. 



### `Dependencias`

Antes de abrir el proyecto se necesitan las siguientes dependencias, estas tienen que ser escritas en el terminal dentro de la carpeta del proyecto:

npm install --save react-dropzone

npm i react-google-drive-picker

npm install react-icons --save

npm install react-router-dom@6

npm install sweetalert --save

(https://tailwindcss.com/docs/guides/create-react-app)

** en caso de que haya problema con la instalación de alguna dependencia al final de la línea poner --force, ejemplo:

npm i react-google-drive-picker --force**



una vez puestas todas la dependencias se recomienda actualizar las npm antes de arrancar:

npm install

npm update



### `Arranque`

una vez puestas todas las dependencias, abriremos un terminal nuevo y abriremos el localhost donde podremos trabajar en el portal:

npm start




** en caso de que haya error al compilar dentro del archivo "package.json" en el apartdo "scripts" sustituir por esto:


"scripts": {
    "start": "GENERATE_SOURCEMAP=false react-scripts start",
  },




# Revisión de código en Sonarcloud
![Captura desde 2022-06-15 23-52-25](https://user-images.githubusercontent.com/99020950/173944014-2b605789-cc46-4498-99f3-aae90df4f99e.png)





