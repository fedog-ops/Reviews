import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function Filter({filter, data, handleFilters}) {
const [value, setValue] = useState(data[1][0])
  const handleChange = (event) => {
    handleFilters(event.target.value, filter);
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{filter}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        value={value} 
          label="Age"
          onChange={handleChange}
        >
       
          {data.map(item => {
           return (<MenuItem key={item[0]} value={item[0]}>{item[1]}</MenuItem>)
          })} 
          
         
        </Select>
       
      </FormControl>
      
    </div>
  );
}
