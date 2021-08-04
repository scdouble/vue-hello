import axios from "axios";
import { nanoid } from "nanoid";

//Personに関係するもの
export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf("wang") === 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("the name shoud start from wang");
      }
    },
    addPersonServer(context) {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          context.commit("ADD_PERSON", { id: nanoid(), name: response.data });
        },
        (error) => {
          alert(error.message);
        }
      );
    },
  },
  mutations: {
    ADD_PERSON(state, personObj) {
      console.log("Mutationの中のADD_PERSON", state, personObj);
      state.personList.unshift(personObj);
    },
  },
  state: {
    personList: [
      {
        id: "001",
        name: "Tom",
      },
    ],
  },
  getters: {
    // ここのstateはpersonOptionsのstate.localのstate
    firstPersonName(state) {
      return state.personList[0].name;
    },
  },
};
