import React, { ReactElement } from 'react';

import Fade from 'react-reveal/Fade';

import Tada from 'react-reveal/Tada';

import { useTranslation } from 'next-i18next';

import styles from './style.module.scss';

export function ComplexComponent(): ReactElement {
	const { t } = useTranslation('homeComplex');

	return (
		<section className={styles.complex}>
			<div className={`site-container ${styles['complex-container']}`}>
				<div className={styles['complex-info-container']}>
					<Fade bottom>
						<h1
							className={styles['complex-info-container-title']}
							dangerouslySetInnerHTML={{ __html: t('title') }}
						/>
					</Fade>

					<Fade bottom delay={100}>
						<span className={styles['complex-info-container-separator']} />
					</Fade>

					<Fade bottom delay={200}>
						<p className={styles['complex-info-container-description']}>
							{t('description')}
						</p>
					</Fade>

					<div
						className={
							styles['complex-info-container-create-account-container']
						}
					>
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
