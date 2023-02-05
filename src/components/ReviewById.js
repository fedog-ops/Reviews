import { View, Text } from 'react-native'
import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

import TestCard from './TestCard'
import { getReviewById } from '../utils/API'


const ReviewById = () => {
        
     const {review_id} = useParams()
    
     const [review, setReview] = useState([])
    useEffect(() => {
      console.log('reviewsByID useEffect')
            getReviewById(review_id)
            .then((data) => {
                setReview(data)                
            }).catch((error) =>console.log(error))
        },[])
   
  return (
    <View>
      <Text>hello</Text>
      <TestCard data={review}/>
    </View>
  )
}

export default ReviewById