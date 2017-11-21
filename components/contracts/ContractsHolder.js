import react from 'react'
import ContractsList from './ContractsList'
import _ from 'underscore'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import Filter from './Filter'

const moment = extendMoment(Moment)

class ContractsHolder extends react.Component {
  constructor (props) {
    super(props)
    let { contracts } = this.props.data
    /* let statuses = _.uniq(
      _.flatten(_.pluck(contracts, 'currentStatus'))
    ).reverse() */
    let statuses = ['Instructed', 'Drafted', 'Approved', 'Executed']
    let tags = _.uniq(_.flatten(_.pluck(contracts, 'tags')))
    let businessUnits = _.uniq(_.flatten(_.pluck(contracts, 'businessUnit')))
    this.state = {
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
  }

  handleChangeStart = date => {
    let dateRange = {}
    dateRange.startDate = date
    this.updateFilterState('dateRange', dateRange)
  }

  handleChangeEnd = date => {
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
      this.filterContracts(this.state.filters, this.props.data.contracts)
    }
  }

  resetDates = () => {
    let dateRange = {}
    dateRange.endDate = null
    dateRange.startDate = null
    this.updateFilterState('dateRange', dateRange)
    this.filterContracts(this.state.filters, this.props.data.contracts)
  }

  updateFilterState = (filterName, content) => {
    let { filters } = this.state
    filters[filterName] = content
    this.setState({ filters: filters })
  }

  updateSet = (set, label) => {
    if (set.has(label)) {
      set.delete(label)
    } else {
      set.add(label)
    }
    return [...set]
  }

  filterContracts = (filters, contracts) => {
    let copy = contracts
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

    // date filters
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
    return copy
  }

  toggleCheckbox = label => {
    let { statuses, tags, businessUnits } = this.state.initialValues
    if (statuses.includes(label)) {
      this.updateFilterState('statuses', this.updateSet(this.statuses, label))
    }

    if (tags.includes(label)) {
      this.updateFilterState('tags', this.updateSet(this.tags, label))
    }

    if (businessUnits.includes(label)) {
      this.updateFilterState(
        'businessUnits',
        this.updateSet(this.businessUnits, label)
      )
    }
  }

  render () {
    let { initialValues, filters } = this.state
    let { contracts, statuses, lawyers, tags } = this.props.data
    let filteredContracts = this.filterContracts(filters, contracts)
    return (
      <div className='bg--dark-gray pa3'>
        <Filter
          initialValues={initialValues}
          startDate={filters.dateRange.startDate}
          endDate={filters.dateRange.endDate}
          handleChangeStart={this.handleChangeStart}
          handleChangeEnd={this.handleChangeEnd}
          resetDates={this.resetDates}
          error={this.state.error}
          toggleCheckbox={this.toggleCheckbox}
        />
        <ContractsList
          filteredContracts={filteredContracts}
          statuses={statuses}
          lawyers={lawyers}
          tags={tags}
        />
      </div>
    )
  }
}

export default ContractsHolder
