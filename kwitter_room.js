var firebaseConfig = {
      apiKey: "AIzaSyDIcgMf7pF-Q-M1AKEMJW4UDRf2SkI-knw",
      authDomain: "kitter89-3c7b8.firebaseapp.com",
      databaseURL: "https://kitter89-3c7b8-default-rtdb.firebaseio.com",
      projectId: "kitter89-3c7b8",
      storageBucket: "kitter89-3c7b8.appspot.com",
      messagingSenderId: "963220884714",
      appId: "1:963220884714:web:c81c987081d8948dc01b93"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
