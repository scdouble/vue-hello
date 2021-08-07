// このファイルはルーターを作るためのもの
import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About";
import Home from "../components/Home";

// ルーターを作成する
const router = createRouter({
  routes: [
    { path: "/about", component: About },
    { path: "/home", component: Home },
  ],
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
