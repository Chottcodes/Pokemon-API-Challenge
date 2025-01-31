import { inputfield, GetAPI } from "./searchBar.js";
const likeBTN = document.getElementById("likeBTN");
const favoritesBTN = document.getElementById("favoritesButton");
const favoritePopOut = document.getElementById("favoritePopOut");
const favoriteCloseButton = document.getElementById("favoriteCloseButton");
const favoritesListTxt = document.getElementById("favoritesList");

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
// likeBTN.addEventListener("click", () => {
//   let userinput = inputfield.value;
//   AddtoLocalStorage(userinput);
//   // likeBTN.src = " Assests/heart.png";
//   // favoritesBTN.classList.add("shake");
//   // setTimeout(() => {
//   //   favoritesBTN.classList.remove("shake");
//   // }, 1000);
// });
const Showlist = () => {
  let pokeNames = GetLocalStorage();
  favoritesListTxt.innerHTML = "";
  pokeNames.forEach((name) => {
    const listFavorites = document.createElement("li");
    listFavorites.textContent = name;
    listFavorites.classList.add(
      "w-[100%]",
      "flex",
      "justify-between",
      "cursor-pointer",
      "hover:bg-black/70",
      "hover:rounded-xl",
      "hover:border",
      "hover:border-amber-500"
    );

    listFavorites.addEventListener("click", async () => {
      await GetAPI(name);
    });

    const deleteBtn = document.createElement("img");
    deleteBtn.src = "Assests/close (1).png";
    deleteBtn.classList.add("w-[10%]", "object-contain", "lg:w-[4%]");

    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      removeFavoritesName(name);
      likeBTNCheck(name);
      Showlist();
    });
    listFavorites.appendChild(deleteBtn);

    favoritesListTxt.appendChild(listFavorites);
  });
};
const likeBTNCheck = (userinput) => {
  let pokeNames = GetLocalStorage();
  if (pokeNames.includes(userinput)) {
    likeBTN.src = " Assests/heart.png";
  } else {
    likeBTN.src = "Assests/like.png";
  }
};

const AddtoLocalStorage = (userinput) => {
  if (!userinput) {
    return;
  }
  let inputArr = JSON.parse(localStorage.getItem("FavoritePokemon")) || [];
  console.log(inputArr)
  inputArr.push(userinput);
  let refinedArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (!refinedArr.includes(inputArr[i])) {
      refinedArr.push(inputArr[i]);
    }
  }
  localStorage.setItem("FavoritePokemon", JSON.stringify(refinedArr));
};

const GetLocalStorage = () => {
  let pokemonFavoriteNames = localStorage.getItem("FavoritePokemon");
  return JSON.parse(pokemonFavoriteNames) || [];
};

const removeFavoritesName = (pokemonnames) => {
  let localstorage = GetLocalStorage();
  let nameIndex = localstorage.indexOf(pokemonnames);
  localstorage.splice(nameIndex, 1);
  localStorage.setItem("FavoritePokemon", JSON.stringify(localstorage));
};
export { likeBTNCheck, AddtoLocalStorage };
