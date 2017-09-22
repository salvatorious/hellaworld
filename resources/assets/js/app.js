/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Cleave from 'vue-cleave';
require('cleave.js/dist/addons/cleave-phone.us');

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('login-box', require('./components/LoginBox.vue'));
Vue.component('dinger', require('./components/Dinger.vue'));
Vue.component('cleave', Cleave);

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hella world, yo.'
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse();
        }
    },
    methods: {
        login() {
            this.loggedIn = true;
        },
        logout() {
            this.loggedIn = false;
        }
    }
});