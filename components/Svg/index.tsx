interface ISvg {
	ariaHidden?: boolean;
	ariaLabel?: string;
	className?: string;
	focusable?: boolean;
	use: string;
}

export default function Svg(props: ISvg) {
	const {
		use,
		className,
		focusable = false,
		ariaLabel,
		ariaHidden = true,
	} = props;

	return use ? (
		<svg
			className={className}
			focusable={focusable}
			aria-label={ariaLabel}
			aria-hidden={ariaHidden}
		>
			<use xlinkHref={use} />
		</svg>
	) : null;
}
