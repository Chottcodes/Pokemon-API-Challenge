const likeBTN = document.getElementById('likeBTN');
const favoritesBTN = document.getElementById('favoritesButton');
const favoritePopOut =document.getElementById('favoritePopOut');
favoritesBTN.addEventListener('click',()=>{
    favoritePopOut.classList.toggle("hidden");
    favoritePopOut.classList.toggle("slideUp")
    
})
// document.addEventListener('click', () => {
//     if(!favoritePopOut.classList.contains('hidden')){
//         favoritePopOut.classList.add("hidden");
//         favoritePopOut.classList.remove("slideUp");
//     }
// })