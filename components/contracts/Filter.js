import react from 'react'
import HideToggle from '../general/Hide'
import DatePicker from 'react-datepicker'
import CheckboxList from '../general/CheckboxList'
import CheckboxListTwo from '../general/CheckboxListTwo'
import Radio from '../general/Radio'
import Flex from '../styles/Flex'
import _ from 'lodash'

class Filter extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      dateRange: {
        startDate: null,
        endDate: null
      },
      dateSearchOptions: [{ name: 'General' }, { name: 'Expiry date' }],
      selectedDateOption: 'General',
      error: {
        finishBeforeStart: false
      }
    }
  }

  handleChangeStart = date => {
    let dateRange = this.state.dateRange
    dateRange.startDate = date
    this.setState({ dateRange })
  }

  selectDateOption = s => {
    this.props.selectDateOption(s)
    this.setState({ selectedDateOption: s.name })
  }

  handleChangeEnd = date => {
    let dateRange = {}
    dateRange.endDate = date
    dateRange.startDate = this.state.dateRange.startDate
    this.setState({ dateRange })
    this.props.setDate(this.state.dateRange)
    if (dateRange.endDate.isBefore(dateRange.startDate)) {
      let { error } = this.state
      error.finishBeforeStart = true
      this.setState({ error })
    } else {
      let { error } = this.state
      error.finishBeforeStart = false
      this.setState({ error })
      this.props.setDate(dateRange)
    }
  }

  resetDates = () => {
    let dateRange = {}
    dateRange.endDate = null
    dateRange.startDate = null
    this.setState({ dateRange, error: false })
    this.props.setDate(dateRange)
  }

  checked = arr => {
    if (_.filter(arr, 'checked').length === 0) return false
    else return true
  }

  render () {
    const { statuses, tags, businessUnits, lawyers } = this.props.filters
    const selectedStatuses = this.checked(statuses)
    const selectedBusinessUnits = this.checked(businessUnits)
    const selectedTags = this.checked(tags)
    const { toggleCheckbox, filters, clearFilters } = this.props
    const { startDate, endDate } = this.state.dateRange
    const { error, dateSearchOptions, selectedDateOption } = this.state

    return (
      <div className='mb2'>
        <Flex>
          <div className='mt2 b f4 mr3'>Filters</div>
          <HideToggle active={selectedStatuses} show={false} title='Statuses'>
            <CheckboxListTwo
              content={statuses}
              toggleCheckbox={toggleCheckbox}
            />
          </HideToggle>
          <HideToggle active={selectedTags} show={false} title='Tags'>
            <CheckboxListTwo
              error='Please add filters'
              content={tags}
              toggleCheckbox={toggleCheckbox}
            />
          </HideToggle>
          <HideToggle
            active={selectedBusinessUnits}
            show={false}
            title='Business Units'
          >
            <CheckboxListTwo
              error='Please add filters'
              content={businessUnits}
              toggleCheckbox={toggleCheckbox}
            />
          </HideToggle>
          <HideToggle active={false} show={false} title='Lawyers'>
            <CheckboxList
              error='Please add filters'
              content={lawyers}
              toggleCheckbox={toggleCheckbox}
            />
          </HideToggle>
          <HideToggle show={false} title='Dates'>
            <div className='pl3 fl mt2'>
              <Radio
                items={dateSearchOptions}
                selectedItem={selectedDateOption}
                handleChange={this.selectDateOption}
              />
              <div className='cf' />
              <div className='fl mt2 mr2'>
                <DatePicker
                  className='w4 font b--blue ba bw1 pa1 tc'
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={this.handleChangeStart}
                  placeholderText='Start date'
                  showMonthDropdown
                  showYearDropdown
                  dateFormat='DD/MM/YYYY'
                />
              </div>
              <div className='fl mr2 mt2'>
                <DatePicker
                  className='pl2 w4 font b--blue ba bw1 pa1 tc'
                  selected={endDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  onChange={this.handleChangeEnd}
                  placeholderText='End date'
                  showMonthDropdown
                  showYearDropdown
                  dateFormat='DD/MM/YYYY'
                />
              </div>
            </div>
            <div className='cf' />
            <div onClick={this.resetDates} className='pt1 pl3 f7 pa1 pointer'>
              Clear
            </div>
            <div>
              {error.finishBeforeStart &&
                <div className='pa2 red b'>
                  End date is before the start date
                </div>}
            </div>
          </HideToggle>

          {
            <div
              className='f4 underline-hover mt2 pointer'
              onClick={clearFilters}
            >
              Reset
            </div>
          }
        </Flex>
      </div>
    )
  }
}

export default Filter
