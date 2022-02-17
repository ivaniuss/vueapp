const uiModule = {
  state: () => ({ 
    isSideMenuOpen : true
  }),
  mutations: {
    handleMenu (state) {
      state.isSideMenuOpen = !state.isSideMenuOpen
    }
  },
  actions: { },
  getters: { 
    sideMenuOpen(state) {
      return state.isSideMenuOpen
    }
  }
}
export default uiModule
