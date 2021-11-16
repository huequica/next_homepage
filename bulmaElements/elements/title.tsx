import React from 'react';
import { title } from 'bulmaElementSpecs';
import is from 'viewLogics/is';

/**
 * Title( `<h1>` ) element render
 * @see https://bulma.io/documentation/elements/title/
 */
const Title: React.VFC<title> = (props: title) => {
	const contents = props.children;
	const titleClasses = [props.subTitle ? 'subtitle' : 'title'];

	// size specification
	if (props.is) titleClasses.push(is(props.is));

	return <h1 className={titleClasses.join(' ')}>{contents}</h1>;
};

export { Title };
