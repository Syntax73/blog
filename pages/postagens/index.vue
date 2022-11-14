<script setup>
const { data: articles } = await useAsyncData('posts', () =>
	queryContent('/postagens').find()
);
</script>

<template>
	<main class="mt-2 max-w-5xl m-auto p-3">
		<article class="grid grid-cols-6 gap-3">
			<section class="col-span-4 gap-6 flex flex-col">
				<ArticleCard
					v-for="post in articles"
					:key="post._id"
					:title="post.title"
					:description="post.description"
					:preview="post.preview"
					:author="post.author"
					:path="post._path"
					:reading-time="12"
				/>
			</section>
			<aside class="col-span-2 flex flex-col gap-3">
				<div class="bg-light-300 dark:bg-slate-700 rounded-md p-3 w-full">
					<div class="relative flex items-center rounded-md overflow-hidden">
						<input
							type="text"
							class="bg-slate-800 outline-none pl-1 py-2 w-full"
						/>
						<button class="bg-slate-900 py-1 px-2 rounded-md absolute right-1">
							Pesquisar
						</button>
					</div>
				</div>

				<div class="bg-light-300 dark:bg-slate-700 rounded-md p-3 w-full">
					<details>
						<summary>2022 (1)</summary>
						<details class="ml-2">
							<summary>novembro</summary>
							<span class="ml-5">Body Content 1</span>
						</details>
					</details>
					<details>
						<summary>2021 (1)</summary>
						<details class="ml-2">
							<summary>novembro</summary>
							<span class="ml-5">Body Content 1</span>
						</details>
					</details>
				</div>
			</aside>
		</article>
	</main>
</template>
