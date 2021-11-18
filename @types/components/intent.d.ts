declare module 'localComponentSpecs' {
	import React from 'react';
	import { colors } from 'bulmaElementSpecs';
	export interface intent {
		children: React.ReactNode;
		link: string;
		color?: colors;
	}
}
