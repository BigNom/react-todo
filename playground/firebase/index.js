import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAJCw8dBiWecukNJCQ9Mq9Rkdh4S9g_XWg",
  authDomain: "bignom-todo-app.firebaseapp.com",
  databaseURL: "https://bignom-todo-app.firebaseio.com",
  storageBucket: "bignom-todo-app.appspot.com",
};
firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'Todo App',
  isRunning: true,
  user: {
    name: 'Simon',
    age: 38
  }
});
