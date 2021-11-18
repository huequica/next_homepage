import React from 'react';
import type { iconTextInButton, iconText } from 'bulmaElementSpecs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import is from 'viewLogics/is';

/** Wrap `span.icon` for use button label
 * @see https://bulma.io/documentation/elements/button/#states
 */
const IconTextInButton: React.VFC<iconTextInButton> = (
	props: iconTextInButton,
) => {
	const classNames = ['icon'];
	if (props.size) classNames.push(is(props.size));

	return (
		<>
			<span className={classNames.join(' ')}>
				<FontAwesomeIcon icon={props.icon} />
			</span>
			<span>{props.text}</span>
		</>
	);
};

/** Render text with icon
 * @see https://bulma.io/documentation/elements/icon/
 */
const IconText: React.VFC<iconText> = ({ icon, text }: iconText) => {
	// contain `span.icon-text` if used for not button
	return (
		<span className='icon-text'>
			<IconTextInButton icon={icon} text={text} />
		</span>
	);
};

export { IconTextInButton, IconText };
