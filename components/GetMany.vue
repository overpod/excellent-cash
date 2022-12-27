<template>
  <div :class="$style.root">
    <h1 :class="$style.title_mobile">
      <div>Получите</div>
      <div>деньги на карту</div>
      <div>сегодня в {{ time }}</div>
    </h1>
    <h1 :class="$style.title">
      <div>Получите деньги</div>
      <div>на карту сегодня</div>
      <div>в {{ time }}</div>
    </h1>
    <div :class="$style.button_wrap">
      <a href="https://lk.otlnal.ru/login/">
        <div :class="$style.button">Получить деньги</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { getTime } from '../utils';

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
  padding: 0 2rem;
  @media (min-width: 40rem) {
    padding: 0 4rem;
  }
}
.title {
  margin: 0;
  padding-top: 8.4rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 100%;
  color: #fff;
  display: none;
  width: 100%;
  @media (min-width: 40rem) {
    display: inline;
  }
  @media (min-width: 60rem) {
    padding-top: 8.8rem;
    font-size: 8rem;
  }
  @media (min-width: 75rem) {
    padding-top: 13.4rem;
    font-size: 8rem;
  }
}
.title_mobile {
  margin: 0;
  padding-top: 4.8rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: inline;
  text-align: center;
  @media (min-width: 40rem) {
    display: none;
  }
}
.button_wrap {
  width: 100%;
  @media (min-width: 52.125rem) {
    display: inline;
  }
}
.button {
  margin-top: 1.6rem;
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
  @media (min-width: 40rem) {
    width: 25.8rem;
  }
}
</style>
