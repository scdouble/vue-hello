import { createStore } from "vuex";
import countOptions from "./count";
import personOptions from "./person";

export default createStore({
  modules: {
    a: countOptions,
    b: personOptions,
  },
});
