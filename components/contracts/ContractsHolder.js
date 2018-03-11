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
import FadeRightDiv from '../styles/FadeRightDiv'
import PageAnimation from '../styles/PageAnimation'

class ContractsHolder extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
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

  componentWillReceiveProps (nextProps) {
    this.setState({ contracts: nextProps.contracts })
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
      lawyers: [],
      selectedDateOption: 'GENERAL'
    }
    this.setState({ filters })
  }

  toggleCheckbox = label => {
    let { statuses, tags, businessUnits, lawyers } = this.state.filters
    statuses = statuses.map(s => {
      return {
        checked: s.checked,
        name: s.name,
        type: 'status',
        category: 'statuses'
      }
    })

    tags = tags.map(t => {
      return { checked: t.checked, name: t.name, type: 'tag', category: 'tags' }
    })

    businessUnits = businessUnits.map(b => {
      return {
        checked: b.checked,
        name: b.name,
        type: 'businessUnit',
        category: 'businessUnits'
      }
    })

    lawyers = lawyers.map(l => {
      return {
        checked: l.checked,
        name: l,
        type: 'lawyer',
        category: 'lawyers'
      }
    })

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
    let { filters, contracts } = this.state
    let { name } = this.props.masterEntity
    let filteredContracts = filter(filters, contracts)
    if (this.state.searchTerm.length > 0 && !this.state.liveInput) {
      filteredContracts = this.getSearchResults(
        this.state.searchTerm,
        filteredContracts
      )
    }
    return (
      <div className='pa3-ns pa0 pt3'>
        <FadeRightDiv>
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
          <SummaryBox contracts={filteredContracts} filters={filters} />
          <ContractsList
            contracts={filteredContracts}
            masterEntity={this.props.masterEntity}
          />
        </FadeRightDiv>
      </div>
    )
  }
}

export default ContractsHolder
