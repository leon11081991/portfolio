export const header = {
  state() {
    return {
      menu: false,
      menuBar: false,
      marqueeTexts: [
        "This website is based on Vue3 with composition API, Vuex4, Vue-router4.",
        "Using Vite for frontend tooling.",
        "And using Baas development platform Google Firebase, JavaScript animation library GSAP.",
      ],
      navigationList: [
        {
          name: "HOME",
          path: "/",
        },
        {
          name: "ABOUT",
          path: "/about",
        },
        {
          name: "PROJECTS",
          path: "/about#projects",
        },
        {
          name: "ARTICLES",
          path: "/articles",
        },
      ],
    };
  },
  mutations: {},
  getters: {},
  actions: {
    toggleMenu({ state }) {
      state.menu = !state.menu;
      state.menuBar = true;
      console.log("menuActive", state.menu);
      // 1秒後移除
      setTimeout(() => {
        state.menuBar = false;
      }, 1000);
    },
  },
};
