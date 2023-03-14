import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";
import TilePage from "@/pages/TilePage";
import BreezeBlockPage from "@/pages/BreezeBlockPage";
import GalleryPage from "@/pages/GalleryPage";
import ConfiguratorPage from "@/pages/ConfiguratorPage";
import ContactsPage from "@/pages/ContactsPage";
import PricePage from "@/pages/PricePage";
import PalettePage from "@/pages/PalettePage";
import ArticlesPage from "@/pages/ArticlesPage";
import NotFound from "@/pages/NotFound";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: MainPage,
    },

    {
        path: "/tile",
        component: TilePage,
        // children: [
        //     {
        //         path: "/article",
        //         component: article,
        //         props: true,
        //     },
        // ],
    },
    {
        path: "/breeze-block",
        component: BreezeBlockPage,
    },
    {
        path: "/gallery",
        component: GalleryPage,
    },
    {
        path: "/configurator",
        component: ConfiguratorPage,
    },
    {
        path: "/price",
        component: PricePage,
    },
    {
        path: "/contacts",
        component: ContactsPage,
    },

    {
        path: "/palette",
        component: PalettePage,
    },
    {
        path: "/articles",
        component: ArticlesPage,
    },
    {
        path: "*",
        component: NotFound,
    },
];

export default new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});
