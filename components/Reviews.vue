<template>
  <div class="reviews">
    <div class="container">
      <div class="reviews__item">
        <div class="reviews__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            neque perferendis nobis illum deserunt nisi fuga pariatur sunt porro
            amet qui asperiores ut, beatae placeat quo dolorem! Velit, harum,
            quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            neque perferendis nobis illum deserunt nisi fuga pariatur sunt porro
            amet qui asperiores ut, beatae placeat quo dolorem! Velit, harum,
            quaerat.
          </p>
        </div>

        <div class="reviews__author">
          <img
            loading="lazy"
            class="reviews__photo"
            src="https://placehold.it/103/333"
            alt=""
          />
          <div class="reviews__name">Edward M. Brooks</div>
          <div class="reviews__company">Marketing House</div>
          <div class="reviews__rating">
            <!--          reviews__star-->
            <svg class="reviews__star">
              <use
                xlink:href="@/assets/images/svgSprites.svg#star"
                xmlns="http://www.w3.org/2000/svg"
              ></use>
            </svg>
            <svg class="reviews__star">
              <use
                xlink:href="@/assets/images/svgSprites.svg#star"
                xmlns="http://www.w3.org/2000/svg"
              ></use>
            </svg>
            <svg class="reviews__star">
              <use
                xlink:href="@/assets/images/svgSprites.svg#star"
                xmlns="http://www.w3.org/2000/svg"
              ></use>
            </svg>
            <svg class="reviews__star">
              <use
                xlink:href="@/assets/images/svgSprites.svg#star"
                xmlns="http://www.w3.org/2000/svg"
              ></use>
            </svg>
            <svg class="reviews__star">
              <use
                xlink:href="@/assets/images/svgSprites.svg#star-half"
                xmlns="http://www.w3.org/2000/svg"
              ></use>
            </svg>
          </div>
        </div>
      </div>
      <!-- /.reviews__item -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
export default {
  name: "Reviews",
};
</script>

<style scoped></style>
