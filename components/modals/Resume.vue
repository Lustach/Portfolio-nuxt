<template>
  <div id="modal_resume" class="modal">
    <div class="modal__dialog">
      <button class="modal__close" type="button" @click="close()">
        <img loading="lazy" src="@/assets/images/times-circle.svg" alt="Close">
      </button>

      <div class="modal__content">
        <h3 class="modal__title text-center" data-modal="#modal_resume">
          Резюме
        </h3>

        <!--                <div class="text-center">-->
        <!--                  <a class="btn btn&#45;&#45;thin" href="#">Скачать PDF</a>-->
        <!--                  <a class="btn btn&#45;&#45;thin" href="#">Печать</a>-->
        <!--                </div>-->

        <div class="timeline">
          <div class="timeline__col  timeline__col--left">
            <h4 class="timeline__title">
              Коммерческий опыт
            </h4>

            <div class="timeline__item">
              <time class="timeline__date" datetime="11-21-2019">2021 - <b>2022</b></time>
              <h5 class="timeline__subtitle">
                Trinity Group
              </h5>
              <div class="timeline__position">
                Vue Front-end разработчик
              </div>
              <div class="timeline__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis autem aspernatur sed iusto maiores nihil magni provident dolore, animi nemo est
                  corporis in
                  facilis eum quae sint aliquam, ipsam?
                </p>
              </div>
            </div>

            <div class="timeline__item">
              <time class="timeline__date" datetime="11-21-2019">2020- <b>2021</b></time>
              <h5 class="timeline__subtitle">
                CraftGroup
              </h5>
              <div class="timeline__position">
                Vue Front-end разработчик
              </div>
              <div class="timeline__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis autem aspernatur sed iusto maiores nihil magni provident dolore, animi nemo est
                  corporis in
                  facilis eum quae sint aliquam, ipsam?
                </p>
              </div>
            </div>

            <div class="timeline__item">
              <time class="timeline__date" datetime="11-21-2019">2020 - <b>2021</b></time>
              <h5 class="timeline__subtitle">
                Фрилансер
              </h5>
              <div class="timeline__position">
                Front-end разработчик
              </div>
              <div class="timeline__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis autem aspernatur sed iusto maiores nihil magni provident dolore, animi nemo est
                  corporis in
                  facilis eum quae sint aliquam, ipsam?
                </p>
              </div>
            </div>
            <div class="timeline__item">
              <time class="timeline__date" datetime="11-21-2019">2020 - <b>2021</b></time>
              <h5 class="timeline__subtitle">
                Фрилансер
              </h5>
              <div class="timeline__position">
                Front-end разработчик
              </div>
              <div class="timeline__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis autem aspernatur sed iusto maiores nihil magni provident dolore, animi nemo est
                  corporis in
                  facilis eum quae sint aliquam, ipsam?
                </p>
              </div>
            </div>
          </div>

          <div class="timeline__col  timeline__col--right">
            <h4 class="timeline__title">
              Образование
            </h4>

            <div class="timeline__item">
              <time class="timeline__date" datetime="11-21-2019">2018 - 2022</time>
              <h5 class="timeline__subtitle">
                Программная Инженерия
              </h5>
              <div class="timeline__position">
                ДонНТУ г. Донецк
              </div>
            </div>

            <!--            <div class="timeline__item">-->
            <!--              <time class="timeline__date" datetime="11-21-2019">2005 - 2010</time>-->
            <!--              <h5 class="timeline__subtitle">UI/UX Design</h5>-->
            <!--              <div class="timeline__position">LA University, USA</div>-->
            <!--            </div>-->

            <h4 class="timeline__title">
              Навыки:
            </h4>
            <div class="progress-bar">
              <h3 class="">
                Hard:
              </h3>
              <div class="progress-bar__item">
                <div class="progress-bar__left">
                  <div class="progress-bar__title">
                    JavaScript
                  </div>
                </div>
                <div class="progress-bar__right">
                  <div class="progress-bar__bar">
                    <div class="progress-bar__progress" style="width: 90%;" />
                  </div>
                </div>
              </div>

              <div class="progress-bar__item">
                <div class="progress-bar__left">
                  <div class="progress-bar__title">
                    HTML/CSS
                  </div>
                </div>
                <div class="progress-bar__right">
                  <div class="progress-bar__bar">
                    <div class="progress-bar__progress" style="width: 95%;" />
                  </div>
                </div>
              </div>

              <div class="progress-bar__item">
                <div class="progress-bar__left">
                  <div class="progress-bar__title">
                    TypeScript
                  </div>
                </div>
                <div class="progress-bar__right">
                  <div class="progress-bar__bar">
                    <div class="progress-bar__progress" style="width: 85%;" />
                  </div>
                </div>
              </div>
              <div class="progress-bar__item">
                <div class="progress-bar__left">
                  <div class="progress-bar__title">
                    Vue/Vuex
                  </div>
                </div>
                <div class="progress-bar__right">
                  <div class="progress-bar__bar">
                    <div class="progress-bar__progress" style="width: 95%;" />
                  </div>
                </div>
              </div>
            </div><!-- /.progress-bar -->

            <!--            <h4 class="timeline__title">Awards</h4>-->

            <!--            <div class="timeline__item">-->
            <!--              <time class="timeline__date" datetime="11-21-2019">2010</time>-->
            <!--              <h5 class="timeline__subtitle">UI/UX Design</h5>-->
            <!--              <div class="timeline__position">LA University, USA</div>-->
            <!--              <div class="timeline__text">-->
            <!--                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis autem aspernatur sed iusto maiores nihil magni provident dolore, animi nemo est-->
            <!--                  corporis in-->
            <!--                  facilis eum quae sint aliquam, ipsam?</p>-->
            <!--              </div>-->
            <!--            </div>-->
          </div><!-- /.timeline__col -->
        </div><!-- /.timeline -->

        <div class="text-center">
          <a class="btn" href="#" data-modal="#modal_hire_me" @click="showHireMe()">Нанять</a>
        </div>
      </div><!-- /.modal__content -->
    </div><!-- /.modal__dialog -->
  </div>
</template>

<script>
import modal from '@/mixins/modal'

export default {
  name: 'Resume',
  mixins: [modal],
  data: () => ({
    experienceList: [{
      date_start: '2021',
      date_end: '2022',
      company: 'Trinity Group',
      position: 'Vue Front-end разработчик',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis autem aspernatur sed iusto maiores nihil magni provident dolore, animi nemo est
                  corporis in facilis eum quae sint aliquam, ipsam?`
    }, {
      date_start: '2020',
      date_end: '2021',
      company: 'CraftGroup',
      position: 'Vue Front-end разработчик',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis autem aspernatur sed iusto maiores nihil magni provident dolore, animi nemo est
                  corporis in
                  facilis eum quae sint aliquam, ipsam?`
    }, {
      date_start: '2020',
      date_end: '2021',
      company: 'Фрилансер',
      position: 'Front-end разработчик',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis autem aspernatur sed iusto maiores nihil magni provident dolore, animi nemo est
                  corporis in
                  facilis eum quae sint aliquam, ipsam?`
    }, {
      date_start: '2019',
      date_end: '2020',
      company: 'Астелит',
      position: 'Vue Front-end разработчик',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis autem aspernatur sed iusto maiores nihil magni provident dolore, animi nemo est
                  corporis in
                  facilis eum quae sint aliquam, ipsam?`
    }]
  })
}
</script>

<style scoped>

</style>
