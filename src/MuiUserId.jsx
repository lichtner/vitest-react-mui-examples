import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import MuiUserIdGet from './MuiUserIdGet';

export default function MuiUser() {
  const [id, setId] = useState()
  const [userId, setUserId] = useState()

  const getUser = () => {
    setUserId(id)
  }

  return (
    <>
      <Typography variant='h5' sx={{ my: 1 }}>Mui User {id}</Typography>
      <Box display="flex" gap={2}>
        <TextField 
          data-testid='mui-id'
          label="mui user id"
          type="number" 
          size='small'
          onChange={(e) => { setId(e.target.value) }}  
        />
        <Button variant='contained' onClick={() => getUser()}>get user</Button>
      </Box>
      {userId && <MuiUserIdGet userId={userId} />}
    </>
  );
}