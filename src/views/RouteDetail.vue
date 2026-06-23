<template>
  <section v-if="route" class="detail-page">
    <img :src="route.image" :alt="route.name" class="detail-image" />

    <div class="detail-content">
      <span class="badge">{{ route.difficulty }}</span>

      <h1>{{ route.name }}</h1>

      <p class="location">{{ route.location }}</p>

      <div class="detail-stats">
        <div>
          <strong>{{ route.distance }} km</strong>
          <span>Duljina</span>
        </div>

        <div>
          <strong>{{ route.duration }}</strong>
          <span>Trajanje</span>
        </div>

        <div>
          <strong>{{ route.rating }}</strong>
          <span>Ocjena</span>
        </div>
      </div>

      <p>{{ route.description }}</p>

      <button class="btn" @click="favoritesStore.toggleFavorite(route)">
        {{
          favoritesStore.isFavorite(route.id)
            ? "Ukloni iz favorita"
            : "Dodaj u favorite"
        }}
      </button>
    </div>
  </section>

  <section v-else class="page-header">
    <h1>Ruta nije pronađena</h1>
    <router-link to="/routes" class="btn"> Povratak na rute </router-link>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { routes } from "../data/routes";
import { useFavoritesStore } from "../stores/favoritesStore";

const currentRoute = useRoute();
const favoritesStore = useFavoritesStore();

const route = routes.find((item) => item.id === Number(currentRoute.params.id));
</script>
