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
    const { statuses, tags, businessUnits } = this.props.initialValues
    const { toggleCheckbox } = this.props
    const { startDate, endDate } = this.state.dateRange
    const { error } = this.state

    return (
      <div className='bg-white w-50-ns w-100 mr3-ns mr0 pa3'>
        <div className='f4 b bb pb2'>Filters</div>
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
        <HideToggle title='Dates'>
          <div className='fl mt2'>
            <div className='fl mr2'>
              <DatePicker
                className=' w4 tc pointer'
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
            <div className='fl mr2'>
              <DatePicker
                className=' w4 tc pointer'
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
          <div onClick={this.resetDates} className='pt1  f7 pa1 pointer'>
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
