import cn from 'classnames'
import react from 'react'

class SearchInput extends react.Component {
  render () {
    return (
      <div className='mr0 mb3 mt0-ns pa3 bg-white f4 ba b--black-20'>
        <i className='mr2 gray fa fa-search' />
        <input
          className='font pa1 w-80 bg-white'
          type='search'
          placeholder='Search Contracts'
          value={this.props.searchTerm}
          onChange={this.props.handleSearchInput}
        />
        <div
          className={cn(!this.props.searchTerm && 'dn', 'fr', 'pa1', 'b', 'f3')}
          onClick={this.props.clear}
        >
          <i className='fa fa-close' />
        </div>

      </div>
    )
  }
}

export default SearchInput
