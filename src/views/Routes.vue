<script setup>
import { ref, computed } from "vue";
import { routes } from "../data/routes";
import RouteCard from "../components/RouteCard.vue";

const searchTerm = ref("");
const selectedDifficulty = ref("");

const filteredRoutes = computed(() => {
  return routes.filter((route) => {
    const matchesSearch =
      route.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      route.location.toLowerCase().includes(searchTerm.value.toLowerCase());

    const matchesDifficulty =
      selectedDifficulty.value === "" ||
      route.difficulty === selectedDifficulty.value;

    return matchesSearch && matchesDifficulty;
  });
});
</script>

<template>
  <section class="page-header">
    <h1>Moto rute</h1>
    <p>Pretraži i filtriraj rute za svoju sljedeću vožnju.</p>
  </section>

  <section class="filters">
    <input v-model="searchTerm" type="text" placeholder="Pretraži rutu..." />

    <select v-model="selectedDifficulty">
      <option value="">Sve težine</option>
      <option value="Lagana">Lagana</option>
      <option value="Srednja">Srednja</option>
      <option value="Teška">Teška</option>
    </select>
  </section>

  <section class="routes-grid">
    <RouteCard v-for="route in filteredRoutes" :key="route.id" :route="route" />
  </section>

  <p v-if="filteredRoutes.length === 0" class="empty">Nema pronađenih ruta.</p>
</template>
