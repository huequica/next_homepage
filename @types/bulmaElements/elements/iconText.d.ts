declare module 'bulmaElementSpecs' {
	import { IconDefinition } from '@fortawesome/fontawesome-common-types';
	export interface baseElement {
		icon: IconDefinition;
		text: string;
	}

	export interface iconText {
		icon: IconDefinition;
		text: string;
		inButton?: boolean;
	}
}
