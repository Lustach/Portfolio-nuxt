<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="user">
          <div class="user__avatar">
            <img loading="lazy" src="https://placehold.it/57/333" alt=""/>
          </div>
          <div class="user__content">
            <div class="user__name">Влад <br> Луста</div>
            <div class="user__prof">Frontend Developer</div>
          </div>
        </div>
        <nav class="nav">
          <div class="nav__link--block">
            <a href="#work" class="nav__link">Work</a>
            <a href="#about_me" class="nav__link">about me</a>
            <a href="#blog" class="nav__link">blog</a>
            <a href="#contacts" class="nav__link">contacts</a>
            <a href="#" class="nav__link nav__link--btn" data-modal="#modal_hire_me">hire me</a>
          </div>
        </nav>
        <div class="burger">
          <img loading="lazy" class="burger__icon" src="@/assets/images/bars.svg" alt=""/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
.header {
  padding: 1.2rem 0;
  //  @media @tablet-big {
  //  box-shadow: 0 0 10px;
  //}

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.user {
  display: flex;

  &__avatar {
    width: 57px;
    height: 57px;
    padding-right: 9px;
    box-sizing: content-box;

    img {
      border-radius: 50%;
    }
  }

  &__name {
    font-size: 1.06rem;
    color: black;
    font-weight: 700; //bold==700
    line-height: 1.2rem;
  }

  &__prof {
    font-size: 0.8rem;
    color: rgba(black, 0.7);
    line-height: 1.46rem;
    padding-top: 1px;
  }
}
</style>
