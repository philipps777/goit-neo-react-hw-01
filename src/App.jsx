import user from "./components/Profile/userData.json";
import "./App.css";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <Profile {...user} />
    </div>
  );
}

export default App;
