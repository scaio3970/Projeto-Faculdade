import { RouteRecordRaw } from 'vue-router';
import questionnaire from './questionnaire';
const routes: RouteRecordRaw[] = [
  {
    path: 'u',
    component: () => import('layouts/MainLayout.vue'),
    children: [...questionnaire],
  },
];

export default routes;
