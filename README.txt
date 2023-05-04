Primero en la carpeta ./public se encuentra los 3 archivos js del lado del cliente, cada uno para una ruta en particular
En la carpeta de views se encuentran las 4 vistas de handlebars (inicio,login,perfil y registro) y el layout
El proyecto se corre en la carpeta ./src y dentro de ./server  para iniciar el servidor 
En la carpeta ./config se encuentra los datos de la app de github, el string de conexion de la DB de mongo (que la corro localmente) y el port del server
Tanto los controllers como los routers estan separados en los que son del api y los web
En la carpeta ./dao se encuentran los models de mongoose y los routers 
En la carpeta ./middlewares se encuentra principalmente el archivo de PASSPORT y SESSION además de otros middlewares de validacion 
En ./utils se encuntra el hasheo con bcrypt.