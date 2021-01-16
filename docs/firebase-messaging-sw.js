
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyD-sHjvR3PkMiatG0fmGre1fxnJidcGEvY",
    authDomain: "the-gents-chat.firebaseapp.com",
    databaseURL: "https://the-gents-chat.firebaseio.com",
    projectId: "the-gents-chat",
    storageBucket: "the-gents-chat.appspot.com",
    messagingSenderId: "219455629478",
    appId: "1:219455629478:web:0ef6c97934ffb509d4ec67"
  }
);
const messaging = firebase.messaging();
