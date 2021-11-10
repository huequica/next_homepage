import React from 'react';
import { columnSpecs } from 'bulmaElementSpecs';

/**
 * Column を構築するための Component
 * @see https://bulma.io/documentation/columns/basics/
 */
const Column: React.VFC<columnSpecs> = (props: columnSpecs) => {
	const classNames = [props.isParent ? 'columns' : 'column'];

	if (props.size) classNames.push(props.size);

	return <div className={classNames.join(' ')}>{props.children}</div>;
};

export default Column;
