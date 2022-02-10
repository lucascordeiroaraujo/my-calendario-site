import React, { ReactElement } from 'react';

import Fade from 'react-reveal/Fade';

import Tada from 'react-reveal/Tada';

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
					className={styles.ilustration}
				/>

				<div className={styles['info-container']}>
					<Fade bottom>
						<h1
							className={styles['info-container-title']}
							dangerouslySetInnerHTML={{ __html: t('title') }}
						/>
					</Fade>

					<Fade bottom delay={100}>
						<span className={styles['info-container-separator']} />
					</Fade>

					<Fade bottom delay={200}>
						<p className={styles['info-container-description']}>
							{t('description')}
						</p>
					</Fade>

					<Fade delay={300}>
						<div className={styles['info-container-features']}>
							{i18nEvents().map((item, index) => (
								<Fade key={item.title} delay={parseInt(`${index}00`, 10)}>
									<article
										className={styles['info-container-features-article']}
									>
										<h1 className={styles.title}>{item.title}</h1>

										<p className={styles.description}>{item.description}</p>
									</article>
								</Fade>
							))}
						</div>
					</Fade>

					<div className={styles['info-container-create-account-container']}>
						<Tada>
							<a
								href={(process.env.NEXT_APP_URL as string) || ''}
								title={t('createAccount.title')}
								target="_blank"
								rel="noopener noreferrer"
								className={styles['create-account']}
							>
								{t('createAccount.text')}
							</a>
						</Tada>
					</div>
				</div>
			</div>
		</section>
	);
}
