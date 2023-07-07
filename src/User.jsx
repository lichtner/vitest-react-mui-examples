import { useEffect, useState } from 'react';
import fetcher from './fetcher';

export default function User() {
  const [user, setUser] = useState();

  useEffect(() => {
    const load = async () => {
      const data = await fetcher('/users/1');
      setUser(data);
      console.log(data);
    };
    load();
  }, []);

  return (
    <pre>{JSON.stringify(user, null, 2)}</pre>
  );
}
