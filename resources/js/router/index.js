import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@pages/HomePage/index.vue';
import TemplateSelection from '@pages/TemplateSelection/index.vue';

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/template-selection', name: 'templateSelection', component: TemplateSelection },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});