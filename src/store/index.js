import { createStore } from 'vuex'
import uiModule from './ui/index'
const store = createStore({
  modules: {
    uiModule
  }
})
export default store;
