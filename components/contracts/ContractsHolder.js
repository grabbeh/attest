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
      contracts: props.contracts,
      initialValues: {
        statuses: props.currentStatuses,
        tags: props.currentTags,
        businessUnits: props.currentBusinessUnits,
        lawyers: props.currentLawyers
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
        selectedDateOption: 'GENERAL'
      },
      searchTerm: '',
      liveInput: false,
      activeMenu: false
    }
    this.set = {
      statuses: new Set(),
      tags: new Set(),
      businessUnits: new Set(),
      lawyers: new Set()
    }
  }

  selectDateOption = s => {
    let { filters } = this.state
    filters.selectedDateOption = s.name
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

  componentWillReceiveProps (nextProps) {
    this.setState({ contracts: nextProps.contracts })
  }

  toggleCheckbox = label => {
    let { statuses, tags, businessUnits, lawyers } = this.state.initialValues
    statuses = statuses.map(s => {
      return { filter: s.name, type: 'status', category: 'statuses' }
    })

    tags = tags.map(t => {
      return { filter: t.name, type: 'tag', category: 'tags' }
    })

    businessUnits = businessUnits.map(b => {
      return { filter: b.name, type: 'businessUnit', category: 'businessUnits' }
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

  render () {
    let { initialValues, filters, contracts } = this.state
    let { name } = this.props.masterEntity
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
                selectDateOption={this.selectDateOption}
              />
            </div>
            <div className='w-50-ns w-100'>
              <SummaryBox contracts={filteredContracts} filters={filters} />
            </div>
          </Flex>
          <ContractsList
            contracts={filteredContracts}
            masterEntity={this.props.masterEntity}
          />
        </div>
      </div>
    )
  }
}

export default ContractsHolder
