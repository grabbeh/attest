import posed from 'react-pose'
import { tween } from 'popmotion'

const FadeBox = posed.div({
  visible: { height: '100%', transition: tween },
  hidden: { height: '0', transition: tween }
})

export default FadeBox
