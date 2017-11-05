import react from 'react'
import Contract from './Contract'
import Checkbox from './CheckBox'
import _ from 'underscore'
import Moment from 'moment'
import HideToggle from './Hide'
import { extendMoment } from 'moment-range'
import DatePicker from 'react-datepicker'

const moment = extendMoment(Moment)

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
          startDate: null,
          endDate: null
        },
        tags: tags,
        businessUnits: businessUnits
      },
      filters: {
        statuses: statuses,
        dateRange: {
          startDate: null,
          endDate: null
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
    this.updateSet = this.updateSet.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.resetDates = this.resetDates.bind(this)
  }

  handleChangeStart (date) {
    let dateRange = {}
    dateRange.startDate = date
    this.updateFilterState('dateRange', dateRange)
  }

  handleChangeEnd (date) {
    let dateRange = {}
    dateRange.endDate = date
    dateRange.startDate = this.state.filters.dateRange.startDate
    this.updateFilterState('dateRange', dateRange)
    if (dateRange.endDate.isBefore(dateRange.startDate)) {
      let { error } = this.state
      error.finishBeforeStart = true
      this.setState({ error: error })
    } else {
      let { error } = this.state
      error.finishBeforeStart = false
      this.setState({ error: error })
      this.filterContracts(this.state.filters)
    }
  }

  resetDates () {
    let dateRange = {}
    dateRange.endDate = null
    dateRange.startDate = null
    this.updateFilterState('dateRange', dateRange)
    this.filterContracts(this.state.filters)
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
      dateRange.startDate &&
      dateRange.startDate.isValid() &&
      dateRange.endDate &&
      dateRange.endDate.isValid()
    ) {
      let { startDate, endDate } = dateRange
      const range = moment.range(startDate, endDate)
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

    return (
      <div className='pa3'>
        <div className='outline pa3'>
          <div className='b'>Filters</div>
          <HideToggle title='Statuses'>
            <div className='mt2'>
              <ul className='ma0 pa0 list'>
                {this.createCheckboxes(statuses, true)}
              </ul>
            </div>
          </HideToggle>
          <div className='cf' />
          <HideToggle title='Tags'>
            <div className='mt2'>
              <ul className='ma0 pa0 list'>
                {this.createCheckboxes(tags, false)}
              </ul>
            </div>
          </HideToggle>

          <div className='cf' />
          <HideToggle title='Business Units'>
            <div className='mt2'>
              <ul className='ma0 pa0 list'>
                {this.createCheckboxes(businessUnits, true)}
              </ul>
            </div>
          </HideToggle>
          <div className='cf' />
          <HideToggle title='Dates'>
            <div className='fl mt2'>
              <div className='fl mr2'>
                <DatePicker
                  className=' w4 tc pointer'
                  selected={this.state.filters.dateRange.startDate}
                  selectsStart
                  startDate={this.state.filters.dateRange.startDate}
                  endDate={this.state.filters.dateRange.endDate}
                  onChange={this.handleChangeStart}
                  placeholderText='Start date'
                  showMonthDropdown
                  dateFormat='DD/MM/YYYY'
                />
              </div>

              <div className='fl mr2'>
                <DatePicker
                  className=' w4 tc pointer'
                  selected={this.state.filters.dateRange.endDate}
                  selectsEnd
                  startDate={this.state.filters.dateRange.startDate}
                  endDate={this.state.filters.dateRange.endDate}
                  onChange={this.handleChangeEnd}
                  placeholderText='End date'
                  showMonthDropdown
                  dateFormat='DD/MM/YYYY'
                />
              </div>

              <div onClick={this.resetDates} className='fl'>
                <i className='pointer fa fa-window-close-o fa-lg gray' />
              </div>

            </div>
          </HideToggle>
          <div className='cf' />
          <div>
            {this.state.error.finishBeforeStart &&
              <div>End date is before the start date</div>}
          </div>
        </div>

        {filteredContracts.length > 0
          ? <div>
            <div className='cf' />
            <section className='mt3 mb4'>
              <ul className='list pa0 ma0 flex flex-wrap'>
                {filteredContracts.map((contract, index) => (
                  <li key={contract.id}>
                    <Contract {...contract} />
                  </li>
                  ))}
              </ul>
            </section>
          </div>
          : <div className='mt2'>No matching contracts</div>}
      </div>
    )
  }
}

export default ContractSubList
