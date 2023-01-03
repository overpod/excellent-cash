<template>
  <div :class="$style.root">
    <div :class="$style.title_wrap">
      <h2 :class="$style.title_mobile">Выберите сумму<br />и срок займа</h2>
      <h2 :class="$style.title">Выберите сумму и срок займа</h2>
    </div>
    <div :class="$style.select_wrap" v-click-away="onClickAway">
      <div :class="$style.select" @click="tabSelectClick">
        {{ tabTitle }}
        <img src="/down.svg" alt="Выбрать срок кредита" :class="$style.arrow" />
      </div>
      <Transition name="fade">
        <div v-show="tabShowSelect" :class="$style.tabs_wrap">
          <div :class="$style.tabs">
            <div
              :class="[$style.tab, index === 1 && $style.tab_active]"
              v-for="(tab, index) in tabList"
              @click="tabClick(tab.id)"
            >
              {{ tab.title }}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
  <template v-if="tabIndex !== 4">
    <div :class="$style.calc">
      <div :class="$style.calc_title">Желаемая сумма</div>
      <div :class="$style.calc_value">
        {{ formattedSum(tabResult.sum, tabParams.sumCurrency) }}
      </div>
      <Slider
        v-model="tabResult.sum"
        :min="tabParams.minSum"
        :max="tabParams.maxSum"
        :step="tabParams.sumStep"
        :tooltips="false"
        :class="$style.slider"
        :lazy="false"
      />
      <div :class="$style.min_max">
        <span>{{ formattedSum(tabParams.minSum, tabParams.sumCurrency) }}</span>
        <span>{{ formattedSum(tabParams.maxSum, tabParams.sumCurrency) }}</span>
      </div>
    </div>
    <div :class="$style.calc">
      <div :class="$style.calc_title">Срок займа</div>
      <div :class="$style.calc_value">
        {{ formattedPeriod(tabResult.period) }}
      </div>
      <Slider
        v-model="tabResult.period"
        :min="tabParams.minPeriod"
        :max="tabParams.maxPeriod"
        :step="tabParams.periodStep"
        :tooltips="false"
        :class="$style.slider"
        :lazy="false"
      />
      <div :class="$style.min_max">
        <span>{{ formattedPeriod(tabParams.minPeriod) }}</span>
        <span>{{ formattedPeriod(tabParams.maxPeriod) }}</span>
      </div>
    </div>
    <div :class="$style.info">
      <span :class="$style.info_label">Вы получаете</span>
      <span :class="$style.info_value"
        >{{ formattedSum(tabResult.sum, tabParams.sumCurrency) }} сегодня в
        {{ time }}</span
      >
      <span :class="[$style.info_label, $style.two_info_label]">Вы возвращаете</span>
      <span :class="$style.info_value">{{ totalTitle }}</span>
    </div>
  </template>
  <template v-if="tabIndex === 4">
    <div :class="[$style.calc, $style.calc_tab]">
      <div :class="$style.label">
        <img src="/vector.svg" alt="Получить новый займ" :class="$style.labe_icon" />
        <span>Получить новый займ<br />на индивидуальных условиях</span>
      </div>
      <div :class="$style.label">
        <img src="/vector.svg" alt="Получить новый займ" :class="$style.labe_icon" />
        <span>Увеличить лимит<br />до необходимой суммы</span>
      </div>
      <div :class="$style.label">
        <img src="/vector.svg" alt="Получить новый займ" :class="$style.labe_icon" />
        <span>Перенести срок возврата<br />займа</span>
      </div>
      <div :class="$style.independently">Вы можете сделать самостоятельно:</div>
      <div :class="$style.private">в личном кабинете</div>
      <div :class="$style.phone">позвонив<br />на 8 (800) 600 700</div>
      <div :class="$style.free">бесплатно и круглосуточно</div>
    </div>
  </template>

  <div :class="$style.button_wrap" v-if="tabIndex !== 4">
    <a href="https://lk.otlnal.ru/login/"
      ><div :class="$style.button_link">Взять займ</div></a
    >
    <a v-if="tabIndex === 3" href="https://lk.otlnal.ru/registration" target="_blank"
      ><div :class="$style.button_chart">График выплат</div>
    </a>
    <div :class="$style.button_title">
      на карту за 15 минут<br :class="$style.br_mobile" />сегодня получили займ 2 304
      клиента
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Slider from '@vueform/slider';
import { directive } from 'vue3-click-away';

import { getTime } from '../utils';

type TabIndex = 1 | 2 | 3 | 4;

