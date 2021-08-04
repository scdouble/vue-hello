import { createStore } from "vuex";

//業務ロジックはactions
const actions = {
  //jia(){}
  jia: function(context, value) {
    //console.log("actionsの中のjia", context, value);
    context.commit("JIA", value); //区別できるようにMutationは大文字にするのが習慣
  },
  jian: function(context, value) {
    context.commit("JIAN", value);
  },

  jiaOdd: function(context, value) {
    if (context.state.sum % 2) {
      // demo1につなぐ
      context.dispatch("demo1", value);
    }
  },
  demo1(context, value) {
    console.log("demo1のactionが始まった");
    context.commit("JIA", value);
  },

  jiaWait: function(context, value) {
    setTimeout(() => {
      context.commit("JIA", value);
    });
  },
};

// データ(state)を変更するためのmutation
const mutations = {
  JIA: function(state, value) {
    console.log("Mutationの中のJIA", state, value);
    state.sum += value;
  },
  JIAN: function(state, value) {
    console.log("Mutationの中のJIA", state, value);
    state.sum -= value;
  },
};
// データを保管する
const state = {
  sum: 0,
  school: "tokyo",
  subject: "frontend",
};

// gettersを作成。stateのデータを加工するため。
const getters = {
  bigSum: function(state) {
    return state.sum * 10;
  },
};
// Create a new store instance.

export default createStore({
  actions,
  mutations,
  state,
  getters,
});
