import React from 'react'
// import { Button, List } from 'antd'
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
    console.log('list', this.props.comments)
    return (
      <div></div>
      // <List
      //   itemLayout="horizontal"
      //   dataSource={this.props.comments}
      //   renderItem={item => (
      //     <div>
      //       <List.Item>
      //         <List.Item.Meta
      //           title={item.username}
      //           description={item.comment}
      //         />
      //       </List.Item>
      //       <div>
      //         <Button type="primary" onClick={() => {
      //           this.handleDeleteComment(item.id)
      //         }}>删除</Button>
      //       </div>
      //     </div>
      //   )}
      // />
    )
  }
}

export default CommentList