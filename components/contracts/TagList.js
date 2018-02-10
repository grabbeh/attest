const TagList = ({ tags }) => (
  <ul className='mt1 list ma0 pa0'>
    {tags.map(tag => (
      <li
        style={{ background: tag.color }}
        key={tag.name}
        className='f5 bg-blue white fl pv1 ph3 mr2 mv1'
      >
        {tag.name}
      </li>
    ))}
  </ul>
)

export default TagList
