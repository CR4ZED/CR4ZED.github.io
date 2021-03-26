const username = document.getElementById("username");
const changeUser = document.getElementById("changeUser");

function getUsername() {
  let user = prompt("Please enter your name");
  username.textContent = user;
}

getUsername();

changeUser.addEventListener("click", getUsername);
