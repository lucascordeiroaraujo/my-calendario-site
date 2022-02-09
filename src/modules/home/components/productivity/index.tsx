import React, { ReactElement } from 'react';

import { useTranslation } from 'next-i18next';

import styles from './style.module.scss';

export function ProductivityComponent(): ReactElement {
	const { t } = useTranslation('homeProductivity');

	return (
		<div className="site-container">
			<section className={styles.productivity}>
				<h1
					className={styles['productivity-title']}
					dangerouslySetInnerHTML={{ __html: t('title') }}
				/>

				<button className={styles['productivity-btn']}>{t('button')}</button>

				<div className={styles['productivity-features-list']}>
					<article className={styles['productivity-features-list-feature']}>
						<img
							src="/images/ilustrations/productivity/availability.svg"
							alt={t('features.availability.title')}
							title={t('features.availability.title')}
							className={styles.image}
						/>

						<h1 className={styles.title}>{t('features.availability.title')}</h1>

						<p className={styles.description}>
							{t('features.availability.description')}
						</p>
					</article>

					<article className={styles['productivity-features-list-feature']}>
						<img
							src="/images/ilustrations/productivity/link.svg"
							alt={t('features.link.title')}
							title={t('features.link.title')}
							className={styles.image}
						/>

						<h1 className={styles.title}>{t('features.link.title')}</h1>

						<p className={styles.description}>
							{t('features.link.description')}
						</p>
					</article>

					<article className={styles['productivity-features-list-feature']}>
						<img
							src="/images/ilustrations/productivity/events.svg"
							alt={t('features.events.title')}
							title={t('features.events.title')}
							className={styles.image}
						/>

						<h1 className={styles.title}>{t('features.events.title')}</h1>

						<p className={styles.description}>
							{t('features.events.description')}
						</p>
					</article>
				</div>
			</section>
		</div>
	);
}
