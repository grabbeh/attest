import cn from 'classnames'
import react from 'react'

class SearchInput extends react.Component {
  render () {
    return (
      <div className='mr0 mb3 mt0-ns bg-haus f3'>
        <input
          className='b pa3 w-90 bh-haus'
          type='search'
          placeholder='Search...'
          value={this.props.searchTerm}
          onChange={this.props.handleSearchInput}
        />
        <div
          className={cn(!this.props.searchTerm && 'dn', 'fr', 'pa3', 'b', 'f3')}
          onClick={this.props.clear}
        >
          <i className='fa fa-close' />
        </div>

      </div>
    )
  }
}

export default SearchInput
