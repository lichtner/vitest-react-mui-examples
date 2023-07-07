import useSWR from 'swr';
import fetcher from './fetcher';

export default function User2() {
  const { data, isLoading, error } = useSWR('/users/2', fetcher) 

  if (error) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <pre>{data.name}</pre>
    </>
  );
}