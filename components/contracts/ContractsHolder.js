import react from 'react'
import ContractsList from './ContractsList'
import _ from 'underscore'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import Filter from './Filter'
import SummaryBox from './SummaryBox'
import Title from './Title'

const moment = extendMoment(Moment)

class ContractsHolder extends react.Component {
  constructor (props) {
    super(props)
    let { contracts, statuses, lawyers, tags } = this.props.data
    let statusNames = _.pluck(statuses, 'name')
    let data = { lawyers, statuses, tags }
    /* let statuses = _.uniq(
      _.flatten(_.pluck(contracts, 'currentStatus'))
    ).reverse() */
    let existingTags = _.uniq(_.flatten(_.pluck(contracts, 'tags')))
    let businessUnits = _.uniq(_.flatten(_.pluck(contracts, 'businessUnit')))
    this.state = {
      filteredContracts: _.flatten(
        _.values(_.pick(_.groupBy(contracts, 'currentStatus'), statusNames))
      ),
      initialValues: {
        statuses: statusNames,
        tags: existingTags,
        businessUnits: businessUnits
      },
      filters: {
        statuses: statusNames,
        dateRange: {
          startDate: null,
          endDate: null
        },
        tags: [],
        businessUnits: businessUnits
      }
    }
    this.statuses = new Set(statusNames)
    this.tags = new Set()
    this.businessUnits = new Set(businessUnits)
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
    let data = { lawyers, statuses, tags }
    const name = 'ACME INC'
    let filteredContracts = this.filterContracts(filters, contracts)
    return (
      <div className='bg-peach pa3'>
        <Title name={name} />
        <div className='flex flex-wrap'>
          <Filter
            initialValues={initialValues}
            toggleCheckbox={this.toggleCheckbox}
            setDate={this.setDate}
          />
          <SummaryBox
            contracts={filteredContracts}
            total={filteredContracts.length}
          />
        </div>
        <ContractsList contracts={filteredContracts} data={data} />
      </div>
    )
  }
}

export default ContractsHolder
