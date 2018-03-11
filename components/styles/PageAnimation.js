import styled from 'styled-components'

const PageAnimation = styled.div.attrs({
  className: 'ml2 ml0-l w-100'
})`
transform: translateX(${props => (props.showMenu ? '60px' : '0px')});
transition: transform .3s ease-in;
`

export default PageAnimation
