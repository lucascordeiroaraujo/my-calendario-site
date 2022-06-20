import React, { ReactElement, useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';

import OutsideClickHandler from 'react-outside-click-handler';

import Fade from 'react-reveal/Fade';

import { useTranslation } from 'next-i18next';

import Link from 'next/link';

import styles from './style.module.scss';

interface IHeaderProps {
	showMenu?: boolean;
	googleAuthUrl?: string;
}

export function HeaderComponent({
	showMenu = true,
	googleAuthUrl,
}: IHeaderProps): ReactElement {
	const { t } = useTranslation('common');

	const [openedMenuMobile, setOpenedMenuMobile] = useState(false);

	const handleToggleMenuMobile = (): void =>
		setOpenedMenuMobile(!openedMenuMobile);

	const menuClass = (): string => {
		const menuClasses = [styles['site-header-menu']];

		if (openedMenuMobile) {
			menuClasses.push(styles['menu-mobile-opened']);
		}

		return menuClasses.join(' ');
	};

	const handleCloseMenuMobile = (): void => setOpenedMenuMobile(false);

	return (
		<div className="site-container">
			<header className={styles['site-header']}>
				<Fade>
					<Link href="/">
						<a title={t('homePageTitle')}>
							<img
								src="/images/my-calendario.svg"
								alt={t('siteName')}
								title={t('siteName')}
								className={styles['site-header-logo']}
								width="217"
								height="31"
							/>
						</a>
					</Link>
				</Fade>

				<OutsideClickHandler onOutsideClick={handleCloseMenuMobile}>
					{!openedMenuMobile ? (
						<FaBars
							onClick={handleToggleMenuMobile}
							className={styles['site-header-menu-mobile']}
						/>
					) : (
						<FaTimes
							onClick={handleToggleMenuMobile}
							className={styles['site-header-menu-mobile']}
						/>
					)}

					{showMenu && (
						<ul className={menuClass()}>
							{googleAuthUrl && (
								<li className={styles['site-header-menu-item']}>
									<a
										href={`${(process.env.NEXT_APP_URL as string) || ''}/${t(
											'loginLink'
										)}`}
										title={t('header.menu.login.title')}
										className={styles.login}
									>
										{t('header.menu.login.label')}
									</a>
								</li>
							)}

							<li className={styles['site-header-menu-item']}>
								<a
									href={`${(process.env.NEXT_APP_URL as string) || ''}/${t(
										'registerLink'
									)}`}
									title={t('header.menu.register.title')}
									className={styles.register}
								>
									{t('header.menu.register.label')}
								</a>
							</li>
						</ul>
					)}
				</OutsideClickHandler>
			</header>
		</div>
	);
}
