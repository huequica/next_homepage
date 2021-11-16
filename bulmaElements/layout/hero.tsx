import React from 'react';
import { hero, heroParts } from 'bulmaSpecs';

/** Hero classes decider
 * @returns decided classes
 */
const heroStyleDecide = (props: hero, baseClasses: string[]): string[] => {
	const modifiedClasses = baseClasses;
	if (props.color) modifiedClasses.push(`is-${props.color}`);
	if (props.size) modifiedClasses.push(`is-${props.size}`);
	return modifiedClasses;
};

/** Hero contents container
 * @see https://bulma.io/documentation/layout/hero/#fullheight-hero-in-3-parts
 */
const HeroParts: React.VFC<heroParts> = ({ children, position }: heroParts) => (
	<div className={`hero-${position}`}>{children}</div>
);

/** Title( `<section class='hero'>` ) element render
 * @see https://bulma.io/documentation/layout/hero/
 */
const Hero: React.VFC<hero> = (props: hero) => {
	const classNames = heroStyleDecide(props, ['hero']);
	return <section className={classNames.join(' ')}>{props.children}</section>;
};

export { Hero, HeroParts };
