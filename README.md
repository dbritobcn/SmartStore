# Smart Store

Marketplace de venta de dispositivos moviles desarrollada con React.

El proyecto fue creado a través de [Create React App](https://github.com/facebook/create-react-app).

## Para empezar

Para arrancar el proyecto, debemos instalar las dependencias con el comando `npm install`.\
Es importante usar `node v16+` para no tener problemas de compatibilidad al lanzar los test.

## Scripts disponibles

### `npm start`

Usamos este comando para arrancar el proyecto bajo un entorno de desarrollo. Esto nos habilitará el enlace [http://localhost:3000](http://localhost:3000).

La página se volverá a cargar cuando realicemos cambios.
También podremos ver los errores y warnings del linter en la consola.

### `npm test`

Lanza el test runner en modo watch.

### `npm run e2e`

Lanza el test runner de Cypress.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.\

### `npm run lint`

Ejecuta el linter.

## Estado

Se usa `useContext` a nivel de producto para gestionar y mantener el estado del carrito de compra y de los filtros.

## Estructura

Se entiende `producto` como un dominio. De este modo, todo lo que se refiere a producto está desacoplado del resto de la aplicación, siendo un módulo independiente.\
En la carpeta `product` encontramos su contexto, sus rutas, hooks, servicios, facades, componentes y dtos.

## Estilos

Se han usado hojas de estilo `SCSS` para:
- Usar clases siguiendo las pautas que dicta [BEM](http://getbem.com/).
- Cargar Bootstrap para el grid y los componentes UI.

## Servidor

En modo desarrollo, se interceptan las llamadas a la API mediante `Mock Service Worker`.
