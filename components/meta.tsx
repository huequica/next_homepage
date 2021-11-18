import React from 'react';
import Head from 'next/head';
import { meta } from 'localComponentSpecs';

const Meta: React.VFC<meta> = (props: meta) => {
	const title = props.title || 'huequica.xyz';
	// eslint-disable-next-line quotes
	const description = props.description || "Haru_Yakumo's Profile Site";
	const keywords = props.keyword || [];

	return (
		<Head>
			<title>{title}</title>
			<meta property='og:description' content={description} />
			<meta name='keywords' content={keywords.join(',')} />
		</Head>
	);
};

export default Meta;
