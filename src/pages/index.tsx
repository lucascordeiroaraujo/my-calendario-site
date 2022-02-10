import React, { ReactElement } from 'react';

import { GetStaticProps, GetStaticPropsContext } from 'next';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from 'next/head';

import { HeaderComponent } from '~/components/header';

import { ProductivityComponent } from '~/modules/home/components/productivity';

import { SchedulesComponent } from '~/modules/home/components/schedules';

export default function IndexPage(): ReactElement {
	const { t } = useTranslation('common');

	return (
		<>
			<Head>
				<title>{t('siteName')}</title>
			</Head>

			<HeaderComponent />

			<ProductivityComponent />

			<SchedulesComponent />
		</>
	);
}

export const getStaticProps: GetStaticProps = async ({
	locale,
}: GetStaticPropsContext) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'common',
			'homeProductivity',
			'homeSchedules',
		])),
	},
	revalidate: 10,
});
