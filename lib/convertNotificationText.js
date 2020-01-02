import _ from 'lodash'

const expanded = string => {
  if (_.find(o, { base: string })) {
    return o.expanded
  } else return null
}

const icon = string => {
  if (_.find(o, { base: string })) {
    return o.icon
  } else return null
}

const o = [
  {
    base: 'assignedTo',
    expanded: 'Assigned lawyer',
    icon: 'mt2 mr2 fl fa fa-id-card'
  },
  {
    base: 'comments',
    expanded: 'Comments',
    icon: 'mt2 mr2 fl fa fa-comment'
  },
  {
    base: 'currentStatus',
    expanded: 'Current status',
    icon: 'mt2 mr2 fl fa fa-signal'
  },
  { base: 'tags', expanded: 'Tag', icon: 'mt2 mr2 fl fa fa-tag' },
  {
    base: 'businessUnit',
    expanded: 'Business unit',
    icon: 'mt2 mr2 fl fa fa-building-o'
  }
]
export { expanded, icon }
