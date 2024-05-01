import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom/dist';
const LoginPage = () => {
  const [checked, setChecked] = React.useState(true);
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleUsernameChange = (event) => {
    setUser(event.target.value)
  };
  
  const handlePasswordChange = (event) => {
    setPass(event.target.value)
  };

  const handleLogin = () => {
    if(user==='admin' && pass==='123456')
    {
        if(searchParams.get('user')==='teacher'){
          navigate('/dashboard')
        }
    }
    else if(user==='bhawna' && pass==='123456'){
        if(searchParams.get('user')==='user'){
      navigate({pathname:'/calendar', search: createSearchParams({name: 'Bhawna Mussady'}).toString()})
        }
    }
  }
  
  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username" onChange={handleUsernameChange}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} onChange={handlePasswordChange}></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={handleLogin}> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;
