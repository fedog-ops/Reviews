import { View } from "react-native";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { getComments, addComment, deleteCommentById } from "../utils/API";
import {UserContext} from "../context/UserContext"
import CommentCard from "./CommentCard";
import { TextField, Button, Stack, Box } from "@mui/material";

import Error from "../components/Error"

const Comments = ({ review }) => {
   const {userLoggedIn} = useContext(UserContext);
   const [comments, setComments] = useState([]);
   const [newComment, setNewComment] = useState('');
   const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
   const [err, setErr] = useState(null);

  useEffect(() => {
    setIsCommentSubmitted(false)
    getComments(review.review_id)
      .then((data) => {
       setComments(data);
     })
      .catch((error) => {

      });
  },[review.review_id, isCommentSubmitted]);

const handlePostComment = (event) => {
  event.preventDefault();
    if(newComment !== '' && userLoggedIn){
    addComment(review.review_id, userLoggedIn, newComment)
      .then((data) => {
        setIsCommentSubmitted(true)

        setNewComment('')
        ;})
      .catch(
        ({response: {data: { msg },status}}) => {
          setIsCommentSubmitted(false)
          setErr({ msg, status });
        }
      );}
}
const handleDeleteComment = (comment_id) => {
  deleteCommentById(comment_id).then(() => {console.log('deleted')}).catch(({response: {data: { msg },status}}) => {
    setIsCommentSubmitted(false)
    setErr({ msg, status });
  })
}

  return (
    <Box>
      <div> {err ? <Error err={err} /> : '' } </div>

      <Stack directions="row">
          <TextField id="outlined-basic" label="Comment" variant="outlined" 
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          />
        
          <Button onClick={handlePostComment} variant="contained" >Enter</Button>  
      </Stack>

      <View>

        {comments.map((comment, i) => {
          return <CommentCard 
          key={comment.comment_id} 
          data={comment} 
          canDelete={comment.author === userLoggedIn} 
          handleDeleteComment={handleDeleteComment}/>;
        })}
      </View> 
      
    </Box>
  );
};

export default Comments;


