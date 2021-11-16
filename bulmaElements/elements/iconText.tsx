import React from 'react';
import { baseElement, iconText } from 'bulmaElementSpecs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Base: React.VFC<baseElement> = ({ icon, text }: baseElement) => (
	<>
		<span className='icon'>
			<FontAwesomeIcon icon={icon} />
		</span>
		<span>{text}</span>
	</>
);

/** Render text with icon
 * @see https://bulma.io/documentation/elements/icon/
 */
const IconText: React.VFC<iconText> = (props: iconText) => {
	// contain `span.icon-text` if used for not button
	return props.inButton ? (
		<Base icon={props.icon} text={props.text} />
	) : (
		<span className='icon-text'>
			<Base icon={props.icon} text={props.text} />
		</span>
	);
};

export { IconText };
