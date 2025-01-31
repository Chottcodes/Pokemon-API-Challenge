import { inputfield,GetAPI } from "./searchBar.js";
const likeBTN = document.getElementById("likeBTN");
const favoritesBTN = document.getElementById("favoritesButton");
const favoritePopOut = document.getElementById("favoritePopOut");
const favoriteCloseButton = document.getElementById("favoriteCloseButton");
const favoritesListTxt = document.getElementById("favoritesList")


favoritesBTN.addEventListener("click", () => {
  favoritePopOut.classList.remove("hidden");
  favoritePopOut.classList.add("slideUp");
  Showlist();
});
favoriteCloseButton.addEventListener("click", () => {
  favoritePopOut.classList.add("fadeOut");
  favoritePopOut.classList.remove("slideUp");
    
  setTimeout(() => {
    favoritePopOut.classList.add("hidden");
    favoritePopOut.classList.remove("fadeOut");
  }, 500);
});



 

likeBTN.addEventListener("click", () => {
  let userinput = inputfield.value;
  AddtoLocalStorage(userinput);
  
});
const Showlist = () => {
    let pokeNames = GetLocalStorage();
  favoritesListTxt.innerHTML="";
  pokeNames.forEach(name => {
    const listFavorites = document.createElement('li');
    listFavorites.textContent = name;
    listFavorites.classList.add("w-[100%]","flex","justify-between")

    listFavorites.addEventListener('click',async()=>{
        GetAPI(name);
    })
    
    const deleteBtn = document.createElement('img');
    deleteBtn.src = "Assests/close (1).png";
    deleteBtn.classList.add("w-[10%]","object-contain");

    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        removeFavoritesName(name);  
        Showlist();  
      });
      listFavorites.appendChild(deleteBtn);
    
    
    favoritesListTxt.appendChild(listFavorites)

  })
}




const AddtoLocalStorage = (userinput) => {
  if (!userinput) {
    return;
  }
  let inputArr = JSON.parse(localStorage.getItem("FavoritePokemon")) || [];
  inputArr.push(userinput);
  let refinedArr = [];
  for(let i =0;i<inputArr.length;i++)
  {
    if(!refinedArr.includes(inputArr[i]))
    {
        refinedArr.push(inputArr[i]);
    }
  }
  localStorage.setItem("FavoritePokemon", JSON.stringify(refinedArr));
};





const GetLocalStorage = () => {
    let pokemonFavoriteNames = localStorage.getItem('FavoritePokemon');
    return JSON.parse(pokemonFavoriteNames) || [];
}



const removeFavoritesName= (pokemonnames) => {
    let localstorage=GetLocalStorage();
    let nameIndex = localstorage.indexOf(pokemonnames);
    localstorage.splice(nameIndex,1);
    localStorage.setItem('FavoritePokemon',JSON.stringify(localstorage));
}
