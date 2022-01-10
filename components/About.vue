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
          <h3 class="about__title">Обо мне</h3>
          <h2 class="about__bigtitle">КТО ЖЕ Я?</h2>
          <div class="about__text">
            <p>Я профессионально занимаюсь Frontend-ом уже более двух лет, и за это время успел многому научиться
              и поучаствовать в разработке крутых (и не очень :D ) приложений, а некоторые даже создал с нуля. Преимущественно использую Vue, JS(ES6-ES10),
              TypeScript, Nuxt. Использую CSS-препроцессоры SCSS/LESS. Для сборки использую Webpack/Gulp. Для тестов использую Cypress.
              <!--              для end-to-end - Cypress.-->
              Умею работать с Git-ом, немного с Docker-ом и OpenServer-ом.
              Имею опыт поддержки, оптимизации сайтов и рефакторинга кода.
            </p>
            <!--            todo сделать ссылку на не очень на мой каталог-->
            <!--            Я прикладываю все-->
            <p>Разработка SPA(таблицы, сортировки, формы, валидации, графики), лендингов, виджетов, скриптов различной сложности, разработка UI-компонентов, с
              использованием зарекомендовавших себя практик(KISS,DRY,SOLID,YAGNI) и подходов, UI-библиотек(Vuetify,Quasar,Element-UI, Bootstrap-Vue...), модулей и мн.
              др.
              Знаком с PUG, React, Graphql, Node-js, PostgresSql, MongoDB,
            </p>
            <p>Предлагаю свои услуги с полным пониманием, что на мне лежит ответственность за выполнение задач.
              Понимаю, что предстоит работа в команде над проектами,
              и буду безумно рад если команда будет заинтересована в качестве выполнения работы и соблюдать рационализм.
              Всю прочую информацию вы найдёте
              <a href="https://hh.ru/resume/d35c57baff0728b9b40039ed1f4c534a526557">здесь.</a>
            </p>
          </div>
          <a class="btn" data-modal="#modal_hire_me" @click="showHireMe">Нанять</a>
          <button class="btn" type="button" data-modal="#modal_resume" @click="showResume()">Резюме</button>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import modal from '@/mixins/modal'

export default {
  name: 'About',
  mixins: [modal]
}
</script>

<style scoped>

</style>
