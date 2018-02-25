import cn from 'classnames'
import react from 'react'

class SearchInput extends react.Component {
  render () {
    return (
      <div className='w-50 pv1 f5'>
        <span className='f4 b mr2'>Search</span>
        <input
          className='bb bw1 b--black-20 f4 font pa1 w-80 bg-white'
          type='search'
          value={this.props.searchTerm}
          onChange={this.props.handleSearchInput}
        />
        <div
          className={cn(!this.props.searchTerm && 'dn', 'fr', 'pa1', 'b', 'f4')}
          onClick={this.props.clear}
        >
          <i className='fa fa-close' />
        </div>

      </div>
    )
  }
}

export default SearchInput
