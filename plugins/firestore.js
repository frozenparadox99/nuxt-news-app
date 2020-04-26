import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: 'AIzaSyDyJmbUMwZUWbeA9XaU00WPOvq4KZnOzY4',
    authDomain: 'nuxt-news-feed-676c3.firebaseapp.com',
    databaseURL: 'https://nuxt-news-feed-676c3.firebaseio.com',
    projectId: 'nuxt-news-feed-676c3',
    storageBucket: 'nuxt-news-feed-676c3.appspot.com',
    messagingSenderId: '152093003141',
    appId: '1:152093003141:web:aa97d8a6d14379676388ec'
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  firebase.firestore().settings({
    timestampsInSnapshots: true
  })
}

const db = firebase.firestore()

export default db
