import styled, { css } from 'styled-components'

const theme = {
    colors: {
        background: '#f6f5f5',

        primary: '#ffff',
        secondary: '#d3e0ea',

        text: '#383E71'
    },

    sizes: {
        xsmall: '1rem',
        small: '1.2rem',
        normal: '2.4rem',
        large: '2.4rem',
        xlarge: '3.2rem',
        xxlarge: '4rem'
    },

    breakpoints: {
        small: '48em', // 768px
        medium: '64em', // 1024px
        large: '85.375em', // 1366px
        xlarge: '120em', // 1920px
        xxlarge: '160em' // 2560px
    }
}

export default theme

export type HeadingProps = {
    color?: keyof typeof theme.colors
    size?: keyof typeof theme.sizes
    fontWeight?: 100 | 400 | 700
    lineHeight?: string | number
    level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
    as: `h${level}`
}))<HeadingProps>`
    ${({
        color = 'white',
        size = 'normal',
        fontWeight = 700,
        lineHeight = 1.5
    }) => css`
        font-size: ${theme.sizes[size]}
        color: ${theme.sizes[color]}
        font-weight: ${fontWeight}
        font-height: ${lineHeight}
    `}
`
