import React from 'react'

import { Avatar, Typography } from '@mui/material'
import { red } from "@mui/material/colors";
import {Box, Stack, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
const CommentCard = ({data, canDelete, handleDeleteComment}) => {

  const [removeTimerPassed, setRemoveTimerPassed] = useState(false)
  const handleDeleteClick = () => {
    handleDeleteComment(data.comment_id)
    removeComment()
 
  }
  const removeComment = () => {
    setInterval(() => setRemoveTimerPassed(true), 200)
 
  }
if (removeTimerPassed) return (<></>)
return (
  <Box>
    <Stack direction="row"
        justifyContent="space-around"
        
        sx={{
          gap: { sm: "25px", xs: "8px" },
          mt: { sm: "25px", xs: "4px" },
          justifyContent: "none",
        }}
        px="20px">
   
    <Box>
      <Avatar sx={{ bgcolor: red[500], height:50, width: 50 }} aria-label="review" src={data.avatar_url}>
              
      </Avatar>
    </Box>
      <Box sx={{ width: 3/4 }}>
        <Stack direction="row" sx={{gap: "8px"}} >
        <Typography>{data.author}</Typography>
       
          <Typography>{data.created_at.slice(0, 10)}</Typography>
      </Stack>
        <Typography>{data.body}</Typography>
        
      
      </Box>
     {canDelete? (<IconButton onClick={handleDeleteClick}>
        <DeleteIcon/>
      </IconButton>) : null} 
   </Stack>
  </Box>
)
}

export default CommentCard