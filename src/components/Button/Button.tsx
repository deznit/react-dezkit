import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from '../../core/Theme/Theming';
import DefaultThemeType from '../../types/DefaultThemeType';
import type ColorType from '../../types/ColorType';

type ButtonProps = {
	shape?: 'rounded' | 'default';
	outline?: boolean;
	color?: ColorType;
	textColor?: string;
	theme?: DefaultThemeType;
};

const StyledButton = styled('button')<ButtonProps>`
	display: inline-block;
	font-weight: 400;
	color: ${(props) =>
		props.textColor ? props.textColor : props.theme.colors.textLight};
	text-align: center;
	vertical-align: middle;
	background-color: ${(props) =>
		props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
	border: 1px solid transparent;
	padding: 0.625rem 1.25rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	transition: all 0.15s ease;
	&:hover {
		box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
		transform: translateY(-1px);
	}
	&:focus {
		outline: none;
	}
	${(props) =>
		props.outline &&
		css`
			background-color: transparent;
			color: ${props.color
				? props.theme.colors[props.color]
				: props.theme.colors.primary};
			border: 1px solid
				${props.color
					? props.theme.colors[props.color]
					: props.theme.colors.primary};
		`}
`;

const Button = () => {
	const theme = useTheme();

	return (
		<StyledButton color="error" outline theme={theme}>
			My Button
		</StyledButton>
	);
};

export default Button;
