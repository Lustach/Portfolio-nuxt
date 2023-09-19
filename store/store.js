import Vue from "vue";
import Vuex from "vuex";
import projects from "~/store/projects";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isShowProjectModal: false,
  },
  methods: {
    toggleIsShowProjectModal(state) {
      state.isShowProjectModal = !this.state.isShowProjectModal;
    },
    // user,
    // profile,
    // resetPasswordSpacer,
    // util,
  },
  modules: {
    projects,
  },
});
