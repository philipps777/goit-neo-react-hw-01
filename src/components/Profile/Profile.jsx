import style from "./Profile.module.css";
function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={style.profileWrapper}>
      <div className={style.profileCard}>
        <img src={avatar} alt="User avatar" className={style.userAvatar} />
        <p className={style.profileHeader}>{username}</p>
        <p className={style.profileInfo}>@{tag}</p>
        <p className={style.profileInfo}>{location}</p>

        <ul className={style.statsList}>
          <li className={style.statsItem}>
            <span className={style.label}>Followers </span>
            <span className={style.quantity}>{stats.followers}</span>
          </li>
          <li className={style.statsItem}>
            <span className={style.label}>Views </span>
            <span className={style.quantity}>{stats.views}</span>
          </li>
          <li className={style.statsItem}>
            <span className={style.label}>Likes </span>
            <span className={style.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
