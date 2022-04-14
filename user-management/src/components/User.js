import { useState, Fragment } from 'react';
import UserList from './UserList';
import NewUser from './NewUser';

const User = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    console.log(newUser);
    setUsers((prevState) => {
      return [...prevState, newUser];
    });
  };

  const deleteUserHandler = (specifiedUser) => {
    console.log(specifiedUser);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => {
        return user.id.toString() !== specifiedUser.id.toString();
      });
    });
  };

  return (
    <Fragment>
      <NewUser onAddUser={addUserHandler} />
      <UserList onDeleteUser={deleteUserHandler} users={users} />
    </Fragment>
  );
};

export default User;