<script setup>
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
</template>