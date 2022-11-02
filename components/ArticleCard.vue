<script setup lang="ts">
const props = defineProps<{
	title: string;
	description: string;
	author: string;
	readingTime: number;
	path: string;
}>();
</script>

<template>
	<NuxtLink :to="props.path">
		<div class="bg-light-300 dark:bg-slate-700 rounded-md p-3 mb-3">
			<h3>{{ props.title }}</h3>

			<p>{{ props.description }}</p>

			<div class="flex justify-between">
				<span> Por: {{ props.author }} </span>
				<span> {{ props.readingTime }} minutos de leitura.</span>
			</div>
		</div>
	</NuxtLink>
</template>
