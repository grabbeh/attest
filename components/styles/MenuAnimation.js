import styled from 'styled-components'

const MenuAnimation = styled.div.attrs({
  className: 'ph3 pt4 bg-dark-gray height front fixed'
})`
transform: translateX(${props => (props.showMenu ? '0px' : '-60px')});
transition: transform .3s ease-in;
`

export default MenuAnimation
