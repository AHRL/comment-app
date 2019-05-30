import React from 'react'
import CommentList from '../../components/commentList'
import { CommentIncludeId } from '../../types'
import { Dispatch } from 'redux'
import { deleteComment } from '../../actions';
import { connect } from 'react-redux';

interface IProps {
  comments: CommentIncludeId[],
  deleteComment: (id: number) => void
}

class CommentListContainer extends React.Component<IProps, {}> {

  render() {
    console.log('props', this.props.comments)
    return (
      <CommentList comments={this.props.comments} deleteComment={this.props.deleteComment} />
    )
  }
}

const mapStateToProps = (state: { comments: CommentIncludeId[] }) => {
  console.log('state.comments', state.comments)
  return {
    comments: state.comments
  }
}

// ({
//   comments: state.comments
// })

const mapDispatchToProps = (dispatch: Dispatch): { deleteComment: (id: number) => void } => ({
  deleteComment: (id: number) => dispatch(deleteComment(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer)