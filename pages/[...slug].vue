<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
</script>

<template>
  <main class="max-w-4xl m-auto p-3">
    <BlogHeader
      :title="data.title"
      :author="data.author"
      :description="data.description"
      :tags="data.tags"
      :created-at="data.createdAt"
    />

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
