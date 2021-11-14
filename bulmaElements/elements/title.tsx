import React from 'react';
import { title } from 'bulmaElementSpecs';

/**
 * Title( `<h1>` ) element render
 * @see https://bulma.io/documentation/elements/title/
 */
const Title: React.VFC<title> = (props: title) => {
	const contents = props.children;
	const titleClasses = [props.subTitle ? 'subtitle' : 'title'];

	// size specification
	titleClasses.push(props.is ? `is-${props.is}` : 'is-3');

	return <h1 className={titleClasses.join(' ')}>{contents}</h1>;
};

export { Title };
