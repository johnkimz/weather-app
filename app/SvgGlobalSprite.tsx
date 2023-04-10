import SvgSprite from '@/components/SvgSprite';
import SvgAdd from '@/components/SvgIcons/Add';
import SvgCloud from '@/components/SvgIcons/Cloud';
import SvgRain from '@/components/SvgIcons/Rain';
import SvgSun from '@/components/SvgIcons/Sun';

export default function SvgGlobalSprite() {
	return (
		<SvgSprite>
			<SvgAdd />
			<SvgCloud />
			<SvgRain />
			<SvgSun />
		</SvgSprite>
	);
}
