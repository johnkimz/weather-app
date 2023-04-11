import SvgSprite from '@/components/SvgSprite';
import SvgAdd from '@/components/SvgIcons/Add';
import SvgClose from '@/components/SvgIcons/Close';
import SvgCloud from '@/components/SvgIcons/Cloud';
import SvgLogo from '@/components/SvgIcons/Logo';
import SvgRain from '@/components/SvgIcons/Rain';
import SvgSun from '@/components/SvgIcons/Sun';

const SvgGlobalSprite = () => {
	return (
		<SvgSprite>
			<SvgAdd />
			<SvgClose />
			<SvgCloud />
			<SvgLogo />
			<SvgRain />
			<SvgSun />
		</SvgSprite>
	);
};

export default SvgGlobalSprite;
