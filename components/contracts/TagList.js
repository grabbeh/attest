import { Component } from 'react'
import getTextColor from '../../lib/getTextColor'

const TagList = ({ tags }) => (
  <ul className='mt1 list ma0 pa0'>
    {tags.map(tag => <Tag key={tag.name} {...tag} />)}
  </ul>
)

class Tag extends Component {
  getStyle () {
    const { color } = this.props
    let textColor = ''
    textColor = getTextColor(color)
    return {
      backgroundColor: color,
      color: textColor
    }
  }

  render () {
    let { name } = this.props
    return (
      <li style={this.getStyle()} className='bg-blue fl pv1 ph3 mr2 mv1'>
        {name}
      </li>
    )
  }
}

export default TagList
