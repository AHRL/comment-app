import { CommentAction } from '../actions'
import { ADD_COMMENT, DELETE_COMMENT } from '../constants'
import { CommentIncludeId } from '../types'

const comments = (state: {comments: CommentIncludeId[]} = {comments: []}, action: CommentAction) => {
  console.log('state', state)
  switch (action.type) {
    case ADD_COMMENT:
      return {
        comments: [
          ...state.comments,
          {
            id: action.id,
            username: action.username,
            comment: action.comment,
            createdTime: action.createdTime
          }
        ]
      }
    case DELETE_COMMENT:
      let deleteIdx: number = 0
      // state.forEach((com: {id: number}, idx: number) => {
      //   if(com.id === action.id) {
      //     deleteIdx = idx
      //   }
      // })
      for (let i = 0; i < state.comments.length; i++) {
        if (state.comments[i].id === action.id) {
          deleteIdx = i
          break
        }
      }
      return {
        comments: [
          ...state.comments.slice(0, deleteIdx),
          ...state.comments.slice(deleteIdx+1)
        ]
      }
    default:
      return state
  }
}

export default comments