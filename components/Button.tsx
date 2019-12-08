import styled, { css, StyledComponent, FlattenSimpleInterpolation } from 'styled-components'

interface ButtonColor {
    color?: string
    hovercolor?: string
}

const Default: FlattenSimpleInterpolation = css`
    display: block;
    font-size: 1.1em;
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background: none;
`

const HighConcentration = 'ee'
const LowConcentration = '56'
const defaultColor = '#666666'
const bluecolor = '#1299bb'

export const Button: StyledComponent<'button', {}> = styled.button<ButtonColor>`
    ${Default}
    width: 180px;
    color: ${({ color = defaultColor }) => color + HighConcentration};
    padding: 12px;
    margin: 0 12px;
    border-radius: 5px;
    border: 2px solid ${({ color = defaultColor }) => color + LowConcentration};
    transition: .3s;
    &:hover {
        color: ${({ hovercolor = bluecolor }) => hovercolor};
        border: 2px solid ${({ hovercolor = bluecolor }) => hovercolor + LowConcentration};
    }
`

export const CloseButton: StyledComponent<'button', {}> = styled.button`
    ${Default}
    position: absolute;
    top: 0;
    right: 0;
    color: #5f6f81;
    margin: 12px 12px 0 0;
    font-size: 1.9em;
    &:after {
        content: '×'
    }
`