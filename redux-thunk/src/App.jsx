import React from 'react'
import { FetchData } from './utils/redux/action'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()

  const users = useSelector(storeData => storeData.user)
  console.log(users)

  return (
    <div>
      <button onClick={() => dispatch(FetchData())}>GET DATA</button>
      {users.map((e)=>{
        return <fieldset key={e.id}>
          <legend>{e.username}</legend>
          <h1>{e.name}</h1>
          <h1>{e.email}</h1>
        </fieldset>
      })}
    </div>
  );
};

export default App;