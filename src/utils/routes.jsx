import { HomePage, ProductItemPage, FavoritesPage, CartPage } from "../pages";

export const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/cart",
        element: <CartPage />
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
