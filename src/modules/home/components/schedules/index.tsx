import React, { ReactElement } from 'react';

import Fade from 'react-reveal/Fade';

import { useTranslation } from 'next-i18next';

import styles from './style.module.scss';

export function SchedulesComponent(): ReactElement {
	const { t } = useTranslation('homeSchedules');

	const i18nEvents = (): Array<{
		title: string;
		description: string;
	}> => t('articles', { returnObjects: true });

	return (
		<section className={styles.schedules}>
			<div className={`site-container ${styles['schedules-container']}`}>
				<img
					src="/images/ilustrations/schedules/zen.svg"
					alt={t('title')}
					title={t('title')}
					className={styles['schedules-ilustration']}
				/>

				<div className={styles['schedules-info-container']}>
					<Fade bottom>
						<h1
							className={styles['schedules-info-container-title']}
							dangerouslySetInnerHTML={{ __html: t('title') }}
						/>
					</Fade>

					<Fade bottom delay={100}>
						<span className={styles['schedules-info-container-separator']} />
					</Fade>

					<Fade bottom delay={200}>
						<p>{t('description')}</p>
					</Fade>

					<Fade delay={300}>
						<div className={styles['schedules-info-container-features']}>
							{i18nEvents().map((item, index) => (
								<Fade key={item.title} delay={parseInt(`${index}00`, 10)}>
									<article
										className={
											styles['schedules-info-container-features-article']
										}
									>
										<h1 className={styles.title}>{item.title}</h1>

										<p className={styles.description}>{item.description}</p>
									</article>
								</Fade>
							))}
						</div>
					</Fade>
				</div>
			</div>
		</section>
	);
}
