import DefaultLightTheme from './DefaultLightTheme';

import createTheme from './ThemeProvider';

export const { ThemeProvider, useTheme } = createTheme(DefaultLightTheme);
