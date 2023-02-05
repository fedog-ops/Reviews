import { View, Text } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { getComments } from '../utils/API'
import { Card } from '@mui/material'
import CommentCard from './CommentCard'
import { Button, Form, } from 'semantic-ui-react'
const Comments = ({review}) => {
const [comments, setComments] = useState([])
const [cache, setCache] = useState([])
useEffect(() => {
  console.log('cache:', cache)
if (cache.length === 0) {
    getComments(review.review_id).then((data)=>{
           
            setComments(data)
            console.log(data)
    }).catch((error) => {
        console.log(error)
    })
  }
 
}, [])

    return (
        <div>
    <View>
        <Text paragraph>Comments:</Text>
      {comments.map((comment, i) =>{
        return(<CommentCard key={comment.comment_id} data={comment}/>)
      })}
    </View>
     <Form reply>
     <Form.TextArea />
     <Button content='Add Reply' labelPosition='left' icon='edit' primary />
   </Form>
   </div>
  )
}

export default Comments