import react from 'react'
import ContractsList from './ContractsList'
import _ from 'lodash'
import Filter from './Filter'
import SummaryBox from './SummaryBox'
import Title from './Title'
import Header from './Header'
import search from '../../lib/search'
import filter from '../../lib/filterContracts'
import Flex from '../styles/Flex'
import SearchInput from './SearchInput'
import Loading from './Loading'

class ContractsHolder extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
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
      },
      searchTerm: '',
      liveInput: false
    }
  }

  handleSearchInput = event => {
    this.setState({ liveInput: true, searchTerm: event.target.value })
    clearTimeout(timer)
    let timer = setTimeout(() => {
      this.setState({ liveInput: false })
    }, 1000)
  }

  clearSearchTerm = event => this.setState({ searchTerm: '' })

  getSearchResults = (value = '', list) => {
    return search(list, value, {
      keys: [
        'ownerEntity',
        'lawyerName',
        'currentStatus',
        'businessUnit',
        'tags',
        'internalParties',
        'externalParties',
        'statuses.status',
        'assignedTo.firstName',
        'assignedTo.lastName'
      ]
    })
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

  toggleCheckbox = label => {
    this.state.filters
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
    let statusNames = _.map(allStatuses, 'name')
    let currentTags = _.uniq(_.flatten(_.map(contracts, 'tags')))
    let businessUnits = _.uniq(_.flatten(_.map(contracts, 'businessUnit')))
    let lawyers = _.uniq(
      _.flatten(_.map(contracts, 'assignedTo')).map(a => {
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
    this.setState({ loading: false })
  }

  componentDidMount () {
    this.setNewData(this.props.data)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.data.loading) {
      this.setNewData(nextProps.data)
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  render () {
    let { initialValues, filters } = this.state
    let { loading, contracts } = this.props.data
    let { allStatuses, allTags, allBusinessUnits, allLawyers } = this.props.data

    let editFormData = {
      allBusinessUnits,
      allLawyers,
      allTags,
      allStatuses
    }

    const name = 'ACME INC'
    let filteredContracts = filter(filters, contracts)

    if (!this.state.liveInput) {
      filteredContracts = this.getSearchResults(
        this.state.searchTerm,
        filteredContracts
      )
    }

    return (
      <div>
        {this.state.loading || loading
          ? <Loading />
          : <div>
            <Header
              client={this.props.client}
              user={this.props.data.loggedUser}
              />
            <div className='pa3-ns pa0 pt3 '>
              <Flex>
                <div className='w-50-ns w-100'>
                  <Title name={name} />
                </div>
                <div className='w-50-ns w-100'>
                  <SearchInput
                    handleSearchInput={this.handleSearchInput}
                    searchTerm={this.state.searchTerm}
                    clear={this.clearSearchTerm}
                    />
                </div>
              </Flex>
              <Flex>
                <div className='w-50-ns w-100'>
                  <Filter
                    initialValues={initialValues}
                    toggleCheckbox={this.toggleCheckbox}
                    setDate={this.setDate}
                    />
                </div>
                <div className='w-50-ns w-100'>
                  <SummaryBox
                    contracts={filteredContracts}
                    filters={filters}
                    />
                </div>
              </Flex>
              <ContractsList
                contracts={filteredContracts}
                data={editFormData}
                />
            </div>
          </div>}

      </div>
    )
  }
}

export default ContractsHolder
