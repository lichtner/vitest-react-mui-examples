import { useState } from 'react';
import UserIdGet from './UserIdGet';

export default function UserId() {
  const [id, setId] = useState()
  const [userId, setUserId] = useState()

  const getUser = () => {
    setUserId(id)
  }

  return (
    <>
      <h3>Get User {id}</h3>
      <input 
        type="number" 
        role="id"
        onChange={(e) => { setId(e.target.value) }}  
      />
      <button onClick={() => getUser()}>get user</button>
      {userId && <UserIdGet userId={userId} />}
    </>
  );
}