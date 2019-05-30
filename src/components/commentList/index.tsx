import React from 'react'
import { Button, List } from 'antd'
import { CommentIncludeId } from '../../types'

interface IProps {
  comments: CommentIncludeId[],
  deleteComment: (id: number) => void
}

class CommentList extends React.Component<IProps, {}> {

  handleDeleteComment = (id: number) => {
    if (this.props.deleteComment) {
      this.props.deleteComment(id)
    }
  }

  render() {
    return (
      <List
        style={{marginTop: '50px'}}
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={this.props.comments}
        renderItem={item => (
          <List.Item actions={[<Button type="danger" onClick={() => {
              this.handleDeleteComment(item.id)
            }}>delete</Button>]}>
            <List.Item.Meta
              title={<span>{item.username}</span>}
              description={item.comment}
            />
          </List.Item>
        )}
      />
    )
  }
}

export default CommentList