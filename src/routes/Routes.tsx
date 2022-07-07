import AppBar from "../components/drawer";
import React, { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Chart from "../pages/Chart";
import Login from "../pages/Login";
import Destilacao from "../pages/Destilacoes";
import Footer from "../components/Footer";
export default function RoutesComponent(){
    const [login, setLogin] = useState(sessionStorage.getItem("__TOKEN") !==null);
    async function changeLogin() {
	    const hasToken:boolean = sessionStorage.getItem("__TOKEN") !== null
	    if(hasToken) setLogin(true);
    }
    async function onExit(){
	sessionStorage.removeItem('__TOKEN');
	setLogin(false)
	
    }
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        {login && (
		<div style={{
			display:"flex",
			flexDirection:"column",
			flex:1,
			width:"100%",
			minHeight:"100vh",

		}}>	
	<AppBar onExit={onExit}>
            <Routes>
	      {/*<Route path="/" element={<Home />} />
		      */}
              <Route path="/destilacao" element={<Destilacao />} />
	      <Route path="/chart" element={<Chart />} />

      </Routes>

	<Footer/>
	  </AppBar>

</div>
	)}
	{!login && <Login onLogin={changeLogin} />}
      </BrowserRouter>
    )
}
