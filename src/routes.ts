// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

// other
import { FC } from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'Services-route',
        title: 'Services',
        path: '/Services',
        enabled: true,
        component: Services
    }
]