import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import CreateEmployeeComponent from './Component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Component/UpdateEmployeeComponent';
import Login from './Component/Login';


function App() {
  return (
    <Router>
    <div>
     
    <HeaderComponent/>
    



  <Routes>
      <Route exact path ="/" element={<Login/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    {/* <Route exact path="/" Component={ListEmployeeComponent}></Route> */}
      <Route path="/employees" Component={ListEmployeeComponent}></Route>
      <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
      <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
  </Routes>	


    <FooterComponent/>

    </div> 
    </Router>
  );
}

export default App;
