# Smart Store

Marketplace de venta de dispositivos moviles desarrollada con React.

El proyecto fue creado a través de [Create React App](https://github.com/facebook/create-react-app).

## Para empezar

Para arrancar el proyecto, debemos instalar las dependencias con el comando `npm install`.

## Scripts disponibles

### `npm start`

Usamos este comando para arrancar el proyecto bajo un entorno de desarrollo. Esto nos habilitará el enlace [http://localhost:3000](http://localhost:3000).

La página se volverá a cargar cuando realicemos cambios.
También podremos ver los errores y warnings del linter en la consola.

### `npm test`

Lanza el test runner en modo watch.

### `npm run e2e`

Lanza la interfaz para ejecutar los test E2E en Cypress.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.\

### `npm run lint`

Ejecuta el linter.

## Estructura

Se ha intentado desacoplar todo lo que se refiere a producto creando un dominio para éste. Dentro de la carpeta `product` encontramos sus hooks, servicios, facades, componentes, dtos y el contexto.

## Estilos

Se han usado hojas de estilo `SCSS` para:
- Usar clases siguiendo las pautas que dicta [BEM](http://getbem.com/).
- Cargar Bootstrap para el grid y los componentes UI.

## Estado

Se usa un `Context Provider` para encapsular el estado de los productos, de forma que si creáramos otra sección para, por ejemplo, el perfil de usuario, podríamos tener otro contexto que se encargue específicamente de gestionar ese estado.

## Servidor

En modo desarrollo, se interceptan las llamadas a la API mediante `Mock Service Worker`.
