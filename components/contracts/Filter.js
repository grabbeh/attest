import react from 'react'
import HideToggle from './Hide'
import DatePicker from 'react-datepicker'
import CheckboxList from './CheckboxList'

class Filter extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      dateRange: {
        startDate: null,
        endDate: null
      },
      expiryDateSearch: false,
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

  handleExpiryToggle = () => {
    this.setState({ expiryDateSearch: !this.state.expiryDateSearch })
    this.props.toggleExpiryDateSearch(!this.state.expiryDateSearch)
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
    const { error } = this.state

    return (
      <div className='bg-haus mr3-ns mr0 pa3 shadow-4'>
        <div className='f4 b bb b--black-50 bw1 pb2'>Filters</div>
        <HideToggle title='Statuses'>
          <CheckboxList
            content={statuses}
            checked
            toggleCheckbox={toggleCheckbox}
          />
        </HideToggle>
        <HideToggle title='Tags'>
          <CheckboxList content={tags} toggleCheckbox={toggleCheckbox} />
        </HideToggle>
        <HideToggle title='Business Units'>
          <CheckboxList
            content={businessUnits}
            checked
            toggleCheckbox={toggleCheckbox}
          />
        </HideToggle>
        <HideToggle title='Lawyers'>
          <CheckboxList
            content={lawyers}
            checked
            toggleCheckbox={toggleCheckbox}
          />
        </HideToggle>
        <HideToggle title='Dates'>
          <div className='pl3 fl mt2'>
            <span className='mr2'>Current status</span>
            <span onClick={this.handleExpiryToggle}>
              {this.state.expiryDateSearch
                ? <i className='fa fa-toggle-on fa-lg' />
                : <i className='fa fa-toggle-off fa-lg' />}
            </span>
            <span className='ml2'>Expiry date</span>
            <div className='cf' />
            <div className='fl mt2 mr2'>
              <DatePicker
                className=' w4  pointer w-100 w-80-ns'
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
                className=' w4  pointer w-100 w-80-ns'
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
