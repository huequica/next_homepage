type columnSizes =
	| 'is-1'
	| 'is-2'
	| 'is-3'
	| 'is-4'
	| 'is-5'
	| 'is-6'
	| 'is-7'
	| 'is-8'
	| 'is-9'
	| 'is-10'
	| 'is-11'
	| 'is-12'
	| 'is-three-quarters'
	| 'is-two-thirds'
	| 'is-half'
	| 'is-one-third'
	| 'is-one-quarter'
	| 'is-full'
	| 'is-four-fifths'
	| 'is-three-fifths'
	| 'is-two-fifths'
	| 'is-one-fifth';

declare module 'bulmaElementSpecs' {
	import React from 'react';

	export interface columnSpecs {
		// Use this props when render containers parent
		isParent?: boolean;

		// Put column size specify if needed
		// @see https://bulma.io/documentation/columns/sizes/
		size?: columnSizes;

		// Require children nodes
		children: React.ReactNode;
	}
}
