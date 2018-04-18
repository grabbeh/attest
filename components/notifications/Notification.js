import { Component } from 'react'
import Moment from 'react-moment'
import ClearFix from '../styles/ClearFix'
import DeleteNotification from './DeleteNotification'
import FavouriteButton from '../contracts/FavouriteButton'
import { expanded, icon } from '../../lib/convertNotificationText'
import cn from 'classnames'
import Link from 'next/link'

class Notification extends Component {
  render () {
    let {
      relatedUser,
      createdAt,
      action,
      changes,
      relatedContract,
      id,
      unseen,
      deleteButton
    } = this.props
    let { favourite } = relatedContract
    return (
      <div
        className={cn(
          unseen && 'bg-light-yellow',
          'pa3',
          'f4',
          'mb3',
          'mt2',
          'mr3',
          'bg-light-gray'
        )}
      >
        <div>
          {unseen && <div className='mb2 bg-red b pa2 white fl'>New!</div>}
          <ClearFix />
          <div className='overflow-auto pv2 bb bw1 b--black-20'>
            <i className='fl fa fa-bell' />
            <div className='fl ml3'>
              <Moment format='DD MMMM YYYY'>{createdAt}</Moment>
            </div>
            <div className='ml3 fl'>
              <FavouriteButton favourite={favourite} id={relatedContract.id} />
            </div>
            {deleteButton &&
              <div className='fr'>
                <DeleteNotification id={id} />
              </div>}
          </div>
          <ClearFix />
          <div className='overflow-auto mt3'>
            <div className='fl pv2 ph3 bg-blue white'>
              <i className='white fa fa-id-card mr2' />{relatedUser.name}
            </div>
            <div
              className={cn(
                action === 'updated contract' && 'bg-red',
                'fl',
                'pv2',
                'bg-gold',
                'ph3',
                'black',
                'mh3'
              )}
            >
              {action}
            </div>
            <div className='fl mr3 pv2'>for</div>
            <div className='fl pv2 ph3 bg-dark-gray white'>
              <i className='white fa fa-file mr2  ' />
              {relatedContract.externalParties[0]}
            </div>
          </div>
        </div>
        <ClearFix />
        <div className='fl ph3 pv2 bg-light-green mt3 b'>
          <i className='fa fa-pencil mr2 dark-gray' />Changes
        </div>
        <ClearFix />
        <ul className='overflow-auto mb3 list ma0 pa0'>
          {changes.map((c, i) => (
            <li className='f4 overflow-auto' key={i}>
              <div className='overflow-auto mv2'>
                <i className={icon(c.attr)} />
                <div className='fl pv2 b'>{expanded(c.attr)}</div>
              </div>
              <ClearFix />
              {c.removed &&
                c.removed.name &&
                <div className='ml3 pl2'>
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
                <div className='ml3 pl2'>
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
        {deleteButton &&
          <div>

            <Link href={`/contract?id=${relatedContract.id}`}>
              <a><i className='dark-gray fa fa-file' /></a>
            </Link>
          </div>}
      </div>
    )
  }
}

export default Notification
