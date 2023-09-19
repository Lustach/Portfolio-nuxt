<template>
  <div>
    <Header />
    <Intro />
    <Works @showProject="showProject($event)" />
    <About />
    <!--    <Reviews/>-->
    <!--    <News/>-->
    <Footer @showHireMe="showModal('isShowHireMe')" />
    <!--    modals-->
    <!--    todo для кеширования картинок хттп нужно давать уникаальные названия-->
    <Project
      v-if="isShowProject"
      :project="project.project"
      @close="closeModal('isShowProject')"
    />
    <Resume
      v-show="isShowResume"
      @close="closeModal('isShowResume')"
      @showHireMe="showModal('isShowHireMe')"
    />
    <HireMe v-show="isShowHireMe" @close="closeModal('isShowHireMe')" />
  </div>
  <!--  <Header/>-->
</template>

<script lang="ts">
import Vue from "vue";
import { setBodyOverflow, deleteBodyOverflow } from "~/util/body";
// import HireMe from '@/components/modals/HireMe.vue'
export default Vue.extend({
  components: {
    Project: () => import("@/components/modals/Project.vue"),
    Resume: () => import("@/components/modals/Resume.vue"),
    HireMe: () => import("@/components/modals/HireMe.vue"),
  },
  data: () => ({
    test: [],
    isShowProject: false,
    isShowResume: false,
    isShowHireMe: false,
    project: {
      project: "",
      key: "",
    },
  }),
  created() {
    // this.$nuxt.$on('close', () => {
    //   this.showModal('isShowResume')
    // })
    //
    this.$nuxt.$on("showHireMe", () => {
      this.showModal("isShowHireMe");
    });
    this.$nuxt.$on("showResume", () => {
      this.showModal("isShowResume");
    });
  },
  methods: {
    showProject(projectItem: { project: string; key: string }) {
      this.project = projectItem;
      this.isShowProject = true;
      setBodyOverflow();
    },
    showModal(varName: string | number) {
      // @ts-ignore
      this[varName] = true;
      setBodyOverflow();
    },
    closeModal(varName: string | number) {
      if (varName) {
        // @ts-ignore
        this[varName] = false;
        if (!(this.isShowHireMe || this.isShowResume || this.isShowProject)) {
          deleteBodyOverflow();
        }
      }
    },
  },
  // computed:()=>({
  //   ...mapState(['toggleIsShowProjectModal']),
  // })
});
</script>
<style lang="scss">
@import "./assets/scss/style";
</style>
