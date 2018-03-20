import cn from 'classnames'
import react from 'react'

class SearchInput extends react.Component {
  render () {
    return (
      <div className='w-50-l w-100 f4'>
        <span className='b fl mt2 mr2'>Search</span>
        <input
          className='mt1 fl w-100 bb bw1 b--black-20 font pa1 mw5'
          value={this.props.searchTerm}
          onChange={this.props.handleSearchInput}
        />
        <span
          className={cn(
            !this.props.searchTerm && 'dn',
            'mt1',
            'fl',
            'pa1',
            'b'
          )}
          onClick={this.props.clear}
        >
          <i className='fa fa-close' />
        </span>

      </div>
    )
  }
}

export default SearchInput
