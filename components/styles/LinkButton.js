import Link from 'next/link'

const LinkButton = ({ url, text }) => (
  <div className='link pv2 ph3 br2 grow bg-green white shadow-4'>
    <Link href={url}><a>{text}</a></Link>
  </div>
)

export default LinkButton
