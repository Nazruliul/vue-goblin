<script setup lang="ts">
import router from '../router';

</script>
 
<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2LzSiqIDk5k7JRanjYR0DKjwwa-EX__kvw&s" alt="Logo" width="40" height="35" class="d-inline-block align-text-top"/>
      
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