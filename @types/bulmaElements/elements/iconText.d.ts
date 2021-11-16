declare module 'bulmaElementSpecs' {
	import { IconDefinition } from '@fortawesome/fontawesome-common-types';

	export interface iconText {
		icon: IconDefinition;
		text: string;
	}

	export interface iconTextInButton extends iconText {
		// specify icon size
		size?: 'small' | 'medium' | 'large';
	}
}
