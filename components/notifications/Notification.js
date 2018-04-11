import { Component } from 'react'

import _ from 'lodash'
import ClearFix from '../styles/ClearFix'
import DeleteNotification from './DeleteNotification'

class Notification extends Component {
  render () {
    let { notification } = this.props
    let { relatedUser, action, changes, relatedContract } = notification
    console.log(notification)

    return (
      <div className='pa3 f4 mr3 mb3 bg-light-gray'>
        <div>
          <div className='fr'>
            <DeleteNotification notification={notification} />
          </div>
          <div className='fl pv2 ph3 bg-blue white'>{relatedUser.name}</div>
          <div className='fl'>{` `}</div>
          <div className='fl pv2 bg-light-yellow ph3 black mh3'>
            {action}{' '}
          </div>
          <div className='fl pr2 pv2'>for</div>

          <div className='fl pv2 ph3 bg-dark-gray white'>
            {relatedContract.externalParties[0]}
          </div>
        </div>

        <ClearFix />
        <ul className='mb3 list ma0 pa0'>
          {changes.map((c, i) => (
            <li className='overflow-auto' key={i}>
              <div className='mv3 b'> {c.attr}</div>
              {c.removed &&
                c.removed.name &&
                <div>
                  {c.attr === 'tags' &&
                    !c.added &&
                    <i className='fl dark-gray mr2 mt2 fa fa-minus' />}
                  <div
                    className='fl white bg-blue pv2 ph3 tc'
                    style={{ background: c.removed.color }}
                  >
                    {c.removed.name}
                  </div>
                </div>}
              {c.added &&
                c.removed &&
                <div>
                  <i className='fl mt2 mh3 fa dark-gray fa-arrow-right' />
                </div>}
              {c.added &&
                c.added.name &&
                <div>
                  {c.attr === 'tags' &&
                    !c.removed &&
                    <i className='fl dark-gray mr2 mt2 fa fa-plus' />}
                  <div
                    className='fl white bg-blue pv2 ph3 tc mr2'
                    style={{ background: c.added.color }}
                  >
                    {c.added.name}

                  </div>
                  <ClearFix />
                </div>}
            </li>
          ))}
        </ul>
        <ClearFix />
        <div>Go to contract</div>

      </div>
    )
  }
}

export default Notification
