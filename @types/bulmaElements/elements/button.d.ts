declare module 'bulmaElementSpecs' {
	import React from 'react';
	import { colors } from 'bulmaElementSpecs';
	export interface button {
		// change button color
		// @see https://bulma.io/documentation/elements/button/#colors
		color?: colors;

		// change button style
		// @see https://bulma.io/documentation/elements/button/#styles
		style?: 'outlined' | 'inverted' | 'rounded';

		// size specify
		// @see https://bulma.io/documentation/elements/button/#sizes
		size?: 'small' | 'normal' | 'medium' | 'large';

		isFullWidth?: boolean;

		children: React.ReactNode;
	}

	export interface buttonsGroup {
		// contain buttons specify
		// @see https://bulma.io/documentation/elements/button/#sizes
		size?: 'small' | 'medium' | 'large';

		children: React.ReactNode;
	}
}
