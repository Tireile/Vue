import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOqupBGy0lQ3GTIZoR4EAKfAjh2hDS6Sc",
  authDomain: "vue-17dbe.firebaseapp.com",
  projectId: "vue-17dbe",
  storageBucket: "vue-17dbe.appspot.com",
  messagingSenderId: "747631688478",
  appId: "1:747631688478:web:fb0656969a6ca9c7a8270f",
  measurementId: "G-GBY8SQY4DV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
