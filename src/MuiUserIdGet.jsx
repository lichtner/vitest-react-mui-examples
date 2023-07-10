import { Alert, CircularProgress } from '@mui/material';
import useSWR from 'swr';
import fetcher from './fetcher';

// eslint-disable-next-line react/prop-types
export default function MuiUserIdGet({ userId }) {
  const { data, isLoading, error } = useSWR(`/users/${userId}`, fetcher) 

  if (error) return <Alert variant='error'>error</Alert>
  if (isLoading) return <CircularProgress />

  return (
    <>
      <pre>{data.name}</pre>
    </>
  );
}