export interface Portfolio {
	image: string;
	type: String;
	mask?: Mask;
}

export interface Mask {
	title: String;
	subTitle: String;
}

export interface PortfolioFilter {
	type: string;
	name: string;
}
