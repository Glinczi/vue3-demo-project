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
    {
      path: '/toastNotifiction',
      name: 'toastNotifiction',
      component: () => import('../views/ToastNotification.vue'),
    },
    {
      path: '/randomChoice',
      name: 'randomChoice',
      component: () => import('../views/RandomChoice.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/Demo.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // console.log('to', to)
    // console.log('from', from)
    /**
     * 第三个参数 savedPosition 只有当这是一个 popstate 导航时才可用（由浏览器的后退/前进按钮触发）
     */
    // console.log('savedPosition', savedPosition)
    // return 期望滚动到哪个的位置

    // 第三个参数 savedPosition，只有当这是一个 popstate 导航时才可用（由浏览器的后退 / 前进按钮触发）。
    // return {
    //   top: 100
    // }
  }
});

export default router;
