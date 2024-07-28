import clsx from "clsx";

import style from "./FriendListItem.module.css";

function FriendListItem({ friends }) {
  return friends.map((friend) => (
    <div key={friend.id} className={style.item}>
      <img
        className={style.avatar}
        src={friend.avatar}
        alt="Avatar"
        width="48"
      />
      <p className={style.name}>{friend.name}</p>
      <p
        className={clsx(
          style.status,
          friend.isOnline ? style.statusOnline : style.statusOffline
        )}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  ));
}

export default FriendListItem;
