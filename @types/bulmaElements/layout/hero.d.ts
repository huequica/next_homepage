declare module 'bulmaElementSpecs' {
	import React from 'react';
	export interface hero {
		// change hero color
		// @see https://bulma.io/documentation/layout/hero/#colors
		color?: 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';

		// size specification
		// @see https://bulma.io/documentation/layout/hero/#sizes
		size?:
			| 'small'
			| 'medium'
			| 'large'
			| 'halfheight'
			| 'fullheight'
			| 'fullheight-with-navbar';

		children: React.ReactNode;
	}

	export interface heroParts {
		// contain position
		// @see https://bulma.io/documentation/layout/hero/#fullheight-hero-in-3-parts
		position: 'head' | 'body' | 'foot';

		children: React.ReactNode;
	}
}
