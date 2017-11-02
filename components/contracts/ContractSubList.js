import react from 'react'
import Contract from './Contract'
import Checkbox from './CheckBox'
import _ from 'underscore'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

const statuses = ['Instructed', 'Drafted', 'Approved', 'Executed']

class ContractSubList extends react.Component {
  constructor (props) {
    super(props)
    let { contracts } = this.props.data
    console.log(contracts)
    this.state = {
      originalContracts: contracts,
      filteredContracts: _.flatten(
        _.values(_.pick(_.groupBy(contracts, 'currentStatus'), statuses))
      ),
      isToggleOn: false
    }
    this.createCheckbox = this.createCheckbox.bind(this)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
    this.createCheckboxes = this.createCheckboxes.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  createCheckbox (label) {
    return (
      <Checkbox
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
      />
    )
  }

  toggleCheckbox (label) {
    if (this.selectedStatuses.has(label)) {
      this.selectedStatuses.delete(label)
    } else {
      this.selectedStatuses.add(label)
    }
    let copy = [...this.state.originalContracts]
    // filter for statuses
    let statusFiltered = _.flatten(
      _.values(
        _.pick(_.groupBy(copy, 'currentStatus'), [...this.selectedStatuses])
      )
    )
    //  this.setState({ filteredContracts: statusFiltered })
    // filter for tags
    // filter for dates

    const now = new Date()
    const sixMonthsAgo = moment().subtract(1, 'y')
    const range = moment.range(sixMonthsAgo, now)
    // need to filter on click of button, not just subsequent clicks
    // SEPARATE OUT FILTER FN AND HAVE TRIGGER ON BOTH DATE TOGGLE AND STATUS CHANGE
    if (this.state.isToggleOn) {
      let dateFiltered = _.filter(statusFiltered, s => {
        let latestDate = moment(_.last(s.statuses).date)
        return range.contains(latestDate)
      })
      console.log(dateFiltered)
      this.setState({ filteredContracts: dateFiltered })
    } else {
      this.setState({ filteredContracts: statusFiltered })
    }
  }

  createCheckboxes () {
    return statuses.map(this.createCheckbox)
  }

  componentWillMount () {
    this.selectedStatuses = new Set(statuses)
  }

  render () {
    let checkboxes = this.createCheckboxes()
    let { filteredContracts } = this.state
    return (
      <div className='pa2'>
        <div className='fl mt1'>
          <ul className='ma0 pa0 list'>{checkboxes}</ul>
        </div>
        <div className='cf' />
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        </div>
        <div className='cf' />
        <section className='mt2 mb4'>
          <ul className='list pa0 ma0'>
            {filteredContracts.map((contract, index) => (
              <li key={contract.id}><Contract {...contract} /></li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}

export default ContractSubList
