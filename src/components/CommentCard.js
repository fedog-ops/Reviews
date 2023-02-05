import React from 'react'
import { Comment } from 'semantic-ui-react'
import { Avatar } from '@mui/material'
import { red } from "@mui/material/colors";
import { getUsers } from '../utils/API'
const CommentCard = ({data}) => {

    return (
  <Comment.Group>
   
    <Comment>
    <Avatar sx={{ bgcolor: red[500], height:25, width: 25 }} aria-label="review">
            {data.author.slice(0, 2)}
          </Avatar>
        <Comment.Content> 
        <Comment.Author as='a'>{data.author}</Comment.Author>
        <Comment.Metadata>
          <div>{data.created_at}</div>
        </Comment.Metadata>
        <Comment.Text>{data.body}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

   
  </Comment.Group>
)
}

export default CommentCard