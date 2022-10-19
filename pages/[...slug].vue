<script setup>
const route = useRoute();
const router = useRouter();

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
</script>

<template>
  <main class="max-w-4xl m-auto p-3">
    <header class="mb-8">
      <button @click="router.go(-1)" class="mb-3">Voltar</button>

      <h1 class="text-4xl font-bold text-gray-900 mb-3">{{ data.title }}</h1>

      <div class="flex flex-col text mb-3 h-24 gap-3">
        <span class="text-gray-600">
          Em:
          {{
            new Date(data.createdAt).toLocaleDateString("pt-BR", {
              dateStyle: "short",
            })
          }}
        </span>
        <span class="text-gray-600">Por: {{ data.author }}</span>

        <div class="text-gray-600">
          Tags:
          <NuxtLink
            v-for="tag in data.tags"
            :key="tag"
            class="mr-2 hover:underline"
            to="#"
          >
            {{ tag }}
          </NuxtLink>
        </div>
      </div>

      <p class="text-gray-900">{{ data.description }}</p>
    </header>

    <ContentRenderer :value="data" class="content" />
  </main>
</template>

<style scoped>
.content {
  @apply text-gray-900;
}

.content :deep(h1) {
  @apply text-3xl font-bold mb-3;
}

.content :deep(h2) {
  @apply text-2xl font-semibold mb-3;
}

.content :deep(h3) {
  @apply text-xl font-semibold mb-3;
}

.content :deep(h4) {
  @apply text-lg font-semibold mb-3;
}

.content :deep(h5) {
  @apply text-base font-semibold mb-3;
}

.content :deep(h6) {
  @apply text-base font-semibold mb-3;
}

.content :deep(p) {
  @apply mb-3;
}
</style>
