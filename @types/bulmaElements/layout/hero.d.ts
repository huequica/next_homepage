declare module 'bulmaSpecs' {
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
}
