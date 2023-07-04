import { $themeConfig } from '../theme.config';
import { useAppStore } from '@/stores/index';

export default {
	init() {
		const store = useAppStore();
		let val: any = localStorage.getItem('theme'); // light, dark
		val = val || $themeConfig.theme;
		store.toggleTheme(val);
	}
};
