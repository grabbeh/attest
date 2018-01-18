// import Page from '../components/Page'
import Link from 'next/link'
import Header from '../components/contracts/Header'
import withData from '../lib/withData'

const Demo = () => (
  <div>
    <div className='pa4'>
      <div className='flex flex-wrap'>
        <div className='ba bg-red h4 w-25-ns w-100'>Test</div>
        <div className='ba bg-red h4 w-25-ns w-100'>Test</div>
        <div className='ba bg-red h4 w-25-ns w-100'>Test</div>
        <div className='ba bg-red h4 w-25-ns w-100'>Test</div>
      </div>
    </div>
    <div className='mr3'>
      <Link href='demo-two'><a>Demo Two</a></Link>
    </div>
    <Link href='add-contract'><a>+contract</a></Link>
  </div>
)

export default Demo
