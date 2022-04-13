import Card from "./UI/Card";

const UserItem = (props) => {
  const deleteUserHandler = () => {
    console.log('Delete User');
    props.onDeleteUser(props.user)
  };

  return (
    <Card onClick={deleteUserHandler}>
      {props.user.name} - {props.user.age}
    </Card>
  );
};

export default UserItem;
