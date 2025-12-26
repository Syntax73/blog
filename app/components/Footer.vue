<script setup lang="ts">
const year = computed(() => new Date().getFullYear());
</script>

<template>
	<footer class="p-7">
		<div class="text-center text-sm">
			&#169; {{ year }} NOME DO BLOG. All Rights Reserved.
		</div>
	</footer>
</template>
