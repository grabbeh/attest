import { curveCatmullRom } from 'd3-shape'
import '../../node_modules/react-vis/dist/style.css'
import {
  XYPlot,
  VerticalBarSeries,
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
        x: value[0].currentStatus.name,
        y: value.length,
        color: value[0].currentStatus.color,
        opacity: 1
      }
    })

    return (
      <div className='pa3'>
        <Title text='Charts' />
        <XYPlot
          className='mt3'
          xType='ordinal'
          height={600}
          width={600}
          colorType='literal'
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={data} />
        </XYPlot>
      </div>
    )
  }
}
