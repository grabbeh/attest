import '../../node_modules/react-vis/dist/style.css'
import {
  XYPlot,
  HorizontalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  YAxis,
  XAxis
} from 'react-vis'
import _ from 'lodash'
import Title from '../styles/Title'

export default class Chart extends React.Component {
  render () {
    let d = _.groupBy(this.props.data.contracts, 'currentStatus.name')
    let data = _.values(d).map((value, index) => {
      return {
        y: value[0].currentStatus.name,
        x: value.length,
        color: value[0].currentStatus.color,
        opacity: 1
      }
    })

    return (
      <div className='pa3'>
        <Title text='Charts' />
        <XYPlot
          style={{ paddingRight: 80 }}
          className='mt3'
          yType='ordinal'
          height={200}
          width={300}
          colorType='literal'
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis style={{ fontSize: 16 }} />
          <YAxis orientation='right' style={{ fontSize: 16 }} />
          <HorizontalBarSeries data={data} />
        </XYPlot>
      </div>
    )
  }
}
