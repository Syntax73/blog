<script setup lang="ts">
const props = defineProps<{
  title: string;
  author: string;
  description: string;
  tags: string[];
  createdAt: string;
}>();
const router = useRouter();

const formattedDate = computed(() => {
  return new Date(props.createdAt).toLocaleDateString('pt-BR', {
    dateStyle: 'short',
  });
});
</script>

<template>
  <header class="mb-8">
    <NuxtLink to="/" class="mb-3 inline-block hover:underline">
      &lt; Voltar
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-3">{{ props.title }}</h1>

    <div class="flex flex-col text mb-3 gap-3">
      <span class="head-text"> Em: {{ formattedDate }} </span>

      <span class="head-text"> Por: {{ props.author }} </span>

      <div v-if="tags" class="head-text">
        Tags:
        <NuxtLink
          v-for="tag in props.tags"
          :key="tag"
          class="mr-2 hover:underline"
          to="#"
        >
          {{ tag }}
        </NuxtLink>
      </div>
    </div>

    <p>{{ props.description }}</p>
  </header>
</template>

<style scoped>
.head-text {
  @apply text-gray-600 dark:text-gray-400;
}
</style>
