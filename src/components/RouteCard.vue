<script setup>
import { useFavoritesStore } from "../stores/favoritesStore";

defineProps({
  route: {
    type: Object,
    required: true,
  },
});

const favoritesStore = useFavoritesStore();
</script>

<template>
  <article class="route-card">
    <img :src="route.image" :alt="route.name" loading="lazy" />

    <div class="route-card-content">
      <span class="badge">{{ route.difficulty }}</span>

      <h3>{{ route.name }}</h3>

      <p class="location">{{ route.location }}</p>

      <div class="route-info">
        <span>{{ route.distance }} km</span>
        <span>{{ route.duration }}</span>
        <span>⭐ {{ route.rating }}</span>
      </div>

      <div class="card-actions">
        <router-link :to="`/routes/${route.id}`" class="btn">
          Detalji
        </router-link>

        <button
          class="btn secondary"
          @click="favoritesStore.toggleFavorite(route)"
        >
          {{ favoritesStore.isFavorite(route.id) ? "Ukloni" : "Spremi" }}
        </button>
      </div>
    </div>
  </article>
</template>
