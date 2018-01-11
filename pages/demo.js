import Page from '../components/Page'
import Link from 'next/link'

const Demo = () => (
  <Page>
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
    <Link prefetch href='add-contract'><a>+contract</a></Link>
  </Page>
)

export default Demo
