<template>
  <div :class="$style.root">
    <img src="/logo.svg" alt="Отличные Наличные" :class="$style.logo_img" />
    <div :class="$style.login">
      <img src="/sign.svg" alt="Отличные наличные вход" :class="$style.sign" />
      <div :class="$style.login_title">Личный кабинет</div>
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  background-color: #41c24c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem 0;
  @media (min-width: 18rem) {
    justify-content: space-between;
  }
  @media (min-width: 40rem) {
    padding: 4rem 4rem 0;
    justify-content: space-between;
  }
  @media (min-width: 75rem) {
    padding: 6rem 4rem 0;
    justify-content: space-between;
  }
}
.logo_img {
  padding-top: 3.2rem 0;
}
.login {
  color: #ffffff;
  display: flex;
  a {
    color: #ffffff;
    display: flex;
  }
}
.login_title {
  margin-left: 1.2rem;
  display: none;
  @media (min-width: 27.5rem) {
    display: inline;
  }
}
.sign {
  display: none;
  @media (min-width: 18rem) {
    display: inline;
  }
}
</style>
