import { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: 'questionnaire',
    component: () => import('layouts/route/RouteBlank.vue'),
    children: [
      {
        path: ':id',
        name: '#u_questionnaire_page',
        component: () =>
          import('src/pages/u/questionnaire/QuestionnairePage.vue'),
      },
    ],
  },
];

export default routes;
