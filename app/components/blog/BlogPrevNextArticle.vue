<script setup lang="ts">
interface IPrevNext {
	title: string;
	path: string;
}

const { next, prev } = defineProps<{
	prev?: IPrevNext | any;
	next?: IPrevNext | any;
}>();
</script>

<template>
	<div class="flex justify-between gap-3 mt-10 text-sm">
		<div v-if="prev" class="flex flex-col gap-2 w-1/2" :title="prev.title">
			<span class="truncate font-medium">{{ prev.title }}</span>
			<NuxtLink :to="prev.path" class="hover:underline">
				&lt; Anterior
			</NuxtLink>
		</div>
		<div v-else class="flex-1"></div>

		<div v-if="next" class="flex flex-col w-1/2 gap-2" :title="next.title">
			<span class="truncate text-end font-medium">{{ next.title }}</span>
			<NuxtLink :to="next.path" class="self-end hover:underline">
				Proximo &gt;
			</NuxtLink>
		</div>
		<div v-else class="flex-1"></div>
	</div>
</template>
