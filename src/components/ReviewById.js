import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById } from "../utils/API";
import { Grid } from "@mui/material";
import SoloReviewCard from "./SoloReviewCard";

const ReviewById = () => {
  const { review_id } = useParams();

  const [review, setReview] = useState([]);
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
        <SoloReviewCard data={review} />
      </Grid>
    </Grid>
  );
};

export default ReviewById;
