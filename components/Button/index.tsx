import styles from './styles.module.css';
import cn from 'classnames';

interface IButton {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	type?: 'default' | 'icon';
}

const Button = (props: IButton) => {
	const { children, className, type = 'default', onClick } = props;

	return (
		<button
			className={cn(styles.btn, { [styles.icon]: type === 'icon' }, className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
