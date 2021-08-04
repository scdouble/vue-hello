//Countupに関係するもの

export default {
  namespaced: true,
  actions: {
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
      }, 500);
    },
  },
  mutations: {
    JIA: function(state, value) {
      console.log("Mutationの中のJIA", state, value);
      state.sum += value;
    },
    JIAN: function(state, value) {
      console.log("Mutationの中のJIAN", state, value);
      state.sum -= value;
    },
  },
  state: { sum: 0, school: "tokyo", subject: "frontend" },
  getters: {
    bigSum: function(state) {
      return state.sum * 10;
    },
  },
};
