import React, { ReactElement } from 'react';

import { GetStaticProps, GetStaticPropsContext } from 'next';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import dynamic from 'next/dynamic';

import Head from 'next/head';

import { HeaderComponent as HeaderComponentType } from '~/components/header';

import { authGetGoogleAuthUrl } from '~/modules/home/services/get-google-url.service';

const FooterComponent = dynamic(() =>
	import('~/components/footer').then(lib => lib.FooterComponent as any)
);

const HeaderComponent = dynamic(() =>
	import('~/components/header').then(lib => lib.HeaderComponent as any)
) as typeof HeaderComponentType;

const ComplexComponent = dynamic(() =>
	import('~/modules/home/components/complex').then(
		lib => lib.ComplexComponent as any
	)
);

const ProductivityComponent = dynamic(() =>
	import('~/modules/home/components/productivity').then(
		lib => lib.ProductivityComponent as any
	)
);

const SchedulesComponent = dynamic(() =>
	import('~/modules/home/components/schedules').then(
		lib => lib.SchedulesComponent as any
	)
);

const ShareComponent = dynamic(() =>
	import('~/modules/home/components/share').then(
		lib => lib.ShareComponent as any
	)
);

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

			<ShareComponent />

			<FooterComponent />
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
				'homeShare',
			])),
		},
		revalidate: 10,
	};
};
