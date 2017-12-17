import _ from 'lodash'

const filterContracts = (filters, contracts) => {
  let copy = _.cloneDeep(contracts)
  let { tags, businessUnits, statuses, dateRange, lawyers } = filters

  // tag filters
  if (tags.length > 0) {
    copy = _.uniq(
      _.flatten(
        tags.map(t => {
          return copy.filter(c => {
            return c.tags.includes(t)
          })
        })
      )
    )
  }

  // business unit filter
  copy = _.flatten(
    _.values(_.pick(_.groupBy(copy, 'businessUnit'), businessUnits))
  )

  // lawyer filter
  let copyWithLawyers = copy.map(c => {
    let lawyerName = `${c.assignedTo.firstName} ${c.assignedTo.lastName}`
    c.lawyerName = lawyerName
    return c
  })
  copy = _.flatten(
    _.values(_.pick(_.groupBy(copyWithLawyers, 'lawyerName'), lawyers))
  )

  // date filters
  if (
    dateRange.startDate &&
    dateRange.startDate.isValid() &&
    dateRange.endDate &&
    dateRange.endDate.isValid()
  ) {
    let { startDate, endDate } = dateRange
    const range = moment.range(startDate, endDate)
    copy = _.filter(copy, s => {
      let latestDate = moment(_.last(s.statuses).date)
      return range.contains(latestDate)
    })
  }
  // status filter
  copy = _.flatten(_.values(_.pick(_.groupBy(copy, 'currentStatus'), statuses)))
  return copy
}

export default filterContracts
