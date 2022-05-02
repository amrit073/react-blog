import { useState, useEffect } from 'react';
const Mid = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    await fetch('https://njpostblog.herokuapp.com/forreact')
      .then(data => data.json())
      .then(users => setUsers(users))
      .catch(err => console.log(err))
    // console.log(res)
    // const resj = await resj.json()
    // await setUsers(resj)
  }
  useEffect(() => {
    console.log('use effect called')
    getUsers()
  }, []);
  return <>
    <h1> HI </h1>
    {
      users.map((user) => {
        return (

          <section className='card text-white bg-secondary mb-3'>

            <h5 className="card-header">
              {user.title}
            </h5>
            <div className="card-body" key={user._id}>
              <p className='card-title'>
                {user.body}
              </p>


              <p className="card-text">
                by: {user.name}
              </p>
                    
            </div>
          </section>
        )
      })
    }
  </>

}

export default Mid