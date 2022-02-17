import React, { ReactElement } from 'react';

import { useTranslation } from 'next-i18next';

import Link from 'next/link';

import styles from './style.module.scss';

export function FooterComponent(): ReactElement {
	const { t } = useTranslation('common');

	return (
		<div className="site-container">
			<footer className={styles['site-footer']}>
				<p>
					&copy; Copyright {new Date().getFullYear()} - {t('siteName')} -{' '}
				</p>

				<Link href="/privacy-policy">
					<a title="">{t('footer.privacyPolicy')}</a>
				</Link>
			</footer>
		</div>
	);
}
