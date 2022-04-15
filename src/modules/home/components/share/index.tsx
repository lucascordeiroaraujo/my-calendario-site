import React, { ReactElement } from 'react';

import CountUp from 'react-countup';

import { useTranslation } from 'next-i18next';

import { SectionDescriptionComponent } from '~/modules/home/components/section-description';

import styles from './style.module.scss';

export function ShareComponent(): ReactElement {
	const { t } = useTranslation('homeShare');

	const i18nNumbers = (): Array<{
		title: string;
		total: number;
		duration: number;
	}> => t('numbers', { returnObjects: true });

	return (
		<section className={styles.share}>
			<div className={`site-container ${styles['share-container']}`}>
				<img
					src="/images/ilustrations/share/time.svg"
					alt={t('title')}
					title={t('title')}
					className={styles['share-ilustration']}
					width="284"
					height="327"
				/>

				<SectionDescriptionComponent
					title={t('title')}
					description={t('description')}
					theme="dark"
				>
					<div className={styles['share-numbers']}>
						{i18nNumbers().map(item => (
							<div key={item.title} className={styles['share-numbers-item']}>
								<strong>
									<CountUp
										end={item.total}
										separator="."
										duration={item.duration}
									/>
								</strong>

								<p dangerouslySetInnerHTML={{ __html: item.title }} />
							</div>
						))}
					</div>
				</SectionDescriptionComponent>
			</div>
		</section>
	);
}
