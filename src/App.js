import { Outlet } from "react-router-dom";
import "./App.css";
import Left from "./Left";
import Right from "./Right";

function App() {
  return (
    <div className="App">
      <Left />
      <Right>
        <Outlet />
      </Right>
    </div>
  );
}

export default App;
