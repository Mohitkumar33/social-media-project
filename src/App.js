import "./App.css";
import { MockAPI } from "./components/mockAPI/MockAPI";
import { Home } from "./screens/home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <MockAPI /> */}
    </div>
  );
}

export default App;
