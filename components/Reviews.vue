<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <h2 :class="$style.title">Отзывы</h2>
      <div :class="$style.paginate">
        <div @click="clickRight">
          <div :class="$style.arrow">
            <img src="/right-vector.svg" alt="Вправо отзыв" />
          </div>
        </div>
        <div @click="clickLeft">
          <div :class="$style.arrow">
            <img src="/left-vector.svg" alt="Вправо отзыв" />
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.content" ref="content">
      <template v-if="content">
        <div
          v-for="review in reviews"
          :style="{ width: `${contentWidth}px` }"
          :class="$style.card"
        >
          <div :class="$style.card_content">
            <h3 :class="$style.card_title">{{ review.name }}</h3>
            <h4 :class="$style.card_city">{{ review.city }}</h4>
            <p :class="$style.card_text">{{ review.text }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useElementSize, useScroll, useWindowSize } from '@vueuse/core';

export default defineComponent({
  name: 'Reviews',
  setup() {
    const { width: widthWindow } = useWindowSize();
    const content = ref<HTMLDivElement | null>(null);

    const { width: contenBlocktWidth } = useElementSize(content);

    const contentWidth = computed(() => {
      if (widthWindow.value < 640) {
        return contenBlocktWidth.value;
      }
      return 368;
    });

    const { x, isScrolling } = useScroll(content, {
      behavior: 'smooth',
    });

    watch(contentWidth, () => {
      x.value = 0;
    });

    const clickRight = () => {
      if (isScrolling.value) {
        return;
      }
      x.value = x.value - (contentWidth.value + 20);
    };

    const clickLeft = () => {
      if (isScrolling.value) {
        return;
      }
      x.value = x.value + contentWidth.value + 20;
    };

    return {
      reviews,
      content,
      contentWidth,
      clickRight,
      clickLeft,
    };
  },
});

const reviews = [
  {
    id: 1,
    name: 'Луценко Мария',
    city: 'Воронеж',
    text:
      'Так уж получилось, что офис компании “Отличные наличные” находился по дороге на работу и жизненные проблемы моего мужа, завели меня в эту компанию. Я к ним пришла с одной целью, мне срочно нужны были деньги. В итоге свои 5000 рублей я получила за 20 минут потраченного времени. Ни в одном банке мне бы так быстро, даже карту не выписали (а из документов у меня только паспорт был). По поводу процентов ничего не скажу, т. к. займ я закрыла через 3 дня.',
  },
  {
    id: 2,
    name: 'Антипов Дмитрий',
    city: 'Челябинск',
    text:
      'Срочно понадобились деньги, в банке не мог взять, решил обратиться сюда, взял нужную сумму и все устроило, думаю при срочных нуждах буду обращаться еще в эту компанию, спасибо.',
  },
  {
    id: 3,
    name: 'Анна Семенчук',
    city: 'Москва',
    text:
      'Отличная компания, очень удобно, можно подать заявку, не выходя из дома, и на карту сразу же получить. Спасибо огромное, очень выручаете.',
  },
  {
    id: 4,
    name: 'Федя Черкасов',
    city: 'Омск',
    text:
      'Спасибо за помощь, взял займ на карту, все прошло быстро и без проблем, деньги получил в течении 15 минут, очень удобно, рекомендую всем.',
  },
  {
    id: 5,
    name: 'Александр Левченко',
    city: 'Санкт-Петербург',
    text:
      'Причин для недовольства нет. Взял ссуду - вернул ее, заплатив ровно столько, сколько высчитал на сайте + страховка, от которой никуда не деться.',
  },
  {
    id: 6,
    name: 'Игнат Лукин',
    city: 'Краснодар',
    text:
      'Все очень понравилось, мне очень помогли, взял займ на карту, деньги получил быстро, спасибо большое.',
  },
];
</script>

<style lang="scss" module>
.root {
  background-color: #fff;
  padding: 4rem 2rem;
  @media (min-width: 40rem) {
    padding: 6rem 4rem;
  }
  @media (min-width: 60rem) {
    padding: 6.2rem 4rem;
  }
  @media (min-width: 75rem) {
    padding: 10rem 5rem;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  margin: 0;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 100%;
  color: #444247;
  @media (min-width: 40rem) {
    font-size: 3.6rem;
  }
  @media (min-width: 75rem) {
    font-size: 5.2rem;
  }
}
.paginate {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  @media (min-width: 75rem) {
    column-gap: 2rem;
  }
}
.arrow {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: #f6f6f6;
  border-radius: 0.64rem;
  user-select: none;
  @media (min-width: 75rem) {
    width: 5rem;
    height: 5rem;
  }
}
.content {
  padding-top: 4.2rem;
  display: grid;
  grid-auto-columns: max-content;
  grid-template-rows: 1fr;
  column-gap: 2rem;
  width: 100%;
  overflow: hidden;
}
.card {
  background: #f6f6f6;
  grid-row: 1;
  grid-column: auto;
  border-radius: 3.6rem;
}
.card_content {
  padding: 3.2rem;
  @media (min-width: 40rem) {
    padding: 4rem 3.2rem;
  }
  @media (min-width: 40rem) {
    padding: 4rem 3.5rem;
  }
  @media (min-width: 75rem) {
    padding: 2.5rem;
  }
}
.card_title {
  margin: 0;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 100%;
  color: #444247;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #41c24c;
  @media (min-width: 40rem) {
    font-size: 3.2rem;
    padding-bottom: 1.9rem;
  }
}
.card_city {
  margin: 0;
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #808080;
  padding-top: 1rem;
  @media (min-width: 40rem) {
    padding-top: 1.5rem;
  }
  @media (min-width: 75rem) {
    font-size: 1.8rem;
  }
}
.card_text {
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #444247;
  padding-top: 2rem;
  @media (min-width: 40rem) {
    font-size: 1.8rem;
    padding-top: 2.5rem;
  }
  @media (min-width: 75rem) {
    font-size: 2rem;
  }
}
</style>
