import ClearFix from '../styles/ClearFix'
import Moment from 'react-moment'

const Comment = ({
  text,
  author,
  createdAt,
  deleteComment,
  editComment,
  position
}) => {
  return (
    <div className='f4 mt3 bg-light-gray dark-gray pa3'>
      <div className='fl pb3'>
        <i className='mr2 fa fa-comment' />{text}
      </div>
      <ClearFix />
      <div className='b--black-20 bw1 bt'>
        <div className='fl pt3'>
          <div className='fl pv2 ph3 bg-blue white'>
            <i className='white fa fa-id-card mr2' />{author}
          </div>
          <div className='mt2 fl ml2'>
            <Moment format='DD MMMM YYYY'>{createdAt}</Moment>
          </div>
        </div>
        <div className='mt3 fr'>
          <div
            className='fl mr2'
            onClick={() => {
              deleteComment(position)
            }}
          >
            <i className='pointer fa fa-trash-o fa-lg' />
          </div>
          <div
            className='fl'
            onClick={() => {
              editComment(position)
            }}
          >
            <i className='bg-light-gray pointer fa fa-pencil fa-lg' />
          </div>
        </div>
      </div>
      <ClearFix />
    </div>
  )
}

export default Comment
