<template>
  <div :class="$style.root">
    <div :class="$style.title_wrap">
      <h2 :class="$style.title">Выберите сумму<br />и срок займа</h2>
    </div>
    <div :class="$style.select_wrap" v-click-away="onClickAway">
      <div :class="$style.select" @click="clickSelect">
        {{ curentTab.value }}
        <img src="/down.svg" alt="Выбрать срок кредита" :class="$style.arrow" />
      </div>
      <Transition name="fade">
        <div v-show="showSelect" :class="$style.tabs_wrap">
          <div :class="$style.tabs">
            <div
              :class="[$style.tab, index === 1 && $style.tab_active]"
              v-for="(tab, index) in selectTabs"
              @click="clickSelectTab(tab)"
            >
              {{ tab.value }}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
  <template v-if="curentTab.id !== 4">
    <div :class="$style.calc">
      <div :class="$style.calc_title">{{ param.sum.title }}</div>
      <div :class="$style.calc_value">{{ formattedSum(param.sum.value) }} ₽</div>
      <Slider
        v-model="param.sum.value"
        :min="param.sum.min"
        :max="param.sum.max"
        :step="param.sum.step"
        :tooltips="false"
        :class="$style.slider"
        @slide="(value:number)=>onSliderChange(value,'sum')"
      />
      <div :class="$style.min_max">
        <span>{{ formattedSum(param.sum.min) }} ₽</span>
        <span>{{ formattedSum(param.sum.max) }} ₽</span>
      </div>
    </div>
    <div :class="$style.calc">
      <div :class="$style.calc_title">{{ param.time.title }}</div>
      <div :class="$style.calc_value">
        {{ formattedPeriod(param.time.value, curentTab.id === 3) }}
      </div>
      <Slider
        v-model="param.time.value"
        :min="param.time.min"
        :max="param.time.max"
        :step="param.time.step"
        :tooltips="false"
        :class="$style.slider"
        @slide="(value:number)=>onSliderChange(value,'time')"
      />
      <div :class="$style.min_max">
        <span>{{ formattedPeriod(param.time.min, curentTab.id === 3) }}</span>
        <span>{{ formattedPeriod(param.time.max, curentTab.id === 3) }}</span>
      </div>
    </div>
    <div :class="$style.info">
      <span :class="$style.info_label">Вы получаете</span>
      <span :class="$style.info_value"
        >{{ formattedSum(param.sum.value) }} ₽ сегодня в {{ time }}</span
      >
      <span :class="[$style.info_label, $style.two_info_label]">Вы возвращаете</span>
      <span :class="$style.info_value"
        >{{ formattedSum(calculateTotal(param.sum.value, param.time.value)) }} ₽ до
        {{ resultDate }}</span
      >
    </div>
  </template>
  <template v-if="curentTab.id === 2"> TAB 2 </template>
  <template v-if="curentTab.id === 3"> TAB 3 </template>
  <template v-if="curentTab.id === 4"> TAB 4 </template>
</template>

<script lang="ts">
import { defineComponent, computed, nextTick } from 'vue';
import Slider from '@vueform/slider';
import { directive } from 'vue3-click-away';

