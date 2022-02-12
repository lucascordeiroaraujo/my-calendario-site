import React, { ReactElement } from 'react';

import { useTranslation } from 'next-i18next';

import { SectionDescriptionComponent } from '~/modules/home/components/section-description';

import styles from './style.module.scss';

export function ComplexComponent(): ReactElement {
	const { t } = useTranslation('homeComplex');

	return (
		<section className={styles.complex}>
			<div className={`site-container ${styles['complex-container']}`}>
				<SectionDescriptionComponent
					title={t('title')}
					description={t('description')}
					theme="light"
					showCreateAccount
				/>

				<img
					src="/images/ilustrations/complex/time.svg"
					alt={t('title')}
					title={t('title')}
					className={styles['complex-ilustration']}
					width="437"
					height="346"
				/>
			</div>
		</section>
	);
}
