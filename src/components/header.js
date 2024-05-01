import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons';
import { useNavigate, createSearchParams } from 'react-router-dom/dist';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'skyblue'}}>
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            Cloud Based Attendance System
          </Typography>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={()=> navigate({pathname: '/login', search: createSearchParams({user: 'user'}).toString()})}
              >
                <AccountCircle />
                User
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={()=> navigate({pathname: '/login', search: createSearchParams({user: 'teacher'}).toString()})}
              >
                <AccountCircle />
                Teacher
              </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
