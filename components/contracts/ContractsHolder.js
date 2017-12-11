import react from 'react'
import ContractsList from './ContractsList'
import _ from 'underscore'
import __ from 'lodash'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import Filter from './Filter'
import SummaryBox from './SummaryBox'
import Title from './Title'
import Header from './Header'

const moment = extendMoment(Moment)

class ContractsHolder extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      filteredContracts: [],
      initialValues: {
        statuses: [],
        tags: [],
        businessUnits: [],
        lawyers: []
      },
      filters: {
        statuses: [],
        dateRange: {
          startDate: null,
          endDate: null
        },
        tags: [],
        businessUnits: [],
        lawyers: []
      }
    }
  }

  setDate = content => {
    this.updateFilterState('dateRange', content)
  }

  updateFilterState = (filterName, content) => {
    let { filters } = this.state
    filters[filterName] = content
    this.setState({ filters })
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
    let copy = __.cloneDeep(contracts)
    let { tags, businessUnits, statuses, dateRange, lawyers } = filters

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

    // lawyer filter
    let copyWithLawyers = copy.map(c => {
      let lawyerName = `${c.assignedTo.firstName} ${c.assignedTo.lastName}`
      c.lawyerName = lawyerName
      return c
    })
    copy = _.flatten(
      _.values(_.pick(_.groupBy(copyWithLawyers, 'lawyerName'), lawyers))
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
    let { statuses, tags, businessUnits, lawyers } = this.state.initialValues
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
    if (lawyers.includes(label)) {
      this.updateFilterState('lawyers', this.updateSet(this.lawyers, label))
    }
  }

  setNewData = data => {
    let { contracts, allStatuses } = data
    let statusNames = _.pluck(allStatuses, 'name')
    let currentTags = _.uniq(_.flatten(_.pluck(contracts, 'tags')))
    let businessUnits = _.uniq(_.flatten(_.pluck(contracts, 'businessUnit')))
    let lawyers = _.uniq(
      _.flatten(_.pluck(contracts, 'assignedTo')).map(a => {
        return `${a.firstName} ${a.lastName}`
      })
    )
    let initialValues = {
      statuses: statusNames,
      tags: currentTags,
      businessUnits,
      lawyers
    }
    this.setState({ initialValues })
    this.updateFilterState('statuses', statusNames)
    this.updateFilterState('businessUnits', businessUnits)
    this.updateFilterState('lawyers', lawyers)

    this.statuses = new Set(statusNames)
    this.tags = new Set()
    this.businessUnits = new Set(businessUnits)
    this.lawyers = new Set(lawyers)
  }

  componentWillReceiveProps (nextProps) {
    this.setNewData(nextProps.data)
  }

  render () {
    let { initialValues, filters } = this.state
    const name = 'ACME INC'
    let filteredContracts = this.filterContracts(
      filters,
      this.props.data.contracts
    )
    return (
      <div ref='root'>
        {this.props.data.loading
          ? <div>Loading...</div>
          : <div>
            <Header
              client={this.props.client}
              user={this.props.data.loggedUser}
              />
            <div className='bg--blue-gray pa3-ns pt3 pa0'>
              <Title name={name} />
              <ul className='list ma0 pa0 flex flex-wrap'>
                <li className='w-50-ns w-100'>
                  <Filter
                    initialValues={initialValues}
                    toggleCheckbox={this.toggleCheckbox}
                    setDate={this.setDate}
                    />
                </li>
                <li className='w-50-ns w-100'>
                  <SummaryBox
                    contracts={filteredContracts}
                    filters={filters}
                    />
                </li>
              </ul>
              <ContractsList
                contracts={filteredContracts}
                data={this.props.data}
                />
            </div>
          </div>}

      </div>
    )
  }
}

export default ContractsHolder
