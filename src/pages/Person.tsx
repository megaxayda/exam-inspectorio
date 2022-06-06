import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Person() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery(['person', id], () =>
    fetch('https://api.github.com/users/' + id).then((res) => res.json()),
  );

  console.log(data);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ position: 'relative' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: 'center' }}
            >
              Person
            </Typography>
            <Button
              variant="text"
              color="inherit"
              onClick={handleBack}
              sx={{ position: 'absolute' }}
            >
              <ArrowBackIosIcon />
              Back
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {error && <p>{String(error)}</p>}

      {isLoading && <p>Loading...</p>}

      {!isLoading && data && (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="" src={data.avatar_url} />
            </ListItemAvatar>
            <ListItemText
              primary={data.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {data.location || 'No location'}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      )}
    </div>
  );
}
