<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <div class="text-h6">{{ getTitle }}</div>
    </q-card-section>

    <q-card-section>
      <q-radio
        v-for="a in props.q.answers"
        v-model="answerId"
        :val="a.id"
        :label="getAnswerLabel(a)"
        :key="a.id"
        @update:model-value="$emit('answer-update', $event)"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { QCard, QCardSection, QRadio } from 'quasar';
import { PropType, ref } from 'vue';
import {
  MultipleChoiceAnswerType,
  MultipleChoiceQuestionType,
} from './MultipleChoiceQuestionsModelsModels';
const answerId = ref('');

const props = defineProps({
  q: {
    type: Object as PropType<MultipleChoiceQuestionType[]>,
    required: true,
  },
});

const getAnswerLabel = (answer: MultipleChoiceAnswerType): string => {
  const result = `${answer.letter} - ${answer.answer}`;
  return result;
};
const getTitle = computed(() => {
  const result = `${props.q.id}) ${props.q.question}`;
  return result;
});

defineEmits(['answer-update']);
</script>
