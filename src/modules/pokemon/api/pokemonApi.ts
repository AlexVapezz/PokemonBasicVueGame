import axios from 'axios';

// ENG: We create the API URL base to use it in our game without repeating it everytime
// ESP: Creamos la URL base de la API para utilizarla en nuestro juego sin necesidad de repetirla

const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export { pokemonApi };
