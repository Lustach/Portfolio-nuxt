<template>
  <div>
    t
    {{ test }}
    {{ post }}
    <a id="loadFile" download="Таблица поступлений" />
    <!--    {{ post }}-->
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Test',
  // async fetch(){
  //   const result = await this.$axios.$get('http://localhost:9000/test1')
  //   console.log(result.blog,'aas')
  // },
  async asyncData ({
    params,
    $axios
  }) {
    const post = await $axios.$get('http://localhost:9000/test1')
    console.log(post.blog, 'HUI')
    return { post }
  },
  // async asyncData ({
  //   params,
  //   $axios
  // }) {
  //   const test = await $axios.get('http://localhost:9000/test1')
  //   console.log(test,'fsad')
  //   return {
  //     test
  //   }
  //   // console.log(params,$axios)
  //   // const post = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
  //   // return { post }
  // },
  data: () => ({
    test: []
  }),
  async mounted () {
    const result = await this.$axios.$get('http://localhost:9000/another/path')
    console.log(result)
    console.log(this.$API)
    // await this.parseFile()
  },
  methods: {
    async parseFile () {
      const response = await this.$axios.$get('http://localhost:9000/another/path')
      const fileURL = window.URL.createObjectURL(new Blob([response]))
      const fileLink = document.querySelector('#loadFile')
      fileLink.href = fileURL
      fileLink.setAttribute('download', 'Таблица поступлений')
      fileLink.click()
      fileLink.remove()
    }
  }
})
</script>

<style scoped>

</style>
