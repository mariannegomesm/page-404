import { DefaultTheme } from 'styled-components'

const colors = {
	white: '#ffffff',
    black: '#000000',
	purple: '#BF7BFB',
	blue: '#151557',
	blueLight: '#212187',
	blueDark: '#000013',
	gray: {
		100: '#D6D6F2',
		200: '#E2E2F5'
	}
}

const space = {
	s1: '4px',
	s2: '8px',
	s3: '12px',
	s4: '16px',
	s5: '24px',
	s6: '32px',
}

export const theme: DefaultTheme = {
	colors,
	space,
}
