<script setup>
import { ref } from "vue";

const links = ref([
  {
    title: "Postagens",
    path: "/postagens",
  },
  {
    title: "Sobre",
    path: "/about",
  },
]);
</script>

<template>
  <nav class="p-4 bg-neutral-600 flex justify-around">
    <nuxt-link to="/">LOGO</nuxt-link>

    <ul class="flex justify-between w-60">
      <li v-for="(link, index) in links" :key="index" class="">
        <nuxt-link :to="link.path">
          {{ link.title }}
        </nuxt-link>
      </li>
      <button>Dark Mode</button>
    </ul>
  </nav>
</template>
