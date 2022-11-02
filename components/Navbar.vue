<script setup>
import { ref } from 'vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const links = ref([
	{
		title: 'Postagens',
		path: '/postagens',
	},
	{
		title: 'Sobre',
		path: '/sobre',
	},
]);
</script>

<template>
	<nav class="p-4 bg-light-300 dark:bg-slate-900 flex justify-around">
		<nuxt-link to="/">
			<Icon name="fa-solid:cross" size="24" />
		</nuxt-link>

		<ul class="flex items-center list-none justify-between w-60">
			<li v-for="(link, index) in links" :key="index" class="">
				<nuxt-link :to="link.path">
					{{ link.title }}
				</nuxt-link>
			</li>

			<button class="p-1 flex justify-center items-center">
				<Icon name="ph:rss" size="24" />
			</button>

			<button
				@click="toggleDark()"
				class="bg-light-200 dark:bg-slate-600 rounded-md p-1 flex justify-center items-center"
			>
				<Icon name="ph:sun" size="24" v-if="isDark" />
				<Icon name="ph:moon" size="24" v-else />
			</button>
		</ul>
	</nav>
</template>
