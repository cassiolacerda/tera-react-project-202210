import { Link } from "react-router-dom";

function UserListItem(props) {
  return (
    <Link to={`/users/${props.id}`} className="users__list-item">
      <div className="users__list-item-photo">
        <img src={props.src} className="responsive avatar" alt="" />
      </div>
      <div className="users__list-item-name">{props.name}</div>
    </Link>
  );
}

export default UserListItem;
