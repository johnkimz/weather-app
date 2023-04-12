import Svg from '@/components/Svg';
import styles from './styles.module.css';
import Add from './add';

const Navigation = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.visuallyhidden} aria-hidden="true">
				Weather App
			</h1>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					<Svg use="#g-svg-logo" className={styles.logo} />
					<button>Edit</button>
					<Add />
				</nav>
			</div>
		</header>
	);
};

export default Navigation;
