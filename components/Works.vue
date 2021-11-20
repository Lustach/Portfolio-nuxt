<template>
  <div class="works" id="work">
    <div class="container"><!--container-->
      <div class="works__nav">
        <a href="" class="works__nav-link" data-filter="all">Все</a>
        <a href="" class="works__nav-link" data-filter="app">App</a>
        <a href="" class="works__nav-link" data-filter="website">Websites</a>
        <a href="" class="works__nav-link" data-filter="interaction">Interaction</a>
        <!--      <a href="" class="works__nav-link" data-filter="test">Test</a>-->
        <!--      <a href="" class="works__nav-link" data-filter="pet-project">Pet-project</a>-->
      </div>
      <div class="portfolio">
        <div class="portfolio__col" data-cat="website">
          <div class="work">
            <picture><source srcset="https://placehold.it/370x250" type="image/webp"><img loading="lazy" src="https://placehold.it/370x250" alt="" class="work__image"/></picture>
            <div class="work__content">
              <div class="work__cat">category: website</div>
              <div class="work__title">Project title
                <time class="work__date" datetime="2020-03-07 19:00">2020</time>
              </div>
            </div>
          </div>
        </div>
        <div class="portfolio__col" data-cat="interaction">
          <div class="work">
            <picture><source srcset="https://placehold.it/370x250" type="image/webp"><img loading="lazy" src="https://placehold.it/370x250" alt="" class="work__image"/></picture>
            <div class="work__content">
              <div class="work__cat">category: interaction</div>
              <div class="work__title">Project title
                <time class="work__date" datetime="2020-03-07 19:00">2020</time>
              </div>
            </div>
          </div>
        </div>
        <div class="portfolio__col" data-cat="app">
          <div class="work">
            <picture><source srcset="https://placehold.it/370x250" type="image/webp"><img loading="lazy" src="https://placehold.it/370x250" alt="" class="work__image"/></picture>
            <div class="work__content">
              <div class="work__cat">category: app</div>
              <div class="work__title">Project title
                <time class="work__date" datetime="2020-03-07 19:00">2020</time>
              </div>
            </div>
          </div>
        </div>
        <div class="portfolio__col" data-cat="interaction">
          <div class="work">
            <picture><source srcset="https://placehold.it/370x250" type="image/webp"><img loading="lazy" src="https://placehold.it/370x250" alt="" class="work__image"/></picture>
            <div class="work__content">
              <div class="work__cat">category: interaction</div>
              <div class="work__title">Project title
                <time class="work__date" datetime="2020-03-07 19:00">2020</time>
              </div>
            </div>
          </div>
        </div>
        <div class="portfolio__col" data-cat="app">
          <div class="work">
            <picture><source srcset="https://placehold.it/370x250" type="image/webp"><img loading="lazy" src="https://placehold.it/370x250" alt="" class="work__image"/></picture>
            <div class="work__content">
              <div class="work__cat">category: app</div>
              <div class="work__title">Project title
                <time class="work__date" datetime="2020-03-07 19:00">2020</time>
              </div>
            </div>
          </div>
        </div>
        <div class="portfolio__col" data-cat="website">
          <div class="work">
            <picture><source srcset="https://placehold.it/370x250" type="image/webp"><img loading="lazy" src="https://placehold.it/370x250" alt="" class="work__image"/></picture>
            <div class="work__content">
              <div class="work__cat">category:website</div>
              <div class="work__title">Project title
                <time class="work__date" datetime="2020-03-07 19:00">2020</time>
              </div>
            </div>
          </div>
        </div>

      </div><!--portfolio-->
      <!--    модификаторы -- я считаю это калом, стили должны быть либо в css либо не быть на странице вообще-->
      <div class="text-center">
        <button class="btn btn--sm">Load more work</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works'
}
</script>

<style scoped>

</style>
