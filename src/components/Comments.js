import { View, Text } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { getComments } from "../utils/API";

import CommentCard from "./CommentCard";
import { Button, Form } from "semantic-ui-react";
const Comments = ({ review }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review.review_id)
      .then((data) => {
        setComments(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [review.review_id]);

  return (
    <div>
      <View>
        <Text paragraph>Comments:</Text>
        {comments.map((comment, i) => {
          return <CommentCard key={comment.comment_id} data={comment} />;
        })}
      </View>
      <Form reply>
        <Form.TextArea />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    </div>
  );
};

export default Comments;
