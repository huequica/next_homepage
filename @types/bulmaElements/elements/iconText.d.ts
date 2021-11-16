declare module 'bulmaElementSpecs' {
	export interface baseElement {
		icon: any; // あとで変える
		text: string;
	}

	export interface iconText {
		icon: any; // あとで変える
		text: string;
		inButton?: boolean;
	}
}
