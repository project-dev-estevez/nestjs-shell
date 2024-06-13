<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  Cascarón para crear backends con NestJS. Con ❤️ para <b>Estevez.Jor</b>
</p>

# Descripción General

Este repositorio sirve como un cascarón para proyectos de [NestJS](https://github.com/nestjs/nest). Proporciona una configuración inicial que incluye todas las dependencias y configuraciones necesarias para comenzar a desarrollar una aplicación con NestJS de manera eficiente.

El cascarón incluye:

- Configuración básica de NestJS
- Scripts de inicio y desarrollo
- Configuración de TypeScript
- Configuración de pruebas unitarias

Este cascarón está diseñado para ayudarte a acelerar el proceso de inicio de un nuevo proyecto, evitando la necesidad de configurar repetidamente los mismos ajustes para cada nuevo proyecto de NestJS.

Para comenzar a usar este cascarón, simplemente clona el repositorio, instala las dependencias con `yarn install` y comienza a desarrollar con `yarn start:dev`.

## Instalaciones Necesarias

- [**NVM**](https://github.com/nvm-sh/nvm#installing-and-updating): Gestor de versiones de Node.js. Permite instalar y usar múltiples versiones de Node.js en la misma máquina.

- **Node.js**: Entorno de ejecución para JavaScript. Puedes instalarlo usando NVM con el comando `nvm install node`.

- [**Docker Desktop**](https://www.docker.com/products/docker-desktop): Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores. Necesario para ejecutar la base de datos en un contenedor Docker.

- [**Git**](https://git-scm.com/downloads): Sistema de control de versiones distribuido. Es esencial para el control de versiones y la colaboración en proyectos de desarrollo de software.

- [**Visual Studio Code**](https://code.visualstudio.com/download): Editor de código recomendado para este proyecto.

- [**Postman**](https://www.postman.com/downloads/) o [**Insomnia**](https://insomnia.rest/download): Herramienta para probar y documentar APIs. Es útil para probar las rutas y funciones de tu aplicación.

- [**TablePlus**](https://tableplus.com/download): Herramienta moderna, nativa y amigable para administrar bases de datos. Es útil para visualizar, editar y administrar tus datos en la base de datos.

## 1. Variables de Entorno

Las variables de entorno son una forma de configurar la aplicación para diferentes entornos, permitiendo que los valores cambien según el entorno en el que se esté ejecutando la aplicación.

Este proyecto utiliza un archivo `.env` para definir las variables de entorno. Para configurar tus propias variables de entorno, sigue estos pasos:

1. Duplica el archivo `.env.template` en la raíz del proyecto.
2. Renombra el archivo duplicado a `.env`.
3. Cambia las variables de entorno en el archivo `.env` según tu caso.

El archivo `.env` no se debe subir al control de versiones, por lo que se ha añadido al archivo `.gitignore` para evitar subirlo accidentalmente.

![Screnshot](image.png)

## Base de Datos

Este proyecto utiliza PostgreSQL como sistema de gestión de bases de datos. Para facilitar el desarrollo, se incluye un archivo `docker-compose.yml` en la raiz del proyecto que configura un contenedor Docker con una imagen de PostgreSQL, también se encuetra comentado la configuración para levantar una base de datos MongoDB o MySQL.

Para iniciar la base de datos, asegúrate de tener Docker instalado en tu máquina y luego ejecuta el siguiente comando en la terminal:

```bash
docker-compose up -d
```




















## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Stack usado
* PostgreSQL
* Nest

## License

Nest is [MIT licensed](LICENSE).
