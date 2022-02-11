import React, { ReactElement } from 'react';

import { GetStaticProps, GetStaticPropsContext } from 'next';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from 'next/head';

import { HeaderComponent } from '~/components/header';

import { ComplexComponent } from '~/modules/home/components/complex';

import { ProductivityComponent } from '~/modules/home/components/productivity';

import { SchedulesComponent } from '~/modules/home/components/schedules';

import { authGetGoogleAuthUrl } from '~/modules/home/services/get-google-url.service';

export default function IndexPage({
	googleAuthUrl,
}: {
	googleAuthUrl: string;
}): ReactElement {
	const { t } = useTranslation('home');

	return (
		<>
			<Head>
				<title>{t('seo.title')}</title>
			</Head>

			<HeaderComponent googleAuthUrl={googleAuthUrl} />

			<ProductivityComponent />

			<SchedulesComponent />

			<ComplexComponent />
		</>
	);
}

export const getStaticProps: GetStaticProps = async ({
	locale,
}: GetStaticPropsContext) => {
	const googleAuthUrl = await authGetGoogleAuthUrl();

	return {
		props: {
			googleAuthUrl,
			...(await serverSideTranslations(locale as string, [
				'common',
				'home',
				'homeProductivity',
				'homeSchedules',
				'homeComplex',
			])),
		},
		revalidate: 10,
	};
};
