import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById } from "../utils/API";
import { Grid, Button } from "@mui/material";
import SoloReviewCard from "./SoloReviewCard";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const ReviewById = () => {
let navigate = useNavigate()
  const { review_id } = useParams();
  const [review, setReview] = useState([]);

  const handleClick = () => {
   navigate(-1)
  }

  useEffect(() => {
    getReviewById(review_id)
      .then((data) => {
        setReview(data);
       })
      .catch();
  }, [review_id]);

  return (
    <Grid container justifyContent="center"
  alignItems="center">
    
      <Grid  spacing={1} md={8}  sm={8} xs={8} >
      <Button onClick={handleClick}><ArrowBackIosNewIcon/></Button>  
      <SoloReviewCard data={review} />
      </Grid>
    </Grid>
  );
};

export default ReviewById;
