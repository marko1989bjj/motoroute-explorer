<template>
  <section class="hero">
    <div class="hero-text">
      <p class="eyebrow">Za ljubitelje motora i otvorene ceste</p>

      <h1>Pronađi najbolju moto rutu za sljedeću vožnju</h1>

      <p>
        MotoRoute Explorer je Vue aplikacija za pregled, filtriranje i spremanje
        najzanimljivijih moto ruta u Hrvatskoj.
      </p>

      <router-link to="/routes" class="btn large"> Istraži rute </router-link>
    </div>

    <div class="hero-card">
      <h2>Top ruta</h2>
      <p>Jadranska magistrala</p>
      <span>280 km čistog užitka</span>
    </div>
  </section>

  <section class="section">
    <h2>Što aplikacija omogućuje?</h2>

    <div class="features-grid">
      <div class="feature-card">
        <h3>Filtriranje ruta</h3>
        <p>Pretraži rute prema težini, lokaciji i tipu ceste.</p>
      </div>

      <div class="feature-card">
        <h3>Detalji vožnje</h3>
        <p>Pogledaj duljinu, trajanje, ocjenu i opis svake rute.</p>
      </div>

      <div class="feature-card">
        <h3>Favoriti</h3>
        <p>Spremi omiljene rute u Local Storage.</p>
      </div>
    </div>
  </section>
</template>
