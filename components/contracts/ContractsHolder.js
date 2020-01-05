import react from 'react'
import ContractsList from './ContractsList'
import _ from 'lodash'
import Filter from './Filter'
import SummaryBox from './SummaryBox'
import Title from './Title'
import search from '../../lib/search'
import filter from '../../lib/filterContracts'
import SearchInput from './SearchInput'
import ClearFix from '../styles/ClearFix'
import Box from '../styles/Box'

class ContractsHolder extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.masterEntity.name,
      contracts: props.contracts,
      filters: {
        statuses: props.currentStatuses,
        dateRange: {
          startDate: null,
          endDate: null
        },
        tags: props.currentTags,
        businessUnits: props.currentBusinessUnits,
        lawyers: props.currentLawyers,
        selectedDateOption: 'GENERAL'
      },
      searchTerm: '',
      liveInput: false,
      activeMenu: false
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
    let copy = _.cloneDeep(set)
    copy.forEach(s => {
      if (s.name === label) s.checked = !s.checked
    })
    return copy
  }

  clearFilters = () => {
    let filters = {
      statuses: this.props.currentStatuses,
      dateRange: {
        startDate: null,
        endDate: null
      },
      tags: this.props.currentTags,
      businessUnits: this.props.currentBusinessUnits,
      lawyers: this.props.currentLawyers,
      selectedDateOption: 'GENERAL'
    }
    this.setState({ filters })
  }

  convertForFilter = (arr, type) => {
    let category = type === 'status' ? `${type}es` : `${type}s`
    return _.map(arr, i => {
      let { checked, name } = i
      return {
        checked,
        name,
        type,
        category
      }
    })
  }

  toggleCheckbox = label => {
    let { statuses, tags, businessUnits, lawyers } = this.state.filters

    statuses = this.convertForFilter(statuses, 'status')
    tags = this.convertForFilter(tags, 'tag')
    businessUnits = this.convertForFilter(businessUnits, 'businessUnit')
    lawyers = this.convertForFilter(lawyers, 'lawyer')

    let filters = _.concat(statuses, tags, businessUnits, lawyers)
    filters.forEach(f => {
      if (f.name === label) {
        this.updateFilterState(
          f.category,
          this.updateSet(this.state.filters[f.category], label)
        )
      }
    })
  }

  render () {
    let { filters, contracts, name } = this.state
    let filteredContracts = filter(filters, contracts)
    if (this.state.searchTerm.length > 0 && !this.state.liveInput) {
      filteredContracts = this.getSearchResults(
        this.state.searchTerm,
        filteredContracts
      )
    }
    return (
      <Box>
        <Title name={name} />
        <Filter
          filters={filters}
          toggleCheckbox={this.toggleCheckbox}
          clearFilters={this.clearFilters}
          setDate={this.setDate}
          selectDateOption={this.selectDateOption}
        />
        <SearchInput
          handleSearchInput={this.handleSearchInput}
          searchTerm={this.state.searchTerm}
          clear={this.clearSearchTerm}
        />
        <ClearFix />
        <SummaryBox contracts={filteredContracts} filters={filters} />
        <ContractsList contracts={filteredContracts} />
      </Box>
    )
  }
}

export default ContractsHolder
