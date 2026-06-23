<template>
  <section class="page-header">
    <h1>Favoriti</h1>
    <p>Ovdje se nalaze rute koje si spremio.</p>
  </section>

  <section v-if="favoritesStore.favorites.length > 0" class="routes-grid">
    <RouteCard
      v-for="route in favoritesStore.favorites"
      :key="route.id"
      :route="route"
    />
  </section>

  <section v-else class="empty">
    <p>Nemaš spremljenih ruta.</p>

    <router-link to="/routes" class="btn"> Pogledaj rute </router-link>
  </section>
</template>

<script setup>
import { useFavoritesStore } from "../stores/favoritesStore";
import RouteCard from "../components/RouteCard.vue";

const favoritesStore = useFavoritesStore();
</script>
