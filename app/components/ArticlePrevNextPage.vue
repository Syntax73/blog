<script setup lang="ts">
const { currentPage } = defineProps<{
	currentPage: number;
	hasNextPage: boolean;
}>();
</script>

<template>
	<div class="flex justify-between gap-3 mt-10 text-sm">
		<div v-if="currentPage > 2" class="flex flex-col gap-2 w-1/2">
			<NuxtLink
				:to="`/postagens?page=${currentPage - 1}`"
				class="hover:underline"
			>
				&lt; Anterior
			</NuxtLink>
		</div>
		<div v-else class="flex-1"></div>

		<div v-if="hasNextPage" class="flex flex-col w-1/2 gap-2">
			<NuxtLink
				:to="`/postagens?page=${currentPage}`"
				class="self-end hover:underline"
			>
				Proximo &gt;
			</NuxtLink>
		</div>
		<div v-else class="flex-1"></div>
	</div>
</template>
