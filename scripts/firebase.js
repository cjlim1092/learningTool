
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

  var database = firebase.database()
var root = firebase.database().ref();  // Specifies the database root
var path = firebase.database().ref("child/path") // Specifies a specific location in the database tree

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
console.log(myFlashcards);
root.set(myFlashcards);

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
firebase.database().ref('deck/flashcards'); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
firebase.database().set(myFlashcards);

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
firebase.database().ref('deck/flashcards'); 
 
// Remove myFlashcards from the database
firebase.database.remove()
// As before,make the database point to the location where the data exists
 
// If the location doesn't exist it will be created but there will be nothing to retirieve
 
let fc = firebase.database().ref('deck/flashy');
 
 
 
// A variable to store the JSON results
 
let jsonString;
 
 
 
// Tell Firebase to retrieve your data
 
fc.on("value", function(retrieve) {
 
   
 
    //Get the raw data back from the database
 
    let queryData = retrieve.val();
 
     
 
    // Turn the data into a JSON String
 
    jsonString = JSON.stringify(queryData);
 
});
 
 
 
// Print the data out as a JSON string or otherwise manipulate it
 
console.log (' JSON string:' + jsonString )
