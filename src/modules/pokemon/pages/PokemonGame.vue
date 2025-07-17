<template>
  <!-- ENG: Loading screen for the API data / ESP: Pantalla de carga para los datos de la API -->
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>

  <!-- ENG: Main section of the game / ESP: Sección principal del juego-->

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <img
      class="absolute w-140 z-0"
      src="https://i.pinimg.com/736x/14/bd/68/14bd686faedccee521a84e293f50cbb6.jpg"
    />
    <h1 class="m-3 -mt-23 z-10 font-bold">¿QUIÉN ES ESTE POKÉMON?</h1>
    <!--ENG: Pokemon picture / ESP: Imagen del Pokemon-->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />
    <!--ENG: Pokemon options / ENG: Opciones de los Pokemonm-->
    <PokemonOption
      :pokemon-options="pokemonOptions"
      :block-selection="gameStatus !== GameStatus.Playing"
      :selected-pokemon="randomPokemon.id"
      @selected-option="checkAnswer"
    />
    <div class="h-20 z-10 absolute bottom-23 ml-7">
      <button v-if="gameStatus !== GameStatus.Playing" @click="getNextOptions()">
        SIGUIENTE RONDA
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import PokemonOption from '../components/PokemonOption.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const { gameStatus, randomPokemon, isLoading, pokemonOptions, checkAnswer, getNextOptions } =
  usePokemonGame();
</script>

<style scoped>
@reference "@/assets/styles.css";
button {
  @apply p-3 m-2 cursor-pointer w-70 text-center transition-all text-xl font-extrabold text-gray-700 hover:text-gray-900;
}
</style>
