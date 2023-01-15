<template>
  <div :class="$style.root">
    <h2 :class="$style.title">Активность сегодня</h2>
    <div :class="$style.content">
      <div :class="$style.right">
        <div>
          <div :class="$style.value" v-html="bidsTitle" />
          <div :class="$style.text">клиента оформили заявки</div>
          <div :class="[$style.value, $style.value_all]" v-html="issuedLoansTitle" />
          <div :class="$style.text">мы одобрили к выдаче</div>
          <div :class="[$style.value, $style.value_all]" v-html="tookTheMoneyTitle" />
          <div :class="$style.text">клиента уже взяли деньги</div>
        </div>
        <div>
          <h2 :class="[$style.get_title, $style.get_title_all]">Попробуй и ты</h2>
          <a href="https://lk.otlnal.ru/registration/"
            ><div :class="[$style.get, $style.get_all]">Получить деньги</div></a
          >
        </div>
      </div>
      <div :class="$style.left">
        <img src="/tape.svg" alt="Уже оформили" :class="$style.image" />
      </div>
    </div>
    <h2 :class="$style.get_title">Попробуй и ты</h2>
    <a href="https://lk.otlnal.ru/registration/"
      ><div :class="$style.get">Получить деньги</div></a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default defineComponent({
  name: 'ActivityToday',
  setup() {
    const bids = ref(4988);
    const bidsTitle = computed(() =>
      bids.value.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    );
    setInterval(() => {
      bids.value = bids.value + getRandomInt(80, 100);
    }, 6000);

    const issuedLoans = ref(16278000);
    const issuedLoansTitle = computed(() =>
      issuedLoans.value.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    );
    setInterval(() => {
      issuedLoans.value = issuedLoans.value + getRandomInt(5000, 15000);
    }, 6000);

    const tookTheMoney = ref(1052);
    const tookTheMoneyTitle = computed(() =>
      tookTheMoney.value.toLocaleString('ru-RU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    );
    setInterval(() => {
      tookTheMoney.value = tookTheMoney.value + getRandomInt(2, 10);
    }, 6000);

    return {
      bidsTitle,
      issuedLoansTitle,
      tookTheMoneyTitle,
    };
  },
});
</script>

<style lang="scss" module>
.root {
  background-color: #fff;
  padding: 4rem 2rem;
  @media (min-width: 40rem) {
    padding: 6rem 4rem;
  }
  @media (min-width: 60rem) {
    padding: 9rem 4rem;
  }
  @media (min-width: 75rem) {
    padding: 10rem 6rem;
  }
}
.title {
  margin: 0;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 100%;
  text-align: center;
  color: #444247;
  @media (min-width: 40rem) {
    font-size: 3.6rem;
  }
  @media (min-width: 60rem) {
    font-size: 4.6rem;
    text-align: left;
  }
}
.content {
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  @media (min-width: 40rem) {
    grid-template-columns: 1fr 1fr;
    padding-top: 4rem;
  }
  @media (min-width: 60rem) {
    padding-top: 6rem;
  }
}
.value {
  padding-top: 0.5rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #41c24c;
  @media (min-width: 60rem) {
    font-size: 4.6rem;
  }
}
.value_all {
  padding-top: 3.6rem;
  @media (min-width: 60rem) {
    padding-top: 4rem;
    font-size: 4.6rem;
  }
}
.text {
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #41c24c;
  @media (min-width: 60rem) {
    padding-top: 2.6rem;
    font-size: 3.2rem;
  }
}
.get_title {
  padding-top: 4rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 100%;
  color: #444247;
  text-align: center;
  margin: 0;
  @media (min-width: 40rem) {
    display: none;
  }
}
.get_title_all {
  display: none;
  @media (min-width: 40rem) {
    display: block;
    text-align: left;
  }
  @media (min-width: 40rem) {
    font-size: 4.6rem;
    padding-bottom: 2.4rem;
  }
}
.get {
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 150%;
  align-items: center;
  text-align: center;
  letter-spacing: -0.025em;
  color: #ffffff;
  background: #f6a607;
  border-radius: 1.6rem;
  padding: 1.5rem;
  text-align: center;
  margin-top: 2rem;
  @media (min-width: 40rem) {
    display: none;
  }
}
.get_all {
  display: none;
  @media (min-width: 40rem) {
    display: block;
    margin-right: 2.6rem;
    max-width: 30rem;
    font-size: 1.8rem;
  }
}
.right {
  @media (min-width: 60rem) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.left {
  display: none;
  @media (min-width: 40rem) {
    display: block;
  }
}
.image {
  @media (min-width: 40rem) {
    width: 31.4rem;
  }
  @media (min-width: 60rem) {
    width: 48.8rem;
  }
  @media (min-width: 75rem) {
    width: 56rem;
  }
}
</style>
