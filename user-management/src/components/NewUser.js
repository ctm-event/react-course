import { useState } from "react";

const NewUser = (props) => {
  const [enteredUser, setEnteredUser] = useState({name: '', age: ''});
  
  const addUser = (event) => {
    event.preventDefault();
    props.onAddUser({...enteredUser, id: Math.random()});
  }

  const onNameChange = (event) => {
    setEnteredUser(prev => {
      return {...prev, name: event.target.value}
    })
  }

  const onAgeChange = (event) => {
    setEnteredUser(prev => {
      return {...prev, age: event.target.value}
    })
  }

  return <form onSubmit={addUser}>
    <p>Name:</p>
    <input type="text" value={enteredUser.name} onChange={onNameChange} />
    <p>Age (Years)</p>
    <input type="number" value={enteredUser.age} onChange={onAgeChange} />
    <button type="submit">Add User</button>
  </form>
}

export default NewUser;