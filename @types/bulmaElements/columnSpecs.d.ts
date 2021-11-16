type columnSize =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| 'three-quarters'
	| 'two-thirds'
	| 'half'
	| 'one-third'
	| 'one-quarter'
	| 'full'
	| 'four-fifths'
	| 'three-fifths'
	| 'two-fifths'
	| 'one-fifth';

declare module 'bulmaElementSpecs' {
	import React from 'react';

	export interface column {
		// Use this props when render containers parent
		isParent?: boolean;

		// Put column size specify if needed
		// @see https://bulma.io/documentation/columns/sizes/
		size?: columnSize;

		// Require children nodes
		children: React.ReactNode;
	}
}
