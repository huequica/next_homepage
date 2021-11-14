import React from 'react';
import { box } from 'bulmaElementSpecs';

const Box: React.VFC<box> = ({ children }: box) => (
	<div className='box'>{children}</div>
);

export { Box };
