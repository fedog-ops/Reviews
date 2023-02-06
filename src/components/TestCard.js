import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Collapse,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Text } from "react-native";
import Comments from "./Comments";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

const TestCard = ({data}) => {
  // const [likeCount, setLikeCount] = useState('')
  // useEffect = () => {
  //    setLikeCount(parseInt(data.votes))
  // }
 
 const [expanded, setExpanded] = useState(false);
   
    
    const handleLikes = () => {
        console.log('hello')
        // setLikeCount(x=> x + 1)
    }
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card sx={{ maxWidth: 1500 }}>
        <CardHeader
         
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={data.title}
          subheader={data.created_at}
        />
        <CardMedia
          component="img"
          height="194"
          image={data.review_img_url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography>{data.category}</Typography><br/>
          <Typography
            variant="body2"
            color="text.secondary"
           >
            {data.review_body}
            
          </Typography>
        </CardContent>
        
       <CardActions disableSpacing>
          {/* <IconButton onClick={handleLikes} aria-label="like" >
            <FavoriteIcon /><div>{data.votes}</div>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon /><div>{data.comment_count}</div>
          </IconButton> */}
  
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Stack direction="row">
            <Typography >Comments</Typography>
            <ExpandMoreIcon /></Stack>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
            <Comments review={data}/>
          </CardContent>
        </Collapse> 
        
       </Card>
    );
}

export default TestCard