import react from 'preact-compat'
import Meta from './Meta'

export default ({ children }) => (
  <div>
    <Meta />
    {children}
  </div>
)
