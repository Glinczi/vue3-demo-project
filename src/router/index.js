import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: "/createFile",
      name: "createFile",
      component: () => import("../views/CreateFile.vue"),
    },
    {
      path: "/snowFall",
      name: "snowFall",
      component: () => import("../views/SnowFall.vue"),
    },
    {
      path: "/TomatoClock",
      name: "TomatoClock",
      meta: {
        title: "番茄时钟"
      },
      component: () => import("../views/TomatoClock.vue"),
    },
    {
      path: '/VisualCss',
      name: 'VisualCss',
      meta: {
        title: "可视化CSS"
      },
      component: () => import('../views/VisualCss.vue'),
    },
    {
      path: '/RandomQuote',
      name: 'RandomQuote',
      component: () => import('../views/RandomQuote.vue'),
    },
  ],
});

export default router;
