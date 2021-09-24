import { createStore } from 'vuex'
import { textModule } from "./modules/text.module";

export default createStore({

  modules: {
    textModule
  }
})
