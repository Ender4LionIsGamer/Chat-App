import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    projectId: 'react-chat-bd035.firebaseapp.com',
    apiKey: 'AIzaSyBJ1PWBnPvS0YUAGW3kR79PTtBhcSjPjC4',
    databaseURL: 'https://react-chat-bd035-default-rtdb.firebaseio.com'
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;