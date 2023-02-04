import { useEffect, useState } from "react";
import React from "react";
import { getReviews } from "../utils/API";
import {Stack} from '@mui/material'
import Review from "../components/ReviewCard";
const Home = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    getReviews()
      .then((data) => {
        setReviews(data)
       })
      .catch((error) => {
        console.log(error);
        setReviews(null);
      });
  }, []);
//if (reviews.length > 0) return <Typography>Loading...</Typography>;
 return (
    <Stack 
  
      sx={{
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
    
        cursor: 'pointer',
        gap: '47px'
      }}>
     {reviews.map((review) => { 
      return (<Review data={review} key={review.review_id}/>)
      })}
      
    </Stack>
  )
};

export default Home;
// id={review.review_id}
// .catch(({response: {data: { msg },status}}) =>{
//   setErr({msg, status})
// })