import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  }),

  actions: {
    toggleFavorite(route) {
      const exists = this.favorites.find((item) => item.id === route.id);

      if (exists) {
        this.favorites = this.favorites.filter((item) => item.id !== route.id);
      } else {
        this.favorites.push(route);
      }

      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },

    isFavorite(id) {
      return this.favorites.some((item) => item.id === id);
    },
  },
});
