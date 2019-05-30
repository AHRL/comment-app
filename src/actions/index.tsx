import { ADD_COMMENT, DELETE_COMMENT } from '../constants'
import { Comment } from '../types'

let nextCommentId = 0

export interface IAddCommentAction {
  id: number;
  username: string;
  comment: string;
  createdTime: number;
  type: ADD_COMMENT
}

export interface IDeleteCommentAction {
  id: number;
  type: DELETE_COMMENT;
}

export type CommentAction = IAddCommentAction | IDeleteCommentAction

export const addComment = (comment: Comment): IAddCommentAction => ({
  id: nextCommentId++,
  username: comment.username,
  comment: comment.comment,
  createdTime: comment.createdTime,
  type: ADD_COMMENT
})

export const deleteComment = (id: number): IDeleteCommentAction => ({
  id,
  type: DELETE_COMMENT
})