<template>
  <div :class="$style.root">
    <h2 :class="$style.header">Часто задаваемые вопросы</h2>
    <div :class="$style.content">
      <div
        v-for="(answer, index) in answers"
        :class="[$style.card, index === 0 && $style.card_first]"
      >
        <div :class="$style.question" @click="changeQuestion(answer)">
          <h3 :class="$style.question_header">{{ answer.question }}</h3>
          <img
            src="/up-light.svg"
            alt="Ответ"
            :class="[curentAnswer?.id === answer.id && $style.arrow_acrive]"
          />
        </div>
        <div
          :class="[
            $style.answer,
            answers[answers.length - 1].id === answer.id && $style.answer_last,
            curentAnswer?.id === answer.id && $style.answer_active,
          ]"
        >
          {{ answer.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FAQ',
  setup() {
    const answers = [
      {
        id: 1,
        question: 'Кто может оформить займ?',
        answer:
          'Получить займ в компании Отличные Наличные могут граждане РФ старше 18 лет.',
      },
      {
        id: 2,
        question: 'Что необходимо для оформления займа?',
        answer: 'Вам понадобится только паспорт.',
      },
      {
        id: 3,
        question: 'Я оформляю займ первый раз, на какую сумму я могу рассчитывать?',
        answer:
          'Новым клиентам мы предлагаем сумму до 10 000 рублей. Если вы уже брали микрозайм и выплатили его в срок, вам будет доступна сумма до 30 000 рублей. Точную одобренную сумму микрокредита вы можете уточнить при оформлении заявки.',
      },
      {
        id: 4,
        question: 'Какие факторы влияют на одобрение заявки и сумму, которая одобрена?',
        answer:
          'Основной фактор – ваша кредитная история. Постоянным добросовестным заемщикам мы выдаем максимальные суммы практически моментально.',
      },
      {
        id: 5,
        question: 'Как быстро будет рассмотрена моя заявка на заем?',
        answer:
          'Результат отразится в личном кабинете примерно через минуту после завершения оформления. Лишь в некоторых случаях нам требуется дополнительное время, чтобы принять решение. Если произошла задержка, вы можете задать вопрос из личного кабинета, указав тему сообщения «Скорость рассмотрения заявки».',
      },
    ];
    const curentAnswer = ref<{
      id: number;
      question: string;
      answer: string;
    } | null>(null);

    const changeQuestion = (answers: {
      id: number;
      question: string;
      answer: string;
    }) => {
      if (curentAnswer.value?.id === answers.id) {
        curentAnswer.value = null;
        return;
      }
      curentAnswer.value = answers;
    };

    return {
      answers,
      curentAnswer,
      changeQuestion,
    };
  },
});
</script>

<style lang="scss" module>
.root {
  background-color: #f6f6f6;
  color: #282828;
  padding: 2.2rem 2rem;
  @media (min-width: 40rem) {
    padding: 6rem 4rem;
  }
  @media (min-width: 60rem) {
    padding: 9rem 4rem;
  }  
}
.header {
  font-family: 'Circe', arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 100%;
  text-align: center;
  margin: 0;
  @media (min-width: 40rem) {
    font-size: 3.6rem;
  }
  @media (min-width: 60rem) {
    font-size: 5.2rem;
  }  
}
.content {
  margin-top: 3rem;
  background: #ffffff;
  border-radius: 2rem;
  padding: 2rem 1.6rem;
  @media (min-width: 40rem) {
    margin-top: 4rem;
    padding: 4.2rem 4rem;
  }
  @media (min-width: 60rem) {
    margin-top: 5rem;
  }
}
.card {
  padding-top: 2rem;
  @media (min-width: 40rem) {
    padding-top: 3rem;
  }
  @media (min-width: 60rem) {
    padding-top: 4rem;
  }  
}
.card_first {
  padding-top: 0;
}
.question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.question_header {
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 100%;
  margin: 0;
  @media (min-width: 40rem) {
    font-size: 2.6rem;
  }
  @media (min-width: 60rem) {
    font-size: 2.8rem;
  }  
}
.answer {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 150%;
  letter-spacing: -0.025em;
  padding: 2rem 0;
  border-bottom: 1px solid #808080;
  display: none;
  @media (min-width: 40rem) {
    font-size: 1.8rem;
  }
  @media (min-width: 60rem) {
    font-size: 2rem;
  }  
}
.answer_active {
  display: block;
}
.answer_last {
  border-bottom: none;
}
.arrow_acrive {
  transform: rotate(180deg);
}
</style>
