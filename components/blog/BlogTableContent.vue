<script setup lang="ts">
interface IToC {
	id: string;
	text: string;
	depth: number;
	children?: IToC[];
}

const props = defineProps<{
	links: IToC[];
	space?: boolean;
}>();
</script>

<template>
	<ul :class="props.space ? 'pl-4' : 'pl-0'" class="list-none text-sm">
		<li v-for="link of props.links" :key="link.id">
			<a role="button" class="mb-3 block" :href="`#${link.id}`">
				{{ link.text }}
			</a>

			<BlogTableContent v-if="link.children" :links="link.children" space />
		</li>
	</ul>
</template>
