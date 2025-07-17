<template>
  <!-- ENG: Picture of the pokemon with no brightness, only siluete / ESP: Imagen del pokemon sin brillo, sólo la silueta -->
  <section class="z-20">
    <img v-if="!showPokemon" :src="pokemonImage" alt="" class="fade-in brightness-0 h-[100px]" />
    <img v-else :src="pokemonImage" alt="" class="fade-in h-[100px]" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  pokemonId: number;
  showPokemon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showPokemon: false,
});

console.log(props.pokemonId);

const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`,
);
</script>

<style scoped>
img {
  height: 100px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
