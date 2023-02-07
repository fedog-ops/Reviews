import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function UserCard({data, updateFN}) {
    const handleClick = () => {
        updateFN(data.username)
    }
  return (
    <Card sx={{ maxWidth: 350 , backgroundColor: "#272727" }}>
      <CardActionArea
      onClick={handleClick}
      >
        <CardMedia
          component="img"
          height="100"
         image={data.avatar_url}
          alt={data}
        
        />
        <CardContent>
          <Typography gutterBottom variant="h9" component="div" color="#eee">
            {data.username}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}