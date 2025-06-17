# KeyNest - Plataforma web de compra y alquiler de propiedades

**KeyNest** es una aplicación web de tipo e-commerce inmobiliario que permite la publicación, visualización, y gestión de propiedades residenciales como casas y departamentos, tanto en venta como en alquiler.

El sistema está compuesto por un **backend desarrollado en Laravel** que funciona como **API RESTful protegida con tokens de autenticación Bearer usando Laravel Sanctum**, y un **frontend moderno creado con Next.js**, que maneja las vistas, la lógica del cliente y la interacción del usuario.

## 🎯 Objetivo

Facilitar la conexión entre propietarios (landlords) y personas que buscan propiedades (seekers) a través de una experiencia clara, funcional y responsiva. También incorpora un panel administrativo para gestionar usuarios y propiedades.

---

## 🧑‍💻 Roles de Usuario

El sistema maneja **tres tipos de usuarios**, cada uno con permisos y funcionalidades bien definidos:

### 🔐 1. Admin

El usuario administrador tiene acceso privilegiado para la **gestión global de la plataforma**:

- Visualiza todas las propiedades del sistema.
- Elimina cualquier propiedad (publicada por cualquier landlord).
- Visualiza estadísticas generales (propiedades, usuarios, etc.).
- Gestiona usuarios:
  - Ver listado completo de usuarios.
  - Editar datos de los usuarios.
  - Eliminar usuarios.

> ⚠️ El admin no crea ni edita propiedades, solo gestiona el sistema.

---

### 🏠 2. Landlord

Usuario propietario o publicador de propiedades. Este tipo de cuenta puede:

- Registrarse e iniciar sesión como landlord.
- Crear nuevas propiedades (en venta o alquiler).
- Agregar características detalladas:
  - Título, descripción, ubicación.
  - Tipo (casa o departamento).
  - Metros cuadrados.
  - Habitaciones, baños.
  - Permitir mascotas.
  - Costo de mantenimiento.
  - Precio.
  - Estado (disponible, cerrada, etc.).
- Subir múltiples imágenes.
- Editar sus propias propiedades.
- Eliminar sus propias propiedades.
- Ver el listado de **"Mis Propiedades"** (solo las que ha creado).
- Filtrar propiedades por estado, tipo, precio, etc.

> 🚫 No puede ver ni editar propiedades de otros landlords.

---

### 🔍 3. Seeker

Usuario visitante que busca propiedades. Puede:

- Registrarse e iniciar sesión como seeker.
- Navegar y buscar propiedades públicas.
- Ver detalles de cada propiedad.
- Aplicar filtros de búsqueda por:
  - Tipo (casa o departamento).
  - Venta o alquiler.
  - Rango de precio.
  - Número de baños y habitaciones.
  - Metros cuadrados.
  - Propiedades que aceptan mascotas.
- Agregar propiedades a una **lista de favoritos**.
- Ver su lista de propiedades favoritas.

> 🔒 No puede crear ni editar propiedades.

---

### 🧑‍🤝‍🧑 4. Usuario no autenticado (visitante)

Los usuarios no logueados pueden:

- Navegar por el catálogo de propiedades públicas.
- Ver detalles básicos de cada propiedad.
- Registrarse o iniciar sesión para desbloquear funciones personalizadas.

---

## 🧱 Tecnologías Utilizadas

### 🖥️ Frontend

- **Next.js**: Framework React para renderizado SSR.
- **Tailwind CSS**: Framework de estilos utility-first.
- **Axios**: Para consumo de la API REST.
- **React Icons**: Librería de íconos.
- **Context API**: Para manejo de estados globales como autenticación y propiedades.

### ⚙️ Backend

- **Laravel 10.x**: API RESTful.
- **Laravel Sanctum**: Autenticación con tokens Bearer.
- **MySQL (via Laragon)**: Base de datos relacional.
- **Eloquent ORM**: Interacción con la base de datos.
- **Middleware personalizado**: Para autorización de acciones según rol.
- **Validaciones HTTP**: Validación estricta de datos enviados al backend.

---

## 🔐 Seguridad y Autenticación

- Se implementa **autenticación vía Laravel Sanctum**.
- Todas las rutas sensibles están protegidas con middleware `auth:sanctum`.
- Los tokens Bearer se deben enviar en cada solicitud autenticada (por ejemplo, crear propiedad, ver favoritos, etc.).
- El frontend almacena el token de forma segura (por ejemplo, en `localStorage` o `cookies` HttpOnly si se usa SSR).

---

## 📦 Rutas de la API

### ✅ Públicas
- `POST /api/register`: Registro de usuarios (landlord, seeker).
- `POST /api/login`: Login de usuario y obtención de token.
- `GET /api/properties`: Listado público de propiedades.
- `GET /api/properties/{id}`: Ver detalles de una propiedad específica.

### 🔐 Requieren autenticación (Bearer Token)
- `GET /api/me`: Obtener datos del usuario autenticado.
- `POST /api/logout`: Cerrar sesión (revoca token).
- `POST /api/properties`: Crear propiedad (solo landlord).
- `GET /api/properties/mine`: Ver propiedades propias (solo landlord).
- `PUT /api/properties/{id}`: Editar propiedad (landlord o admin).
- `DELETE /api/properties/{id}`: Eliminar propiedad (landlord dueño o admin).
- `POST /api/properties/{id}/images`: Subir imágenes de propiedad.
- `POST /api/favorites`: Agregar a favoritos (solo seeker).
- `DELETE /api/favorites/{id}`: Quitar de favoritos (solo seeker).

---

## 📁 Estructura del Proyecto

```bash
/backend        # Laravel API (Laravel + Sanctum)
  ├── app/
  ├── routes/
  └── config/

/frontend       # Next.js + Tailwind
  ├── components/
  ├── pages/
  └── context/
