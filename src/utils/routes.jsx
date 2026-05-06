import { CartaPage, HomePage, ProductItemPage, FavoritesPage } from "../pages";

export const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/cart",
        element: <CartaPage />
    },
    {
        path: "/product-item",
        element: <ProductItemPage />
    },
    {
        path: "/favorites",
        element: <FavoritesPage />
    }
]