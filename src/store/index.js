import { createStore } from "vuex";

import { header } from "./header";
import { aside } from "./aside";

export const store = createStore({
  modules: {
    header,
    aside,
  },
  state() {
    return {
      mobile: null,
      windowWidth: null,
      sampleArticles: [
        {
          articleTitle: "article #1",
          articleContent:
            "一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute (关于透传 attribonal digital experiences. Currently, I’m focused on building accessible, human-cenute，我们会在专门的章节中讨论)。",
          articleDate: "May 1 ,2023",
        },
        {
          articleTitle: "article #2",
          articleContent:
            "一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute (关于透传 attrrvreibute，我们会在专门的章节中讨论)。",
          articleDate: "May 2 ,2023",
        },
        {
          articleTitle: "article #3",
          articleContent:
            "一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute (关于透传 attribute，我们会在专门的章节中讨论)。",
          articleDate: "May 3 ,2023",
        },
      ],
    };
  },
  getters: {},
  mutations: {},
  actions: {
    // 偵測視窗寬度
    checkScreen({ state, commit }) {
      state.windowWidth = window.innerWidth;

      // 視窗小於768,啟用手機設定
      if (state.windowWidth <= 768) {
        state.mobile = true;
        console.log("Mobile / " + state.windowWidth + "px");
        return;
      }
      state.mobile = false;
      console.log("Desktop / " + state.windowWidth + "px");
      return;
    },
  },
});
