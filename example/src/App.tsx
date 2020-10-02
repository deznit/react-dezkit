import React from 'react';

import { Button, ThemeProvider, DefaultLightTheme } from 'react-dezkit';
import 'react-dezkit/dist/index.css';

const App = () => {
	return (
		<ThemeProvider theme={DefaultLightTheme}>
			<Button></Button>
		</ThemeProvider>
	);
};

export default App;
