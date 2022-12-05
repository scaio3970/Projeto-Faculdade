<template>
  <q-page padding>
    <q-card bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Questinario {{ questionnaireId }}</div>
      </q-card-section>

      <q-card-section v-for="q in questionsList" :key="q.id">
        <multiple-choice-question
          :q="q"
          @answer-update="(event) => onAnswerUpdate(q, event)"
        ></multiple-choice-question>
      </q-card-section>
      {{ answerModel }}
      <q-separator inset />

      <!-- <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section> -->
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { QPage, QCard, QCardSection, QSeparator } from 'quasar';
import {
  MultipleChoiceAnswerType,
  MultipleChoiceQuestionType,
} from 'src/components/questionnaire/multipleChoiceQuestions/MultipleChoiceQuestions';
import MultipleChoiceQuestion from 'src/components/questionnaire/multipleChoiceQuestions/MultipleChoiceQuestions.vue';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
// const router = useRouter();
const questionnaireId = route.params.id;
const questionsList: MultipleChoiceQuestionType[] = [
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
];
const answerModel = reactive({
  answers: [] as MultipleChoiceAnswerType[],
  // answers: [
  //   {
  //     id: '1',
  //     answer: '',
  //   },
  // ],
});

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
</script>
