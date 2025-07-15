<template>
  <!-- ENG: Loading screen for the API data / ESP: Pantalla de carga para los datos de la API -->
  <section v-if="false" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>

  <!-- ENG: Main section of the game / ESP: Sección principal del juego-->

  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Quién es este Pokémon?</h1>
    <!--ENG: Pokemon picture / ESP: Imagen del Pokemon-->
    <PokemonPicture />
    <!--ENG: Pokemon options / ENG: Opciones de los Pokemonm-->
    <PokemonOption />
  </section>
</template>

<script setup lang="ts">
import PokemonOption from '../components/PokemonOption.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';

const {} = usePokemonGame();
</script>
