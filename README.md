# Proyecto Symfony + Angular

Este proyecto es una aplicación web completa construida con **Symfony** en el backend y **Angular 19** en el frontend, diseñada para ofrecer un catálogo de productos, promociones y testimoniales, con endpoints bien definidos y un manejo eficiente del estado en el cliente.

---

## Tecnologías utilizadas

### Backend
- **Symfony**
- **API Platform**: Para la creación rápida y estandarizada de endpoints REST y GraphQL, incluyendo documentación automática con Swagger.
- **Doctrine ORM**: Para la gestión de las entidades `Product`, `Promotion` y `Testimonial`.
- **Swagger UI**: Documentación interactiva de los endpoints, disponible en el entorno de desarrollo.

### Frontend
- **Angular 19**: Framework moderno de frontend para construir aplicaciones SPA (Single Page Application) con arquitectura modular.
- **NgRx Data**: Librería de gestión de estado para Angular enfocada en manejar entidades y simplificar las interacciones con APIs.  
  Se utilizó NgRx Data para:
  - Mantener un estado consistente de las entidades obtenidas desde la API.
  - Reducir la cantidad de código boilerplate en servicios y efectos.
  - Facilitar la sincronización automática entre el frontend y el backend.
- **RxJS**: Para manejo de flujos reactivos y asincronía de manera declarativa.

### Base de Datos
- **PostgreSQL**
---

## Instalación y ejecución

El proyecto está containerizado con **Docker**, por lo que basta con ejecutar:

```bash
docker-compose up -d
```
Esto levantará tanto el backend como el frontend y permitirá acceder a las interfaces de desarrollo.

## URLs de acceso

- Frontend: http://localhost:4200

- Swagger / API Documentation: http://localhost:8080/api

# IMPORTANTE
# El .env SE AGREGO SOLAMENTE POR LA PRUEBA TECNICA

# Video de como funciona la pagina
https://www.loom.com/share/18044e6b25c0427585c5adf43d7536e4?sid=a5e57ba5-2d23-48df-bfdd-39075622cdf5
