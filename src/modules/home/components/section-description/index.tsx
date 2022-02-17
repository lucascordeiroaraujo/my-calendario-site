import React, { HTMLAttributes, ReactElement } from 'react';

import Fade from 'react-reveal/Fade';

import Tada from 'react-reveal/Tada';

import { useTranslation } from 'next-i18next';

import styles from './style.module.scss';

interface ISectionDescriptionProps extends HTMLAttributes<ReactElement> {
	title: string;
	description: string;
	theme: 'light' | 'dark';
	showCreateAccount?: boolean;
}

export function SectionDescriptionComponent({
	title,
	description,
	theme,
	showCreateAccount = false,
	children,
}: ISectionDescriptionProps): ReactElement {
	const { t } = useTranslation('common');

	const infoContainerClasses = (): string => {
		const classes = [styles['info-container']];

		classes.push(styles[`theme-${theme}`]);

		return classes.join(' ');
	};

	return (
		<div className={infoContainerClasses()}>
			<Fade bottom>
				<h1
					className={styles['info-container-title']}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
			</Fade>

			<Fade bottom delay={100}>
				<span className={styles['info-container-separator']} />
			</Fade>

			<Fade bottom delay={200}>
				<p>{description}</p>
			</Fade>

			{showCreateAccount && (
				<div className={styles['info-container-create-account-container']}>
					<Tada>
						<a
							href={(process.env.NEXT_APP_URL as string) || ''}
							title={t('createAccount.title')}
							className={styles['create-account']}
						>
							{t('createAccount.text')}
						</a>
					</Tada>
				</div>
			)}

			{children}
		</div>
	);
}
