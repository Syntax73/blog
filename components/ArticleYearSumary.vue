<script setup lang="ts">
interface IArticleYearSumary {
	title: string;
	_path: string;
	createdAt: string;
}

const { years } = defineProps<{
	years: IArticleYearSumary[];
}>();

interface IYearSumary {
	year: string;
	months: {
		month: string;
		articles: {
			title: string;
			link: string;
		}[];
	}[];
}

const formatedArticleSumary = computed(() => {
	const articleYears = new Set(
		years.map(e => new Date(e.createdAt).getFullYear())
	);

	const formatedProps = years.map(e => ({
		...e,
		createdAt: new Date(e.createdAt),
	}));

	const finalResult: IYearSumary[] = [];

	articleYears.forEach(currentYear => {
		const articles = formatedProps.filter(
			article => article.createdAt.getFullYear() === currentYear
		);

		const filteredMoths = new Set(
			articles.map(article =>
				new Date(article.createdAt).toLocaleDateString('pt-BR', {
					month: 'long',
				})
			)
		);

		const articleMonts = Array.from(filteredMoths).map(currentMonth => {
			const fountArticleOfTheMonth = articles.filter(
				article =>
					article.createdAt.toLocaleDateString('pt-BR', {
						month: 'long',
						year: 'numeric',
					}) === `${currentMonth} de ${currentYear}`
			);

			return {
				month: `${currentMonth} (${fountArticleOfTheMonth.length})`,
				articles: fountArticleOfTheMonth.map(asdf => ({
					title: asdf.title,
					link: asdf._path,
				})),
			};
		});

		finalResult.push({
			year: `${currentYear} (${articles.length})`,
			months: articleMonts,
		});
	});

	return finalResult;
});
</script>

<template>
	<div class="bg-light-300 dark:bg-slate-700 rounded-md p-3 w-full">
		<details v-for="year in formatedArticleSumary">
			<summary>{{ year.year }}</summary>

			<details v-for="month in year.months" class="ml-2 flex flex-col">
				<summary class="capitalize">{{ month.month }}</summary>

				<NuxtLink
					v-for="ultima in month.articles"
					:to="ultima.link"
					class="ml-5 summary-link"
				>
					{{ ultima.title }}
				</NuxtLink>
			</details>
		</details>
	</div>
</template>

<style scoped>
.summary-link {
	max-height: 52px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>
