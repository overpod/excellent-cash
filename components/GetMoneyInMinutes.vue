<template>
  <div :class="$style.root">
    <h2 :class="$style.header">Получите деньги через 15 минут</h2>
    <div :class="$style.content">
      <div :class="$style.title">
        <img src="/1.svg" alt="Заполните короткую заявку" :class="$style.icon" />
        <span :class="$style.text">Заполните короткую заявку</span>
      </div>
      <div :class="$style.title">
        <img src="/2.svg" alt="Получите быстрое решение" :class="$style.icon" />
        <span :class="$style.text">Получите быстрое решение</span>
      </div>
      <div :class="$style.title">
        <img src="/3.svg" alt="Укажите реквизиты карты" :class="$style.icon" />
        <span :class="$style.text">Укажите реквизиты карты</span>
      </div>
      <div :class="[$style.title, $style.last_title]">
        <img src="/4.svg" alt="Переведём деньги на карту" :class="$style.icon" />
        <span :class="$style.text">Переведём деньги на карту</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  background-color: #41c24c;
  padding: 4rem 2rem;
  @media (min-width: 40rem) {
    padding: 6rem 3rem;
  }
  @media (min-width: 60rem) {
    padding: 9rem 4rem;
  }
}
.header {
  margin: 0;
  padding-bottom: 3rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  @media (min-width: 40rem) {
    font-size: 3.6rem;
    padding-bottom: 5.6rem;
  }
}
.content {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 2.2rem;
  @media (min-width: 60rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 0;
  }
}
.title {
  display: flex;
  align-items: center;
  @media (min-width: 60rem) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    &::before {
      content: ' ';
      display: block;
      width: 53%;
      height: 0.1rem;
      background-color: #027f25;
      position: relative;
      top: 3rem;
      left: 50%;
    }
  }
}
.last_title {
  @media (min-width: 60rem) {
    &::before {
      display: none;
    }
  }
}
.icon {
  padding-right: 1rem;
  @media (min-width: 40rem) {
    padding-right: 2rem;
    width: 6rem;
  }
  @media (min-width: 60rem) {
    padding-right: 0;
    padding-bottom: 2rem;
  }
}
.text {
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 100%;
  color: #ffffff;
  @media (min-width: 40rem) {
    font-size: 2.8rem;
  }
  @media (min-width: 60rem) {
    font-size: 2.4rem;
    max-width: 20rem;
  }
}
</style>
