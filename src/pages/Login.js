import { View, Text } from 'react-native'
import {Grid, Box }from '@mui/material';
import React from 'react'
import {useState, useEffect} from 'react'
import { getUsers } from '../utils/API';
import UserCard from '../components/UserCard';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([])
  useEffect(()=>{
      getUsers().then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

const updateFN = (input) => {
  navigate('/', {
  state: {
    currentUser: [input]
  }
  
 })
}

  return (
    <Box width={"400px"} sx={{width : {xl : '1488px'}} } m='auto'>
    <Grid container  alignItems="flex-end" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
        {users.map((user) => {
          return (
        <Grid xs={4}>
          <UserCard data={user} updateFN={updateFN}/>
        </Grid>)
        } )}
    </Grid>
   </Box>
  )
}

export default Login