import { getTime } from '../utils';

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
    const tabs = [
      {
        id: 1,
        value: 'Первый займ под 0%',
      },
      {
        id: 2,
        value: 'До 30 000 ₽ до 30 дней',
      },
      {
        id: 3,
        value: 'До 60 000 ₽ до 6 месяцев',
      },
      {
        id: 4,
        value: 'Действующему клиенту',
      },
    ];

    const param = ref({
      sum: {
        title: 'Желаемая сумма',
        value: 10000,
        min: 1000,
        max: 30000,
        step: 1000,
      },
      time: {
        title: 'Срок займа',
        value: 7,
        min: 1,
        max: 7,
        step: 1,
      },
    });

    const curentTab = ref(tabs[0]);

    const clickSelectTab = (tab: { id: number; value: string }) => {
      console.log(tab.id);
      switch (tab.id) {
        case 1:
          param.value = {
            sum: {
              title: 'Желаемая сумма',
              value: 10000,
              min: 1000,
              max: 30000,
              step: 1000,
            },
            time: {
              title: 'Срок займа',
              value: 7,
              min: 1,
              max: 7,
              step: 1,
            },
          };
          break;
        case 2:
          param.value = {
            sum: {
              title: 'Желаемая сумма',
              value: 15000,
              min: 1000,
              max: 30000,
              step: 1000,
            },
            time: {
              title: 'Срок займа',
              value: 14,
              min: 5,
              max: 30,
              step: 1,
            },
          };
          break;
        case 3:
          param.value = {
            sum: {
              title: 'Желаемая сумма',
              value: 60000,
              min: 40000,
              max: 60000,
              step: 1000,
            },
            time: {
              title: 'Срок займа',
              value: 16,
              min: 12,
              max: 24,
              step: 4,
            },
          };
          break;
      }
      curentTab.value = tab;
      showSelect.value = false;
    };

    const selectTabs = computed(() =>
      tabs.filter((tab) => tab.id !== curentTab.value.id)
    );

    const showSelect = ref(false);

    const onClickAway = () => {
      showSelect.value = false;
    };

    const clickSelect = () => {
      showSelect.value = !showSelect.value;
    };

    const total = computed(() => {
      const freeDays = 7;
      let sum = 0;
      const percent = 358;
      if (param.value.time.value > 30) {
        if (param.value.time.value <= freeDays) {
          sum = param.value.sum.value;
        } else {
          sum =
            param.value.sum.value +
            (param.value.sum.value / 100) * percent * param.value.time.value;
        }
      }
      return sum;
    });

    const calculateTotal = (value: number, period: number) => {
      const sum = 0;
      const percent = 358;
      /*
        if(this.period > 30) {
            var weeks = this.period / 7;
            sum = parseInt((this.sum * percent / (365 / 15) / 100) / ( 1 - (1 + percent / (365 / 15) / 100) ** (-(weeks/4) * 2)));
        } else {
            if (this.period <= this.freeDays) {
                sum = this.sum;
            } else {
                sum = this.sum + ( (this.sum/100*this.percent) * this.period);
            }
        }
        */
      const res = sum + (sum / 100) * percent * period;
      return res;
    };

    const getResultDate = (period: number) => {
      let resultDate = new Date();
      resultDate.setTime(resultDate.valueOf() + period * 86400000);
      return resultDate.toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
    };

    const resultDate = computed(() => getResultDate(param.value.time.value));

    const formattedSum = (value: number) => new Intl.NumberFormat('ru-RU').format(value);

    const onSliderChange = (value: number, section: 'sum' | 'time') => {
      param.value[section].value = value;
    };

    const plural = (value: number, forms: string[]) => {
      const plural =
        value % 10 === 1 && value % 100 !== 11
          ? 0
          : value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)
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

    const formattedPeriod = (number: number, isWeek: boolean | undefined = true) =>
      isWeek
        ? `${number} ${plural(number, ['неделя', 'недели', 'недель'])}`
        : `${number} ${plural(number, ['день', 'дня', 'дней'])}`;

    return {
      curentTab,
      selectTabs,
      showSelect,
      time,
      param,
      resultDate,
      formattedSum,
      onSliderChange,
      formattedPeriod,
      onClickAway,
      clickSelect,
      clickSelectTab,
      calculateTotal,
    };
  },
});
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss" module>
.root {
  background-color: #41c24c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 6rem 3.6rem 3rem 3.6rem;
  @media (min-width: 42.8rem) {
    padding: 0 3.6rem;
  }
  @media (min-width: 83.4rem) {
    padding: 0 10rem;
  }
  color: #fff;
}
.title {
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 100%;
  margin: 0;
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
  @media (min-width: 83.4rem) {
    padding: 0 10rem;
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
  display: flex;
  flex-direction: column;
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
</style>
