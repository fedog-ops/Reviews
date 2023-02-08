
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import TestCard from "./TestCard";
import { getReviewById } from "../utils/API";
import { Grid } from "@mui/material";

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
        <TestCard data={review} />
      </Grid>
    </Grid>
  );
};

export default ReviewById;