const tabs: { id: TabIndex; title: string }[] = [
  { id: 1, title: 'Первый займ под 0%' },
  { id: 2, title: 'До 30 000 ₽ до 30 дней' },
  { id: 3, title: 'До 60 000 ₽ до 6 месяцев' },
  { id: 4, title: 'Действующему клиенту' },
];

export default defineComponent({
  name: 'Calculate',
  components: {
    Slider,
  },
  directives: {
    clickAway: directive,
  },
  setup() {
    const time = ref(getTime());

    setInterval(() => {
      time.value = getTime();
    }, 60000);

    const tabIndex = ref<TabIndex>(1);

    const tabList = computed(() => {
      return tabs.filter((tab) => tab.id !== tabIndex.value);
    });

    const tabTitle = computed(() => {
      return tabs.find((tab) => tab.id === tabIndex.value)?.title || tabs[4].title;
    });

    const tabShowSelect = ref(false);
    const tabResult = ref({
      sum: 10000,
      period: 7,
    });

    const tabClick = (id: TabIndex) => {
      tabIndex.value = id;
      switch (id) {
        case 1:
          tabResult.value = {
            sum: 10000,
            period: 7,
          };
          break;
        case 2:
          tabResult.value = {
            sum: 15000,
            period: 14,
          };
          break;
        case 3:
          tabResult.value = {
            sum: 60000,
            period: 140,
          };
          break;
        default:
          tabResult.value = {
            sum: 10000,
            period: 7,
          };
          break;
      }
      tabShowSelect.value = false;
    };

    const onClickAway = () => {
      tabShowSelect.value = false;
    };

    const tabSelectClick = () => {
      tabShowSelect.value = !tabShowSelect.value;
    };

    const tabParams = computed(() => {
      switch (tabIndex.value) {
        case 1:
          return {
            minSum: 1000,
            maxSum: 30000,
            sumStep: 1000,
            minPeriod: 1,
            maxPeriod: 7,
            periodStep: 1,
            defaultSum: 10000,
            defaultPeriod: 7,
            sumCurrency: '₽',
            freeDays: 7,
            percent: 0,
          };
        case 2:
          return {
            minSum: 1000,
            maxSum: 30000,
            sumStep: 1000,
            minPeriod: 5,
            maxPeriod: 30,
            periodStep: 1,
            percent: 1,
            defaultSum: 15000,
            defaultPeriod: 14,
            sumCurrency: '₽',
            freeDays: 7,
          };
        case 3:
          return {
            minSum: 40000,
            maxSum: 60000,
            sumStep: 1000,
            minPeriod: 84,
            maxPeriod: 168,
            periodStep: 28,
            percent: 1,
            defaultSum: 60000,
            defaultPeriod: 140,
            sumCurrency: '₽',
            freeDays: 7,
          };
        default:
          return {
            minSum: 1000,
            maxSum: 30000,
            sumStep: 1000,
            minPeriod: 1,
            maxPeriod: 7,
            periodStep: 1,
            defaultSum: 10000,
            defaultPeriod: 7,
            sumCurrency: '₽',
            freeDays: 7,
            percent: 0,
          };
      }
    });

    const totalTitle = computed(() => {
      const totalSum = calculateTotal();

      if (tabResult.value.period <= 30) {
        let resultDate = new Date();
        resultDate.setTime(resultDate.valueOf() + tabResult.value.period * 86400000);
        const formattedDate = resultDate.toLocaleString('ru-RU', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });
        return `${formattedSum(
          totalSum,
          tabParams.value.sumCurrency
        )} до ${formattedDate}`;
      }

      const paymentsCount = tabResult.value.period / 7 / 2;
      return `${paymentsCount} ${plural(paymentsCount, [
        'платеж',
        'платежа',
        'платежей',
      ])} по ${formattedSum(totalSum, tabParams.value.sumCurrency)} каждые две недели`;
    });

    const formattedSum = (number: number, sumCurrency: string) =>
      new Intl.NumberFormat('ru-RU').format(number) + ` ${sumCurrency}`;

    const plural = (num: number, forms: string[]) => {
      const plural =
        num % 10 === 1 && num % 100 !== 11
          ? 0
          : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
          ? 1
          : 2;

      switch (plural) {
        case 0:
          return forms[0];
        case 1:
          return forms[1];
        case 2:
          return forms[2];
      }
    };

    const formattedPeriod = (number: number) => {
      if (number > 30) {
        const weeks = parseInt((number / 7).toFixed(0));
        return `${weeks} ${plural(weeks, ['неделя', 'недели', 'недель'])}`;
      } else {
        return `${number} ${plural(number, ['день', 'дня', 'дней'])}`;
      }
    };

    const calculateTotal = () => {
      let sum = 0;
      let percent = 358;

      if (tabResult.value.period > 30) {
        const weeks = tabResult.value.period / 7;
        sum =
          (tabResult.value.sum * percent) /
          (365 / 15) /
          100 /
          (1 - (1 + percent / (365 / 15) / 100) ** (-(weeks / 4) * 2));
      } else {
        if (tabResult.value.period <= tabParams.value.freeDays) {
          sum = tabResult.value.sum;
        } else {
          sum =
            tabResult.value.sum +
            (tabResult.value.sum / 100) *
              tabParams.value.percent *
              tabResult.value.period;
        }
      }
      return parseInt(sum.toString());
    };

    return {
      time,
      tabIndex,
      tabTitle,
      tabList,
      tabShowSelect,
      tabParams,
      tabResult,
      totalTitle,
      onClickAway,
      tabSelectClick,
      tabClick,
      formattedSum,
      formattedPeriod,
    };
  },
});
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss" module>
.root {
  color: #fff;
  background-color: #41c24c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 6rem 3.6rem 3rem 3.6rem;
  @media (min-width: 40rem) {
    padding: 5rem 4rem 3rem 4rem;
  }
}

