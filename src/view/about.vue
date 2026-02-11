<!-- <template>
    <div class="About">
        <h1>About me</h1>
        <div class="about">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WhS3GPlHpLae-nslrYXAYQ8Zn8bhodDBMQ&s" />
            <p>Selamat datang di halaman About. Halaman ini berisi informasi tentang aplikasi kami.</p>
            <p>Aplikasi ini dibuat menggunakan Vue.js untuk demonstrasi routing dan komponen.</p>
            <p>bertujuan untuk memberikan pengalaman pengguna yang baik dan menyenangkan.</p>
        </div>
    </div>
</template> -->
<template>
  <div class="about">



<section class="about-hero">
  <div class="text">
    <h1 class="gold-glow">About Luxe Scent</h1>

    <p>
      Luxe Scent adalah brand parfum premium yang menghadirkan aroma
      elegan dan eksklusif untuk setiap momen istimewa.
    </p>

    <p>
      Kami percaya bahwa parfum bukan hanya wangi,
      tetapi identitas dan kepercayaan diri.
    </p>

    <button class="gold-btn">Explore Collection</button>
  </div>

  <img src="https://images.unsplash.com/photo-1615634260167-c8cdede054de"/>
</section>
```
<section class="features">
  <div class="feature">
    💎 <h3>Premium Quality</h3>
  </div>

  <div class="feature">
    🌿 <h3>Natural Ingredients</h3>
  </div>

  <div class="feature">
    🕯 <h3>Long Lasting</h3>
  </div>

  <div class="feature">
    ✨ <h3>Exclusive Design</h3>
  </div>
</section>

  </div>   
  
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar }
};
</script>

<style scoped>
.about {
  background: #0b0b0b;
  min-height: 100vh;
  color: white;
}

.about-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
}

.text {
  max-width: 500px;
}

.about img {
  width: 350px;
  border-radius: 15px;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .about-hero {
    flex-direction: column;
    text-align: center;
  }
}
</style>
