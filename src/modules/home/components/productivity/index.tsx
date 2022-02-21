import React, { ReactElement } from 'react';

import Fade from 'react-reveal/Fade';

import Tada from 'react-reveal/Tada';

import { useTranslation } from 'next-i18next';

import styles from './style.module.scss';

export function ProductivityComponent(): ReactElement {
	const { t } = useTranslation('homeProductivity');

	return (
		<div className="site-container">
			<section className={styles.productivity}>
				<Fade bottom>
					<h1
						className={styles['productivity-title']}
						dangerouslySetInnerHTML={{ __html: t('title') }}
					/>
				</Fade>

				<Tada>
					<a
						href={`${(process.env.NEXT_APP_URL as string) || ''}/?register`}
						title={t('button')}
						className={styles['productivity-btn']}
					>
						{t('button')}
					</a>
				</Tada>

				<div className={styles['productivity-features-list']}>
					<Fade delay={100}>
						<article className={styles['productivity-features-list-feature']}>
							<img
								src="/images/ilustrations/productivity/availability.svg"
								alt={t('features.availability.title')}
								title={t('features.availability.title')}
								className={styles.image}
								width="117"
								height="128"
							/>

							<h1 className={styles.title}>
								{t('features.availability.title')}
							</h1>

							<p className={styles.description}>
								{t('features.availability.description')}
							</p>
						</article>
					</Fade>

					<Fade delay={200}>
						<article className={styles['productivity-features-list-feature']}>
							<img
								src="/images/ilustrations/productivity/link.svg"
								alt={t('features.link.title')}
								title={t('features.link.title')}
								className={styles.image}
								width="91"
								height="128"
							/>

							<h1 className={styles.title}>{t('features.link.title')}</h1>

							<p className={styles.description}>
								{t('features.link.description')}
							</p>
						</article>
					</Fade>

					<Fade delay={300}>
						<article className={styles['productivity-features-list-feature']}>
							<img
								src="/images/ilustrations/productivity/events.svg"
								alt={t('features.events.title')}
								title={t('features.events.title')}
								className={styles.image}
								width="136"
								height="128"
							/>

							<h1 className={styles.title}>{t('features.events.title')}</h1>

							<p className={styles.description}>
								{t('features.events.description')}
							</p>
						</article>
					</Fade>
				</div>
			</section>
		</div>
	);
}
