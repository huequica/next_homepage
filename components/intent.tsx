import React from 'react';
import { intent } from 'localComponentSpecs';
import is from 'viewLogics/is';

const Intent: React.VFC<intent> = ({ children, link, color }: intent) => {
	const classNames = ['button'];
	if (color) classNames.push(is(color));

	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			className={classNames.join(' ')}
		>
			{children}
		</a>
	);
};

export default Intent;
