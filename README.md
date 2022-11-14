# backend-bsale

El backend fue realizado con node.js y expressJS para poder crear la restApi que consumira el front-end para poder obtener los datos de la base de datos.

En el archivo package.json se añaden las configuraciones necesarias para poder trabajar en un proyecto en node.JS.

Se instalaron los npm de express, dotenv, mysql2 y nodemon

Se crearon las carpetas src/, controllers/, routes/

en src/ se añadieron las otras dos carpetas y ademas, se incluyeron los archivos principales de javascript.

Dentro de la carpeta controllers/ se encuentran los archivos category y productos, estos archivos contiene los request hacia la base de datos para obtener los datos necesarios

Dentro de la carpeta routes/ se encuentran los archivos category.routes y productos.routes, en estos archivos se establecen las rutas de acceso para cada request que hacen los archivos en la carpeta controllers/
