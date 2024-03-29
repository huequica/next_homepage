import React from 'react';
import uniq from 'lodash/uniq';
import Head from 'next/head';
import type { meta } from 'localComponentSpecs';

const Meta: React.VFC<meta> = (props: meta) => {
	const title = props.title || 'huequica.xyz';
	// eslint-disable-next-line quotes
	const description = props.description || "Haru_Yakumo's Profile Site";
	let keywords = props.keyword || [];
	keywords.push('huequica', 'Haru_Yakumo', '八雲はる');
	keywords = uniq(keywords);

	return (
		<Head>
			<title>{title}</title>
			<meta property='og:description' content={description} />
			<meta name='keywords' content={keywords.join(',')} />
		</Head>
	);
};

export default Meta;
