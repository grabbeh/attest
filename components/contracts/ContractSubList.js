import react from 'react'
import Contract from './Contract'
import Checkbox from './CheckBox'
import _ from 'underscore'

const items = ['Instructed', 'Drafted', 'Approved', 'Executed']

class ContractSubList extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      originalContracts: [],
      filteredContracts: []
    }
    this.createCheckbox = this.createCheckbox.bind(this)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
    this.createCheckboxes = this.createCheckboxes.bind(this)
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
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label)
    } else {
      this.selectedCheckboxes.add(label)
    }

    let copy = [...this.state.originalContracts]

    let filtered = _.flatten(
      _.values(_.pick(_.groupBy(copy, 'status'), [...this.selectedCheckboxes]))
    )
    this.setState({ filteredContracts: filtered })
  }

  createCheckboxes () {
    return items.map(this.createCheckbox)
  }

  componentWillMount () {
    this.selectedCheckboxes = new Set(items)
    let copy = this.props.data.contracts
    this.setState({ originalContracts: copy })

    let filtered = _.flatten(_.values(_.pick(_.groupBy(copy, 'status'), items)))
    this.setState({ filteredContracts: filtered })
  }

  render () {
    let checkboxes = this.createCheckboxes()
    return (
      <div>
        <div>
          <ul className='list'>{checkboxes}</ul>
        </div>
        <div className='cf' />
        <section className='mh2 mt2 mb3'>
          <ul className='list pa0 ma0'>
            {this.state.filteredContracts.map((contract, index) => (
              <li><Contract {...contract} /></li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}

export default ContractSubList
