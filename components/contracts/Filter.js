import react from 'react'
import HideToggle from './Hide'
import DatePicker from 'react-datepicker'
import CheckboxList from './CheckboxList'

class ContractSubList extends react.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { statuses, tags, businessUnits } = this.props.initialValues
    const {
      startDate,
      endDate,
      handleChangeStart,
      handleChangeEnd,
      resetDates,
      error,
      toggleCheckbox
    } = this.props

    return (
      <div className='flex'>
        <div className='bg-dark-gray light-gray w-50-ns w-100 mr3-ns mr0 shadow-4 pa3'>
          <div className='b'>Filters</div>
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
                  onChange={handleChangeStart}
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
                  onChange={handleChangeEnd}
                  placeholderText='End date'
                  showMonthDropdown
                  showYearDropdown
                  dateFormat='DD/MM/YYYY'
                />
              </div>
            </div>
            <div className='cf' />
            <div onClick={resetDates} className='pt1  f7 pa1 pointer'>
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
      </div>
    )
  }
}

export default ContractSubList
