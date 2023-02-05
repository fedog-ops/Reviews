import { View, Text } from 'react-native'
import Grid from '@mui/material/Grid';
import React from 'react'
import {useState, useEffect} from 'react'
import { getUsers } from '../utils/API';
import UserCard from '../components/UserCard';

const Login = () => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
      getUsers().then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  },[users])
  return (
   <>
    <Grid container  alignItems="flex-end" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
        {users.map((user) => {
          return (
        <Grid xs={4}>
          <UserCard data={user}/>
        </Grid>)
        } )}
    </Grid>
   </>
  )
}

export default Login