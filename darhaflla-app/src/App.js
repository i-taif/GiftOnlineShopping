import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./component/Assets/Style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import HomePage from "./component/Home/HomePage";
import Footer from './component/Footer'
import Login from './component/login'
import Rigester from "./component/Rigester";
import Card from './component/Card/Card'
import CardDetails from './component/Card/CardDetails'
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Rigester" element={<Rigester />}></Route>
          <Route path="/Card" element={<Card/>}></Route>
          <Route path="/CardDetails" element={<CardDetails/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
