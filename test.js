var _ = require('lodash')

var arr = [
  {
    attr: ['assignedTo', 'name'],
    added: 'Joost Van der Hootzuizen',
    removed: 'Katie Mihailovits'
  },
  {
    attr: ['assignedTo', 'email'],
    added: 'jd@demo.co.uk',
    removed: 'km@demo.co.uk'
  }
]

let o = _.values(_.groupBy(arr, 'attr[0]'))
let res = _.map(o, m => {
  return _.map(m, i => {
    let type = _.last(i.attr)
    return {
      attr: _.first(i.attr),
      added: { [type]: i.added },
      removed: { [type]: i.removed }
    }
  })
})

let y = _.map(res, i => _.merge.apply(_, i))

console.log(y)
