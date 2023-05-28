import { createStore } from "vuex";

import { header } from "./header";
import { aside } from "./aside";
import { footer } from "./footer";
import { user } from "./user";
import { post } from "./post";
import { project } from "./project";

export const store = createStore({
  modules: {
    header,
    aside,
    footer,
    user,
    post,
    project,
  },
  state() {
    return {
      loading: true,
      mobile: null,
      mobileBackground: null,
      windowWidth: null,
      socialList: [
        {
          name: "github",
          link: "https://github.com/leon11081991",
        },
        {
          name: "linkin",
          link: "https://www.linkedin.com/in/yi-ting-chou-78653a270/",
        },
        {
          name: "notion",
          link: "https://www.linkedin.com/in/yi-ting-chou-78653a270/",
        },
        {
          name: "codepen",
          link: "https://www.linkedin.com/in/yi-ting-chou-78653a270/",
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
        //console.log("mobileBackground / " + state.mobileBackground);
        return;
      } else if (state.windowWidth < 768) {
        state.mobile = true;
        state.mobileBackground = false;
        //console.log("Mobile / " + state.windowWidth + "px");
        return;
      } else {
        state.mobile = false;
        state.mobileBackground = false;
        //console.log("Desktop / " + state.windowWidth + "px");
        return;
      }
    },
  },
});
