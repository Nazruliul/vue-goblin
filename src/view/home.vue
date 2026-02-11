<!-- <script setup lang="ts">
import Navbar from '../components/navbar.vue';

</script>

<template>
    <div class="container mt-4"> 
        <router-view />
    </div>
    <div class="Home">
    <h1>Selamat Datang di Halaman Home</h1>
    </div>
    <div class="foto">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WhS3GPlHpLae-nslrYXAYQ8Zn8bhodDBMQ&s" />
      <p>Disini adalah pokoknya</p>
    </div>
    <div class="container text-center">
  <div class="row">
    <div class="col">
      hateemel
    </div>
    <div class="col">
      ceeses
    </div>
    <div class="col">
      jawaskript
    </div>
  </div>
</div>
</template> -->
<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-text">
        <h1>Luxury Perfume Collection</h1>
        <p>Aroma premium untuk gaya hidup elegan.</p>
        <button class="gold-btn">Shop Now</button>
      </div>

      <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f"
           alt="Perfume">
    </section>

    <!-- PRODUK -->
    <section class="products">
      <div class="card" v-for="p in perfumes" :key="p.id">
        <img :src="p.image" />
        <h3>{{ p.name }}</h3>
        <p>Rp {{ p.price }}</p>
        <button class="gold-btn">Beli</button>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      perfumes: [
        {
          id: 1,
          name: "Royal Gold",
          color: "Gold",
          price: "350.000",
          image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
        },
        {
          id: 2,
          name: "Black Essence",
          color: "Gold",
          price: "420.000",
          image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"
        },
        {
          id: 3,
          name: "Midnight Luxe",
          color: "Gold",
          price: "390.000",
          image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de"
        }
      ]
    };
  }
};
</script>

<style scoped>
.home {
  background: #0f0f0f;
  color: white;
  font-family: 'Poppins', sans-serif;
}

/* HERO */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
}

.hero img {
  width: 350px;
  border-radius: 15px;
}

.hero-text h1 {
  font-size: 48px;
  color: gold;
}

/* BUTTON */
.gold-btn {
  background: gold;
  color: rgb(0, 0, 0);
  border: none;
  padding: 12px 24px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
}

/* PRODUCTS */
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 60px;
}

.card {
  background: #1c1c1c;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  border-radius: 10px;
}
</style>
