<template>
  <section id="blog" class="news">
    <div class="container">
      <div class="news__header">
        <h3 class="news__title">read me</h3>
        <div class="news__text">Sometimes i write something smart</div>
      </div>

      <div class="articles">
        <div class="articles__col">
          <div class="articles__item">
            <div class="articles__header">
              <time class="articles__date"> 10<br />june </time>
              <a href="#">
                <img
                  loading="lazy"
                  class="articles__photo"
                  src="https://placehold.it/370x257"
                  alt=""
                />
              </a>
            </div>
            <div class="articles__content">
              <h4 class="articles__title">
                <a href="#">TEN THE BEST APP IN 2017</a>
                <time class="articles__tablet--date">10 june</time>
              </h4>
              <div class="articles__cat">CATEGORY</div>
              <div class="articles__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas pellentesque eu enim eget luctus. Sed augue felis,
                  facilisis et elementum vitae, aliquam sit amet ante. Sed
                  iaculis eros sem, elementum consequat.
                </p>
              </div>
            </div>
            <a class="btn btn--sm" href="#">READ MORE</a>
          </div>
        </div>

        <div class="articles__col">
          <div class="articles__item">
            <div class="articles__header">
              <time class="articles__date"> 10<br />june </time>
              <a href="#">
                <img
                  loading="lazy"
                  class="articles__photo"
                  src="https://placehold.it/370x257"
                  alt=""
                />
              </a>
            </div>
            <div class="articles__content">
              <h4 class="articles__title">
                <a href="#">TEN THE BEST APP IN 2017</a>
              </h4>
              <div class="articles__cat">CATEGORY</div>
              <div class="articles__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas pellentesque eu enim eget luctus. Sed augue felis,
                  facilisis et elementum vitae, aliquam sit amet ante. Sed
                  iaculis eros sem, elementum consequat.
                </p>
              </div>
            </div>
            <a class="btn btn--sm" href="#">READ MORE</a>
          </div>
        </div>

        <div class="articles__col">
          <div class="articles__item">
            <div class="articles__header">
              <time class="articles__date"> 10<br />june </time>
              <a href="#">
                <img
                  loading="lazy"
                  class="articles__photo"
                  src="https://placehold.it/370x257"
                  alt=""
                />
              </a>
            </div>
            <div class="articles__content">
              <h4 class="articles__title">
                <a href="#">TEN THE BEST APP IN 2017</a>
              </h4>
              <div class="articles__cat">CATEGORY</div>
              <div class="articles__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas pellentesque eu enim eget luctus. Sed augue felis,
                  facilisis et elementum vitae, aliquam sit amet ante. Sed
                  iaculis eros sem, elementum consequat.
                </p>
              </div>
            </div>
            <a class="btn btn--sm" href="#">READ MORE</a>
          </div>
        </div>
      </div>
      <!-- /.articles -->

      <div class="news__footer">
        <a class="news__link" href="#">See more posts</a>
      </div>
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "News",
};
</script>

<style scoped></style>
