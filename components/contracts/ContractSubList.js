import react from 'react'
import Contract from './Contract'
import Checkbox from './CheckBox'
import _ from 'underscore'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

const invalidDate = moment('fsdfsdf')
if (invalidDate.isValid) {
  console.log('Date is valid')
}

class ContractSubList extends react.Component {
  constructor (props) {
    super(props)
    let { contracts } = this.props.data
    let statuses = _.uniq(
      _.flatten(_.pluck(contracts, 'currentStatus'))
    ).reverse()
    let tags = _.uniq(_.flatten(_.pluck(contracts, 'tags')))
    let businessUnits = _.uniq(_.flatten(_.pluck(contracts, 'businessUnit')))
    this.state = {
      originalContracts: contracts,
      filteredContracts: _.flatten(
        _.values(_.pick(_.groupBy(contracts, 'currentStatus'), statuses))
      ),
      initialValues: {
        statuses: statuses,
        dateRange: {
          start: '',
          finish: ''
        },
        tags: tags,
        businessUnits: businessUnits
      },
      filters: {
        statuses: statuses,
        dateRange: {
          start: '',
          finish: ''
        },
        tags: [],
        businessUnits: businessUnits
      },
      error: {
        finishBeforeStart: false
      }
    }
    this.statuses = new Set(statuses)
    this.tags = new Set()
    this.businessUnits = new Set(businessUnits)
    this.createCheckbox = this.createCheckbox.bind(this)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
    this.createCheckboxes = this.createCheckboxes.bind(this)
    this.updateFilterState = this.updateFilterState.bind(this)
    this.filterContracts = this.filterContracts.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.updateSet = this.updateSet.bind(this)
  }

  updateFilterState (filterName, content) {
    let { filters } = this.state
    filters[filterName] = content
    this.setState({ filters: filters })
  }

  updateSet (set, label) {
    if (set.has(label)) {
      set.delete(label)
    } else {
      set.add(label)
    }
    return [...set]
  }

  handleDateChange (e) {
    let { name, value } = e.target
    let dateRange = {}
    if (name === 'start') {
      dateRange.start = value
      dateRange.finish = this.state.filters.dateRange.finish
    }
    if (name === 'finish') {
      dateRange.finish = value
      dateRange.start = this.state.filters.dateRange.start
    }
    if (
      moment(dateRange.finish, 'DD/MM/YYYY').isBefore(
        dateRange.start,
        'DD/MM/YYYY'
      )
    ) {
      let { error } = this.state
      error.finishBeforeStart = true
      this.setState({ error: error })
    } else {
      let { error } = this.state
      error.finishBeforeStart = false
      this.setState({ error: error })
    }
    this.updateFilterState('dateRange', dateRange)
    this.filterContracts(this.state.filters)
  }

  filterContracts (filters) {
    let copy = [...this.state.originalContracts]
    let { tags, businessUnits, statuses, dateRange } = filters

    // tag filters
    if (tags.length > 0) {
      copy = _.uniq(
        _.flatten(
          tags.map(t => {
            return copy.filter(c => {
              return c.tags.includes(t)
            })
          })
        )
      )
    }

    // business unit filter
    copy = _.flatten(
      _.values(_.pick(_.groupBy(copy, 'businessUnit'), businessUnits))
    )

    // date filter

    if (
      moment(dateRange.start, 'DD/MM/YYYY').isValid() &&
      moment(dateRange.finish, 'DD/MM/YYYY').isValid()
    ) {
      let { start, finish } = dateRange
      start = moment(start, 'DD/MM/YYYY')
      finish = moment(finish, 'DD/MM/YYYY')
      const range = moment.range(start, finish)
      copy = _.filter(copy, s => {
        let latestDate = moment(_.last(s.statuses).date)
        return range.contains(latestDate)
      })
    }
    // status filter
    copy = _.flatten(
      _.values(_.pick(_.groupBy(copy, 'currentStatus'), statuses))
    )
    this.setState({ filteredContracts: copy })
  }

  createCheckbox (label, checked) {
    return (
      <Checkbox
        checked={checked}
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
      />
    )
  }

  toggleCheckbox (label) {
    let { statuses, tags, businessUnits } = this.state.initialValues
    if (statuses.includes(label)) {
      this.updateFilterState('statuses', this.updateSet(this.statuses, label))
      this.filterContracts(this.state.filters)
    }

    if (tags.includes(label)) {
      this.updateFilterState('tags', this.updateSet(this.tags, label))
      this.filterContracts(this.state.filters)
    }

    if (businessUnits.includes(label)) {
      this.updateFilterState(
        'businessUnits',
        this.updateSet(this.businessUnits, label)
      )
      this.filterContracts(this.state.filters)
    }
  }

  createCheckboxes (arr, bool) {
    return arr.map(a => {
      return this.createCheckbox(a, bool)
    })
  }

  render () {
    let { filteredContracts } = this.state
    let { statuses, tags, businessUnits } = this.state.initialValues
    let s = this.createCheckboxes(statuses, true)
    let t = this.createCheckboxes(tags, false)
    let b = this.createCheckboxes(businessUnits, true)

    return (
      <div className='pa2'>
        <div className='fl mt1'>
          <ul className='ma0 pa0 list'>{s}</ul>
        </div>
        <div className='cf' />
        <div className='fl mt1'>
          <ul className='ma0 pa0 list'>{t}</ul>
        </div>
        <div className='cf' />
        <div className='fl mt1'>
          <ul className='ma0 pa0 list'>{b}</ul>
        </div>
        <div className='cf' />
        <div>
          <form>
            <input
              value={this.state.filters.dateRange.start}
              name='start'
              placeholder='DD/MM/YYYY'
              onChange={this.handleDateChange}
              type='text'
            />
            <input
              value={this.state.filters.dateRange.finish}
              name='finish'
              placeholder='DD/MM/YYYY'
              onChange={this.handleDateChange}
              type='text'
            />
          </form>
        </div>
        <div>
          {this.state.error.finishBeforeStart &&
            <div>End date is before the start date</div>}
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
