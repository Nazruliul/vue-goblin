<script setup lang="ts">
import router from '../router';

</script>
 
<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/navbar">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/shop" exact>Shop</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about" exact>About</router-link>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
</template>