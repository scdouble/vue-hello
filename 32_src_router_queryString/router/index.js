// このファイルはルーターを作るためのもの
import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Messages from "../pages/Messages";
import Detail from "../pages/Detail";

// ルーターを作成する
const router = createRouter({
  routes: [
    { name: "guanyu", path: "/about", component: About },
    {
      path: "/home",
      component: Home,
      children: [
        //子ルートは'/'パスは描かなくてもよい
        { path: "news", component: News },
        {
          path: "message",
          component: Messages,
          children: [{ name: "xiangqing", path: "detail", component: Detail }],
        },
      ],
    },
  ],
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
