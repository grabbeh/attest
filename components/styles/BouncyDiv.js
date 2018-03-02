import styled, { keyframes } from 'styled-components'
import { fadeInRight } from 'react-animations'

const bounceAnimation = keyframes`${fadeInRight}`

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`
export default BouncyDiv
