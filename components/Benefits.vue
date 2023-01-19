<template>
  <div :class="$style.root">
    <div :class="$style.girl">
      <img src="/girl.png" alt="Наличные быстро" :class="$style.girl_img" />
      <img src="/girl_big.png" alt="Наличные быстро" :class="$style.girl_img_big" />
    </div> 
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
  background: #41c24c;
  padding-top: 40rem;
  @media (min-width: 40rem) {
    padding-top: 12rem;
  }
  @media (min-width: 60rem) {
    padding-top: 22rem;
  }
  @media (min-width: 75rem) {
    padding-top: 14rem;
  }
  @media (min-width: 90rem) {
    padding-top: 18rem;
  }
}
.girl {
  position: absolute;
  z-index: 1;
}

.girl_img {
  width: 26rem;
  position: relative;
  top: -32rem;
  @media (min-width: 18.75rem) {
    width: 30rem;
    top: -36rem;
  }
  @media (min-width: 40rem) {
    top: -28rem;
    right: -16rem;
  }
  @media (min-width: 60rem) {
    display: none;
  }
}
.girl_img_big {
  display: none;
  position: relative;
  @media (min-width: 60rem) {
    display: inline;
    top: -42rem;
    right: -24rem;
  }
  @media (min-width: 75rem) {
    top: -52rem;
    right: -32rem;    
  }
  @media (min-width: 90rem) {
    top: -54rem;
    right: -24rem;   
  }  
}
.benefits {
  z-index: 2;
  width: -webkit-fill-available;
  background-color: #027f25;
  color: #ffffff;
  border-radius: 2rem;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem 0;
  @media (min-width: 40rem) {
    margin: 0 4rem;
    padding: 3rem 1.8rem;
    gap: 2.4rem 2.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    border-radius: 3.4rem;
  }
  @media (min-width: 60rem) {
    padding: 4rem 5rem;
    gap: 5.2rem 4rem;
  }
  @media (min-width: 75rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0;
  } 
}
.benefit_first {
  @media (min-width: 75rem) {
    border-right: #39af5c 0.1rem solid;
    padding-right: 1.8rem;
  }  
  @media (min-width: 90rem) {
    border-right: #39af5c 0.1rem solid;
    padding-right: 3rem;
  }
}
.benefit {
  @media (min-width: 75rem) {
    border-right: #39af5c 0.1rem solid;
    padding: 0 1.8rem;
  }  
  @media (min-width: 90rem) {
    border-right: #39af5c 0.1rem solid;
    padding: 0 3rem;
  }
}
.benefit_last {
  @media (min-width: 75rem) {
    padding-left: 1.8rem;
  }  
  @media (min-width: 90rem) {
    padding-left: 3rem;
  }
}
.title {
  margin: 0;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 7rem;
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
  @media (min-width: 18.75rem) {
    display: inline;
  }
}
</style>
