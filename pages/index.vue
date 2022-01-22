<template>
  <div>
    <Header @showResume="showModal('isShowResume')" @showHireMe="showModal('isShowHireMe')"/>
    <Intro @showResume="showModal('isShowResume')" @showHireMe="showModal('isShowHireMe')"/>
    <Works @showProject="showProject($event)"/>
    <About @showResume="showModal('isShowResume')" @showHireMe="showModal('isShowHireMe')"/>
    <!--    <Reviews/>-->
    <!--    <News/>-->
    <Footer @showHireMe="showModal('isShowHireMe')"/>
    <!--    modals-->
    <!--    todo для кеширования картинок хттп нужно давать уникаальные названия-->
    <Project v-if="isShowProject" :project="project.project" @close="closeModal('isShowProject')"/>
    <Resume v-show="isShowResume" @close="closeModal('isShowResume')" @showHireMe="showModal('isShowHireMe')"/>
    <HireMe v-show="isShowHireMe" @close="closeModal('isShowHireMe')"/>
  </div>
  <!--  <Header/>-->
</template>

<script lang="ts">
import Vue from 'vue'
import { setBodyOverflow, deleteBodyOverflow } from '~/util/body'
// import HireMe from '@/components/modals/HireMe.vue'
export default Vue.extend({
  components: {
    Project: () => import('@/components/modals/Project.vue'),
    Resume: () => import('@/components/modals/Resume.vue'),
    HireMe: () => import('@/components/modals/HireMe.vue')
  },
  // async asyncData ({ params, $axios }) {
  //   const result = await $axios.get('http://localhost:9000/')
  //   console.log(result.data,'fsadflj')
  //   return result.data
  //   // console.log(params,$axios)
  //   // const post = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
  //   // return { post }
  // },
  data: () => ({
    test: [],
    isShowProject: false,
    isShowResume: false,
    isShowHireMe: false,
    project: {
      project: '',
      key: ''
    }
  }),
  methods: {
    showProject (projectItem: { project: string; key: string }) {
      this.project = projectItem
      this.isShowProject = true
      setBodyOverflow()
    },
    showModal (varName: string | number) {
      // @ts-ignore
      this[varName] = true
      setBodyOverflow()
    },
    closeModal (varName: string | number) {
      if (varName) {
        // @ts-ignore
        this[varName] = false
        if (!(this.isShowHireMe || this.isShowResume || this.isShowProject)) {
          deleteBodyOverflow()
        }
      }
    }

  }
  // computed:()=>({
  //   ...mapState(['toggleIsShowProjectModal']),
  // })
})
</script>
<style lang="scss">
@import "./assets/scss/style";

</style>
