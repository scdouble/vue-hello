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
    { path: "/about", component: About },
    {
      path: "/home",
      component: Home,
      children: [
        //子ルートは'/'パスは描かなくてもよい
        { path: "news", component: News },
        {
          path: "message",
          component: Messages,
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

export default router;
