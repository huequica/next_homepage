import React from 'react';
import { layout } from 'localComponentSpecs';
import NavBar from 'components/navbar';

const Layout: React.VFC<layout> = ({ children, disableMargin }: layout) => {
	return (
		<>
			<NavBar />
			{disableMargin ? (
				children
			) : (
				<section className='section'>{children}</section>
			)}
		</>
	);
};

export default Layout;
