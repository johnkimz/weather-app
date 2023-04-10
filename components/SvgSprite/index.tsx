const SvgSprite = ({ children }: { children: React.ReactNode }) => {
	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="0"
			height="0"
			display="none"
		>
			{children}
		</svg>
	);
};

export default SvgSprite;
