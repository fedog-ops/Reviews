import {Grid }from '@mui/material';
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
const styling ={
  container: {
    paddingRight:5,
    paddingLeft:5,
    paddingTop:2
  }
}
if(err) return <Error err={err}/>
  return (
    
    <Grid container sx={styling.container} spacing={2}>    
        {users.map((user) => {
          //xs ={4} can only be used with item prop
          return (
        <Grid xs={4} sx={{paddingTop: 5, paddingLeft:5}}>
          <UserCard data={user} updateFN={updateFN}/>
        </Grid>)
        } )}
    </Grid>

  )
}

export default Login

