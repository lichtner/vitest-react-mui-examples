import useSWR from 'swr';
import fetcher from './fetcher';

// eslint-disable-next-line react/prop-types
export default function UserIdGet({ userId }) {
  const { data, isLoading, error } = useSWR(`/users/${userId}`, fetcher) 

  if (error) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <pre>{data.name}</pre>
    </>
  );
}