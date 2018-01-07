import Link from 'next/link'

const Title = ({ name }) => (
  <div className=' bg-haus pa3 mr3-ns mr0 mb3 b shadow-4'>
    <div>
      <span className='w-50 f3'> {name}</span>
      <span className='mt1 fr'>
        <Link href='/add-contract'>
          <i title='Add contract' className='pointer fa fa-plus fa-lg' />
        </Link>
      </span>
    </div>
  </div>
)

export default Title
