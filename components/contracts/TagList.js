const TagList = ({ tags }) => (
  <ul className='mt1 list ma0 pa0'>
    {tags.map(tag => (
      <li key={tag} className='f5 bg-dark-sur white fl pv1 ph2 mr2 mv1'>
        {tag}
      </li>
    ))}
  </ul>
)

export default TagList
