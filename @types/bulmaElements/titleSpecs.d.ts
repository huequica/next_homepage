type size = 1 | 2 | 3 | 4 | 5 | 6;

declare module 'bulmaElementSpecs' {
	import React from 'react';

	export interface titleSpecs {
		// size number
		is?: size;
		subTitle?: boolean;
		children: React.ReactNode;
	}
}
