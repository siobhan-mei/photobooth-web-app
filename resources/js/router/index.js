import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@pages/HomePage/index.vue';
import TemplateSelection from '@pages/TemplateSelection/index.vue';
import PhotoEditor from '@pages/PhotoEditor/index.vue';

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/template-selection', name: 'templateSelection', component: TemplateSelection },
    { path: '/photo-editor', name: 'photoEditor', component: PhotoEditor },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});