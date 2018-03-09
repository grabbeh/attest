import styled from 'styled-components'

const FadeInDiv = styled.div`
opacity: ${props => (!props.error ? 0 : 1)};
transition: opacity .5s ease-in;
`
export default FadeInDiv
