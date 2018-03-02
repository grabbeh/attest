import styled, { keyframes } from 'styled-components'
import { fadeInRightBig } from 'react-animations'

const fadeAnimation = keyframes`${fadeInRightBig}`

const BouncyDiv = styled.div`
  animation: 1s ${fadeAnimation};
`
export default BouncyDiv
