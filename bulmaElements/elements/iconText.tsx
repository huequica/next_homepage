import React from 'react';
import { iconTextInButton, iconText } from 'bulmaElementSpecs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import is from 'viewLogics/is';

/** Wrap `span.icon` for use button label
 * @see https://bulma.io/documentation/elements/button/#states
 */
const IconTextInButton: React.VFC<iconTextInButton> = ({
	icon,
	text,
	size,
}: iconTextInButton) => {
	const classNames = ['icon'];
	if (size) classNames.push(is(size));

	return (
		<>
			<span className={classNames.join(' ')}>
				<FontAwesomeIcon icon={icon} />
			</span>
			<span>{text}</span>
		</>
	);
};

/** Render text with icon
 * @see https://bulma.io/documentation/elements/icon/
 */
const IconText: React.VFC<iconText> = (props: iconText) => {
	// contain `span.icon-text` if used for not button
	return (
		<span className='icon-text'>
			<IconTextInButton icon={props.icon} text={props.text} />
		</span>
	);
};

export { IconTextInButton, IconText };
