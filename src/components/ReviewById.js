import { View, Text } from 'react-native'
import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import ExtReviewCard from './ReviewCard'
import TestCard from './TestCard'
import { getReviewById } from '../utils/API'

const ReviewById = () => {
     const {review_id} = useParams()
     const [review, setReview] = useState([])
    useEffect(() => {
            getReviewById(review_id)
            .then((data) => {
                setReview(data)
                console.log(data)
            }).catch((error) =>console.log(error))
        }, [])
   
  return (
    <View>
      {/* <ExtReviewCard data={review}/> */}
      <TestCard data={review}/>
    </View>
  )
}

export default ReviewById