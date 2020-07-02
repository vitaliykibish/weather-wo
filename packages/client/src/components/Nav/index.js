import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const Nav = ({ items, activeItem }) => {
	return (
		<nav className={styles.nav}>
			{items.map(({ value, label }) => (
				<Link
					key={value}
					to={`/${value}`}
					className={`${styles.tab} ${value === activeItem ? styles.selected : ''}`}>
					{label}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
