import React from "react";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes";
import NavBar from "./navbar";

const App =()=>{
return(
  <BrowserRouter>
  <NavBar/>
  <AppRoutes/>
  </BrowserRouter>
)
}
export default App;