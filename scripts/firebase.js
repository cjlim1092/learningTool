
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBYU3B4VToXrCg9uAEg-YGeouhKOjGEAvo",
    authDomain: "best-learning-tool-5eb86.firebaseapp.com",
    databaseURL: "https://best-learning-tool-5eb86.firebaseio.com",
    projectId: "best-learning-tool-5eb86",
    storageBucket: "best-learning-tool-5eb86.appspot.com",
    messagingSenderId: "469466995897",
    appId: "1:469466995897:web:5e435e5081d6b713464f68",
    measurementId: "G-HJV4G8X0RH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebase.database().ref();  // Specifies the database root
firebase.database().ref("child/path") // Specifies a specific location in the database tree

let myFlashcards = [ {
 
    "question": "Name this species of bird.",
 
    "image" : "images/barn-owl-2550068__340.webp",
 
    "answer": "Barn Owl"
 
    },
 
    {
 
    "question": "Name this species of bird.",
 
    "image" : "images/dove-2516641__340.webp",
 
    "answer": "Dove"
 
    },
 
    {
 
    "question": "Name this species of bird.",
 
    "image" : "images/hummingbird-2139279__340.webp",
 
    "answer": "Hummingbird"
 
    }
 
  ];
// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
firebase.database().ref('deck/flashcards'); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
firebase.database().set(myFlashcards);
