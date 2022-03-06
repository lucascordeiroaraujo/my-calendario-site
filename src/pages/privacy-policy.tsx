import React, { ReactElement } from 'react';

import { GetStaticProps, GetStaticPropsContext } from 'next';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import dynamic from 'next/dynamic';

import Head from 'next/head';

import { HeaderComponent as HeaderComponentType } from '~/components/header';

const HeaderComponent = dynamic(() =>
	import('~/components/header').then(lib => lib.HeaderComponent as any)
) as typeof HeaderComponentType;

const PrivacyPolicyComponent = dynamic(() =>
	import('~/modules/privacyPolicy/components').then(
		lib => lib.PrivacyPolicyComponent as any
	)
);

export default function PrivacyPolicyPage(): ReactElement {
	const { t } = useTranslation('privacyPolicy');

	return (
		<>
			<Head>
				<title>{t('seo.title')}</title>
			</Head>

			<HeaderComponent showMenu={false} />

			<PrivacyPolicyComponent />
		</>
	);
}

export const getStaticProps: GetStaticProps = async ({
	locale,
}: GetStaticPropsContext) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'common',
			'privacyPolicy',
		])),
	},
	revalidate: 60,
});
