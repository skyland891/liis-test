import {
  Routes,
  Route,
} from "react-router-dom";
import SimpleHotelCheckContainer from "./components/SimpleHotelCheckContainer";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Registration from "./components/Registration";


function App() {
  return(
    <>
      <Routes>
        <Route exact path="/" element= {<SimpleHotelCheckContainer/>}/>
        <Route exact path="/login" element= {<Login/>} />
        <Route exact path="/registration" element={<Registration/>} />
        <Route exact path="/loading" element={<Loading/>}/>
      </Routes>
    </>
  );
}

export default App;
