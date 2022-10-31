<script setup lang="ts">
const props = defineProps<{
	title: string;
	author: string;
	description: string;
	tags: string[];
	createdAt: string;
}>();
const router = useRouter();

const formatedDate = computed(() => {
	return new Date(props.createdAt).toLocaleDateString('pt-BR', {
		dateStyle: 'short',
	});
});
</script>

<template>
	<header class="mb-8">
		<button @click="router.go(-1)" class="mb-3 hover:underline">
			&lt; Voltar
		</button>

		<h1 class="text-4xl font-bold text-gray-900 mb-3">{{ props.title }}</h1>

		<div class="flex flex-col text mb-3 gap-3">
			<span class="text-gray-600">Em: {{ formatedDate }}</span>
			<span class="text-gray-600">Por: {{ props.author }}</span>

			<div v-if="tags" class="text-gray-600">
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

		<p class="text-gray-900">{{ props.description }}</p>
	</header>
</template>
