# KeyNest - Ecommerce de compra y venta de propiedades

El proyecto consiste en el desarrollo de una plataforma web de tipo e-commerce inmobiliario, cuyo objetivo principal es permitir la compra, venta y alquiler de propiedades residenciales como casas y apartamentos. La aplicación estará construida utilizando Laravel como framework backend y MongoDB como sistema de base de datos NoSQL.  
El sistema estará orientado a la interacción entre dos perfiles de usuario diferenciados:  
**Landlord** (usuario que publica y administra propiedades)  
**Customer** (usuario que busca y adquiere propiedades)

El enfoque del proyecto debe considerar que ambas experiencias de usuario (Landlord y Customer) son distintas, y por tanto, tanto las funcionalidades como las interfaces gráficas deben diseñarse de forma diferenciada pero coherente.

## Tipos de Usuario

El sistema contará con dos roles claramente definidos. Esta diferenciación debe aplicarse desde el inicio, es decir, al momento de registrarse o iniciar sesión. El usuario debe elegir qué tipo de cuenta desea usar.

### 1. Landlord

El landlord es el usuario encargado de publicar propiedades. Estas propiedades pueden estar en venta o alquiler, y deberán contar con una serie de características específicas. Este usuario también podrá administrar las propiedades que ha publicado.

**Acciones esperadas:**

- Registro e inicio de sesión como landlord
- Publicación de una nueva propiedad (casa o apartamento)
- Especificación de características como:
  - Tipo de propiedad (casa o apartamento)
  - Espacio en metros cuadrados
  - Número de habitaciones
  - Si se admiten mascotas
  - Precio de venta o alquiler
  - Ubicación de la propiedad
  - Otros atributos que puedan definirse
- Edición de propiedades publicadas
- Eliminación o finalización de una propiedad publicada (por ejemplo, si ya se vendió o alquiló)
- Visualización de sus propiedades activas y gestionadas

### 2. Customer

El customer es el usuario que consulta, busca, selecciona y eventualmente compra o alquila propiedades publicadas por los landlords. Además, puede guardar propiedades como favoritas para tenerlas accesibles en cualquier momento.

**Acciones esperadas:**

- Registro e inicio de sesión como customer
- Navegación por el catálogo de propiedades
- Visualización de detalles de propiedades específicas
- Agregar propiedades a una lista de favoritos
- Posibilidad de adquirir o alquilar propiedades (puede definirse más adelante cómo se gestiona esta acción: solicitud, contacto, pago, etc.)

### 3. Filtros

Al momento de buscar una propiedad se podrá filtrar por, bussqueda manual, precio, baños y habitaciones, mas (mascotas, tamano en metros cuadrados), renta o compra y tipo de propiedad (casa o departamento)

## Arquitectura y Tecnologías del Proyecto

- **Framework Backend:** Laravel
- **Base de datos:** MongoDB
- **Frontend:** NextJS con Tailwind — no se si querra todo hecho en Laravel (hay que preguntar ps)
