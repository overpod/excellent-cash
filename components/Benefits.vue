<template>
  <div :class="$style.root">
    <div :class="$style.girl"/>
    <div :class="$style.benefits">
      <div :class="$style.benefit_first">
        <div :class="$style.title_wrap">
          <img
            src="/free.svg"
            alt="Отличные наличные бесплатно"
            :class="$style.benefit_icon"
          />
          <h2 :class="$style.title">Бесплатно</h2>
        </div>
        <div :class="$style.text">Выдаем займы на карту под 0% до 7 дней</div>
      </div>
      <div :class="$style.benefit">
        <div :class="$style.title_wrap">
          <img
            src="/done.svg"
            alt="Отличные наличные просто"
            :class="$style.benefit_icon"
          />
          <h2 :class="$style.title">Просто</h2>
        </div>
        <div :class="$style.text">Для получения займа нужен паспорт, телефон и карта</div>
      </div>
      <div :class="$style.benefit">
        <div :class="$style.title_wrap">
          <img
            src="/timer.svg"
            alt="Отличные наличные быстро"
            :class="$style.benefit_icon"
          />
          <h2 :class="$style.title">Быстро</h2>
        </div>
        <div :class="$style.text">
          Одобряем за 15 минут и сразу отправляем деньги на карту
        </div>
      </div>
      <div :class="$style.benefit_last">
        <div :class="$style.title_wrap">
          <img
            src="/progress.svg"
            alt="Отличные наличные круглосуточно"
            :class="$style.benefit_icon"
          />
          <h2 :class="$style.title">Круглосуточно</h2>
        </div>
        <div :class="$style.text">Работаем для вас 24/7 без праздников и выходных</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 48.6rem;
  @media (min-width: 52.125rem) {
    padding-top: 14rem;
  }  
}
.girl {
  position: absolute;
  width: 34.1rem;
  height: 45.1rem;
  background-image: url("/girl.png");
  background-repeat: no-repeat, no-repeat;
  top: 4rem;
  @media (min-width: 52.125rem) {
    top: -20rem;
    right: 0;
  }
  @media (min-width: 90rem) {
    width: 45.8rem;
    height: 54rem;
    background-image: url("/girl_big.png");
    top: -36rem;
    right: 6rem;    
  }
}
.benefits {
  z-index: 2;
  width: -webkit-fill-available;
  background-color: #027f25;
  color: #ffffff;
  border-radius: 2rem;
  padding: 0.8rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem 0;
  @media (min-width: 24.125rem) {
    padding: 3rem;
  }
  @media (min-width: 52.125rem) {
    padding: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2.6rem;
  }
  @media (min-width: 90rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0;
  }
}
.benefit_first {
  @media (min-width: 90rem) {
    border-right: #39AF5C 0.1rem solid;
    padding-right: 3rem;
  }  
}
.benefit {
  @media (min-width: 90rem) {
    border-right: #39AF5C 0.1rem solid;
    padding: 0 3rem;
  }
}
.benefit_last {
  @media (min-width: 90rem) {
    padding-left: 3rem;
  }  
}
.title {
  margin: 0;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 70rem;
  font-size: 3.2rem;
  line-height: 100%;
}
.text {
  padding-top: 0.5rem;
  opacity: 0.7;
}
.title_wrap {
  display: flex;
  align-items: center;
}
.benefit_icon {
  margin-right: 1rem;

  display: none;
  @media (min-width: 21.5rem) {
    display: inline;
  }
}
</style>
