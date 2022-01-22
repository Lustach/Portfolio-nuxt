import { deleteBodyOverflow, setBodyOverflow } from '~/util/body'

export default {
  methods: {
    close () {
      setBodyOverflow()
      this.$emit('close')
    },
    showHireMe () {
      console.log('hi')
      this.$emit('showHireMe')
    },
    showResume () {
      this.$emit('showResume')
    },
    showMobileMenu () {
      // if (e && e.to !== '#work') {
      if (window.innerWidth <= 767) {
        this.isMobileMenu = !this.isMobileMenu
        this.isMobileMenu ? setBodyOverflow() : deleteBodyOverflow()
      }
      // }
    }
  }
}
