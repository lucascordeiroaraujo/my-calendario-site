import React, { ReactElement } from 'react';

import { GetStaticProps, GetStaticPropsContext } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from 'next/head';

import { ProductivityComponent } from '~/modules/home/components/productivity';

export default function IndexPage(): ReactElement {
	return (
		<>
			<Head>
				<title>myCalendário</title>
			</Head>

			<ProductivityComponent />
		</>
	);
}

export const getStaticProps: GetStaticProps = async ({
	locale,
}: GetStaticPropsContext) => ({
	props: {
		...(await serverSideTranslations(locale as string, ['homeProductivity'])),
	},
	revalidate: 10,
});
