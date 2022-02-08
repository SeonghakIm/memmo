import React from "react";
import {
  BrowserRouter as Router,
  //Switch, react-router-dom 에 없다고 에러뜸
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import EditorPage from "./components/views/EditorPage/EditorPage";
import Auth from "./hoc/auth";
import Board from "./components/views/Board/Board";

function App() {
  const NewBoard = Auth(Board, null);
  const NewLandingPage = Auth(LandingPage, null);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  return (
    <Router>
      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Routes>
        <Route exact path="/" element={<NewLandingPage />} />
        <Route exact path="/login" element={<NewLoginPage />} />
        <Route exact path="/register" element={<NewRegisterPage />} />
        <Route exact path="/editor" element={<EditorPage />} />
        <Route exact path="/board" element={<NewBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
