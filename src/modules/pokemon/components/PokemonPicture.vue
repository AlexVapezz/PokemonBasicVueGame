<template>
  <!-- ENG: Picture of the pokemon with no brightness, only siluete / ESP: Imagen del pokemon sin brillo, sólo la silueta -->
  <section>
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
      alt=""
      class="brightness-0"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
