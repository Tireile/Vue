import firebase from "firebase/app";

/* eslint-disable no-unused-vars */
export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
