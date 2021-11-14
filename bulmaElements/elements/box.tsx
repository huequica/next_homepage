import React from 'react';
import { box } from 'bulmaElementSpecs';
/**
 * Element contain box component
 * @see https://bulma.io/documentation/elements/box/
 */
const Box: React.VFC<box> = ({ children }: box) => (
	<div className='box'>{children}</div>
);

export { Box };
