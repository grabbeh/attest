import { Component, Fragment } from 'react'
import Text from '../styles/Text'
import SubmitContractButton from '../add-contract/SubmitContractButton'
import FormButton from '../styles/FormButton'
import Comment from './Comment'
import ClearFix from '../styles/ClearFix'

class CommentEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      editable: false,
      editPosition: '',
      contract: props.contract,
      user: props.user
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ text: e.target.value })
  }

  addComment = e => {
    e.preventDefault()
    let { text, contract, editPosition, user } = this.state
    let date = new Date().getTime()
    let author = user.name
    let copy = _.cloneDeep(contract)
    if (!copy.comments) copy.comments = []
    if (this.state.editable) {
      let updatedAt = date
      let existingComment = copy.comments[editPosition]
      existingComment.text = text
      existingComment.updatedAt = date
      existingComment.author = author
    } else {
      copy.comments.push({ text, createdAt: date, author })
    }
    this.setState({ text: '', contract: copy })
  }

  deleteComment = i => {
    let copy = _.cloneDeep(this.state.contract)
    copy.comments.splice(i, 1)
    this.setState({ contract: copy })
  }

  editComment = i => {
    let copy = _.cloneDeep(this.state.contract)
    this.setState({
      editPosition: i,
      editable: true,
      text: copy.comments[i].text
    })
  }

  render () {
    let { text, contract } = this.state
    let { comments } = contract
    let { handleChange, deleteComment, editComment, addComment } = this
    return (
      <Fragment>
        <form className='mt3'>
          <textarea
            className='pa2 ba b--black-50 bw1 w-100 f4 h4 font'
            value={text}
            onChange={handleChange}
          />
          <div className='fl'>
            <FormButton onClick={addComment} text='ADD' />
          </div>
          <div className='fl ml2'>
            <SubmitContractButton contract={contract} text='SAVE' />
          </div>
          <ClearFix />
        </form>
        <ul className='list ma0 pa0 pt2'>
          {comments &&
            comments.length > 0 &&
            comments.map((comment, i) => {
              return (
                <Comment
                  deleteComment={deleteComment}
                  editComment={editComment}
                  {...comment}
                  position={i}
                  key={i}
                />
              )
            })}
        </ul>
      </Fragment>
    )
  }
}

export default CommentEditor