.title_mobile {
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 100%;
  margin: 0;
  display: inline;
  @media (min-width: 40rem) {
    display: none;
  }
}

.title {
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 100%;
  margin: 0;
  display: none;
  @media (min-width: 40rem) {
    display: inline;
  }
}

.title_wrap {
  width: 100%;
  text-align: left;
}

.select_wrap {
  width: 100%;
}

.select {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
  border-radius: 1.6rem;
  color: #444247;
  background-color: #fff;
  padding: 1.6rem;
  width: -webkit-fill-available;
}

.calc {
  background-color: #fff;
  padding: 3.6rem 3.6rem 0 3.6rem;
  @media (min-width: 42.8rem) {
    padding: 0 3.6rem;
  }
  @media (min-width: 40rem) {
    padding: 3rem 4rem 0 4rem;
  }
}

.calc_title {
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #808080;
}

.calc_value {
  padding-top: 1.6rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 88%;
  color: #282828;
}

.slider {
  margin-top: 3rem;
}

.min_max {
  padding-top: 1.6rem;
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #808080;
  display: flex;
  justify-content: space-between;
}

.info {
  padding-top: 3.4rem;
  padding: 3.4rem 3.6rem 0 3.6rem;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr;
}

.info_label {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #808080;
}

.info_value {
  padding-top: 1.6rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 88%;
  color: #282828;
}

.two_info_label {
  padding-top: 3rem;
}

.tabs_wrap {
  position: relative;
  width: 100%;
}

.tabs {
  position: absolute;
  margin-top: 0.4rem;
  width: 100%;
  background-color: #fff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #444247;
  border-radius: 1.6rem;
  z-index: 3;
  box-shadow: 0 2px 10px rgb(151 168 176 / 70%);
}

.tab {
  padding: 1.6rem;
  color: #808080;
}

.tab_active {
  background-color: #f6f6f6;
}
.button_wrap {
  padding: 5rem 3.6rem 0 3.6rem;
  background-color: #fff;
  @media (min-width: 40rem) {
    padding: 4rem 4rem 0 4rem;
  }
}
.button_link {
  background-color: #f6a607;
  border-radius: 1.6rem;
  color: #fff;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button_title {
  padding-top: 2rem;
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #808080;
}
.br_mobile {
  display: inline;
  @media (min-width: 40rem) {
    display: none;
  }
}
.button_chart {
  margin-top: 2rem;
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 130%;
  letter-spacing: -0.025em;
  text-decoration-line: underline;
  color: #808080;
  text-underline-offset: 5px;
}
.label {
  display: flex;
  padding-top: 2rem;
}
.labe_icon {
  margin-right: 2rem;
}
.label_text {
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #282828;
}
.calc_tab {
  padding-top: 1.6rem;
}
.independently {
  margin-top: 4rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 88%;
  text-align: center;
  color: #282828;
}
.private {
  padding-top: 2rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 88%;
  text-align: center;
  color: #f6a607;
}
.phone {
  padding-top: 1.6rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 88%;
  text-align: center;
  color: #282828;
}
.free {
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.025em;
  color: #808080;
}
</style>
