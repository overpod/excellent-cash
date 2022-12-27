<template>
  <div :class="$style.root">
    <h1 :class="$style.title_mobile">
      <div>Получите</div>
      <div>деньги на карту</div>
      <div>сегодня в {{ time }}</div>
    </h1>
    <h1 :class="$style.title_mini_mobile">Получите деньги на карту сегодня в {{ time }}</h1>
    <h1 :class="$style.title">
      <div>Получите деньги</div>
      <div>на карту сегодня</div>
      <div>в {{ time }}</div>
    </h1>
    <div :class="$style.button_wrap">
      <a :class="$style.button" href="https://lk.otlnal.ru/login/">Получить деньги</a>
    </div>
    <Benefits />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { getTime } from '../utils'

export default defineComponent({
  name: 'GetMany',
  setup() {
    const time = ref(getTime());

    setInterval(() => {
      time.value = getTime();
    }, 60000);

    return {
      time,
    };
  },
});
</script>

<style lang="scss" module>
.root {
  background-color: #41c24c;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 3.6rem;
  @media (min-width: 42.8rem) {
    padding: 0 3.6rem;
  }
  @media (min-width: 83.4rem) {
    padding: 0 10rem;
  }
}
.title_mobile {
  margin: 0;
  padding-top: 10.2rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 100%;
  color: #fff;
  text-align: center;
  display: none;
  @media (min-width: 26.875rem) {
    display: inline;
  }
  @media (min-width: 52.125rem) {
    display: none;
  }
}
.title {
  margin: 0;
  padding-top: 10.2rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 8rem;
  line-height: 100%;
  color: #fff;
  display: none;
  width: 100%;
  @media (min-width: 52.125rem) {
    display: inline;
  }
}
.title_mini_mobile {
  margin: 0;
  padding-top: 10.2rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: inline;
  text-align: center;
  @media (min-width: 26.875rem) {
    display: none;
  }
}
.button_wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 52.125rem) {
    display: inline;
  }
}
.button {
  margin-top: 3rem;
  background-color: #f6a607;
  border-radius: 1.6rem;
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 150%;
  height: 6.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  max-width: 25.8rem;
}
</style>
