import React from 'react'
import CommentInput from '../../components/commentInput'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { message } from 'antd'
import { Comment } from '../../types'
import { addComment } from '../../actions';

interface IProps {
  onSubmit: (comment: Comment) => void
}

interface IState {
  username: string
}

class CommentInputContainer extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = {
      username: ''
    }
  }

  componentWillMount () {
    this._loadUsername()
  }

  _loadUsername = () => {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

  _saveUsername = (username: string) => {
    localStorage.setItem('username', username)
  }

  handleSubmitComment = (comment: Comment) => {
    if (!comment) return
    if (!comment.username) return message.warning("请输入用户名")
    if (!comment.comment) return message.warning("请输入评论内容")
    if (this.props.onSubmit) {
      this.props.onSubmit(comment)
    }
  }

  render () {
    return (
      <CommentInput
        username={this.state.username}
        onUserNameInputBlur={this._saveUsername}
        onSubmit={this.handleSubmitComment} />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch): { onSubmit: (comment: Comment) => void } => ({
  onSubmit: (comment: Comment) => {
    dispatch(addComment(comment))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(CommentInputContainer)