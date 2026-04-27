import { CartaPage, HomePage, ProductItemPage } from '../pages'

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/cart',
    element: <CartaPage />,
  },
  {
    path: '/product-item',
    element: <ProductItemPage />,
  },
]
