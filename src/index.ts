import * as io from "socket.io-client";

// connect to sever
const socket = io("http://127.0.0.1:3000");
socket.on("connect", function () {
  console.log("Test Success!");
});

socket.on("connect", function () {
  console.log("Test Success 1!");
});

socket.on("connect", function () {
  console.log("Test Success 2!");
});

socket.on("connect", function () {
  console.log("Test Success 3!");
});
