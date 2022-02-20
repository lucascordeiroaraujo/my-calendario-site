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
							<a
								href="https://app.mycalendario.com.br/"
								title={t('header.menu.login.title')}
								className={styles.login}
							>
								{t('header.menu.login.label')}
							</a>
						</li>
					)}

					<li className={styles['site-header-menu-item']}>
						<a
							href="https://app.mycalendario.com.br/?register"
							title={t('header.menu.register.title')}
							className={styles.register}
						>
							{t('header.menu.register.label')}
						</a>
					</li>
				</ul>
			</header>
		</div>
	);
}
