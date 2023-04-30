import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewContact from "../views/NewContact";
import UpdateContact from "../views/UpdateContact";


const routes = [
  {
    path: '/',
    name: 'Phone Book',
    component: Home,
    meta: {
      protected: 'none'
    }
  },
  {
    path: '/add-contact',
    name: 'Add Contact',
    component: NewContact,
    meta: {
      protected: 'none'
    }
  },
  {
    path: '/update-contact/:contactId',
    name: 'Update Contact',
    component: UpdateContact,
    meta: {
      protected: 'none'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router
