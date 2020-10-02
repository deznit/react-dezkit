// import * as React from 'react';
// import styled from '@emotion/styled';

// interface Props {
// 	text: string;
// }

// let StyledDiv = styled.div({
// 	color: 'tomato',
// 	margin: '2em',
// 	padding: '0.5em',
// 	borderWidth: '2px',
// 	borderStyle: 'solid',
// 	borderColor: '#000',
// 	fontSize: '2em',
// 	textAlign: 'center',
// });

// export const ExampleComponent = ({ text }: Props) => {
// 	return <StyledDiv>Example Component: {text}</StyledDiv>;
// };

export { default as Button } from './components/Button/Button';
export { ThemeProvider } from './core/Theme/Theming';
export { default as DefaultLightTheme } from './core/Theme/DefaultLightTheme';
