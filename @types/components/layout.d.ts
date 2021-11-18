declare module 'localComponentSpecs' {
	import React from 'react';

	export interface layout {
		// control of use margin in layout
		disableMargin?: boolean;

		children: React.ReactNode;
	}
}
