<script setup lang="ts"></script>

<template>
	<div class="bg-light-300 dark:bg-slate-700 rounded-md p-3 w-full">
		<div class="relative flex items-center rounded-md overflow-hidden">
			<input
				type="text"
				class="bg-slate-800 outline-none pl-1 pr-10 py-2 w-full"
				placeholder="Pesquisar"
			/>

			<button class="bg-slate-900 p-2 rounded-md absolute right-1 flex">
				<Icon name="ph:magnifying-glass" />
			</button>
		</div>
	</div>
</template>
