import { GetAPI } from "./searchBar.js";
const randomBTN=document.getElementById('randomBTN'); 
randomBTN.addEventListener('click', async()=>{
    let randomNumber= Math.floor(Math.random() *600)
    GetAPI(randomNumber);
})