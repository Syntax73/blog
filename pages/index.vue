<script setup>
const { data } = await useAsyncData("home", () =>
  queryContent("/postagens").limit(3).find()
);
</script>

<template>
  <main class="mt-2">
    <ul>
      <li v-for="post in data" :key="post._id" class="flex justify-center">
        <NuxtLink :to="post._path">
          <div class="bg-slate-700 h-24 w-80 rounded-md">
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
