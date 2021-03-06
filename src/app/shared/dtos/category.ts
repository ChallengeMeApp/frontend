export const Categories: Category[] = [
	{ name: 'household', display: 'Haus und Hof' },
	{ name: 'physical', display: 'Move, move, move!' },
	{ name: 'education', display: 'Know-How?' },
	{ name: 'selfcare', display: 'Do it for Yourself' },
	{ name: 'noComfortZone', display: 'Raus aus der Komfort-Zone!' },
	{ name: 'social', display: 'Wir - Voll sozial' },
	{ name: 'cooking', display: 'Roberts Koch-Institut' },
	{ name: 'creative', display: 'Kreativer Kopf' },
	{ name: 'eco', display: 'Eco' },
	{ name: 'fun', display: 'Fun' },
];

export function getCategoryByName(name: string): Category | undefined {
	return Categories.find((c) => c.name === name);
}

export interface Category {
	name: string;
	display: string;
}
