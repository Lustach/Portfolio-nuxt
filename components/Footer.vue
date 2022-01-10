<template>
  <footer class="footer" id="contacts">
    <div class="container">

      <div class="footer__inner">
        <div class="footer__credits">
          <div class="footer__copyright">
            &copy; {{ new Date().getFullYear() }} Все права защищены
          </div>

          <div class="footer__social">
            <a href="https://vk.com/tartarin3" class="footer__link">
              <svg>
                <use xlink:href="@/assets/images/svgSprites.svg#vk" xmlns="http://www.w3.org/2000/svg"></use>
              </svg>
            </a>
            <a href="https://github.com/Lustach" class="footer__link">
              <svg>
                <use xlink:href="@/assets/images/svgSprites.svg#github" xmlns="http://www.w3.org/2000/svg"></use>
              </svg>
            </a>
            <a href="https://t.me/Lustach" class="footer__link">
              <svg>
                <use xlink:href="@/assets/images/svgSprites.svg#telegram" xmlns="http://www.w3.org/2000/svg"></use>
              </svg>
            </a>
            <!--          https://t.me/Lustach-->
          </div>
        </div><!-- /.footer__credits -->

        <nav class="footer__nav">
          <a class="footer__nav-link" href="#">Проекты</a>
          <a class="footer__nav-link" href="#">Обо мне</a>
          <!--          <a class="footer__nav-link" href="#">Blog</a>-->
          <!--          <a class="footer__nav-link" href="#">Contact</a>-->
          <a class="footer__nav-link  footer__nav-link--btn"  data-modal="#modal_hire_me" @click="showHireMe()">Нанять</a>
        </nav>
      </div><!-- /.footer__inner -->

    </div><!-- /.container -->
  </footer>

</template>

<script>
import modal from '@/mixins/modal'

export default {
  name: 'Footer',
  mixins: [modal],
}
</script>

<style scoped>

</style>
