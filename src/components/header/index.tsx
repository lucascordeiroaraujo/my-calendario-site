import React, { ReactElement } from 'react';

import Fade from 'react-reveal/Fade';

import { useTranslation } from 'next-i18next';

import Link from 'next/link';

import styles from './style.module.scss';

interface IHeaderProps {
	googleAuthUrl?: string;
}

export function HeaderComponent({ googleAuthUrl }: IHeaderProps): ReactElement {
	const { t } = useTranslation('common');

	const handleRedirectToLogin = (): void => {
		window.location.href = googleAuthUrl || '/';
	};

	return (
		<div className="site-container">
			<header className={styles['site-header']}>
				<Fade>
					<Link href="/">
						<a title={t('homePageTitle')}>
							<img
								src="/images/my-calendario.svg"
								alt={t('siteName')}
								title={t('siteName')}
								className={styles['site-header-logo']}
								width="217"
								height="31"
							/>
						</a>
					</Link>
				</Fade>

				<ul className={styles['site-header-menu']}>
					{googleAuthUrl && (
						<li className={styles['site-header-menu-item']}>
							<button onClick={handleRedirectToLogin} className={styles.login}>
								Login
							</button>
						</li>
					)}
				</ul>
			</header>
		</div>
	);
}
