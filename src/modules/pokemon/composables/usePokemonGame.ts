import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  // ENG: We randomly choose one of the pokemonOptions options as our correct answer
  // ESP: Elegimos de manera aleatoria una de las opciones de pokemonOptions como nuestra respuesta

  const randomPokemon = computed(
    () => pokemonOptions.value[Math.floor(Math.random() * pokemonOptions.value.length)],
  );
  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async (): Promise<Pokemon[]> => {
    // ENG: We use an interface from pokemon-list.response.ts created based on the API result using its structure
    // ESP: Usamos una interfaz procedente de pokemon-list.response.ts creada en base al resultado de la API usando su misma estructura

    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    // ENG: We randomly sort the Pokemon list / ESP: Ordenamos aleatoriamente la lista de Pokemon

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts.at(-2) ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  // ENG: We obtain the different pokemon options for the game / ESP: Obtenemos las diferentes opciones de pokemon para el juego

  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  // ENG: We check the answer chosen by the player

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id;

    if (hasWon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      });

      return;
    }

    gameStatus.value = GameStatus.Lost;
  };

  onMounted(async () => {
    pokemons.value = await getPokemons();
    getNextRound();
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,

    //Methods
    getNextOptions: getNextRound,
    checkAnswer,
  };
};
