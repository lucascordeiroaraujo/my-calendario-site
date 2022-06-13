import NProgress from 'nprogress';

import React, { ReactElement } from 'react';

import { appWithTranslation } from 'next-i18next';

import { AppProps } from 'next/app';

import Head from 'next/head';

import Router from 'next/router';

import '~/styles/globals.scss';

Router.events.on('routeChangeStart', () => {
	NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	return (
		<>
			<Head>
				<title>myCalendário</title>

				<meta name="author" content="myCalendário" />

				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary" />

				<meta name="twitter:creator" content="@mycalendario" />

				<meta name="msapplication-TileColor" content="#FF3877" />

				<meta name="theme-color" content="#FF3877" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />

				<link rel="preconnect" href="https://fonts.gstatic.com" />

				<link
					href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Montserrat:wght@400;700&family=Roboto:wght@500&display=swap"
					rel="stylesheet"
				/>

				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/images/icons/apple-icon-57x57.png"
				/>

				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/images/icons/apple-icon-60x60.png"
				/>

				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/images/icons/apple-icon-72x72.png"
				/>

				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/images/icons/apple-icon-76x76.png"
				/>

				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/images/icons/apple-icon-114x114.png"
				/>

				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/images/icons/apple-icon-120x120.png"
				/>

				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/images/icons/apple-icon-144x144.png"
				/>

				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/images/icons/apple-icon-152x152.png"
				/>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/icons/apple-icon-180x180.png"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/images/icons/android-icon-192x192.png"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/icons/favicon-32x32.png"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/images/icons/favicon-96x96.png"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/icons/favicon-16x16.png"
				/>
			</Head>

			<Component {...pageProps} />

			<noscript>
				<style
					dangerouslySetInnerHTML={{
						__html: '.react-reveal {opacity: 1}',
					}}
				/>
			</noscript>
		</>
	);
}

export default appWithTranslation(MyApp);
