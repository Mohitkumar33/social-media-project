import { EditUser } from "./components/editUser/EditUser";
import { Navbar } from "./components/navbar/Navbar";
import { NewPost } from "./components/newPost/NewPost";
import { SinglePost } from "./components/singlePost/SinglePost";
import { AllRoutes } from "./routes/AllRoutes";
import { FollowingFollowers } from "./screens/followingFollowers/FollowingFollowers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <NewPost /> */}
      {/* <EditUser /> */}
      {/* <SinglePost /> */}
      {/* <FollowingFollowers /> */}
    </div>
  );
}

export default App;
