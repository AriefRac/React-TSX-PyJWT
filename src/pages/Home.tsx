import React, {useEffect, useState} from 'react'


const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user/', {
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        });

        const content = await response.json();

        setName(content.fullname);
        setEmail(content.email);
        

      }
    )();
  });
  
  return (
    <div>
      Hi {name}! your email: {email}  
    </div>
  )
}

export default Home