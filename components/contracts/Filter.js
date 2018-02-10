import react from 'react'
import HideToggle from '../general/Hide'
import DatePicker from 'react-datepicker'
import CheckboxList from '../general/CheckboxList'
import Radio from '../general/Radio'

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
    this.setState({ dateRange })
    this.props.setDate(dateRange)
  }

  render () {
    const { statuses, tags, businessUnits, lawyers } = this.props.initialValues
    const { toggleCheckbox } = this.props
    const { startDate, endDate } = this.state.dateRange
    const { error, dateSearchOptions, selectedDateOption } = this.state

    return (
      <div className='bg-white mr3-ns mr0 pa3 ba b--black-20'>
        <div className='f4 b bb b--black-20 bw1 pb2'>Filters</div>
        <HideToggle title='Statuses'>
          <CheckboxList content={statuses} toggleCheckbox={toggleCheckbox} />
        </HideToggle>
        <HideToggle title='Tags'>
          <CheckboxList
            error='Please add filters'
            content={tags}
            toggleCheckbox={toggleCheckbox}
          />
        </HideToggle>
        <HideToggle title='Business Units'>
          <CheckboxList
            error='Please add filters'
            content={businessUnits}
            toggleCheckbox={toggleCheckbox}
          />
        </HideToggle>
        <HideToggle title='Lawyers'>
          <CheckboxList
            error='Please add filters'
            content={lawyers}
            toggleCheckbox={toggleCheckbox}
          />
        </HideToggle>
        <HideToggle title='Dates'>
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
        </HideToggle>
        <div>
          {error.finishBeforeStart &&
            <div className='pt2 pa2 bg-light-red black b mt2'>
              End date is before the start date
            </div>}
        </div>
      </div>
    )
  }
}

export default Filter
