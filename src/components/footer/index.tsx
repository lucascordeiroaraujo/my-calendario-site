import React, { ReactElement } from 'react';

import { useTranslation } from 'next-i18next';

import styles from './style.module.scss';

export function FooterComponent(): ReactElement {
	const { t } = useTranslation('common');

	return (
		<div className="site-container">
			<footer className={styles['site-footer']}>
				<p>
					&copy; Copyright {new Date().getFullYear()} - {t('siteName')}
				</p>
			</footer>
		</div>
	);
}
