declare module 'localComponentSpecs' {
	import React from 'react';

	export interface intent {
		children: React.ReactNode;
		link: string;
		color?: 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';
	}
}
