import { Component } from 'react'
import Moment from 'react-moment'
import ClearFix from '../styles/ClearFix'
import DeleteNotification from './DeleteNotification'
import FavouriteButton from '../contracts/FavouriteButton'

class Notification extends Component {
  render () {
    let {
      relatedUser,
      createdAt,
      action,
      changes,
      relatedContract,
      id
    } = this.props
    let { favourite } = relatedContract
    return (
      <div className='pa3 f4 mt3 mr3 bg-light-gray'>
        <div>
          <div className='overflow-auto pv2 bb bw1 b--black-20'>
            <i className='fl fa fa-bell' />
            <div className='fl ml3'>
              <Moment format='DD MMMM YYYY'>{createdAt}</Moment>
            </div>
            <div className='ml3 fl'>
              <FavouriteButton favourite={favourite} id={relatedContract.id} />
            </div>
            <div className='fr'>
              <DeleteNotification id={id} />
            </div>
          </div>
          <ClearFix />
          <div className='overflow-auto mt3'>
            <div className='fl pv2 ph3 bg-blue white'>{`${relatedUser.name} `}</div>
            <div className='fl pv2 bg-light-yellow ph3 black mh3'>
              {`${action} `}
            </div>
            <div className='fl pr2 pv2'>for</div>
            <div className='fl pv2 ph3 bg-dark-gray white'>
              {relatedContract.externalParties[0]}
            </div>
          </div>
        </div>
        <ClearFix />
        <ul className='mb3 list ma0 pa0'>
          <div className='mt2 b'>Changes</div>
          {changes.map((c, i) => (
            <li className='f4 overflow-auto' key={i}>
              <div className='pv2 b'>{c.attr}</div>
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
                    {c.added.name}s
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
