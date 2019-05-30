import * as React from 'react'
import { Button, Input, Icon } from 'antd'
const { TextArea } = Input

export interface Comment {
  username: string,
  comment: string,
  createdTime: number
}

interface IProp {
  username: string,
  onSubmit: (comment: Comment) => void
  onUserNameInputBlur: (event: any) => void
}

interface IState {
  username: string,
  comment: string
}

class CommentInput extends React.Component<IProp, IState>{
  private textareaRef: React.RefObject<any> = React.createRef()
  private inputRef: React.RefObject<any> = React.createRef()
  
  constructor(props: any) {
    super(props)
    this.state = {
      username: props.username,
      comment: ''
    }
  }

  componentDidMount = () => {
    this.state.username ? this.textareaRef.current.focus() : this.textareaRef.current.focus()
  }

  handleUsernameBlur = (event: any) => {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(event.target.value)
    }
  }

  handleUsernameChange = (event: any) => {
    this.setState({
      username: event.target.value
    })
  }

  handleCommentChange = (event: any) => {
    this.setState({
      comment: event.target.value
    })
  }

  handleSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        comment: this.state.comment,
        createdTime: +new Date()
      })
    }
    this.setState({ comment: '' })
  }

  render () {
    return (
      <div>
        <Input
          value={this.props.username}
          onBlur={this.handleUsernameBlur}
          onChange={this.handleUsernameChange}
          ref={this.inputRef}
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <TextArea
          style={{ margin: '20px 0' }}
          onChange={this.handleCommentChange}
          ref={this.textareaRef}
          value={this.state.comment}
          placeholder="comment..."
          autosize={{ minRows: 2, maxRows: 6 }}
        />
        <Button style={{float: 'right'}} type="primary" onClick={this.handleSubmit}>评论</Button>
      </div>
    )
  }
}

export default CommentInput