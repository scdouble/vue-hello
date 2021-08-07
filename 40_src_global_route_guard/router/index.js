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
    {
      name: "guanyu",
      path: "/about",
      component: About,
      meta: { title: "guanyu" },
    },
    {
      name: "zhuye",
      path: "/home",
      component: Home,
      children: [
        //子ルートは'/'パスは描かなくてもよい
        { path: "news", component: News, meta: { isAuth: true } },
        {
          path: "message",
          component: Messages,
          meta: { isAuth: true },
          children: [
            {
              name: "xiangqing",
              path: "detail",
              // path: "detail/:id/:title",
              component: Detail,
              // propsの書き方１、値がObject
              // Objectの中の全部のKey-Valueは全部propsに渡る
              // props: { a: 1, b: "hello" },

              // propsの書き方2、値がBool
              // BoolがTrueであれば、ルートが受信したすべてのParamsはPropsとしてDetailに渡る
              // props: true,

              // propsの書き方3、値がFunction
              // BoolがTrueであれば、ルートが受信したすべてのParamsはPropsとしてDetailに渡る
              props($route) {
                // props(){}
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                };
              },
            },
          ],
        },
      ],
    },
  ],
  history: createWebHistory(process.env.BASE_URL),
});

//グローバル、ルートガード、全てのルートが変わる前にCallback関数を実行する、初期化するときにCallされる
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.getItem("school") === "atguigu") {
      next();
    } else {
      alert("NO Permission");
    }
  } else {
    next();
  }
});

//グローバル、ルートガード、ルートが変わった後にCallback関数を実行する、初期化するときにCallされる

router.afterEach((to, from) => {
  document.title = to.meta.title || "guigu";
});

export default router;
