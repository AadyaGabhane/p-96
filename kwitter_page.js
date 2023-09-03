//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCBWNf1dv2r8J9e0a7VXUfPirRURugPvew",
    authDomain: "kwitter-24bde.firebaseapp.com",
    databaseURL: "https://kwitter-24bde-default-rtdb.firebaseio.com",
    projectId: "kwitter-24bde",
    storageBucket: "kwitter-24bde.appspot.com",
    messagingSenderId: "138133134725",
    appId: "1:138133134725:web:2aa2c5a2e45fbe0b9af8ec"
  };
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

  function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
