export default {
  methods: {
    close () {
      this.$emit('close')
    },
    showHireMe () {
      console.log('hi')
      this.$emit('showHireMe')
    },
    showResume () {
      this.$emit('showResume')
    }
  }
}
