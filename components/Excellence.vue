<template>
  <div>
    <div :class="$style.title_mobile">
      <div>Преимущества</div>
      <div>онлайн-платформы</div>
      <div>«Отличные Наличные»</div>
    </div>
    <div :class="$style.title">
      <div>Преимущества онлайн-платформы</div>
      <div>«Отличные Наличные»</div>
    </div>
    <div :class="$style.root">
      <div :class="$style.block">
        <div :class="$style.header">
          <img
            src="/crown.svg"
            alt="Выдаем деньги на любую карту"
            :class="$style.header_icon"
          />
          <div :class="$style.header_title">Выдаем деньги на любую карту</div>
        </div>
        <div :class="$style.body">
          Переводим деньги на карту любого банка платёжных систем Visa, Mastercard, Мир, а
          также на платёжную карту нашего сервиса «Отличная Карта».
        </div>
      </div>
      <div :class="$style.block">
        <div :class="$style.header">
          <img
            src="/internet.svg"
            alt="Работаем везде, где есть интернет"
            :class="$style.header_icon"
          />
          <div :class="$style.header_title">Работаем везде, где есть интернет</div>
        </div>
        <div :class="$style.body">
          Получайте и гасите займ онлайн. Сервис доступен из любого города или населённого
          пункта России, с телефона, планшета, ноутбука или стационарного компьютера.
        </div>
      </div>
      <div :class="$style.block">
        <div :class="$style.header">
          <img
            src="/doc.svg"
            alt="Работаем под контролем ЦБ РФ"
            :class="$style.header_icon"
          />
          <div :class="$style.header_title">Работаем под контролем ЦБ РФ</div>
        </div>
        <div :class="$style.body">
          Микрокредитная компания осуществляет свою деятельность под контролем
          Центрального банка РФ и находится в реестре микрофинансовых организаций.
        </div>
      </div>
      <div :class="$style.block">
        <div :class="$style.header">
          <img
            src="/lock.svg"
            alt="Обеспечиваем защиту ваших данных"
            :class="$style.header_icon"
          />
          <div :class="$style.header_title">Обеспечиваем защиту ваших данных</div>
        </div>
        <div :class="$style.body">
          Ваши персональные данные и операции с картой надежно защищены в соответствии с
          законодательством РФ. Не передаем ваши данные третьим лицам без вашего согласия.
        </div>
      </div>
      <div :class="$style.block">
        <div :class="$style.header">
          <img
            src="/done-one.svg"
            alt="Предлагаем займ в любом случае"
            :class="$style.header_icon"
          />
          <div :class="$style.header_title">Предлагаем займ в любом случае</div>
        </div>
        <div :class="$style.body">
          Если мы не сможем выдать займ или вам не подойдут условия, тогда мы предложим
          вам другую компанию. На нашей онлайн-платформе вы найдете предложение с
          вероятностью 100%.
        </div>
      </div>
      <div :class="$style.block">
        <div :class="$style.header">
          <img
            src="/doc-del.svg"
            alt="Не требуем справок о доходах"
            :class="$style.header_icon"
          />
          <div :class="$style.header_title">Не требуем справок о доходах</div>
        </div>
        <div :class="$style.body">
          Для принятия решения о выдаче займа нам не нужны справки, подтверждающие ваш
          доход, иные дополнительные документы или поручители. Нужен только паспорт
          гражданина РФ.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.title_mobile {
  padding: 4rem 2rem 0 2rem;
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 100%;
  text-align: center;
  color: #444247;
  @media (min-width: 40rem) {
    padding: 6rem 4rem 0 4rem;
    font-size: 3.6rem;
  }
  @media (min-width: 60rem) {
    display: none;
  }
}
.title {
  display: none;
  @media (min-width: 60rem) {
    padding: 9rem 4rem 0 4rem;
    font-family: 'Circe', arial, sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    color: #444247;
    display: block;
    font-size: 3.6rem;
  }
  @media (min-width: 75rem) {
    font-size: 5.2rem;
    padding: 10rem 6rem 0 6rem;
  }
}
.root {
  padding: 3rem 2rem 4rem 2rem;
  background-color: #f6f6f6;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  @media (min-width: 40rem) {
    padding: 4rem;
  }
  @media (min-width: 60rem) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
  @media (min-width: 75rem) {
    padding: 6rem;
  }
}
.block {
  background: #ffffff;
  border-radius: 3rem;
  padding: 2rem 1.6rem;
  @media (min-width: 40rem) {
    padding: 3rem 4rem;
  }
}
.header {
  display: flex;
  align-items: center;
}
.header_icon {
  width: 5rem;
  padding-right: 1rem;
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
.body {
  padding-top: 1.6rem;
  font-family: 'Inter', arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #282828;
  @media (min-width: 40rem) {
    font-size: 1.8rem;
  }
}
</style>
