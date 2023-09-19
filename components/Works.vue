<template>
  <div id="work" class="works">
    <div class="container">
      <h5 style="text-align: center; padding: 1rem 0 1.4rem 0">
        Некоторые примеры разработанных мной приложений
      </h5>
      <!--container-->
      <div class="works__nav">
        <NuxtLink
          v-for="(category, key) in worksList"
          :key="key"
          to=""
          class="works__nav-link"
          @click.native="filterParam = category.key"
        >
          {{ category.title }}
        </NuxtLink>
      </div>
      <div class="portfolio">
        <div
          v-for="(project, key) in filterProjectList"
          :key="key"
          class="portfolio__col"
          @click="showProjectModal({ project, key })"
        >
          <div class="work">
            <picture>
              <source :srcset="project.img" type="image/webp" />
              <img loading="lazy" :src="project.img" alt="" class="work__image"
            /></picture>
            <div class="work__content">
              <div class="work__cat">
                {{ project.category }}
              </div>
              <div class="work__title">
                {{ project.title }}
                <time class="work__date" :datetime="test">{{
                  project.date
                }}</time>
              </div>
            </div>
          </div>
        </div>
        <div v-if="filterProjectList.length === 0">Ничего нет</div>
      </div>
      <!--      <my-btn name="">-->
      <!--        Загрузить ещё-->
      <!--      </my-btn>-->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Works",
  components: {
    // myBtn: () => import("@/components/ui/btn.vue"),
  },
  data: () => ({
    test: new Date().getFullYear(),
    filterParam: "Все",
    worksList: [
      {
        title: "Все",
        key: "Все",
      },
      {
        title: "Приложения",
        key: "Приложение",
      },
      {
        title: "Лендинги",
        key: "Лендинг",
      },
      {
        title: "Виджеты",
        key: "Виджет",
      },
      {
        title: "Разное",
        key: "Разное",
      },
    ],
  }),
  computed: {
    ...mapState({
      projectList: (state) => state.projects.projectList,
    }),
    filterProjectList() {
      const filteredProjects =
        this.filterParam !== "Все"
          ? this.projectList.filter((e) => e.category === this.filterParam)
          : this.projectList;
      return filteredProjects;
      //  .length ? filteredProjects : this.projectList
    },
  },
  mounted() {},
  methods: {
    showProjectModal(item) {
      this.$emit("showProject", item);
    },
  },
};
</script>

<style scoped></style>
