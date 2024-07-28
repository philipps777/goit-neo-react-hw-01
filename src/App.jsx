import user from "./components/Profile/userData.json";
import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/FriendList/friends.json";

function App() {
  return (
    <div>
      <Profile {...user} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
