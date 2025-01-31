<<<<<<< HEAD
Peer Review: Aaron Robinson
The site mostly works as intended, one thing that stuck out to me is that pokemon with more than one word in its name like porygon z do not fetch properly, this is because the api puts blank spaces as - (porygon-z). I had the same problem, this can be resolved with running a funtion for each fetch input that takes in a pokemon name


function formatForSearch(input) {
    let transformedString = input.trim().replace(/ /g, '-');
    transformedString = transformedString.toLowerCase();
    return transformedString;
}

That function should take in a name and replace all spaces in between words with - 
 then the fetch:

 let findPokemonPic = async (name,pic) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatForSearch(name)}`)
    const data = await response.json()
 }

 something like this, jocob asked me about pokemon with more than one word so theyre looking for it
I would change the (Document) tab name just for some added customization. I would also run a random pokemon on load just so the empty space is filled right away when the site loads. I like the wickedcss effects
=======
// Your name:Chris Wells-Hott

 // Date Revised: 1/31/2025

 // Exercise or Lab name: Pokemon API Challenge

 // Brief Description of what you did:I created a pokemon app that calls an api and displays the data(Id,Name,Evolution,Moves,Abilities,and sprite) and has a favorites list with local storage.The app is fully functional and responsive.


// Person who Peer Reviewed your assignment
>>>>>>> 55ea3adde43f7849d3f2c5e46d47a04169e9aa3d
