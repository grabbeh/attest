// import Page from '../components/Page'
import Link from 'next/link'
import withData from '../lib/withData'
import Bare from '../components/contracts/Bare'
import AddContract from '../components/contracts/AddContract'

const Demo = withData(props => <AddContract />)

export default Demo
