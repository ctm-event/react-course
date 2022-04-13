import Card from "./UI/Card";
import UserItem from "./UserItem";

const UserList = (props) => {

  const deleteUserHandler = (user) => {
    props.onDeleteUser(user);
  }

  return <Card>
      {props.users.map(user => <UserItem key={user.id} user={user} onDeleteUser={deleteUserHandler} />)}
  </Card>
}

export default UserList;