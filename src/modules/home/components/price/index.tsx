import React, { ReactElement } from 'react';

import { FaCheck } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';

import { useTranslation } from 'next-i18next';

import styles from './style.module.scss';

export function PriceComponent(): ReactElement {
	const { t } = useTranslation('homePrice');

	const i18nPlans = (): Array<{
		title: string;
		price: string;
		itens: Array<string>;
	}> => t('plans', { returnObjects: true });

	return (
		<div className="site-container">
			<section className={styles.price}>
				<h1 className={styles['price-title']}>
					{t('title')}

					<span />
				</h1>

				{i18nPlans().map(plan => (
					<Fade key={plan.title}>
						<article className={styles['price-box-plan']}>
							<div className={styles.plan}>
								<h1 className={styles['plan-name']}>{plan.title}</h1>

								<div className={styles['plan-price']}>
									<span dangerouslySetInnerHTML={{ __html: plan.price }} />
								</div>

								<ul className={styles['plan-itens']}>
									{plan.itens.map(item => (
										<li key={item} className={styles.item}>
											<FaCheck /> {item}
										</li>
									))}
								</ul>
							</div>

							<a
								href={`${(process.env.NEXT_APP_URL as string) || ''}/?register`}
								className={styles['price-box-plan-btn-buy']}
							>
								{t('createAccount')}
							</a>
						</article>
					</Fade>
				))}
			</section>
		</div>
	);
}
