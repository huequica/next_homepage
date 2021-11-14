import React from 'react';
import { button } from 'bulmaElementSpecs';

/**
 * button component
 * @see https://bulma.io/documentation/elements/button
 */
const Button: React.VFC<button> = (props: button) => {
	const classNames = ['button'];
	if (props.size) classNames.push(`is-${props.size}`);
	if (props.style) classNames.push(`is-${props.style}`);
	if (props.color) classNames.push(`is-${props.color}`);

	return <button className={classNames.join(' ')}>{props.children}</button>;
};

export { Button };
