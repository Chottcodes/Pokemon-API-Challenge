import { GetAPI } from "./searchBar.js";
const submitBTN = document.getElementById("submitBTN");
const randomBTN = document.getElementById("randomBTN");
randomBTN.addEventListener("click", async () => {
  defaultBTN.src = "./Assests/Default.png";
  let randomNumber = Math.floor(Math.random() * 650);
  GetAPI(randomNumber);
});
