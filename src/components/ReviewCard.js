import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,

  IconButton,


} from "@mui/material";


import ForumIcon from '@mui/icons-material/Forum';
import { Text } from "react-native";
//styles
import "../DarkMode.css";
//utils
import TweakText from "../utils/TweakText";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function ReviewCard({ data, currentUser }) {
  const [expanded] = React.useState(false);
  const [text, setText] = useState(data.review_body.slice(0, 125));
  const [readMore, setReadMore] = useState(false);

/* <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */
  return (
    //CARD BACKGROUND
    <Card>
  
      <CardHeader
       
        sx={{height: 50}}
        title={data.title}
        titleTypographyProps={{
          fontSize: 20
        }}
        subheader={data.created_at.slice(0,10)}
      /> 
      
      
      <CardMedia
        component="img"
        height="194"
        image={data.review_img_url}
        alt="Category Pic"
      />



      <CardContent>
        <Text >{(data.category)? TweakText(data.category) : 'Loading ...'}<br/></Text>
        <Text
          variant="body2"
        
          onPress={() => {
            if (!readMore) {
              setText(data.review_body);
              setReadMore(true);
            } else {
              setText(data.review_body.slice(0, 125));
              setReadMore(false);
            }
          }}
        >
          {text} {!readMore && "... "}
          <Text variant="body4" color="#eee">
            {(readMore) ? "Show Less" : "  read more"}
          </Text>
        </Text>
      </CardContent>
     <CardActions disableSpacing>
       

        <ExpandMore
          expand={expanded}
         
          aria-expanded={expanded}
          aria-label="show more"
        ><Link to={`/reviews/${data.review_id}`} query={currentUser}>
          <ForumIcon/>
          </Link>
        </ExpandMore>
      </CardActions>
      
     </Card>
  );
}




