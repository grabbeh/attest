import Line from './Line'
import Break from './Break'

const PageExample = () => (
  <div className='mw6-ns bg-white mw6 mw6-ns shadow-1 pa3'>
    <div className='b mb2 dark-gray'>ACME INC</div>
    <div className='w-70-ns w-100 fl pr2-ns pr0'>
      <div className='bg-light-yellow w-100 pa2'>
        <Line />
        <Line />
        <Line />
        <div className='mt1 fl bg-navy h1 w2' />
        <div className='mt1 fl ml2 h1 w2 bg-red pl2' />
        <div className='cf' />
      </div>
      <div className='mt2 bg-light-yellow w-100 pa2'>
        <Line />
        <Line />
        <Line medium />
        <div className='mt1 fl bg-black h1 w2' />
        <div className='cf' />
      </div>
      <div className='mt2 bg-light-red w-100 pa2'>
        <Line />
        <Line />
        <Line short />
        <div className='mt1 fl bg-navy h1 w2' />
        <div className='mt1 fl ml2 h1 w2 bg-purple pl2' />
        <div className='cf' />
      </div>
      <div className='mt2 bg-green w-100 pa2'>
        <Line />
        <Line />
        <Line />
        <div className='mt1 fl bg-navy h1 w2' />

        <div className='mt1 fl ml2 h1 w2 bg-gray pl2' />
        <div className='cf' />
      </div>
    </div>
    <div className='fl bg-light-gray w-30-ns w-100 mt0-ns mt2 pt1 pa2'>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line medium />
      <Break />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line medium />
      <Line short />
      <Break />
      <Line />
      <Line medium />
      <Line medium />

      <div className='mt3 pa2 bg-dark-blue'>

        <div className='fl w-50 pr2'>
          <div className='h3 bg-light-blue' />
        </div>
        <div className='fl h3  w-50 bg-pink' />
        <div className='cf' />
      </div>
    </div>
    <div className='cf' />
  </div>
)

export default PageExample
