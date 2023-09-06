export const aside = {
  state() {
    return {
      profileMenu: null,
    };
  },
  mutations: {},
  getters: {},
  actions: {
    //toggleProfileMenu({ state }) {
    //  state.profileMenu = !state.profileMenu;
    //},
    profileMenuOpen({ state }) {
      state.profileMenu = true;
    },
    profileMenuClose({ state }) {
      state.profileMenu = false;
    },
  },
};
