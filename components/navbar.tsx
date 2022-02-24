import React from 'react';
import Link from 'next/link';
import { Elements } from '@bulma';
import Intent from 'components/intent';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavbar } from 'components/navbar.hooks';

const NavBarItems: React.VFC = () => (
	<div className='navbar-start'>
		<Link href='/about'>
			<a className='navbar-item'>📝About</a>
		</Link>

		<Link href='/dev'>
			<a className='navbar-item'>💻Develop</a>
		</Link>

		<Link href='/works'>
			<a className='navbar-item'>💼Works</a>
		</Link>
	</div>
);

const NavBarEnd: React.VFC = () => (
	<div className='navbar-end'>
		<div className='navbar-item'>
			<Elements.ButtonsGroup>
				<Intent link='https://twitter.com/huequica' color='info'>
					<Elements.IconTextInButton icon={faTwitter} text='@huequica' />
				</Intent>
				<Intent link='https://huequica.hatenadiary.jp/' color='dark'>
					HatenaBlog
				</Intent>
			</Elements.ButtonsGroup>
		</div>
	</div>
);

const NavBar: React.VFC = () => {
	const hooks = useNavbar();

	return (
		<nav className='navbar' role='navigation' aria-label='main navigation'>
			<div className='navbar-brand'>
				<Link href='/'>
					<a className='navbar-item'>huequica.xyz</a>
				</Link>

				<a
					role='button'
					className={hooks.burgerClassName}
					aria-label='menu'
					aria-expanded='false'
					onClick={hooks.toggleNavBarOpen}
				>
					<span aria-hidden='true' />
					<span aria-hidden='true' />
					<span aria-hidden='true' />
				</a>
			</div>

			<div className={hooks.menuClassName}>
				<NavBarItems />
				<NavBarEnd />
			</div>
		</nav>
	);
};

export default NavBar;
