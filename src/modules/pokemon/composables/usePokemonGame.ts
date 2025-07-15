import { onMounted, ref } from 'vue';
import { GameStatus, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);

  const getPokemons = async () => {
    // ENG: We use an interface from pokemon-list.response.ts created based on the API result using its structure
    // ESP: Usamos una interfaz procedente de pokemon-list.response.ts creada en base al resultado de la API usando su misma estructura

    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    console.log(response.data);
  };

  onMounted(() => {
    getPokemons();
  });

  return {
    gameStatus,
  };
};
