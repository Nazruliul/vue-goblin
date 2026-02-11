<!-- <script setup>
    defineProps({
        name: String,
        kelas: String,
        status: String,
    });
</script>
<template>
    <div>
        <h1>Nama :{{ name }}</h1>
        <h2>Kelas king:{{ kelas }}</h2>
        <h3 v-if ="status ==='1'">Status: sudah lunas</h3>
        <h3 v-else-if="status ==='2'">Status: hampir lunas</h3>
        <h3 v-else-if="status ==='3'">Status: belum lunas</h3>
        <h3 v-else>Status: Masih kosong</h3>
    </div>
</template> -->
<template>
  <div class="shop">
    

<h1 class="title gold-glow">Luxury Perfume Collection</h1>

<section class="products">
  <div class="card" v-for="p in perfumes" :key="p.id">
    <img :src="p.image" />
    <h3>{{ p.name }}</h3>
    <p>Rp {{ p.price }}</p>
    <button class="gold-btn">Beli Sekarang</button>
  </div>
</section>
```

  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },

  data() {
    return {
      perfumes: [
        {
          id: 1,
          name: "Royal Gold",
          price: "350.000",
          image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
        },
        {
          id: 2,
          name: "Black Essence",
          price: "420.000",
          image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"
        },
        {
          id: 3,
          name: "Midnight Luxe",
          price: "390.000",
          image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de"
        }
      ]
    };
  }
};
</script>

<style scoped>
.shop {
  background: #0b0b0b;
  min-height: 100vh;
  color: white;
}

.title {
  text-align: center;
  margin-top: 40px;
  font-size: 40px;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 60px;
}

.card {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
}

.card img {
  width: 100%;
  border-radius: 10px;
}

/* Responsive mobile */
@media (max-width: 768px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>
<script>
</script>