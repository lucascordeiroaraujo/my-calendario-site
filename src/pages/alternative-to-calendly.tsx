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

const PriceComponent = dynamic(() =>
	import('~/modules/home/components/price').then(
		lib => lib.PriceComponent as any
	)
);

export default function AlternativeToCalendlyPage({
	googleAuthUrl,
}: {
	googleAuthUrl: string;
}): ReactElement {
	const { t } = useTranslation('calendly');

	return (
		<>
			<Head>
				<title>{t('seo.title')}</title>

				<meta name="description" content={t('seo.description')} />

				<link rel="canonical" href="https://www.mycalendario.com.br" />

				<meta name="generator" content={t('seo.description')} />

				<meta name="keywords" content={t('seo.keywords')} />

				<meta property="og:title" content={t('seo.title')} />

				<meta property="og:site_name" content={t('seo.title')} />

				<meta property="og:url" content="https://www.mycalendario.com.br" />

				<meta property="og:image" content="/images/social.png" />

				<meta property="og:description" content={t('seo.description')} />

				<meta name="twitter:title" content={t('seo.title')} />

				<meta name="twitter:url" content="https://www.mycalendario.com.br" />

				<meta name="twitter:image:src" content="/images/social.png" />

				<meta name="twitter:description" content={t('seo.description')} />

				<meta itemProp="name" content={t('seo.title')} />

				<meta itemProp="description" content={t('seo.description')} />

				<meta itemProp="image" content="/images/social.png" />
			</Head>

			<HeaderComponent googleAuthUrl={googleAuthUrl} />

			<ProductivityComponent />

			<SchedulesComponent />

			<ComplexComponent />

			<ShareComponent />

			<PriceComponent />

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
				'calendly',
				'homeProductivity',
				'homeSchedules',
				'homeComplex',
				'homeShare',
				'homePrice',
			])),
		},
		revalidate: 10,
	};
};
