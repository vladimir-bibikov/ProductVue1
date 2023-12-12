<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
<header>
<ul>
    <li><RouterLink to="/">Главная</RouterLink></li>
    <li><RouterLink to="/about">О нас</RouterLink></li>
    <li><RouterLink to="/blog">Блог</RouterLink></li>
    <li><a href="">Ссылка</a></li>
    <li><a href="">Ссылка</a></li>
</ul>
</header>
<main>
    <RouterView />
</main>
<footer>
<ul>
    <li><RouterLink to="/">Главная</RouterLink></li>
    <li><RouterLink to="about">О нас</RouterLink></li>
    <li><RouterLink to="blog">Блог</RouterLink></li>
    <li><a href="">Ссылка</a></li>
    <li><a href="">Ссылка</a></li>
</ul>
</footer>
</template>

<style scoped>

</style>
