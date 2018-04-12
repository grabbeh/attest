import UPDATE_USER_MUTATION from '../../queries/UpdateUserMutation'
import LOGGED_USER_QUERY from '../../queries/LoggedUserQuery'
import { Mutation } from 'react-apollo'
import React, { Component } from 'react'
import cn from 'classnames'
import { Consumer } from '../../lib/Context'
import _ from 'lodash'

class FavouriteButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFavourite: props.favourite
    }
  }

  toggleFavourite = () => {
    this.setState({ isFavourite: !this.state.isFavourite })
  }

  render () {
    let { isFavourite } = this.state
    let { id } = this.props
    return (
      <Consumer>
        {context => (
          <Mutation
            context={context}
            mutation={UPDATE_USER_MUTATION}
            update={(cache, { data: { updateUser } }) => {
              const { user } = cache.readQuery({
                query: LOGGED_USER_QUERY
              })
              cache.writeQuery({
                query: LOGGED_USER_QUERY,
                data: { user: updateUser }
              })
            }}
          >
            {(updateUser, { data }) => (
              <div
                onClick={e => {
                  let { user } = context
                  this.toggleFavourite()
                  e.preventDefault()
                  if (!user.favourites) user.favourites = []
                  let copy = _.cloneDeep(user)
                  if (_.includes(copy.favourites, id)) {
                    _.pull(copy.favourites, id)
                  } else {
                    copy.favourites.push(id)
                  }
                  updateUser({ variables: { user: copy } })
                }}
              >
                <i
                  className={cn(
                    isFavourite && 'gold',
                    'fa',
                    'fa-star',
                    'fa-lg'
                  )}
                />
              </div>
            )}
          </Mutation>
        )}
      </Consumer>
    )
  }
}

export default FavouriteButton
