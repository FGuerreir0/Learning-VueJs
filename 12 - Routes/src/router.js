import Vue from 'vue';
import VueRouter from 'vue-router';

import Contacts from './views/Contacts/Contacts.vue';
import Home from './views/Home.vue';
import ContactDetails from './views/Contacts/ContactDetails.vue';

import HomeContacts from './views/Contacts/HomeContacts.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/contacts',
      component: Contacts,
      children: [
        //ROTA NOMEADA TEM DE SE COLOCAR PARAMETRO NAME
        { path: ':id', component: ContactDetails, name: 'contactRoute' },
        { path: '', component: HomeContacts },
      ],
    },

    { path: '/', component: Home },
  ],
});
