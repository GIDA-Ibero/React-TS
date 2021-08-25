import { useState } from 'react';
/*
  {
    uid: 'ABCD123' string
    name: 'César' string
  }
*/
interface UserInterface {
  uid: string;
  name?: string;
}

export const User = () => {
  const [user, setUser] = useState<UserInterface>();

  const login = () => {
    setUser({
      uid: 'ABC123',
      name: 'César'
    })
  }

  return (
    <div className="mt-5">
      <h3>User: useState</h3>
      <button
        onClick={ login }
        className="btn btn-success mb-2"
      >
        Login
      </button>
      {
        (!user)
          ? <pre className="text-white">Unauthenticated user</pre>
          : <pre className="text-white">{ JSON.stringify(user) }</pre>
      }
    </div>
  )
}
