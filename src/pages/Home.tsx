import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PersonButton from 'components/PersonButton';
import React from 'react';

const topFive = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];

export default function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: 'center' }}
            >
              Home
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ pl: 2 }}>
        <h1>Top 5 GitHub Users</h1>
        <p>Tap the username to see more information</p>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {topFive.map((e, index) => (
            <PersonButton key={index} name={e} />
          ))}
        </Box>
      </Box>
    </div>
  );
}
