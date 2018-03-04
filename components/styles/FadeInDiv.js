import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const fadeAnimation = keyframes`${fadeIn}`

const FadeInDiv = styled.div.attrs({
  className: 'absolute shadow-4 bg-white'
})`
  animation:  '1s ${fadeAnimation};
  display: ${props => (props.activeFilter === props.title ? '' : 'none')};
`
export default FadeInDiv
