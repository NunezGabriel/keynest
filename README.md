<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" width="200" alt="Laravel Logo"></a>
<a href="https://laravel.com" target="_blank"><img src="https://www.rapiddg.com/sites/default/files/imce-files/react.png" width="200" alt="Laravel Logo"></a></p>

# KeyNest - Plataforma Web de Compra y Alquiler de Propiedades

KeyNest es una aplicación web tipo e-commerce inmobiliario que permite la publicación, visualización y gestión de propiedades residenciales como casas y departamentos, tanto en venta como en alquiler.

El sistema está compuesto por:

- Un **backend construido en Laravel**, que funciona como una **API RESTful protegida con Laravel Sanctum** y autenticación por tokens Bearer.
- Un **frontend desarrollado con Next.js**, que maneja las vistas, lógica del cliente y la interacción con el usuario.
- El diseño completo de la aplicación fue realizado en **Figma**, asegurando una experiencia de usuario moderna, clara y responsiva.

## Objetivo General

Facilitar la conexión entre propietarios y personas que buscan propiedades, mediante una experiencia diferenciada por tipo de usuario, arquitectura desacoplada y funcionalidades claras.

---

## Roles de Usuario y Permisos

| Rol        | Permisos Principales |
|------------|----------------------|
| **Admin**  | - Ver estadísticas<br> - Eliminar cualquier propiedad<br> - Gestionar usuarios (editar, eliminar) |
| **Landlord** | - Crear/editar/eliminar sus propiedades<br> - Ver propiedades que ha publicado |
| **Seeker** | - Buscar propiedades<br> - Ver detalles<br> - Agregar/quitar favoritos |
| **Visitante** | - Ver listado público de propiedades<br> - Ver detalles básicos<br> - Registrarse o iniciar sesión |

---

## Funcionalidades por Tipo de Usuario

### Admin

- Ver todas las propiedades del sistema.
- Eliminar cualquier propiedad publicada.
- Acceder a panel de estadísticas.
- Gestionar todos los usuarios registrados (editar y eliminar).

### Landlord (Propietario)

- Registro e inicio de sesión.
- Crear propiedades con atributos:
  - Título, descripción, ubicación.
  - Tipo de propiedad: casa o departamento.
  - Precio, metros cuadrados, habitaciones, baños.
  - Permite mascotas, estado, mantenimiento.
- Subir imágenes asociadas.
- Editar o eliminar sus propias propiedades.
- Visualizar listado de “Mis Propiedades”.

### Seeker (Buscador)

- Registro e inicio de sesión.
- Navegar por el catálogo de propiedades.
- Visualizar detalles completos.
- Agregar y quitar propiedades favoritas.
- Aplicar filtros por:
  - Precio, tipo, habitaciones, baños, metros cuadrados, mascotas, estado.

### Visitante

- Explorar listado de propiedades públicas.
- Ver detalles limitados.
- Acceder a funciones mediante registro/inicio de sesión.

---

## Tecnologías Utilizadas

### Frontend

- **Next.js** — Framework React para SSR y SSG.
- **Tailwind CSS** — Framework de estilos utility-first.
- **Axios** — Cliente HTTP para consumo de la API.
- **React Icons** — Íconos vectoriales modernos.
- **Context API** — Manejo de estado global (autenticación, propiedades).

### Backend

- **Laravel 10.x** — API REST.
- **Laravel Sanctum** — Autenticación vía tokens Bearer.
- **MySQL (vía Laragon)** — Base de datos relacional.
- **Eloquent ORM** — ORM para modelos y relaciones.
- **Middleware por roles** — Autorización basada en tipo de usuario.

---

## Seguridad y Autenticación

- Toda autenticación se maneja con **Laravel Sanctum** y tokens Bearer.
- Las rutas protegidas requieren encabezado `Authorization: Bearer {token}`.
- El frontend almacena el token de forma segura (`localStorage` o cookies seguras).

---

## Rutas de la API

Todas las rutas están organizadas y probadas con **Postman**.  
Se deben enviar las solicitudes con el encabezado:


### Rutas Públicas

| Método | Endpoint               | Descripción                      |
|--------|------------------------|----------------------------------|
| POST   | `/api/register`        | Registro de usuario              |
| POST   | `/api/login`           | Inicio de sesión y token         |
| GET    | `/api/properties`      | Ver listado público              |
| GET    | `/api/properties/{id}` | Ver detalles de propiedad        |

### Rutas Protegidas

| Método | Endpoint                          | Rol       | Descripción                              |
|--------|-----------------------------------|-----------|------------------------------------------|
| GET    | `/api/me`                         | Todos     | Obtener datos del usuario autenticado    |
| POST   | `/api/logout`                     | Todos     | Cerrar sesión                            |
| POST   | `/api/properties`                 | Landlord  | Crear nueva propiedad                    |
| GET    | `/api/properties/mine`            | Landlord  | Ver propiedades propias                  |
| PUT    | `/api/properties/{id}`            | Landlord/Admin | Editar propiedad                     |
| DELETE | `/api/properties/{id}`            | Landlord/Admin | Eliminar propiedad                   |
| POST   | `/api/properties/{id}/images`     | Landlord  | Subir imágenes de propiedad              |
| POST   | `/api/favorites`                  | Seeker    | Agregar propiedad a favoritos            |
| DELETE | `/api/favorites/{id}`             | Seeker    | Eliminar propiedad de favoritos          |

---

## Estructura del Proyecto

```plaintext
/backend        # Laravel API con Sanctum y Eloquent
  ├── app/
  ├── routes/
  └── config/

/frontend       # Next.js + Tailwind
  ├── components/
  ├── views/
  └── context/
```
## Iniciar Proyecto
#Frontend
```bash
git clone git@github.com:NunezGabriel/keynest.git
npm install
npm run dev
```
#Backend
```bash
git clone git@github.com:NunezGabriel/keynest.git
composer install
cp .env.example .env   #crear el .env si no lo tienes y lo configuras en abse al example .env
php artisan migrate
php artisan serve
```
