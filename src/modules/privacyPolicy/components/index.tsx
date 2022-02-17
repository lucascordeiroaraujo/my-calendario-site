import React, { ReactElement } from 'react';

import { useTranslation } from 'next-i18next';

import styles from './style.module.scss';

export function PrivacyPolicyComponent(): ReactElement {
	const { t } = useTranslation('privacyPolicy');

	return (
		<div className="site-container">
			<section className={styles['privacy-policy']}>
				<h1 className={styles['privacy-policy-title']}>{t('title')}</h1>

				<div
					className={styles['privacy-policy-description']}
					dangerouslySetInnerHTML={{ __html: t('description') }}
				/>
			</section>
		</div>
	);
}
