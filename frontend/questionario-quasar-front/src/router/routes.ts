import { RouteRecordRaw } from 'vue-router';
import u from './u';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/route/RouteBlank.vue'),
    children: [...u, { path: '', redirect: '/u/home' }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
