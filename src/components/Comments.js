import { View, Text } from "react-native";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { getComments, addComment } from "../utils/API";
import {UserContext} from "../context/UserContext"
import CommentCard from "./CommentCard";
import { TextField, Button } from "@mui/material";

import Error from "../components/Error"

const Comments = ({ review }) => {
   const user = useContext(UserContext);
   const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
  
  const [err, setErr] = useState(null);

 

  useEffect(() => {
    console.log('comments useEffect')
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
    console.log(newComment)
    if(newComment !== '' && user){
    addComment(review.review_id, user, newComment)
      .then((data) => {
        setIsCommentSubmitted(true)
        // const sentTime = setTimeout(() => {
        //   setIsCommentSubmitted(false)
        //   setNewComment('')
        // }, 1000)
        ;})
      .catch(
        ({response: {data: { msg },status}}) => {
          setIsCommentSubmitted(false)
          setErr({ msg, status });
        }
      );}
}
  return (
    <div>
      <div> {err ? <Error err={err} /> : '' } </div>
        <TextField id="outlined-basic" label="Comment" variant="outlined" 
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={handlePostComment} variant="contained" >Enter</Button>  
      <View>
        <Text paragraph>Comments:</Text>
        {isCommentSubmitted ? <CommentCard key={'temp'} data={{author: user, body : newComment, created_at: "Just now", votes: 0}}/> : null} 
        {comments.map((comment, i) => {
          return <CommentCard key={comment.comment_id} data={comment} />;
        })}
      </View> 
      
      
      
    </div>
  );
};

export default Comments;


