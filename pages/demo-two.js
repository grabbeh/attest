import Page from '../components/Page'
import Link from 'next/link'

const Demo = () => (
  <Page>
    <div className='pa4'>
      <div className='flex flex-wrap'>
        <div className='ba bg-white h4 w-25-l w-100'>Test</div>
        <div className='ba bg-white h4 w-25-l w-100'>Test</div>
        <div className='ba bg-white h4 w-25-l w-100'>Test</div>
        <div className='ba bg-white h4 w-25-l w-100'>Test</div>
      </div>
    </div>
    <Link href='/demo'><a>Demo</a></Link>
  </Page>
)

export default Demo
