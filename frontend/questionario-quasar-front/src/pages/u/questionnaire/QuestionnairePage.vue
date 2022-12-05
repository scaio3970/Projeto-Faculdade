<template>
  <q-page padding>
    <q-card bordered class="my-card" v-if="!isLoading">
      <q-card-section>
        <div class="text-h6">{{ getQuestionnaireTitle }}</div>
      </q-card-section>

      <q-card-section v-for="q in state.questions" :key="q.id">
        <multiple-choice-question
          :q="q"
          @answer-update="(event) => onAnswerUpdate(q, event)"
        ></multiple-choice-question>
      </q-card-section>
      <q-separator inset />
      <q-card-actions>
        <q-btn class="q-mr-lg" color="primary" @click="actionSave">Send</q-btn>
        <q-btn flat color="negative" @click="actionCancel">Cancel</q-btn>
      </q-card-actions>
    </q-card>
    {{ answerModel }}
  </q-page>
</template>

<script setup lang="ts">
import { useAsyncState } from '@vueuse/core';
import {
  QBtn,
  QCard,
  QCardActions,
  QCardSection,
  QPage,
  QSeparator,
} from 'quasar';
import MultipleChoiceQuestion from 'src/components/questionnaire/multipleChoiceQuestions/MultipleChoiceQuestions.vue';
import { MultipleChoiceAnswerType } from 'src/components/questionnaire/multipleChoiceQuestions/MultipleChoiceQuestionsModels';
import {
  QuestionnaireAnswersType,
  QuestionnaireQuestionsType,
} from 'src/components/questionnaire/QuestionnaireModels';
import service from 'src/services/backend/questionnaire/QuestionnaireServices';
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const initialState = () => {
  return { answers: [] };
};
const answerModel: QuestionnaireAnswersType = reactive(initialState());

const { isLoading, state } = useAsyncState<QuestionnaireQuestionsType>(
  () =>
    service
      .fetchById({ id: route.params.id })
      .then((t: QuestionnaireQuestionsType) => Object.assign(state, t)),
  {
    id: '',
    title: '',
    questions: [
      {
        id: '1',
        question: 'a',
        answers: [
          { id: '1', letter: 'A', answer: 'AAA' },
          { id: '2', letter: 'B', answer: 'BBB' },
          { id: '3', letter: 'C', answer: 'CCC' },
        ],
      },
      {
        id: '2',
        question: 'a',
        answers: [
          { id: '1', letter: 'A', answer: 'AAA' },
          { id: '2', letter: 'B', answer: 'BBB' },
          { id: '3', letter: 'C', answer: 'CCC' },
        ],
      },
    ],
  }
);

const onAnswerUpdate = (answer: MultipleChoiceAnswerType, event: string) => {
  // let indexOf = answerModel.answers.indexOf
  let index = answerModel.answers.findIndex((item) => item.id === answer.id);
  if (index >= 0) {
    answerModel.answers[index].answer = event;
  } else {
    answerModel.answers.push({
      id: answer.id,
      answer: event,
    } as MultipleChoiceAnswerType);
  }
};

const actionCancel = () => {
  Object.assign(answerModel, initialState());
};
const actionSave = async () => {
  return Promise.resolve(() => {
    console.log('update loading');
  })
    .then(() => service.create({ model: answerModel }))
    .catch(() => {
      console.error('errors');
    })
    .finally(() => {
      console.log('update loading');
    });
};

const getQuestionnaireTitle = computed(() => {
  return `${state.value.id}) ${state.value.title})`;
});
</script>
