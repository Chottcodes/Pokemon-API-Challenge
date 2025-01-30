const likeBTN = document.getElementById("likeBTN");
const favoritesBTN = document.getElementById("favoritesButton");
const favoritePopOut = document.getElementById("favoritePopOut");
const favoriteCloseButton = document.getElementById("favoriteCloseButton");
favoritesBTN.addEventListener("click", () => {
  favoritePopOut.classList.remove("hidden");
  favoritePopOut.classList.add("slideUp");
});
favoriteCloseButton.addEventListener("click", () => {
  favoritePopOut.classList.add("fadeOut");
  favoritePopOut.classList.remove("slideUp");

  setTimeout(() => {
    favoritePopOut.classList.add("hidden");
    favoritePopOut.classList.remove("fadeOut");
  }, 500);
});
