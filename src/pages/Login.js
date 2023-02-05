import {Grid, Box }from '@mui/material';
import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { getUsers } from '../utils/API';
import UserCard from '../components/UserCard';
import Error from '../components/Error';
import {UserContext }from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
let navigate = useNavigate();
  const [users, setUsers] = useState([])
  const [err, setErr] = useState(null)
  const {setUserLoggedIn} = useContext(UserContext);
  useEffect(()=>{ 
      getUsers().then((data) => {
        setUsers(data);
      })
      .catch(({response: {data: { msg },status}}) => {
        setErr({msg, status})
      })
  },[])

const updateFN = (input) => {
  setUserLoggedIn(input)
  navigate('/')

}
if(err) return <Error err={err}/>
  return (
    <Box width={"400px"} sx={{width : {xl : '1488px'}} } m='auto'>
    <Grid container  alignItems="flex-end" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
        {users.map((user) => {
          //xs ={4} can only be used with item prop
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