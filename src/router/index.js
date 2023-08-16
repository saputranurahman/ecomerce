import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue"
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Product from "../views/product.vue"
import SingleProduct from "../views/SingleProduct.vue"
import Contact from "../views/Contact.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"
import store from "../store";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { requireLogin: true },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requireGuest: true },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
        meta: { requireLogin: true },
    },
    {
        path: "/singleproduct",
        name: "SingleProduct",
        component: SingleProduct,
    },
    { 
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next();
    }
});
export default router;