import react from 'react'

import HideToggle from './Hide'
import DatePicker from 'react-datepicker'

class ContractSubList extends react.Component {
  /* constructor (props) {
    super(props)
  } */

  render () {
    const { statuses, tags, businessUnits } = this.props.initialValues
    const {
      createCheckboxes,
      startDate,
      endDate,
      handleChangeStart,
      handleChangeEnd,
      resetDates,
      error
    } = this.props

    return (
      <div className='flex'>
        <div className='bg-light-yellow w-33-ns w-100 mr3-ns mr0 br3 pa3'>
          <div className='b'>Filters</div>
          <HideToggle title='Statuses'>

            <ul className='mt2 ma0 pa0 list flex flex-wrap'>
              {createCheckboxes(statuses, true)}
            </ul>

          </HideToggle>

          <HideToggle title='Tags'>
            <ul className='mt2 ma0 pa0 list flex flex-wrap'>
              {createCheckboxes(tags, false)}
            </ul>
          </HideToggle>

          <HideToggle title='Business Units'>
            <ul className='mt2 ma0 pa0 list flex flex-wrap'>
              {createCheckboxes(businessUnits, true)}
            </ul>
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

              <div onClick={resetDates} className='fl'>
                <i className='pointer fa fa-window-close-o fa-lg gray' />
              </div>

            </div>
          </HideToggle>
          <div className='cf' />
          <div>
            {error.finishBeforeStart &&
              <div className='pt2'>End date is before the start date</div>}
          </div>
        </div>
      </div>
    )
  }
}

export default ContractSubList