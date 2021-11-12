import React from 'react';
import { titleSpecs } from 'bulmaElementSpecs';

const Title: React.VFC<titleSpecs> = (props: titleSpecs) => {
	const contents = props.children;
	const titleClasses = [props.subTitle ? 'subtitle' : 'title'];

	// size specification
	titleClasses.push(props.is ? `is-${props.is}` : 'is-3');

	return <h1 className={titleClasses.join(' ')}>{contents}</h1>;
};

export { Title };
