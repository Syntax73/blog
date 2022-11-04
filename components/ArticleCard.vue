<script setup lang="ts">
const props = defineProps<{
	title: string;
	description: string;
	preview: string;
	author: string;
	readingTime: number;
	path: string;
}>();
</script>

<template>
	<NuxtLink :to="props.path">
		<div
			class="bg-light-300 dark:bg-slate-700 rounded-md p-4 h-full hover:scale-105 transition-transform duration-200"
		>
			<figure
				class="h-40 bg-center bg-cover"
				:style="{ backgroundImage: `url(${props.preview})` }"
			></figure>

			<div>
				<h3 class="article-title">{{ props.title }}</h3>

				<p class="article-desc">{{ props.description }}</p>

				<div class="flex justify-between text-xs">
					<span> Por: {{ props.author }} </span>
					<span> {{ props.readingTime }} minutos de leitura.</span>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>
<style scoped>
.article-title {
	margin-top: 12px;
	height: 56px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.article-desc {
	height: 98px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
}
</style>
