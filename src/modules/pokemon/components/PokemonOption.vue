<template>
  <!-- ENG: Options given to the players / ESP: Opciones dadas a los jugadores-->
  <!-- ENG: We make the button logic, so when the players choose the correct style is applied y el juego funcione -->
  <!-- ESP: Hacemos la lógica de los botones, para que cuando el jugador elija el estilo correcto sea aplicado y el juego funcione -->
  <section class="mt-5 flex flex-col z-10">
    <button
      v-for="{ name, id } in props.pokemonOptions"
      :key="id"
      :class="[
        'capitalize disabled:shadow-none disabled:bg-gray-100',
        {
          correct: id === props.selectedPokemon && blockSelection,
          incorrect: id !== props.selectedPokemon && blockSelection,
        },
      ]"
      @click="$emit('selectedOption', id)"
      :disabled="props.blockSelection"
    >
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  pokemonOptions: Pokemon[];
  blockSelection: boolean;
  selectedPokemon: number;
}

const props = defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();
</script>

<style scoped>
@reference "@/assets/styles.css";
button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}

.correct {
  @apply bg-blue-500 cursor-default text-white hover:bg-blue-500;
}

.incorrect {
  @apply bg-red-500 cursor-default text-white hover:bg-red-500;
}
</style>
