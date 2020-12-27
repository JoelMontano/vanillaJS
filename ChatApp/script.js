//firebase config
var firebaseConfig = {
  apiKey: "AIzaSyAR-fQoHshWdZiy4UhlBqa5MnldGF_yOfs",
  authDomain: "chat-app-bff67.firebaseapp.com",
  databaseURL: "https://chat-app-bff67-default-rtdb.firebaseio.com",
  projectId: "chat-app-bff67",
  storageBucket: "chat-app-bff67.appspot.com",
  messagingSenderId: "646667238921",
  appId: "1:646667238921:web:1cf2ed9e120c98639c02d8",
  measurementId: "G-98DJL8ZGQW",
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();

let username = document.getElementById("username");
let message = document.getElementById("message");
let messages = document.getElementById("messages");

username.value = localStorage.getItem("username");

message.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    localStorage.setItem("username", username.value);

    database.ref("messages").push({
      username: username.value,
      message: message.value,
    });

    message.value = "";
  }
});

database.ref("messages").on("child_added", function (e) {
  let data = e.val();
  console.log(data);

  let div = document.createElement("div");
  let span = document.createElement("span");
  span.innerHTML = "@" + data.username;
  let p = document.createElement("p");
  p.innerHTML = data.message;

  div.appendChild(span);
  div.appendChild(p);

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
});
