import cn from 'classnames'
import react from 'react'

class SearchInput extends react.Component {
  render () {
    return (
      <div className='w-50-l w-100 pv1 f4'>
        <span className='f4 b mr2'>Search</span>
        <input
          className='w-100 bb bw1 b--black-20 f4 font pa1 mw5'
          value={this.props.searchTerm}
          onChange={this.props.handleSearchInput}
        />
        <div
          className={cn(!this.props.searchTerm && 'dn', 'fr', 'pa1', 'b')}
          onClick={this.props.clear}
        >
          <i className='fa fa-close' />
        </div>

      </div>
    )
  }
}

export default SearchInput
