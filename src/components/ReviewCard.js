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

  Avatar,
  IconButton,

} from "@mui/material";

import { red } from "@mui/material/colors";

import ForumIcon from '@mui/icons-material/Forum';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Text } from "react-native";


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
  const [expanded, setExpanded] = React.useState(false);
  const [text, setText] = useState(data.review_body.slice(0, 125));
  const [readMore, setReadMore] = useState(false);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="review">
            {data.owner.slice(0, 2)}
          </Avatar>
        }
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
        <Text>{data.category}</Text><br/>
        <Text
          variant="body2"
          color="text.secondary"
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
          {text} {!readMore && "..."}
          <Text variant="body2" color="text.secondary">
            {readMore ? "Show Less" : "Read More"}
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




 {/* <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}