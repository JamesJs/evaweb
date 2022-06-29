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
export default function RoutesComponent(){
    const [login, setLogin] = useState(false);
    function changeLogin() {
        setLogin(!login);
      }
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        {login && (
          <AppBar onExit={changeLogin}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destilacao" element={<Destilacao />} />
              <Route path="/chart" element={<Chart />} />
            </Routes>
          </AppBar>
        )}
        {!login && <Login onLogin={changeLogin} />}
      </BrowserRouter>
    )
}