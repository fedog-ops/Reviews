import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import { getReviews } from "../utils/API";
import { Stack, Typography } from "@mui/material";
import ReviewCard from "../components/ReviewCard";
const Home = ({ slug }) => {
  const [reviews, setReviews] = useState([]);
  const [sort_by, setSort_by] = useState("created_at");
  const [order_by, setOrder_by] = useState("DESC");
  const [currentUser, setCurrentUser] = useState('')
  const location = useLocation();
 
  useEffect(() => {
    getReviews(sort_by, order_by, slug)
      .then((data) => {
        setReviews(data); 
        if(location.state.currentUser[0]) setCurrentUser(location.state.currentUser[0])
      })
      .catch((error) => {
        console.log(error);
        setReviews(null);
      });
  }, [slug, order_by, sort_by]);
  if (!reviews) return <Typography>Loading...</Typography>;
  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",

        cursor: "pointer",
        gap: "47px",
      }}
    >
     <h4>{currentUser}</h4>
  
  <Stack  direction="row"
        justifyContent="space-around"
        spacing={2}
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px">
      <label className="dropDownBox">
        {" "}
        Sort By:
        <select
          value={sort_by}
          onChange={(e) => {
            setSort_by(e.target.value);
          }}
        >
          <option value="category"> Category </option>
          <option value="created_at"> Created at </option>
          <option value="designer"> Designer </option>
          <option value="owner"> Owner </option>
          <option value="votes"> Votes </option>
        </select>
      </label>
      <label className="dropDownBox">
        Order By:
        <select
          value={order_by}
          onChange={(e) => {
            setOrder_by(e.target.value);
          }}
        >
          <option value="ASC"> ASC </option>
          <option value="DESC"> DESC </option>
        </select>
      </label>
</Stack>
      {reviews.map((review) => {
        return <ReviewCard data={review} key={review.review_id} currentUser={currentUser}/>;
      })}
    </Stack>
  );
};

export default Home;
// id={review.review_id}
// .catch(({response: {data: { msg },status}}) =>{
//   setErr({msg, status})
// })
