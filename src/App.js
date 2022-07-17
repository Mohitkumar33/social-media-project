import { useSelector } from "react-redux";
import { Navbar } from "./components/navbar/Navbar";
import { authReducer } from "./features/auth/authSlice";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const {token} = useSelector((store)=>store.auth)
  return (
    <div className="App">
      {token && <Navbar />}
      
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
