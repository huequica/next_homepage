import React from 'react';
import { button, buttonsGroup } from 'bulmaElementSpecs';
import is from 'viewLogics/is';
/**
 * button component
 * @see https://bulma.io/documentation/elements/button
 */
const Button: React.VFC<button> = (props: button) => {
	const classNames = ['button'];
	if (props.size) classNames.push(is(props.size));
	if (props.style) classNames.push(is(props.style));
	if (props.color) classNames.push(is(props.color));
	if (props.isFullWidth) classNames.push(is('fullwidth'));

	return <button className={classNames.join(' ')}>{props.children}</button>;
};

/**
 * Button group container
 * @see https://bulma.io/documentation/elements/button/#sizes
 */
const ButtonsGroup: React.VFC<buttonsGroup> = ({ size }: buttonsGroup) => {
	const classNames = ['buttons'];
	if (size) classNames.push(`are-${size}`);

	return <div className={classNames.join(' ')}></div>;
};

export { Button, ButtonsGroup };
