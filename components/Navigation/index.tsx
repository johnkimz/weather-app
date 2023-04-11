import Svg from '@/components/Svg';
import styles from './styles.module.css';

const Navigation = () => {
	console.log(styles);
	return (
		<header className={styles.header}>
			<h1 className={styles.visuallyhidden} aria-hidden="true">
				Weather App
			</h1>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					<Svg use="#g-svg-logo" className={styles.logo} />
					<button>Edit</button>
				</nav>
			</div>
		</header>
	);
};

export default Navigation;
