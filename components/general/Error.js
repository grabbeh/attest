import cn from 'classnames'
import FadeInDivTwo from '../styles/FadeInDivTwo'

const Error = ({ error }) => (
  <FadeInDivTwo error={error}>
    <div
      className={cn(
        !error && 'dn',
        'mt3 bg-white b--blue ba bw1 dark-gray b shadow-4 ph3 pv2'
      )}
    >
      {error}
    </div>
  </FadeInDivTwo>
)

export default Error
