import style from "./MainPage.module.css";
import Search from "../../component/Search/Search";
import RecipePanel from "../../component/RecipePanel/RecipePanel";
import FilterPanel from "../../component/FilterPanel/FilterPanel";
import Card from "../../component/Card/Card";

const ingridient = [
	{ name: "Сливки", amount: 200 },
	{ name: "Тесто", amount: 300 },
	{ name: "Ягоды", amount: 150 },
	{ name: "Ягоды", amount: 450 },
	{ name: "Ягоды", amount: 550 },
	{ name: "Ягоды", amount: 650 },
	{ name: "Ягоды", amount: 750 },
	{ name: "Ягоды", amount: 850 },
	{ name: "Ягоды", amount: 550 },
	{ name: "Ягоды", amount: 650 },
	{ name: "Ягоды", amount: 750 },
	{ name: "Ягоды", amount: 850 },
];

const recipe = {
	ingredients: [
		"пекинская капуста",
		"куриное филе",
		"свежие огурцы",
		"вареные яйца",
		"кукуруза",
		"соль",
		"перец",
		"майонез",
	],
	recipe: [
		{ image_path: "/src/image/", "step-1": "Пекинскую капусту порезать" },
		{
			image_path: "/src/image/",
			"step-2":
				"Добавить порезанную небольшими кубиками курицу, нарезанные соломкой огурцы и измельченные яйца.",
		},
		{ image_path: "/src/image/", "step-3": "Всыпать кукурузу." },
		{
			image_path: "/src/image/",
			"step-4":
				"Посолить, поперчить, заправить майонезом и перемешать. Приятного апетита.",
		},
	],
	_id: "5fd9ddcbbe4bdd1a68ffd54a",
	recipe_name: "Салат из курицы совсем новый ))",
	category: "Салаты",
	description: "Вкусный, легкий и простой в приготовлении ",
	__v: 0,
};

export default function MainPage() {
	return (
		<>
			<Search />
			<RecipePanel />
			<FilterPanel />
			<ul className={style.list}>
				<li>
					<Card name={"Рецепт торта"} ingridient={ingridient} />
				</li>
			</ul>
		</>
	);
}
