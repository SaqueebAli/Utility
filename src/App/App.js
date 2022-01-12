import logo from '../logo.svg';
import './App.css';
import SideMenu from '../components/SideMenu';
import React from 'react';
import FileUpload from '../components/FileUpload';
import Analysis from '../components/Analysis';
import {FieldProvider} from "../context/FieldContext";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";




function App() {
  return (
    <React.Fragment>
    <FieldProvider>
    


     <SideMenu/>
     <Router>
     <Routes>

      <Route exact path='/' element={<FileUpload/>}></Route>
      <Route exact path='/Analysis' element={<Analysis/>}></Route>
     </Routes>  
     
                
                
     </Router>
    

    </FieldProvider>
    </React.Fragment>)
}

export default App;
