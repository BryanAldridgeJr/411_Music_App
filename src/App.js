// App.js
import React, { useState } from 'react';
import './App.css';
//import * as React from 'react';
import Dashboard from './Dashboard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    /*backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',*/
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: 'none', 
    boxShadow: 'none',
  }));

  return loggedIn ? (
    <Dashboard />
  ) : (
    <div id='all'>
      <div id='header'>
        <h3>My Music App</h3>

      </div>
      <div id='login'>
        <Box sx={{ width: '100%' }}>
          <Stack /*spacing={2}*/ direction="column" alignItems="stretch" >
            <Item>
              <TextField id="standard-basic" label="Username *" variant="standard" />
            </Item>
            <Item>
              <TextField id="standard-basic" label="Password *" variant="standard" />
            </Item>
            <Item>
              <Button variant="contained" style={{ width: '200px', backgroundColor: '#3f51b5', color: '#fff' }} onClick={() => setLoggedIn(true)}>Login</Button>
            </Item>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default App;

