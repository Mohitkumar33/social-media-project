import { EditUser } from "./components/editUser/EditUser";
import { Navbar } from "./components/navbar/Navbar";
import { NewPost } from "./components/newPost/NewPost";
import { SinglePost } from "./components/singlePost/SinglePost";
import { AllRoutes } from "./routes/AllRoutes";
import { FollowingFollowers } from "./screens/followingFollowers/FollowingFollowers";
import { Login } from "./screens/login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      <AllRoutes />
      {/* <NewPost /> */}
      {/* <EditUser /> */}
      {/* <SinglePost /> */}
      {/* <FollowingFollowers /> */}
    </div>
  );
}

export default App;
