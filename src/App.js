import {
  Routes,
  Route,
} from "react-router-dom";
import HotelsSearch from "./components/HotelsSearch";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Registration from "./components/Registration";


function App() {
  return(
    <>
      <Routes>
        <Route exact path="/" element= {<HotelsSearch/>}/>
        <Route exact path="/login" element= {<Login/>} />
        <Route exact path="/registration" element={<Registration/>} />
        <Route exact path="/loading" element={<Loading/>}/>
      </Routes>
    </>
  );
}

export default App;
