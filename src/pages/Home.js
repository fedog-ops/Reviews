import { useEffect, useState } from "react";
import React from "react";
import { getReviews } from "../utils/API";
import { Stack, Typography, Grid } from "@mui/material";
import ReviewCard from "../components/ReviewCard";
import Filter from "../components/Filter";


const Home = ({ slug }) => {
  const [reviews, setReviews] = useState([]);
  const [sort_by, setSort_by] = useState("created_at");
  const [order_by, setOrder_by] = useState("DESC");

  const handleFilters = (input, filter) => {
    if (filter === "sort") setSort_by(input);
    if (filter === "order") setOrder_by(input);
  };
  const orders = [
    ["ASC", "Asc"],
    ["DESC", "Desc"],
  ];
  const sorts = [
    ["category", "Category"],
    ["created_at", "Date"],
    ["designer", "Designer"],
    ["owner", "Owner"],
    ["votes", "Votes"],
  ];

  useEffect(() => {
    getReviews(sort_by, order_by, slug)
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
   
        setReviews(null);
      });
  }, [slug, order_by, sort_by]);
  if (!reviews) return <Typography>Loading...</Typography>;
  const styling ={
    container: {
      paddingRight:5,
      paddingLeft:5,
      paddingTop:2
    }
  }

  return (
    <>
      <Stack direction="row" sx={{paddingLeft: 7}}>
        <Filter filter={"order"} data={orders} handleFilters={handleFilters} />
        <Filter filter={"sort"} data={sorts} handleFilters={handleFilters} /> 
        
      </Stack>

      <Grid sx={styling.container} container spacing={2}>
        {reviews.map((review) => {
          return (
            <Grid spacing={1} md={4} sm={6} xs={12} sx={{paddingTop: 5, paddingLeft:5}}>
              <ReviewCard data={review} key={review.review_id} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Home;



