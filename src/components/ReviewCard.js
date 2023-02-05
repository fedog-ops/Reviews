import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";

import { red } from "@mui/material/colors";
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
}));

export default function ReviewCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const [text, setText] = useState(data.review_body.slice(0, 125));
  const [readMore, setReadMore] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 1500 }}>
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
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Add Comment ...</Typography>
          <Comments review={data}/>
        </CardContent>
      </Collapse> 
    </Card>
  );
}
