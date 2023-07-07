import { useEffect, useState } from 'react';
import fetcher from './fetcher';

function App() {
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
    <>
      <h1>vitest demo</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}

export default App;
