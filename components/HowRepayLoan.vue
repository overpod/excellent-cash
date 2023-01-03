<template>
  <div :class="$style.root">
    <h2 :class="$style.title">Как погаcить займ?</h2>
    <div :class="$style.main">
      <div :class="$style.content">
        <div :class="$style.top">
          <img :class="$style.main_icon" src="/people.svg" alt="Личный кабинет наличных" />
          <div :class="$style.header_title">Личный кабинет наличных»</div>
        </div>
        <div :class="$style.main_text">
          Авторизуйтесь
          <a
            :class="$style.link_main"
            link
            rel="stylesheet"
            href="https://lk.otlnal.ru/login/"
            target="_blank"
          >
            на сайте</a
          >
          или
          <a
            :class="$style.link_main"
            link
            rel="stylesheet"
            href="https://lk.otlnal.ru/login/"
            target="_blank"
            >в мобильном приложении</a
          >и проведите платеж со своей карты платежной системы Visa,MasterCard или МИР.
        </div>
      </div>
      <div :class="$style.content">
        <div :class="$style.top">
          <img :class="$style.main_icon" src="/corona.svg" alt="Платёжный сервис «Золотая корона»" />
          <div :class="$style.header_title">Платёжный сервис «Золотая корона»</div>
        </div>
        <div :class="$style.main_text">
          Перейдите
          <a
            :class="$style.link_main"
            link
            rel="stylesheet"
            href="https://koronapay.com/repayment/offline/how-to-make/"
            target="_blank"
          >
            по ссылке</a
          >
          и введите в строке поиска нужное юридическое лицо, указанное в вашем договоре
          займа. Выберите подходящий способ погашения и произведите платеж.
        </div>
      </div>
      <div :class="$style.content">
        <div :class="$style.top">
          <img :class="$style.main_icon" src="/contract.svg" alt="По реквизитам договора займа" />
          <div :class="$style.header_title">По реквизитам договора займа</div>
        </div>
        <div :class="$style.main_text">
          В договоре займа указаны реквизиты юридического лица, на счет которого вы можете
          перевести денежные средства в счет погашения долга. Отправьте платеж по
          реквизитам в отделении банка, либо в банковком мобильном приложении.
        </div>
      </div>
      <div :class="$style.content">
        <div :class="$style.top">
          <img
            :class="$style.main_icon"
            src="/crown.svg"
            alt="Банковская карта любого банка"
          />
          <div :class="$style.header_title">Банковская карта любого банка</div>
        </div>
        <div :class="$style.main_text">
          Если вы знаете, что можете забыть внести платеж по займу в нужную дату,
          пополните счет карты, указанной в договоре, и начиная с первого дня просрочки
          средства будут автоматически с нее списаны.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  padding: 4rem 2rem;
  background-color: #fff;
  @media (min-width: 40rem) {
    padding: 6rem 4rem;
  }
  @media (min-width: 60rem) {
    padding: 9rem 4rem;
  }
  @media (min-width: 75rem) {
    padding: 8rem 6rem;
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
  color: #282828;
  background-color: #fff;
  @media (min-width: 40rem) {
    font-size: 3.6rem;
  }
  @media (min-width: 60rem) {
    font-size: 4.6rem;
  }
  @media (min-width: 75rem) {
    font-size: 5.2rem;
  }
}
.main {
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  @media (min-width: 40rem) {
    padding-top: 2.4rem;
  }
  @media (min-width: 60rem) {
    padding-top: 5rem;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (min-width: 75rem) {
    padding-top: 6rem;
  }
}

.content {
  background-color: #f6f6f6;
  border-radius: 3rem;
  padding: 2rem 1.6rem;
  @media (min-width: 40rem) {
    padding: 3rem 4rem;
  }
  @media (min-width: 60rem) {
    padding: 4rem;
  }
}

.top {
  display: flex;
  align-items: center;
}

.main_icon {
  width: 5rem;
  padding-right: 1rem;
  @media (min-width: 40rem) {
    width: 7rem;
  }
  @media (min-width: 60rem) {
    padding-right: 2rem;
  }
  @media (min-width: 75rem) {
    width: 9rem;
  }
}

.header_title {
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 100%;
  color: #282828;
  @media (min-width: 40rem) {
    font-size: 2.6rem;
  }
  @media (min-width: 60rem) {
    font-size: 3.2rem;
  }
}

.main_text {
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 150%;
  color: #282828;
  padding-top: 1rem;
  @media (min-width: 40rem) {
    padding-top: 2.8rem;
    font-size: 1.8rem;
  }
  @media (min-width: 60rem) {
    padding-top: 2rem;
  }
  @media (min-width: 75rem) {
    padding-top: 3.2rem;
    font-size: 2.2rem;
  }
}

.link_main {
  text-decoration-line: underline;
  color: #282828;
}
</style>
