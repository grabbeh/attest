import react from 'react'
import ContractsList from './ContractsList'
import _ from 'lodash'
import Filter from './Filter'
import SummaryBox from './SummaryBox'
import Title from './Title'
import search from '../../lib/search'
import filter from '../../lib/filterContracts'
import Flex from '../styles/Flex'
import SearchInput from './SearchInput'
import Loading from '../general/Loading'
import HideToggle from '../general/Hide'
import cn from 'classnames'

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
        lawyers: [],
        expiryDateSearch: false
      },
      searchTerm: '',
      liveInput: false,
      activeMenu: false
    }
  }

  toggleExpiryDateSearch = bool => {
    let { filters } = this.state
    filters.expiryDateSearch = bool
    this.setState({ filters })
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
    return search(list, value)
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
    let { statuses, tags, businessUnits, lawyers } = this.state.initialValues
    statuses = statuses.map(s => {
      return { filter: s, type: 'status', category: 'statuses' }
    })

    tags = tags.map(t => {
      return { filter: t, type: 'tag', category: 'tags' }
    })

    businessUnits = businessUnits.map(b => {
      return { filter: b, type: 'businessUnit', category: 'businessUnits' }
    })

    lawyers = lawyers.map(l => {
      return { filter: l, type: 'lawyer', category: 'lawyers' }
    })

    let filters = _.concat(statuses, tags, businessUnits, lawyers)
    filters.forEach(f => {
      if (f.filter === label) {
        this.updateFilterState(
          f.category,
          this.updateSet(this.set[f.category], label)
        )
      }
    })
  }

  setNewData = data => {
    let {
      contracts,
      currentStatuses,
      currentTags,
      currentBusinessUnits,
      currentLawyers
    } = data

    let initialValues = {
      statuses: currentStatuses,
      tags: currentTags,
      businessUnits: currentBusinessUnits,
      lawyers: currentLawyers
    }
    this.setState({ initialValues })

    this.set = {
      statuses: new Set(),
      tags: new Set(),
      businessUnits: new Set(),
      lawyers: new Set()
    }

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

  render () {
    let { initialValues, filters } = this.state
    if (!this.props.data.loading) {
      let { contracts } = this.props.data
      let {
        statuses,
        tags,
        businessUnits,
        lawyers,
        name
      } = this.props.data.masterEntity

      let editFormData = {
        businessUnits,
        lawyers,
        tags,
        statuses
      }

      let filteredContracts = filter(filters, contracts)

      if (this.state.searchTerm.length > 0 && !this.state.liveInput) {
        filteredContracts = this.getSearchResults(
          this.state.searchTerm,
          filteredContracts
        )
      }
      return (
        <div>

          <div className='pa3-ns pa0 pt3'>
            <Flex>
              <div className='w-50-ns w-100'>
                <Title name={name} />
              </div>
              <div className='h-100 w-50-ns w-100'>
                <SearchInput
                  handleSearchInput={this.handleSearchInput}
                  searchTerm={this.state.searchTerm}
                  clear={this.clearSearchTerm}
                />
              </div>
            </Flex>
            <Flex>
              <div className='h-100 w-50-ns w-100'>
                <Filter
                  initialValues={initialValues}
                  toggleCheckbox={this.toggleCheckbox}
                  setDate={this.setDate}
                  toggleExpiryDateSearch={this.toggleExpiryDateSearch}
                />
              </div>
              <div className='w-50-ns w-100'>
                <SummaryBox contracts={filteredContracts} filters={filters} />
              </div>
            </Flex>
            <ContractsList contracts={filteredContracts} data={editFormData} />
          </div>
        </div>
      )
    }
    return <Loading />
  }
}

export default ContractsHolder
