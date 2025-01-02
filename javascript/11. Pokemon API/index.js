async function fetchPokemon(){
    try{
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase(); 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);  

        if(!response.ok){
            throw new Error('Request failed!');
        }
        const data = await response.json();
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const pokemonImage = document.getElementById('pokemonImg');

        pokemonImage.src = pokemonSprite;
        pokemonImage.style.display = 'block';
        pokemonImage.alt = data.name;


        }catch(error){
            console.error(error);
            alert('Pokemon not found!');
        }
}

document.addEventListener('keydown', () => {
    if(event.key === 'Enter'){
        if(document.getElementById('pokemonName').value === ''){
            alert('Please enter a Pokemon name!');
        }
        else{
            fetchPokemon();
        }
    }
});