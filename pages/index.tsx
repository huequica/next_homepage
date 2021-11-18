/* eslint-disable quotes */
import React from 'react';
import type { NextPage } from 'next';
import Layout from 'components/layout';
import * as Bulma from '@bulma';

const IndexPage: NextPage = () => (
	<Layout disableMargin>
		<Bulma.Layout.Hero color='info' size='fullheight-with-navbar'>
			<Bulma.Layout.HeroParts position='body'>
				<Bulma.Elements.Title>
					{"Haru Yakumo's Portfolio Site"}
				</Bulma.Elements.Title>
			</Bulma.Layout.HeroParts>
		</Bulma.Layout.Hero>
	</Layout>
);

export default IndexPage;
