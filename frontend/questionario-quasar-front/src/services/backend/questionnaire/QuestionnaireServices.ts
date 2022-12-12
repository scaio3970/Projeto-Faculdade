import axiosInstance from '../axiosInstance';

import {
  QuestionnaireAnswersType,
  QuestionnaireQuestionsType,
} from 'src/components/questionnaire/QuestionnaireModels';
import { createConstructor } from 'src/services/abstract/createConstructor';
import { fetchByIdConstructor } from 'src/services/abstract/fetchByIdConstructor';

function serviceCreator() {
  return {
    ...createConstructor<QuestionnaireAnswersType, unknown>(axiosInstance, {
      contextPath: 'v1/questionnaire',
      storeAuthorization: true,
    }),
    ...fetchByIdConstructor<QuestionnaireQuestionsType>(axiosInstance, {
      contextPath: 'v1/questionnaire/:id',
      storeAuthorization: true,
    }),
  };
}

const QuestionnaireServices = serviceCreator();
export default QuestionnaireServices;
