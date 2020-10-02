import React, { useContext, useMemo } from 'react';
import merge from 'deepmerge';
import DefaultThemeType from '../../types/DefaultThemeType';

type ThemeProviderTypes<T> = {
	children?: React.ReactNode;
	theme: T;
};

const createTheme = <T extends DefaultThemeType>(defaultTheme: T) => {
	const ThemeContext = React.createContext(defaultTheme);

	const ThemeProvider = ({ children, theme }: ThemeProviderTypes<T>) => {
		return (
			<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
		);
	};

	const useTheme = (providedTheme?: T) => {
		const theme = useContext(ThemeContext);

		const output = useMemo(
			() =>
				theme && providedTheme
					? merge(theme, providedTheme)
					: theme || providedTheme,
			[theme, providedTheme]
		);

		return output;
	};

	return { ThemeProvider, useTheme };
};

export default createTheme;
