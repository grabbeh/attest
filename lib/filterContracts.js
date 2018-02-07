import _ from 'lodash'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
const moment = extendMoment(Moment)

const filterContracts = (filters, contracts) => {
  let copy = _.cloneDeep(contracts)
  let {
    tags,
    businessUnits,
    statuses,
    dateRange,
    lawyers,
    expiryDateSearch
  } = filters

  // tag filters
  if (tags.length > 0) {
    copy = _.uniq(
      _.flatten(
        tags.map(t => {
          return _.filter(copy, { tags: [{ name: t }] })
        })
      )
    )
  }

  // business unit filter
  if (businessUnits.length > 0) {
    copy = _.flatten(
      _.values(
        _.pick(
          _.groupBy(copy, o => {
            return o.businessUnit.name
          }),
          businessUnits
        )
      )
    )
  }

  // lawyer filter
  if (lawyers.length > 0) {
    let copyWithLawyers = copy.map(c => {
      let lawyerName = `${c.assignedTo.firstName} ${c.assignedTo.lastName}`
      c.lawyerName = lawyerName
      return c
    })
    copy = _.flatten(
      _.values(_.pick(_.groupBy(copyWithLawyers, 'lawyerName'), lawyers))
    )
  }

  // date filters
  if (
    dateRange.startDate &&
    dateRange.startDate.isValid() &&
    dateRange.endDate &&
    dateRange.endDate.isValid()
  ) {
    let { startDate, endDate } = dateRange
    const range = moment.range(startDate, endDate)
    if (!expiryDateSearch) {
      copy = _.filter(copy, s => {
        let latestDate = moment(_.last(s.statuses).date)
        return range.contains(latestDate)
      })
    } else {
      copy = _.filter(copy, s => {
        let expiryDate = moment(s.expiryDate)
        return range.contains(expiryDate)
      })
    }
  }
  if (statuses.length > 0) {
    // status filter
    copy = _.flatten(
      _.values(
        _.pick(
          _.groupBy(copy, o => {
            return o.currentStatus.name
          }),
          statuses
        )
      )
    )
  }
  return copy
}

export default filterContracts
