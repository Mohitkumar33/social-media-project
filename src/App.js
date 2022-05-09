import { EditUser } from "./components/editUser/EditUser";
import { Navbar } from "./components/navbar/Navbar";
import { NewPost } from "./components/newPost/NewPost";
import { SinglePost } from "./components/singlePost/SinglePost";
import { AccountHolderProfile } from "./screens/accountHolderProfile/AccountHolderProfile";
import { Home } from "./screens/home/Home";
import { Login } from "./screens/login/Login";
import { PersonProfile } from "./screens/personProfile/PersonProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <PersonProfile /> */}
      {/* <AccountHolderProfile /> */}
      {/* <NewPost /> */}
      {/* <EditUser /> */}
      {/* <SinglePost /> */}
      {/* <Home /> */}
      <Login />
    </div>
  );
}

export default App;
