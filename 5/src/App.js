import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Introduction from "./pages/Introduction";
import Rate from "./pages/Rate";
import StationList from "./pages/StationList"
import News from "./pages/News";
import Activities from "./pages/Activities";
import Login from "./pages/Login"
import NotFound from "./pages/NotFound";
import "./styles/style.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="introduction" element={<Introduction/>}/>
          <Route path="rate" element={<Rate/>}/>
          <Route path="station-list" element={<StationList/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="activities" element={<Activities/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
