const obj = {
  install(Vue) {
    console.log("@@@install", Vue);

    //定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200,
        };
      },
    });

    //给Vue的原型上添加一个方法（Vm和VC都能用）
    // Vue.prototype.hello = () => {
    //   alert("hello");
    // };
  },
};

export default obj;

// export default {
//     install() {
//       console.log("@@@install");
//     },
//   };
