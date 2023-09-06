import { createStore } from "vuex";

import { header } from "./header";
import { aside } from "./aside";
import { footer } from "./footer";
import { user } from "./user";
import { post } from "./post";
import { project } from "./project";
import { resume } from "./resume";

export const store = createStore({
  modules: {
    header,
    aside,
    footer,
    user,
    post,
    project,
    resume,
  },
  state() {
    return {
      loading: null,
      mobile: null,
      mobileBackground: null,
      windowWidth: null,
      socialList: [
        {
          name: "codepen",
          link: "https://codepen.io/leon11081991/pens/public",
        },
        {
          name: "github",
          link: "https://github.com/leon11081991",
        },
        {
          name: "medium",
          link: "https://medium.com/@leonchou1108",
        },
        {
          name: "notion",
          link: "https://leonchou.notion.site/Programming-Notes-a64a591052274c359615884dcc4164d5?pvs=4",
        },
      ],
    };
  },
  getters: {},
  mutations: {},
  actions: {
    // 偵測視窗寬度
    checkScreen({ state }) {
      state.windowWidth = window.innerWidth;

      // 根據視窗大小,啟用手機設定或桌機設定
      if (state.windowWidth < 576) {
        state.mobile = true;
        state.mobileBackground = true;
        return;
      } else if (state.windowWidth < 768) {
        state.mobile = true;
        state.mobileBackground = false;
        return;
      } else {
        state.mobile = false;
        state.mobileBackground = false;
        return;
      }
    },
  },
});
