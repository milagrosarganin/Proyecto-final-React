# Grano & Taza — E-commerce de cafetería

Pre-entrega del proyecto de React: tienda online de café de especialidad, cafeteras y accesorios.

## Tecnologías

- React + Vite
- React Router DOM (navegación)
- Context API (estado global del carrito)
- React-Bootstrap / Bootstrap (estilos)

## Rutas

| Ruta | Vista |
| --- | --- |
| `/` | Inicio / bienvenida |
| `/productos` | Catálogo de productos |
| `/producto/:id` | Detalle de un producto |
| `/carrito` | Carrito de compras |

## Estructura

```
public/
  productos.json        # datos de los productos (se cargan con fetch)
  img/                  # imágenes de los productos
src/
  components/
    Layout.jsx          # Header + NavBar + contenido + Footer
    Header.jsx
    NavBar.jsx          # navegación con <Link>/<NavLink> y CartWidget
    CartWidget.jsx      # ícono del carrito con cantidad total
    Footer.jsx          # información de la empresa y tarjetas del equipo
    TeamCard.jsx
    ItemListContainer.jsx  # carga productos.json con useEffect + fetch
    ItemList.jsx
    Item.jsx            # tarjeta reutilizable de producto (recibe props)
    ItemDetailContainer.jsx
    ItemDetail.jsx      # detalle del producto, llama a addToCart
    ItemCount.jsx       # selector de cantidad
    Loader.jsx
  context/
    CartContext.jsx     # CartProvider: addToCart, removeFromCart, clearCart, totales
  pages/
    Home.jsx
    Cart.jsx
    NotFound.jsx
  App.jsx               # definición de rutas
  main.jsx
```

## Cómo correrlo

```bash
npm install
npm run dev
```

## Deploy

Incluye `vercel.json` (Vercel) y `public/_redirects` (Netlify) para que las rutas funcionen al recargar la página.
