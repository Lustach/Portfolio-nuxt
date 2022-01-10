<template>
  <div>
    <Header @showResume="showModal('isShowResume')" @showHireMe="showModal('isShowHireMe')"/>
    <Intro @showResume="showModal('isShowResume')" @showHireMe="showModal('isShowHireMe')"/>
    <Works @showProject="showProject($event)"></Works>
    <About @showResume="showModal('isShowResume')" @showHireMe="showModal('isShowHireMe')"/>
    <!--    <Reviews/>-->
    <!--    <News/>-->
    <Footer @showHireMe="showModal('isShowHireMe')"/>
    <!--    modals-->
    <Project @close="closeModal('isShowProject')" v-if="isShowProject" :project="project.project"/>
    <Resume @close="closeModal('isShowResume')" @showHireMe="showModal('isShowHireMe')" v-if="isShowResume"/>
    <HireMe @close="closeModal('isShowHireMe')" v-if="isShowHireMe"/>
  </div>
  <!--  <Header/>-->
</template>

<script lang="ts">
import Vue from 'vue'
import { setBodyOverflow, deleteBodyOverflow } from '~/util/body'

export default Vue.extend({
  components: {
    Project: () => import('@/components/modals/Project.vue'),
    Resume: () => import('@/components/modals/Resume.vue'),
    HireMe: () => import('@/components/modals/HireMe.vue')
  },
  data: () => ({
    test: false,
    isShowProject: false,
    isShowResume: false,
    isShowHireMe: false,
    project: {
      project: '',
      key: '',
    }
  }),
  methods: {
    showProject (projectItem) {
      this.project = projectItem
      this.isShowProject = true
      setBodyOverflow()
    },
    showModal (varName) {
      this[varName] = true
      setBodyOverflow()
    },
    closeModal (varName) {
      if (varName) {
        this[varName] = false
        deleteBodyOverflow()
      }
    },

  },
  // computed:()=>({
  //   ...mapState(['toggleIsShowProjectModal']),
  // })
})
</script>
<style lang="scss">
@import "./assets/scss/style";

</style>
