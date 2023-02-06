import { View, Text } from "react-native";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { getComments, addComment, deleteCommentById } from "../utils/API";
import {UserContext} from "../context/UserContext"
import CommentCard from "./CommentCard";
import { TextField, Button, Stack, Box } from "@mui/material";

import Error from "../components/Error"

const Comments = ({ review }) => {
   const {userLoggedIn, setUserLoggedIn} = useContext(UserContext);
   const [comments, setComments] = useState([]);
   const [newComment, setNewComment] = useState('');
   const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
   const [err, setErr] = useState(null);

  useEffect(() => {
    getComments(review.review_id)
      .then((data) => {
        setComments(data);
     })
      .catch((error) => {
        console.log(error);
      });
  },[]);

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
      <Stack>
        <TextField id="outlined-basic" label="Comment" variant="outlined" 
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        />
        </Stack>
        <Button onClick={handlePostComment} variant="contained" >Enter</Button>  
        
      <View>
        <Text paragraph>Comments:</Text>
        {isCommentSubmitted ? <CommentCard key={'temp'} data={{author: userLoggedIn, body : 'Sent', created_at: "Just now", votes: 0}}/> : null} 
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


