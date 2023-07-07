import { useEffect, useState } from 'react';
import fetcher from './fetcher';

export default function User1() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const load = async () => {
      setTimeout(async () => {
        try {
          const data = await fetcher('/users/1')
          setUser(data)
        } catch (e) {
          console.log(e)
        }
      }, 0)
    }
    load()
  }, []);
  
  useEffect(() => {
    if (!user) return 
    setIsLoading(false)
  }, [user])

  return (
    <>
      {isLoading && <div>loading...</div>}
      {user && !isLoading && <pre>{user.name}</pre>}
    </>
  );
}
