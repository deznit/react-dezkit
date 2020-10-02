export interface ColorType {
	primary: string;
	secondary: string;
	accent: string;
	textDark: string;
	textLight: string;
	disabled: string;
	muted: string;
	background: string;
	success: string;
	error: string;
}
interface DefaultThemeType {
	colors: ColorType;
	borderRadius: string;
}
export default DefaultThemeType;
