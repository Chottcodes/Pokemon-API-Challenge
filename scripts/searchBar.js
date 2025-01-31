const inputfield = document.getElementById("default-search");
const submitBTN = document.getElementById("submitBTN");
const pokemonIMG = document.getElementById("pokimonIMG");
const pokemonName = document.getElementById("pokemonName");
const pokemonTypeTXT = document.getElementById("typeTXT");
const movesTXT = document.getElementById("movesTXT");
const pokemonID = document.getElementById("pokemonID");
const pokemonAblitities = document.getElementById("pokemonAblitities");
const locationTXT = document.getElementById("locationTXT");
const evoTXT = document.getElementById('evoTXT');
const shineBTN =document.getElementById('shineBTN');
const defaultBTN = document.getElementById('defaultBTN');
const likeBTN = document.getElementById("likeBTN");

const GetAPI = async (userinput) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${userinput}/`);
    if (!res.ok) {
      throw new Error("Failed to fetch Pokémon data");
    }

    const data = await res.json();
    //   name and id does not need dot notation
    const {
      sprites,
      name,
      id,
      location_area_encounters,
      moves,
      types,
      species,
      abilities,
    } = data;
    const pokemonLocationURL = location_area_encounters;
    const typeName = types[0].type.name;
    const shinysprite = sprites.front_shiny;
    const defaultsprite = sprites.front_default;
    pokemonIMG.src = defaultsprite;
    pokemonName.innerText = name;
    pokemonID.innerText = `#${id}`;
    let isShinny = false;

    defaultBTN.addEventListener('click',()=>{
        if(isShinny){
            pokemonIMG.src=defaultsprite;
            defaultBTN.src="./Assests/Default.png";
        }else{
            pokemonIMG.src=shinysprite;
            defaultBTN.src='./Assests/shines.png';
           
        }
        isShinny = !isShinny;
    })
    let pokeTypes = [];
    for (let i = 0; i < types.length; i++) {
      pokeTypes.push(types[i].type.name);
    }
    pokemonTypeTXT.innerText = pokeTypes.join(", ");

    //   abilities
    let pokeability = [];
    for (let i = 0; i < abilities.length; i++) {
      pokeability.push(abilities[i].ability.name);
    }
    pokemonAblitities.innerText = pokeability.join(", ");

    //   moves
    let pokemonMoves = [];
    for (let i = 0; i < moves.length; i++) {
      pokemonMoves.push(moves[i].move.name);
    }
    movesTXT.innerText = pokemonMoves.join(", ");

    //   Location

    try {
      if (pokemonLocationURL && pokemonLocationURL.length > 0) {
        const locationRes = await fetch(pokemonLocationURL);
        if (!locationRes.ok) {
          throw new Error("Data fetch failed");
        }

        const locationdata = await locationRes.json();
        if (locationdata.length > 0) {
          locationTXT.innerText = locationdata[0].location_area.name;
        } else {
          locationTXT.innerText = "N/A";
        }
      }
    } catch (error) {
      locationTXT.innerText = "N/A";
      console.log(error.message);
    }

    // evolution

    const pokemonSpeciesURL = species.url;
    const evoRes = await fetch(pokemonSpeciesURL);
    const evodata = await evoRes.json();
    const { evolution_chain } = evodata;
    const evoChainURl = evolution_chain.url;

    const chainRes = await fetch(evoChainURl);
    const chainData = await chainRes.json();
    const chain = chainData.chain;
    let evoChainResult = [];
    // evolves_to[0].species.name
    if (chain) {
      evoChainResult.push(chain.species.name);
      
    }
    if (chain.evolves_to.length > 0) {
      for (let i = 0; i < chain.evolves_to.length; i++) {
        evoChainResult.push(chain.evolves_to[i].species.name);
        if (chain.evolves_to[i].evolves_to.length > 0) {
          for (let j = 0; j < chain.evolves_to[i].evolves_to.length; j++) {
            evoChainResult.push(chain.evolves_to[i].evolves_to[j].species.name);
          }
        }
      }
    }
    evoTXT.innerText = evoChainResult.join(", ");
    console.log(chainData);
  } catch (error) {
    console.log(error);
  }
};

submitBTN.addEventListener("click", async () => {
  let userinput = inputfield.value;
  event.preventDefault();
  await GetAPI(userinput);
});

const storetoLocalStorage = (userinput) => {
  if(!userinput){
    return;
  } 
  let inputArr = JSON.parse(localStorage.getItem('FavoritePokemon')) || [];
  inputArr.push(inputArr);
  localStorage.setItem('FavoritePokemon',JSON.stringify(inputArr));
}
export { GetAPI,inputfield };
