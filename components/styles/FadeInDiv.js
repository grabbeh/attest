import styled from 'styled-components'

const FadeInDiv = styled.div.attrs({
  className: 'absolute shadow-4 bg-white'
})`
 
  display: ${props => (props.activeFilter === props.title ? '' : 'none')};
`
export default FadeInDiv
/*
opacity: ${props => (props.activeFilter !== props.title ? 0 : 1)};
transition: opacity .5s ease-in; */
