import {
  Routes,
  Route,
} from "react-router-dom";
import HotelsSearch from "./components/HotelsSearch";
import Login from "./components/Login";
import Registration from "./components/Registration";


function App() {
  return(
    <>
      <Routes>
        <Route exact path="/" element= {<HotelsSearch/>}/>
        <Route exact path="/login" element= {<Login/>} />
        <Route exact path="/registration" element={<Registration/>} />
      </Routes>
    </>
  );
}

export default App;
