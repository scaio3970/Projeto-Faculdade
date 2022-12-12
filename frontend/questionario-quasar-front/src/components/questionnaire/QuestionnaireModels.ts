import { z } from 'zod';
import { MultipleChoiceQuestion } from './multipleChoiceQuestions/MultipleChoiceQuestionsModels';
const QuestionnaireQuestions = z.object({
  id: z.string(),
  title: z.string(),
  questions: z.array(MultipleChoiceQuestion),
});

const QuestionnaireAnswers = z.object({
  answers: z.array(
    z.object({
      id: z.string(),
      answer: z.string(),
    })
  ),
});

export type QuestionnaireQuestionsType = z.infer<typeof QuestionnaireQuestions>;
export type QuestionnaireAnswersType = z.infer<typeof QuestionnaireAnswers>;
