import React, { ReactElement } from 'react';

import Fade from 'react-reveal/Fade';

import { useTranslation } from 'next-i18next';

import Link from 'next/link';

import styles from './style.module.scss';

export function HeaderComponent(): ReactElement {
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
							/>
						</a>
					</Link>
				</Fade>
			</header>
		</div>
	);
}
