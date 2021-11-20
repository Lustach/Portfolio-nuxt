<template>
  <section class="about" id="about_me">
    <div class="container">
      <div class="about__inner">
        <div class="about__photo">
          <picture>
            <source srcset="@/assets/images/designer_photo.webp" type="image/webp">
            <img loading="lazy" src="@/assets/images/designer_photo.png" class="intro__photo img" alt=""/></picture>
        </div>
        <div class="about__content">
          <h3 class="about__title">ABOUT ME</h3>
          <h2 class="about__bigtitle">WHO AM I</h2>
          <div class="about__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem consequuntur cumque delectus dignissimos dolore, ducimus, ea eos excepturi fugiat
              maxime numquam
              perferendis quia saepe sapiente sequi ut velit voluptas?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa non odit temporibus. Nemo porro, rerum. Ad debitis esse eveniet facere fuga
              laboriosam
              praesentium repellat veritatis. Beatae illum nesciunt omnis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam commodi consequuntur corporis cupiditate dolor doloribus enim eveniet ex illum impedit
              magni
              nesciunt, pariatur quae ratione sint sit totam voluptatem.</p>
          </div>
          <a href="" class="btn" data-modal="#modal_hire_me">HIRE ME</a>
          <button class="btn" type="button" data-modal="#modal_resume">SEE MY RESUME</button>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>

</style>
