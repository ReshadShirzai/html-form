const submitButton = document.querySelector(".send");
submitButton.addEventListener("click", sendData);
function sendData() {
    const firstName = document.querySelector("#name").value;
    const email = document.querySelector("#mail").value;
    const message = document.querySelector("#msg").value;

    fetch("http://localhost:3000/message?name=reshad&email=r@gmail.com&live.nl&message=test");

    console.log({firstName, email, message});
}