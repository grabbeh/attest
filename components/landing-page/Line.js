import styled from 'tachyons-components'

const Line = styled('div')`
bb mt1 dark-gray  
${props => (props.short ? 'w1' : '')}
${props => (props.medium ? 'w2' : '')}
`

export default Line
