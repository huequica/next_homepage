declare module 'bulmaElementSpecs' {
	import React from 'react';

	export interface columnSpecs {
		// Use this props when render containers parent
		isParent?: boolean;

		// Put column size specify if needed
		// @see https://bulma.io/documentation/columns/sizes/
		size?: string;

		// Require children nodes
		children: React.ReactNode;
	}
}
