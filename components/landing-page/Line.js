import styled, { css } from 'styled-components'

const Line = styled.div.attrs({
  className: 'bb mt1 dark-gray'
})`


${props => props.medium && css`
    width: 50px;
  `}

  ${props => props.short && css`
    width: 25px;
  `}

`
export default Line
